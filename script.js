const ENCRYPTION_KEY_STR = "h3y_gUyZ";

// Pagination & View Variables
let CURRENT_PAGE = 1;
let ITEMS_PER_PAGE = 50;
let CURRENT_SORT = "id";
let CURRENT_VIEW = "list";
let MASTER_LIST = [];
let ACTIVE_TAGS =  [];
let ACTIVE_STATUSES = [];
let SHOW_UNOB = false;

// Saves all user preferences (view, tags, status, page size) to localStorage.

function savePreferences() {
    const preferences = {
        view: CURRENT_VIEW,
        tags: ACTIVE_TAGS,
        statuses: ACTIVE_STATUSES,
        pageSize: ITEMS_PER_PAGE
    };
    localStorage.setItem('terraria_user_prefs', JSON.stringify(preferences));
}

// Logic from TCryptor for reading plr file
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

// Load the items database
function loadDatabase() {
  try {
    if (typeof allItems === 'undefined') {
      document.getElementById("status").innerText = "Error: database not found.";
      return;
    }

    // Map the dictionary format to our internal MASTER_LIST
    MASTER_LIST = allItems.map(item => ({
      id: item.id,
      display: item.name,
      internal: item.internalName,
      required: item.neededForResearch,
      wiki: "https://terraria.wiki.gg/wiki/" + item.itemUrl,
      icon: "icons/" + item.imageUrl,
      tags: item.tags,
      unobtainable: item.isUnobtainable || false, // Capture the boolean flag
      current: 0
    }));

    // --- Retrieve Preferences ---
    const savedPrefs = localStorage.getItem('terraria_user_prefs');
    if (savedPrefs) {
        const prefs = JSON.parse(savedPrefs);
        
        CURRENT_VIEW = prefs.view || "list";
        ACTIVE_TAGS = prefs.tags || [];
        ACTIVE_STATUSES = prefs.statuses || [];
        ITEMS_PER_PAGE = prefs.pageSize || 50;

        // Sync UI elements to match loaded preferences
        document.getElementById("pageSize").value = ITEMS_PER_PAGE;
        document.getElementById("viewToggle").innerText = CURRENT_VIEW === "list" ? "Grid View" : "List View";
        
        // Sync status button visual state
        document.querySelectorAll("#statusGroup .btn").forEach(btn => {
            if (ACTIVE_STATUSES.includes(btn.dataset.status)) {
                btn.classList.add("active");
            }
        });
    }

    // Load research progress from localStorage cache
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

    document.getElementById("plrInput").disabled = false;
    document.querySelector(".custom-file-upload").style.opacity = "1";
  } catch (err) {
    console.error(err);
    document.getElementById("status").innerText = "Error initializing database.";
  }
}

// Handles .plr file upload, decryption, and scanning for research keys.
document.getElementById("plrInput").addEventListener("change", async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  document.getElementById("status").innerText = "Analyzing...";
  const buffer = await file.arrayBuffer();
  const view = await decryptPlayerFile(buffer);
  const decoder = new TextDecoder();
  const bufferUint8 = new Uint8Array(view.buffer);
  let plrName = file.name.replace(".plr", "");

  try {
    const nameLen = view.getUint8(24);
    if (nameLen > 0 && nameLen < 32) {
      plrName = decoder.decode(bufferUint8.slice(25, 25 + nameLen));
    }
  } catch (err) { /* fallback to filename */ }

  document.getElementById("playerName").innerText = plrName;
  document.getElementById("status").innerText = "";


  // Reset current research then scan buffer for internalName strings
  MASTER_LIST.forEach(item => item.current = 0);

  for (let i = 0; i < view.byteLength - 10; i++) {
    const len = view.getUint8(i);
    if (len >= 2 && len < 64 && i + len + 4 < view.byteLength) {
      const key = decoder.decode(bufferUint8.slice(i + 1, i + 1 + len));
      const match = MASTER_LIST.find(item => item.internal === key);
      if (match) {
        const count = view.getInt32(i + 1 + len, true);
        if (count >= 0 && count <= 5000) {
          if (count > match.current) match.current = count;
          i += len + 4 - 1;
        }
      }
    }
  }

  // Save progress to cache
  const dataToSave = {};
  MASTER_LIST.forEach(item => { if (item.current > 0) dataToSave[item.internal] = item.current; });
  localStorage.setItem('terraria_research_data', JSON.stringify(dataToSave));
  localStorage.setItem('terraria_player_name', plrName);

  CURRENT_PAGE = 1;
  renderUI();
});

function renderPaginationControls(totalItems) {
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE) || 1;
  const containers = [document.getElementById("paginationTop"), document.getElementById("paginationBottom")];

  const html = `
    <div class="pagination-wrapper">
        <button class="btn" ${CURRENT_PAGE === 1 ? "disabled" : ""} id="prevPageBtn"><b><</b></button>
        <div class="page-jump">
            <span>Page</span>
            <input type="number" id="pageInput" class="page-num-input" value="${CURRENT_PAGE}" min="1" max="${totalPages}">
            <span>of ${totalPages}</span>
        </div>
        <button class="btn" ${CURRENT_PAGE >= totalPages ? "disabled" : ""} id="nextPageBtn"><b>></b></button>
    </div>`;

  containers.forEach(container => {
    if (!container) return;
    container.innerHTML = html;

    container.querySelector("#prevPageBtn")?.addEventListener("click", () => { CURRENT_PAGE--; renderUI(); window.scrollTo({ top: 0, behavior: 'smooth' }); });
    container.querySelector("#nextPageBtn")?.addEventListener("click", () => { CURRENT_PAGE++; renderUI(); window.scrollTo({ top: 0, behavior: 'smooth' }); });

    const pInput = container.querySelector("#pageInput");
    pInput?.addEventListener("change", (e) => {
      let val = parseInt(e.target.value);
      if (isNaN(val) || val < 1) val = 1;
      if (val > totalPages) val = totalPages;
      CURRENT_PAGE = val;
      renderUI();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

function renderUI() {
  document.getElementById("dashboard").classList.remove("hidden");
  const container = document.getElementById("itemBody");
  const tableWrapper = document.querySelector(".table-wrapper");

  const searchTerm = document.getElementById("search").value.toLowerCase();
  // const statusFilter = document.getElementById("statusFilter").value;
  // const showUnobtainable = SHOW_UNOB;
  ITEMS_PER_PAGE = parseInt(document.getElementById("pageSize").value);


let displayList = MASTER_LIST.filter(item => {
    const searchTerm = document.getElementById("search").value.toLowerCase();
    const matchesSearch = item.display.toLowerCase().includes(searchTerm);
    
    // 1. Tag Filtering (OR Logic)
    if (ACTIVE_TAGS.length > 0) {
        const itemTagsFlat = Object.values(item.tags).flat();
        if (!ACTIVE_TAGS.some(tag => itemTagsFlat.includes(tag))) return false;
    }

    // 2. Status & Unobtainable Filtering (OR Logic)
    if (ACTIVE_STATUSES.length > 0) {
        const matchesStatus = ACTIVE_STATUSES.some(status => {
            if (status === "complete") return item.current >= item.required && !item.unobtainable;
            if (status === "researching") return item.current > 0 && item.current < item.required && !item.unobtainable;
            if (status === "not_started") return item.current === 0 && !item.unobtainable;
            if (status === "unobtainable") return item.unobtainable;
            return false;
        });
        if (!matchesStatus) return false;
    } else {
        // Default behavior: Hide unobtainable if no status filters are active
        // (This replaces your old "Show Unobtainable" toggle)
        if (item.unobtainable) return false;
    }

    return matchesSearch;
});


  displayList.sort((a, b) => {
    if (CURRENT_SORT === "id") return a.id - b.id;
    if (CURRENT_SORT === "name") return a.display.localeCompare(b.display);
    return 0;
  });

  const totalFiltered = displayList.length;
  const start = (CURRENT_PAGE - 1) * ITEMS_PER_PAGE;
  const paginatedList = displayList.slice(start, start + ITEMS_PER_PAGE);

  // Clear Grid if it exists
  let gridBox = document.getElementById("gridBox");
  if (gridBox) gridBox.innerHTML = "";

  if (CURRENT_VIEW === "list") {
    tableWrapper.style.display = "block";
    if (gridBox) gridBox.style.display = "none";
    container.innerHTML = paginatedList.map(item => {
      const isDone = item.current >= item.required;
      const unobClass = item.unobtainable; // Apply class
      const pct = Math.min(100, (item.current / item.required) * 100);
      return `
        <tr>
            <td style="opacity:0.5">${item.id}</td>
            <td><img src="${item.icon}" class="item-icon" onerror="this.src='icons/Default.png';"></td>
            <td><a href="${item.wiki}" target="_blank" class="wiki-link"><strong>${item.display}</strong></a></td>
            <td><div class="prog-bg"><div class="prog-fill" style="width:${unobClass ? 0 : pct}%"></div></div>${ unobClass ? '' : (item.current + '/' + item.required)}</td>
            <td class="${unobClass ? 'unob' : isDone ? 'done' : item.current === 0 ? 'none' : 'mid'}">${unobClass ? 'UNOBTAINABLE' : isDone ? 'COMPLETE' : item.current === 0 ? 'NOT STARTED' : 'RESEARCHING'}</td>
        </tr>`;
    }).join("");
  } else {
    tableWrapper.style.display = "none";
    if (!gridBox) {
      gridBox = document.createElement("div");
      gridBox.id = "gridBox";
      gridBox.className = "grid-container";
      tableWrapper.parentNode.insertBefore(gridBox, tableWrapper.nextSibling);
    }
    gridBox.style.display = "grid";
    gridBox.innerHTML = paginatedList.map(item => {
      const isDone = item.current >= item.required;
      const unobClass = item.unobtainable ? 'unobtainable' : '';
      const statusClass = unobClass ? 'unob' : isDone ? 'done' : (item.current === 0 ? 'none' : 'mid');

      return `
        <div class="item-card ${statusClass} ${unobClass}">
            <spam>${item.id}</spam>
            <a href="${item.wiki}" target="_blank" class="wiki-link">
                <img src="${item.icon}" onerror="this.src='icons/Default.png';">
                <div class="item-name">${item.display}</div>
            </a>
            <div class="mini-prog">${ unobClass ? 'Unobtainable' : (item.current + '/' + item.required)}</div>
        </div>`;
    }).join("");
  }
  // Update Stats
  const obtainableItems = MASTER_LIST.filter(i => !i.unobtainable);

  const totalObtainable = obtainableItems.length;
  const finished = obtainableItems.filter(i => i.current >= i.required).length;
  const progressing = obtainableItems.filter(i => i.current > 0 && i.current < i.required).length;

  // Calculate percentage based only on obtainable items
  const percent = totalObtainable > 0
    ? (Math.round((finished / totalObtainable) * 10000) / 100)
    : 0;

  document.getElementById("statTotal").innerText = totalObtainable;
  document.getElementById("statDone").innerText = finished;
  document.getElementById("statProgressing").innerText = progressing;
  document.getElementById("statPercent").innerText = percent + "%";

  renderPaginationControls(totalFiltered);
  renderActiveFilters();
}

// --- Initialization & Listeners ---
document.getElementById("themeToggle").addEventListener("click", () => {
  const currentTheme = document.documentElement.dataset.theme;
  document.documentElement.dataset.theme = currentTheme === "dark" ? "light" : "dark";
});

window.addEventListener("DOMContentLoaded", () => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.documentElement.dataset.theme = prefersDark ? "dark" : "light";
  loadDatabase();
});
// Only attach to buttons that have a data-sort attribute
document.querySelectorAll(".btn[data-sort]").forEach(btn => {
  btn.onclick = (e) => {
    document.querySelectorAll(".btn[data-sort]").forEach(b => b.classList.remove("active"));
    e.target.classList.add("active");
    CURRENT_SORT = e.target.dataset.sort;
    CURRENT_PAGE = 1;
    renderUI();
  };
});

document.getElementById("viewToggle").addEventListener("click", (e) => {
  CURRENT_VIEW = CURRENT_VIEW === "list" ? "grid" : "list";
  e.target.innerText = CURRENT_VIEW === "list" ? "Grid View" : "List View";
  savePreferences();
  renderUI();
});

document.getElementById("search").oninput = () => { CURRENT_PAGE = 1; renderUI(); };
document.getElementById("pageSize").onchange = () => { CURRENT_PAGE = 1; savePreferences(); renderUI(); };
const tagModal = document.getElementById("tagModal");
document.getElementById("tagFilterBtn").onclick = () => {
    renderTagModal();
    tagModal.classList.remove("hidden");
};
function renderTagModal() {
    const container = document.getElementById("tagContainer");
    container.innerHTML = "";

    // Helper to calculate completion for a specific tag
    const getTagStats = (tagName) => {
        const itemsWithTag = MASTER_LIST.filter(item => 
            !item.unobtainable && 
            Object.values(item.tags).flat().includes(tagName)
        );
        if (itemsWithTag.length === 0) return null;
        const done = itemsWithTag.filter(item => item.current >= item.required).length;
        return {
            percent: Math.floor((done / itemsWithTag.length) * 100),
            count: itemsWithTag.length
        };
    };

    for (let category in allTags) {
        // Calculate overall category completion
        const subTags = allTags[category];
        const catItems = MASTER_LIST.filter(item => 
            !item.unobtainable && 
            Object.keys(item.tags).includes(category)
        );
        const catDone = catItems.filter(item => item.current >= item.required).length;
        const catPercent = catItems.length > 0 ? Math.floor((catDone / catItems.length) * 100) : 0;

        const group = document.createElement("div");
        group.className = "tag-group";
        group.innerHTML = `
            <h3 class="tag-header" data-cat="${category}" style="cursor: pointer;">
              <img class="img-cat" src="./icons/${category + ".png"}">
              <spam>${category}</spam>
              <span class="cat-pct">${catPercent}%</span>
            </h3>
            <div class="tag-list"></div>
        `;
        
        const list = group.querySelector(".tag-list");
        subTags.forEach(tag => {
            const stats = getTagStats(tag);
            if (!stats) return; // Skip tags with no items

            const chip = document.createElement("div");
            const isActive = ACTIVE_TAGS.includes(tag);
            chip.className = `tag-chip ${isActive ? 'active' : ''}`;
            
            // Added percentage to the chip text
            chip.innerHTML = `${tag} <span class="chip-pct">${stats.percent}%</span>`;
            
            chip.onclick = () => {
                if (ACTIVE_TAGS.includes(tag)) {
                    ACTIVE_TAGS = ACTIVE_TAGS.filter(t => t !== tag);
                } else {
                    ACTIVE_TAGS.push(tag);
                }
                renderTagModal(); 
                CURRENT_PAGE = 1;
                savePreferences();
                renderUI(); 
            };
            list.appendChild(chip);
        });
        container.appendChild(group);
    }
}

document.getElementById("closeModal").onclick = () => tagModal.classList.add("hidden");
document.getElementById("clearTags").onclick = () => {
    ACTIVE_TAGS = [];
    renderTagModal();
    renderUI();
};

// Global click listener for category headers
document.addEventListener("click", (e) => {
    const header = e.target.closest(".tag-header");
    if (!header) return;

    const category = header.dataset.cat;
    const subTags = allTags[category];
    
    // Check if all subtags in this category are already in ACTIVE_TAGS
    const allSelected = subTags.every(tag => ACTIVE_TAGS.includes(tag));

    if (allSelected) {
        // If all are selected, remove them all (Deselect All)
        ACTIVE_TAGS = ACTIVE_TAGS.filter(tag => !subTags.includes(tag));
    } else {
        // Otherwise, add any that are missing (Select All)
        subTags.forEach(tag => {
            if (!ACTIVE_TAGS.includes(tag)) ACTIVE_TAGS.push(tag);
        });
    }

    // Refresh UI
    renderTagModal();
    CURRENT_PAGE = 1;
    savePreferences();
    renderUI();
});

document.querySelectorAll("#statusGroup .btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const status = btn.dataset.status;
        
        if (ACTIVE_STATUSES.includes(status)) {
            ACTIVE_STATUSES = ACTIVE_STATUSES.filter(s => s !== status);
            btn.classList.remove("active");
        } else {
            ACTIVE_STATUSES.push(status);
            btn.classList.add("active");
        }
        
        CURRENT_PAGE = 1;
        savePreferences();
        renderUI();
    });
});


function renderActiveFilters() {
    const container = document.getElementById("activeFiltersBar");
    const list = document.getElementById("activeFiltersList");
    list.innerHTML = "";

    
    if (ACTIVE_TAGS.length === 0 && ACTIVE_STATUSES.length === 0) {
      container.classList.add("hidden");
      return;
    } else {
      console.log("a")
      container.classList.remove("hidden");
    }
    
    // Add Pills for Statuses
    ACTIVE_STATUSES.forEach(status => {
        const pill = document.createElement("div");
        pill.className = "filter-pill";
        pill.innerHTML = `<span>${status}</span> <span class="remove-x">×</span>`;
        pill.onclick = () => {
            ACTIVE_STATUSES = ACTIVE_STATUSES.filter(s => s !== status);
            // Also need to remove 'active' class from the actual button
            document.querySelector(`[data-status="${status}"]`)?.classList.remove("active");
            savePreferences();
            renderUI();
        };
        list.appendChild(pill);
    });

    // Add Pills for Tags
    ACTIVE_TAGS.forEach(tag => {
        const pill = document.createElement("div");
        pill.className = "filter-pill";
        pill.innerHTML = `<span>${tag}</span> <span class="remove-x">×</span>`;
        pill.onclick = () => {
            ACTIVE_TAGS = ACTIVE_TAGS.filter(t => t !== tag);
            savePreferences();
            renderUI();
        };
        list.appendChild(pill);
    });
}

document.getElementById("clearAllFilters").onclick = () => {
    ACTIVE_TAGS = [];
    ACTIVE_STATUSES = [];
    // Reset button visuals
    document.querySelectorAll("#statusGroup .sort-btn").forEach(btn => btn.classList.remove("active"));
    savePreferences();
    renderUI();
};