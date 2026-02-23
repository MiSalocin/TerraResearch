let MASTER_LIST = [];
let CURRENT_SORT = "id";
const ENCRYPTION_KEY_STR = "h3y_gUyZ";

// --- Pagination Variables ---
let CURRENT_PAGE = 1;
let ITEMS_PER_PAGE = 50;
let CURRENT_VIEW = "list"

/**
 * Splits CSV lines while respecting quoted values containing commas.
 */
function splitCSVLine(line) {
  const result = [];
  let cur = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') inQuotes = !inQuotes;
    else if (char === "," && !inQuotes) {
      result.push(cur);
      cur = "";
    } else cur += char;
  }
  result.push(cur);
  return result;
}

/**
 * Replicates TCryptor logic to decrypt the player file buffer.
 */
async function decryptPlayerFile(encryptedBuffer) {
  const keyBuf = new ArrayBuffer(ENCRYPTION_KEY_STR.length * 2);
  const keyView = new Uint16Array(keyBuf);
  for (let i = 0; i < ENCRYPTION_KEY_STR.length; i++)
    keyView[i] = ENCRYPTION_KEY_STR.charCodeAt(i);
  const keyBytes = new Uint8Array(keyBuf);
  const cryptoKey = await window.crypto.subtle.importKey(
    "raw",
    keyBytes,
    { name: "AES-CBC" },
    false,
    ["decrypt"],
  );
  try {
    const decrypted = await window.crypto.subtle.decrypt(
      { name: "AES-CBC", iv: keyBytes },
      cryptoKey,
      encryptedBuffer,
    );
    return new DataView(decrypted);
  } catch (e) {
    return new DataView(encryptedBuffer);
  }
}

function loadDatabase() {
    try {
        const rows = rawDatabase.trim().split("\n");
        MASTER_LIST = [];
        for (let i = 1; i < rows.length; i++) {
            const cols = splitCSVLine(rows[i].trim());
            if (cols.length < 4) continue;
            const resVal = cols[3].trim().toLowerCase();
            if (resVal === "" || resVal === "n/a") continue;
            MASTER_LIST.push({
                id: parseInt(cols[0]),
                display: cols[1].replace(/^"|"$/g, "").trim(),
                internal: cols[2].trim(),
                required: parseInt(resVal),
                current: 0,
            });
        }
        document.getElementById("status").innerText = `Database loaded: ${MASTER_LIST.length} items.`;
        
        // --- ADDED: Load from Cache ---
        const cachedData = localStorage.getItem('terraria_research_data');
        const cachedName = localStorage.getItem('terraria_player_name');
        
        if (cachedData) {
            const savedCounts = JSON.parse(cachedData);
            MASTER_LIST.forEach(item => {
                if (savedCounts[item.internal] !== undefined) {
                    item.current = savedCounts[item.internal];
                }
            });
            if (cachedName) document.getElementById("playerName").innerText = cachedName;
            renderUI();
        }
        // ------------------------------

        document.getElementById("plrInput").disabled = false;
        document.querySelector(".custom-file-upload").style.opacity = "1";
    } catch (err) {
        document.getElementById("status").innerText = "Error loading database.";
    }
}

function getLocalItemAssets(itemDisplay, internalName) {
  const name = itemDisplay.trim();
  const internal = internalName.trim();
  let localFile = "";
  let wikiPage = name.replace(/ /g, "_");

  // --- Special Differentiated Items ---
  const overrides = {
    StrangePlant1: { local: "Strange_Plant_(purple)", wiki: "Strange_Plant_(purple)" },
    StrangePlant2: { local: "Strange_Plant_(orange)", wiki: "Strange_Plant_(orange)" },
    StrangePlant3: { local: "Strange_Plant_(green)", wiki: "Strange_Plant_(green)" },
    StrangePlant4: { local: "Strange_Plant_(red)", wiki: "Strange_Plant_(red)" },
    CorruptPlanterBox: { local: "Deathweed_Planter_Box", wiki: "Deathweed_Planter_Box" },
    CrimsonPlanterBox: { local: "Crimsonweed_Planter_Box", wiki: "Crimsonweed_Planter_Box" },
    FishingSeaweed: { local: "Seaweed_(junk)", wiki: "Seaweed_(junk)" },
    Seaweed: { local: "Seaweed", wiki: "Seaweed" },
    Constellation: { local: "Constellation_(painting)", wiki: "Constellation_(painting)" },
    ConstellationWhip: { local: "Constellation", wiki: "Constellation" },
    PrincessDress: { local: "Princess_Dress", wiki: "Princess_Dress" },
    PrincessDressNew: { local: "Princess_Dress2", wiki: "Princess_set_(Clothier)" },
  };

  if (overrides[internal]) {
    localFile = overrides[internal].local;
    wikiPage = overrides[internal].wiki;
  } else {
    if (name === "Conveyor Belt (Clockwise)") localFile = "Conveyor_Belt";
    else if (name === "Stone Accen t Slab") localFile = "Stone_Slab";
    else if (name === "The Dirtiest Block") localFile = "Dirt_Block";
    else if (name === "Advanced Combat Techniques: Volume Two")
      localFile = "Advanced_Combat_Techniques_Volume_Two";
    else if (name.startsWith("r/"))
      localFile = name.replace("r/", "R_").replace(" ", "_");
    else localFile = name.replace(/ /g, "_").replace(/\//g, "_");

    wikiPage = name.replace(/ /g, "_").replace(/[:\/]/g, "_");
    const suffixBoth = ["Fish", "Graveyard", "Remix", "The Destroyer"];
    if (suffixBoth.includes(name)) wikiPage += "_(item)";
  }

  let ext = "png";
  const gifs = [
    "Rainbow Brick", "Rainbow Brick Wall", "Pink Fairy", "Green Fairy", "Blue Fairy",
    "Helium Moss", "Helium Moss Fishing Bobber", "Helium Moss Brick", "Helium Moss Brick Wall",
  ];
  if (gifs.includes(name)) ext = "gif";

  return {
    wiki: `https://terraria.wiki.gg/wiki/${wikiPage}`,
    icon: `icons/${localFile}.${ext}`,
  };
}

document.getElementById("plrInput").addEventListener("change", async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  document.getElementById("status").innerText = "Analyzing...";
  const buffer = await file.arrayBuffer();
  const view = await decryptPlayerFile(buffer);
  const decoder = new TextDecoder();
  const bufferUint8 = new Uint8Array(view.buffer);
  let plrName = "Unknown Player";

  try {
    const nameLen = view.getUint8(24); // Standard offset for name length in decrypted buffer
    if (nameLen > 0 && nameLen < 32) {
      plrName = decoder.decode(bufferUint8.slice(25, 25 + nameLen));
    }
  } catch (err) {
    plrName = file.name.replace(".plr", ""); // Fallback to filename
  }
  document.getElementById("playerName").innerText = `${plrName}`;

  MASTER_LIST.forEach((item) => (item.current = 0));
  for (let i = 0; i < view.byteLength - 10; i++) {
    const len = view.getUint8(i);
    if (len >= 2 && len < 64 && i + len + 4 < view.byteLength) {
      const key = decoder.decode(bufferUint8.slice(i + 1, i + 1 + len));
      const match = MASTER_LIST.find((item) => item.internal === key);
      if (match) {
        const count = view.getInt32(i + 1 + len, true);
        if (count >= 0 && count <= 5000) {
          if (count > match.current) match.current = count;
          i += len + 4 - 1;
        }
      }
    }
  }

  // --- ADDED: Save to Cache ---
    const dataToSave = {};
    MASTER_LIST.forEach(item => {
        if (item.current > 0) {
            dataToSave[item.internal] = item.current;
        }
    });
    
    localStorage.setItem('terraria_research_data', JSON.stringify(dataToSave));
    localStorage.setItem('terraria_player_name', plrName);
    // ------------------------------

  CURRENT_PAGE = 1; // Reset to page 1 on new file load
  renderUI();
});

function renderPaginationControls(totalItems) {
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const containers = [document.getElementById("paginationTop"), document.getElementById("paginationBottom")];

  const html = `
          <div class="pagination-wrapper">
              <button class="sort-btn" ${CURRENT_PAGE === 1 ? "disabled" : ""} id="prevPageBtn">← Previous</button>
              
              <div class="page-jump">
                  <span>Page</span>
                  <input type="number" id="pageInput" class="page-num-input" 
                        value="${CURRENT_PAGE}" min="1" max="${totalPages}">
                  <span>of ${totalPages}</span>
              </div>

              <button class="sort-btn" ${CURRENT_PAGE >= totalPages ? "disabled" : ""} id="nextPageBtn">Next →</button>
          </div>
      `;
  containers.forEach(container => {
    if (!container) return;
    container.innerHTML = html;

    // Navigation Buttons
    container.querySelector("#prevPageBtn")?.addEventListener("click", () => {
      CURRENT_PAGE--;
      renderUI();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    container.querySelector("#nextPageBtn")?.addEventListener("click", () => {
      CURRENT_PAGE++;
      renderUI();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Jump to Page Input
    const pInput = container.querySelector("#pageInput");
    pInput?.addEventListener("change", (e) => {
      let val = parseInt(e.target.value);

      // Validation: Ensure the number is within 1 and totalPages
      if (isNaN(val) || val < 1) val = 1;
      if (val > totalPages) val = totalPages;

      CURRENT_PAGE = val;
      renderUI();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Allow pressing "Enter" to trigger the change
    pInput?.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        pInput.blur(); // Triggers the 'change' event
      }
    });
  });
}

function renderUI() {
  document.getElementById("dashboard").classList.remove("hidden");
  const container = document.getElementById("itemBody");
  const tableWrapper = document.querySelector(".table-wrapper");

  // Logic for filtering and sorting stays exactly the same...
  const searchTerm = document.getElementById("search").value.toLowerCase();
  const statusFilter = document.getElementById("statusFilter").value;
  ITEMS_PER_PAGE = parseInt(document.getElementById("pageSize").value);

  let displayList = MASTER_LIST.filter((item) => {
    const matchesSearch = item.display.toLowerCase().includes(searchTerm);
    let matchesStatus = true;
    if (statusFilter === "not_started") matchesStatus = item.current == 0;
    else if (statusFilter === "researching") matchesStatus = item.current > 0 && item.current < item.required;
    else if (statusFilter === "incomplete") matchesStatus = item.current < item.required;
    else if (statusFilter === "complete") matchesStatus = item.current >= item.required;
    return matchesSearch && matchesStatus;
  });

  displayList.sort((a, b) => {
    if (CURRENT_SORT === "id") return a.id - b.id;
    if (CURRENT_SORT === "name") return a.display.localeCompare(b.display);
    if (CURRENT_SORT === "req") return a.required - b.required;
    return 0;
  });

  const totalFiltered = displayList.length;
  const start = (CURRENT_PAGE - 1) * ITEMS_PER_PAGE;
  const paginatedList = displayList.slice(start, start + ITEMS_PER_PAGE);

  // --- NEW: Layout Switching Logic ---
  if (CURRENT_VIEW === "list") {
    tableWrapper.style.display = "block"; // Show the table
    const gridBox = document.getElementById("gridBox");
    if (gridBox) gridBox.remove(); // Remove grid if it exists

    container.innerHTML = paginatedList.map(item => {
      const isDone = item.current >= item.required;
      const assets = getLocalItemAssets(item.display, item.internal);
      const pct = Math.min(100, (item.current / item.required) * 100);
      return `
                <tr>
                    <td style="opacity:0.5">${item.id}</td>
                    <td><img src="${assets.icon}" class="item-icon" onerror="this.src='icons/Default.png';"></td>
                    <td><a href="${assets.wiki}" target="_blank" class="wiki-link"><strong>${item.display}</strong></a></td>
                    <td><div class="prog-bg"><div class="prog-fill" style="width:${pct}%"></div></div>${item.current}/${item.required}</td>
                    <td class="${isDone ? 'done' : item.current === 0 ? 'none' : 'mid'}">${isDone ? 'COMPLETE' : item.current === 0 ? 'NOT STARTED' : 'RESEARCHING'}</td>
                </tr>`;
    }).join("");
  } else {
    tableWrapper.style.display = "none"; // Hide the table

    // Create or get the grid container
    let gridBox = document.getElementById("gridBox");
    if (!gridBox) {
      gridBox = document.createElement("div");
      gridBox.id = "gridBox";
      gridBox.className = "grid-container";
      tableWrapper.parentNode.insertBefore(gridBox, tableWrapper.nextSibling);
    }

    // Inside the 'else' block of renderUI (where CURRENT_VIEW === "grid")
    gridBox.innerHTML = paginatedList.map(item => {
      const isDone = item.current >= item.required;
      const assets = getLocalItemAssets(item.display, item.internal);

      // Determine the status class for the border
      const statusClass = isDone ? 'done' : (item.current === 0 ? 'none' : 'mid');

      return `
        <div class="item-card ${statusClass}">
            <img src="${assets.icon}" onerror="this.src='icons/Default.png';">
            <div class="item-name">
                ${item.display == "Bone Block" ? "Bone Block (unobtainable)" : item.display}
            </div>
            <div class="mini-prog">${item.current} / ${item.required}</div>
        </div>`;
    }).join("");
  }

  // Update Stats and Pagination as usual...
  const finished = MASTER_LIST.filter((i) => i.current >= i.required).length;
  document.getElementById("statTotal").innerText = MASTER_LIST.length;
  document.getElementById("statDone").innerText = finished;
  document.getElementById("statProgressing").innerText = MASTER_LIST.filter(i => i.current > 0 && i.current < i.required).length;
  document.getElementById("statPercent").innerText = Math.round((finished / MASTER_LIST.length) * 10000) / 100 + "%";

  renderPaginationControls(totalFiltered);
}

function applyAutoTheme() {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.documentElement.dataset.theme = prefersDark ? "dark" : "light";
}

document.getElementById("themeToggle").addEventListener("click", () => {
  const currentTheme = document.documentElement.dataset.theme;
  document.documentElement.dataset.theme =
    currentTheme === "dark" ? "light" : "dark";
});

window.addEventListener("DOMContentLoaded", () => {
  applyAutoTheme();
  loadDatabase();
});

document.querySelectorAll(".sort-btn").forEach((btn) => {
  btn.onclick = (e) => {
    document
      .querySelectorAll(".sort-btn")
      .forEach((b) => b.classList.remove("active"));
    e.target.classList.add("active");
    CURRENT_SORT = e.target.dataset.sort;
    CURRENT_PAGE = 1; // Reset to page 1 on sort change
    renderUI();
  };
});
document.getElementById("viewToggle").addEventListener("click", (e) => {
  CURRENT_VIEW = CURRENT_VIEW === "list" ? "grid" : "list";
  e.target.innerText = CURRENT_VIEW === "list" ? "🖼️ Grid View" : "📋 List View";
  renderUI();
});
document.getElementById("search").oninput = () => { CURRENT_PAGE = 1; renderUI(); };
document.getElementById("statusFilter").onchange = () => { CURRENT_PAGE = 1; renderUI(); };
document.getElementById("pageSize").onchange = () => { CURRENT_PAGE = 1; renderUI(); };