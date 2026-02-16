const rawDatabase = `
ID,Item,Internal name,Research
1,Iron Pickaxe,IronPickaxe,1
2,Dirt Block,DirtBlock,100
3,Stone Block,StoneBlock,100
4,Iron Broadsword,IronBroadsword,1
5,Mushroom,Mushroom,30
6,Iron Shortsword,IronShortsword,1
7,Iron Hammer,IronHammer,1
8,Torch,Torch,100
9,Wood,Wood,100
10,Iron Axe,IronAxe,1
11,Iron Ore,IronOre,100
12,Copper Ore,CopperOre,100
13,Gold Ore,GoldOre,100
14,Silver Ore,SilverOre,100
15,Copper Watch,CopperWatch,1
16,Silver Watch,SilverWatch,1
17,Gold Watch,GoldWatch,1
18,Depth Meter,DepthMeter,1
19,Gold Bar,GoldBar,25
20,Copper Bar,CopperBar,25
21,Silver Bar,SilverBar,25
22,Iron Bar,IronBar,25
23,Gel,Gel,99
24,Wooden Sword,WoodenSword,1
25,Wooden Door,WoodenDoor,1
26,Stone Wall,StoneWall,400
27,Acorn,Acorn,50
28,Lesser Healing Potion,LesserHealingPotion,30
29,Life Crystal,LifeCrystal,10
30,Dirt Wall,DirtWall,400
31,Bottle,Bottle,25
32,Wooden Table,WoodenTable,1
33,Furnace,Furnace,1
34,Wooden Chair,WoodenChair,1
35,Iron Anvil,IronAnvil,1
36,Work Bench,WorkBench,1
37,Goggles,Goggles,1
38,Lens,Lens,25
39,Wooden Bow,WoodenBow,1
40,Wooden Arrow,WoodenArrow,99
41,Flaming Arrow,FlamingArrow,99
42,Shuriken,Shuriken,99
43,Suspicious Looking Eye,SuspiciousLookingEye,3
44,Demon Bow,DemonBow,1
45,War Axe of the Night,WarAxeoftheNight,1
46,Light's Bane,LightsBane,1
47,Unholy Arrow,UnholyArrow,99
48,Chest,Chest,1
49,Band of Regeneration,BandofRegeneration,1
50,Magic Mirror,MagicMirror,1
51,Jester's Arrow,JestersArrow,99
52,Angel Statue,AngelStatue,1
53,Cloud in a Bottle,CloudinaBottle,1
54,Hermes Boots,HermesBoots,1
55,Enchanted Boomerang,EnchantedBoomerang,1
56,Demonite Ore,DemoniteOre,100
57,Demonite Bar,DemoniteBar,25
58,Heart,Heart,n/a
59,Corrupt Seeds,CorruptSeeds,25
60,Vile Mushroom,VileMushroom,25
61,Ebonstone Block,EbonstoneBlock,100
62,Grass Seeds,GrassSeeds,25
63,Sunflower,Sunflower,5
64,Vilethorn,Vilethorn,1
65,Starfury,Starfury,1
66,Purification Powder,PurificationPowder,99
67,Vile Powder,VilePowder,99
68,Rotten Chunk,RottenChunk,25
69,Worm Tooth,WormTooth,25
70,Worm Food,WormFood,3
71,Copper Coin,CopperCoin,100
72,Silver Coin,SilverCoin,100
73,Gold Coin,GoldCoin,100
74,Platinum Coin,PlatinumCoin,100
75,Fallen Star,FallenStar,50
76,Copper Greaves,CopperGreaves,1
77,Iron Greaves,IronGreaves,1
78,Silver Greaves,SilverGreaves,1
79,Gold Greaves,GoldGreaves,1
80,Copper Chainmail,CopperChainmail,1
81,Iron Chainmail,IronChainmail,1
82,Silver Chainmail,SilverChainmail,1
83,Gold Chainmail,GoldChainmail,1
84,Grappling Hook,GrapplingHook,1
85,Chain,Chain,100
86,Shadow Scale,ShadowScale,25
87,Piggy Bank,PiggyBank,1
88,Mining Helmet,MiningHelmet,1
89,Copper Helmet,CopperHelmet,1
90,Iron Helmet,IronHelmet,1
91,Silver Helmet,SilverHelmet,1
92,Gold Helmet,GoldHelmet,1
93,Wood Wall,WoodWall,400
94,Wood Platform,WoodPlatform,200
95,Flintlock Pistol,FlintlockPistol,1
96,Musket,Musket,1
97,Musket Ball,MusketBall,99
98,Minishark,Minishark,1
99,Iron Bow,IronBow,1
100,Shadow Greaves,ShadowGreaves,1
101,Shadow Scalemail,ShadowScalemail,1
102,Shadow Helmet,ShadowHelmet,1
103,Nightmare Pickaxe,NightmarePickaxe,1
104,The Breaker,TheBreaker,1
105,Candle,Candle,1
106,Copper Chandelier,CopperChandelier,1
107,Silver Chandelier,SilverChandelier,1
108,Gold Chandelier,GoldChandelier,1
109,Mana Crystal,ManaCrystal,10
110,Lesser Mana Potion,LesserManaPotion,30
111,Band of Starpower,BandofStarpower,1
112,Flower of Fire,FlowerofFire,1
113,Magic Missile,MagicMissile,1
114,Dirt Rod,DirtRod,1
115,Shadow Orb,ShadowOrb,1
116,Meteorite,Meteorite,100
117,Meteorite Bar,MeteoriteBar,25
118,Hook,Hook,1
119,Flamarang,Flamarang,1
120,Molten Fury,MoltenFury,1
121,Volcano,FieryGreatsword,1
122,Molten Pickaxe,MoltenPickaxe,1
123,Meteor Helmet,MeteorHelmet,1
124,Meteor Suit,MeteorSuit,1
125,Meteor Leggings,MeteorLeggings,1
126,Bottled Water,BottledWater,30
127,Space Gun,SpaceGun,1
128,Rocket Boots,RocketBoots,1
129,Gray Brick,GrayBrick,100
130,Gray Brick Wall,GrayBrickWall,400
131,Red Brick,RedBrick,100
132,Red Brick Wall,RedBrickWall,400
133,Clay Block,ClayBlock,100
134,Blue Brick,BlueBrick,100
135,Blue Brick Wall,BlueBrickWall,400
136,Chain Lantern,ChainLantern,1
137,Green Brick,GreenBrick,100
138,Green Brick Wall,GreenBrickWall,400
139,Pink Brick,PinkBrick,100
140,Pink Brick Wall,PinkBrickWall,400
141,Gold Brick,GoldBrick,100
142,Gold Brick Wall,GoldBrickWall,400
143,Silver Brick,SilverBrick,100
144,Silver Brick Wall,SilverBrickWall,400
145,Copper Brick,CopperBrick,100
146,Copper Brick Wall,CopperBrickWall,400
147,Spike,Spike,100
148,Water Candle,WaterCandle,1
149,Book,Book,25
150,Cobweb,Cobweb,50
151,Necro Helmet,NecroHelmet,1
152,Necro Breastplate,NecroBreastplate,1
153,Necro Greaves,NecroGreaves,1
154,Bone,Bone,99
155,Muramasa,Muramasa,1
156,Cobalt Shield,CobaltShield,1
157,Aqua Scepter,AquaScepter,1
158,Lucky Horseshoe,LuckyHorseshoe,1
159,Shiny Red Balloon,ShinyRedBalloon,1
160,Harpoon,Harpoon,1
161,Spiky Ball,SpikyBall,99
162,Ball O' Hurt,BallOHurt,1
163,Blue Moon,BlueMoon,1
164,Handgun,Handgun,1
165,Water Bolt,WaterBolt,1
166,Bomb,Bomb,99
167,Dynamite,Dynamite,99
168,Grenade,Grenade,99
169,Sand Block,SandBlock,100
170,Glass,Glass,100
171,Sign,Sign,1
172,Ash Block,AshBlock,100
173,Obsidian,Obsidian,100
174,Hellstone,Hellstone,100
175,Hellstone Bar,HellstoneBar,25
176,Mud Block,MudBlock,100
177,Sapphire,Sapphire,15
178,Ruby,Ruby,15
179,Emerald,Emerald,15
180,Topaz,Topaz,15
181,Amethyst,Amethyst,15
182,Diamond,Diamond,15
183,Glowing Mushroom,GlowingMushroom,100
184,Star,Star,n/a
185,Ivy Whip,IvyWhip,1
186,Breathing Reed,BreathingReed,1
187,Flipper,Flipper,1
188,Healing Potion,HealingPotion,30
189,Mana Potion,ManaPotion,30
190,Blade of Grass,BladeofGrass,1
191,Thorn Chakram,ThornChakram,1
192,Obsidian Brick,ObsidianBrick,100
193,Obsidian Skull,ObsidianSkull,1
194,Mushroom Grass Seeds,MushroomGrassSeeds,25
195,Jungle Grass Seeds,JungleGrassSeeds,25
196,Wooden Hammer,WoodenHammer,1
197,Star Cannon,StarCannon,1
198,Blue Phaseblade,BluePhaseblade,1
199,Red Phaseblade,RedPhaseblade,1
200,Green Phaseblade,GreenPhaseblade,1
201,Purple Phaseblade,PurplePhaseblade,1
202,White Phaseblade,WhitePhaseblade,1
203,Yellow Phaseblade,YellowPhaseblade,1
204,Meteor Hamaxe,MeteorHamaxe,1
205,Empty Bucket,EmptyBucket,1
206,Water Bucket,WaterBucket,1
207,Lava Bucket,LavaBucket,1
208,Jungle Rose,JungleRose,1
209,Stinger,Stinger,25
210,Vine,Vine,5
211,Feral Claws,FeralClaws,1
212,Anklet of the Wind,AnkletoftheWind,1
213,Staff of Regrowth,StaffofRegrowth,1
214,Hellstone Brick,HellstoneBrick,100
215,Whoopie Cushion,WhoopieCushion,1
216,Shackle,Shackle,1
217,Molten Hamaxe,MoltenHamaxe,1
218,Flamelash,Flamelash,1
219,Phoenix Blaster,PhoenixBlaster,1
220,Sunfury,Sunfury,1
221,Hellforge,Hellforge,1
222,Clay Pot,ClayPot,1
223,Nature's Gift,NaturesGift,1
224,Bed,Bed,1
225,Silk,Silk,25
226,(Deprecated),LesserRestorationPotion,n/a
227,Restoration Potion,RestorationPotion,30
228,Jungle Hat,JungleHat,1
229,Jungle Shirt,JungleShirt,1
230,Jungle Pants,JunglePants,1
231,Molten Helmet,MoltenHelmet,1
232,Molten Breastplate,MoltenBreastplate,1
233,Molten Greaves,MoltenGreaves,1
234,Meteor Shot,MeteorShot,99
235,Sticky Bomb,StickyBomb,99
236,Black Lens,BlackLens,1
237,Sunglasses,Sunglasses,1
238,Wizard Hat,WizardHat,1
239,Top Hat,TopHat,1
240,Tuxedo Shirt,TuxedoShirt,1
241,Tuxedo Pants,TuxedoPants,1
242,Summer Hat,SummerHat,1
243,Bunny Hood,BunnyHood,1
244,Plumber's Hat,PlumbersHat,1
245,Plumber's Shirt,PlumbersShirt,1
246,Plumber's Pants,PlumbersPants,1
247,Hero's Hat,HerosHat,1
248,Hero's Shirt,HerosShirt,1
249,Hero's Pants,HerosPants,1
250,Fish Bowl,FishBowl,1
251,Archaeologist's Hat,ArchaeologistsHat,1
252,Archaeologist's Jacket,ArchaeologistsJacket,1
253,Archaeologist's Pants,ArchaeologistsPants,1
254,Black Thread,BlackThread,5
255,Green Thread,GreenThread,5
256,Ninja Hood,NinjaHood,1
257,Ninja Shirt,NinjaShirt,1
258,Ninja Pants,NinjaPants,1
259,Leather,Leather,5
260,Red Hat,RedHat,1
261,Goldfish,Goldfish,5
262,Robe,Robe,1
263,Robot Hat,RobotHat,1
264,Gold Crown,GoldCrown,1
265,Hellfire Arrow,HellfireArrow,99
266,Sandgun,Sandgun,1
267,Guide Voodoo Doll,GuideVoodooDoll,1
268,Diving Helmet,DivingHelmet,1
269,Familiar Shirt,FamiliarShirt,1
270,Familiar Pants,FamiliarPants,1
271,Familiar Wig,FamiliarWig,1
272,Demon Scythe,DemonScythe,1
273,Night's Edge,NightsEdge,1
274,Dark Lance,DarkLance,1
275,Coral,Coral,25
276,Cactus,Cactus,100
277,Trident,Trident,1
278,Silver Bullet,SilverBullet,99
279,Throwing Knife,ThrowingKnife,99
280,Spear,Spear,1
281,Blowpipe,Blowpipe,1
282,Glowstick,Glowstick,100
283,Seed,Seed,99
284,Wooden Boomerang,WoodenBoomerang,1
285,Aglet,Aglet,1
286,Sticky Glowstick,StickyGlowstick,100
287,Poisoned Knife,PoisonedKnife,99
288,Obsidian Skin Potion,ObsidianSkinPotion,20
289,Regeneration Potion,RegenerationPotion,20
290,Swiftness Potion,SwiftnessPotion,20
291,Gills Potion,GillsPotion,20
292,Ironskin Potion,IronskinPotion,20
293,Mana Regeneration Potion,ManaRegenerationPotion,20
294,Magic Power Potion,MagicPowerPotion,20
295,Featherfall Potion,FeatherfallPotion,20
296,Spelunker Potion,SpelunkerPotion,20
297,Invisibility Potion,InvisibilityPotion,20
298,Shine Potion,ShinePotion,20
299,Night Owl Potion,NightOwlPotion,20
300,Battle Potion,BattlePotion,20
301,Thorns Potion,ThornsPotion,20
302,Water Walking Potion,WaterWalkingPotion,20
303,Archery Potion,ArcheryPotion,20
304,Hunter Potion,HunterPotion,20
305,Gravitation Potion,GravitationPotion,20
306,Gold Chest,GoldChest,1
307,Daybloom Seeds,DaybloomSeeds,25
308,Moonglow Seeds,MoonglowSeeds,25
309,Blinkroot Seeds,BlinkrootSeeds,25
310,Deathweed Seeds,DeathweedSeeds,25
311,Waterleaf Seeds,WaterleafSeeds,25
312,Fireblossom Seeds,FireblossomSeeds,25
313,Daybloom,Daybloom,25
314,Moonglow,Moonglow,25
315,Blinkroot,Blinkroot,25
316,Deathweed,Deathweed,25
317,Waterleaf,Waterleaf,25
318,Fireblossom,Fireblossom,25
319,Shark Fin,SharkFin,25
320,Feather,Feather,25
321,Tombstone,Tombstone,2
322,Mime Mask,MimeMask,1
323,Antlion Mandible,AntlionMandible,5
324,Illegal Gun Parts,IllegalGunParts,1
325,The Doctor's Shirt,TheDoctorsShirt,1
326,The Doctor's Pants,TheDoctorsPants,1
327,Golden Key,GoldenKey,3
328,Shadow Chest,ShadowChest,1
329,Shadow Key,ShadowKey,1
330,Obsidian Brick Wall,ObsidianBrickWall,400
331,Jungle Spores,JungleSpores,25
332,Loom,Loom,1
333,Piano,Piano,1
334,Dresser,Dresser,1
335,Bench,Bench,1
336,Bathtub,Bathtub,1
337,Red Banner,RedBanner,1
338,Green Banner,GreenBanner,1
339,Blue Banner,BlueBanner,1
340,Yellow Banner,YellowBanner,1
341,Lamp Post,LampPost,1
342,Tiki Torch,TikiTorch,1
343,Barrel,Barrel,1
344,Chinese Lantern,ChineseLantern,1
345,Cooking Pot,CookingPot,1
346,Safe,Safe,1
347,Skull Lantern,SkullLantern,1
348,Trash Can,TrashCan,1
349,Candelabra,Candelabra,1
350,Pink Vase,PinkVase,1
351,Mug,Mug,1
352,Keg,Keg,1
353,Ale,Ale,20
354,Bookcase,Bookcase,1
355,Throne,Throne,1
356,Bowl,Bowl,1
357,Bowl of Soup,BowlofSoup,5
358,Toilet,Toilet,1
359,Grandfather Clock,GrandfatherClock,1
360,Armor Statue,ArmorStatue,1
361,Goblin Battle Standard,GoblinBattleStandard,3
362,Tattered Cloth,TatteredCloth,25
363,Sawmill,Sawmill,1
364,Cobalt Ore,CobaltOre,100
365,Mythril Ore,MythrilOre,100
366,Adamantite Ore,AdamantiteOre,100
367,Pwnhammer,Pwnhammer,1
368,Excalibur,Excalibur,1
369,Hallowed Seeds,HallowedSeeds,25
370,Ebonsand Block,EbonsandBlock,100
371,Cobalt Hat,CobaltHat,1
372,Cobalt Helmet,CobaltHelmet,1
373,Cobalt Mask,CobaltMask,1
374,Cobalt Breastplate,CobaltBreastplate,1
375,Cobalt Leggings,CobaltLeggings,1
376,Mythril Hood,MythrilHood,1
377,Mythril Helmet,MythrilHelmet,1
378,Mythril Hat,MythrilHat,1
379,Mythril Chainmail,MythrilChainmail,1
380,Mythril Greaves,MythrilGreaves,1
381,Cobalt Bar,CobaltBar,25
382,Mythril Bar,MythrilBar,25
383,Cobalt Chainsaw,CobaltChainsaw,1
384,Mythril Chainsaw,MythrilChainsaw,1
385,Cobalt Drill,CobaltDrill,1
386,Mythril Drill,MythrilDrill,1
387,Adamantite Chainsaw,AdamantiteChainsaw,1
388,Adamantite Drill,AdamantiteDrill,1
389,Dao of Pow,DaoofPow,1
390,Mythril Halberd,MythrilHalberd,1
391,Adamantite Bar,AdamantiteBar,25
392,Glass Wall,GlassWall,400
393,Compass,Compass,1
394,Diving Gear,DivingGear,1
395,GPS,GPS,1
396,Obsidian Horseshoe,ObsidianHorseshoe,1
397,Obsidian Shield,ObsidianShield,1
398,Tinkerer's Workshop,TinkerersWorkshop,1
399,Cloud in a Balloon,CloudinaBalloon,1
400,Adamantite Headgear,AdamantiteHeadgear,1
401,Adamantite Helmet,AdamantiteHelmet,1
402,Adamantite Mask,AdamantiteMask,1
403,Adamantite Breastplate,AdamantiteBreastplate,1
404,Adamantite Leggings,AdamantiteLeggings,1
405,Spectre Boots,SpectreBoots,1
406,Adamantite Glaive,AdamantiteGlaive,1
407,Toolbelt,Toolbelt,1
408,Pearlsand Block,PearlsandBlock,100
409,Pearlstone Block,PearlstoneBlock,100
410,Mining Shirt,MiningShirt,1
411,Mining Pants,MiningPants,1
412,Pearlstone Brick,PearlstoneBrick,100
413,Iridescent Brick,IridescentBrick,100
414,Mudstone Brick,MudstoneBlock,100
415,Cobalt Brick,CobaltBrick,100
416,Mythril Brick,MythrilBrick,100
417,Pearlstone Brick Wall,PearlstoneBrickWall,400
418,Iridescent Brick Wall,IridescentBrickWall,400
419,Mudstone Brick Wall,MudstoneBrickWall,400
420,Cobalt Brick Wall,CobaltBrickWall,400
421,Mythril Brick Wall,MythrilBrickWall,400
422,Holy Water,HolyWater,99
423,Unholy Water,UnholyWater,99
424,Silt Block,SiltBlock,200
425,Fairy Bell,FairyBell,1
426,Breaker Blade,BreakerBlade,1
427,Blue Torch,BlueTorch,100
428,Red Torch,RedTorch,100
429,Green Torch,GreenTorch,100
430,Purple Torch,PurpleTorch,100
431,White Torch,WhiteTorch,100
432,Yellow Torch,YellowTorch,100
433,Demon Torch,DemonTorch,100
434,Clockwork Assault Rifle,ClockworkAssaultRifle,1
435,Cobalt Repeater,CobaltRepeater,1
436,Mythril Repeater,MythrilRepeater,1
437,Dual Hook,DualHook,1
438,Star Statue,StarStatue,1
439,Sword Statue,SwordStatue,1
440,Slime Statue,SlimeStatue,1
441,Goblin Statue,GoblinStatue,1
442,Shield Statue,ShieldStatue,1
443,Bat Statue,BatStatue,1
444,Fish Statue,FishStatue,1
445,Bunny Statue,BunnyStatue,1
446,Skeleton Statue,SkeletonStatue,1
447,Reaper Statue,ReaperStatue,1
448,Woman Statue,WomanStatue,1
449,Imp Statue,ImpStatue,1
450,Gargoyle Statue,GargoyleStatue,1
451,Gloom Statue,GloomStatue,1
452,Hornet Statue,HornetStatue,1
453,Bomb Statue,BombStatue,1
454,Crab Statue,CrabStatue,1
455,Hammer Statue,HammerStatue,1
456,Potion Statue,PotionStatue,1
457,Spear Statue,SpearStatue,1
458,Cross Statue,CrossStatue,1
459,Jellyfish Statue,JellyfishStatue,1
460,Bow Statue,BowStatue,1
461,Boomerang Statue,BoomerangStatue,1
462,Boot Statue,BootStatue,1
463,Chest Statue,ChestStatue,1
464,Bird Statue,BirdStatue,1
465,Axe Statue,AxeStatue,1
466,Corrupt Statue,CorruptStatue,1
467,Tree Statue,TreeStatue,1
468,Anvil Statue,AnvilStatue,1
469,Pickaxe Statue,PickaxeStatue,1
470,Mushroom Statue,MushroomStatue,1
471,Eyeball Statue,EyeballStatue,1
472,Pillar Statue,PillarStatue,1
473,Heart Statue,HeartStatue,1
474,Pot Statue,PotStatue,1
475,Sunflower Statue,SunflowerStatue,1
476,King Statue,KingStatue,1
477,Queen Statue,QueenStatue,1
478,Piranha Statue,PiranhaStatue,1
479,Planked Wall,PlankedWall,400
480,Wooden Beam,WoodenBeam,50
481,Adamantite Repeater,AdamantiteRepeater,1
482,Adamantite Sword,AdamantiteSword,1
483,Cobalt Sword,CobaltSword,1
484,Mythril Sword,MythrilSword,1
485,Moon Charm,MoonCharm,1
486,Ruler,Ruler,1
487,Crystal Ball,CrystalBall,1
488,Disco Ball,DiscoBall,1
489,Sorcerer Emblem,SorcererEmblem,1
490,Warrior Emblem,WarriorEmblem,1
491,Ranger Emblem,RangerEmblem,1
492,Demon Wings,DemonWings,1
493,Angel Wings,AngelWings,1
494,Magical Harp,MagicalHarp,1
495,Rainbow Rod,RainbowRod,1
496,Ice Rod,IceRod,1
497,Neptune's Shell,NeptunesShell,1
498,Mannequin,Mannequin,1
499,Greater Healing Potion,GreaterHealingPotion,30
500,Greater Mana Potion,GreaterManaPotion,30
501,Pixie Dust,PixieDust,25
502,Crystal Shard,CrystalShard,25
503,Clown Hat,ClownHat,1
504,Clown Shirt,ClownShirt,1
505,Clown Pants,ClownPants,1
506,Flamethrower,Flamethrower,1
507,Bell,Bell,1
508,Harp,Harp,1
509,Red Wrench,Wrench,1
510,Wire Cutter,WireCutter,1
511,Active Stone Block,ActiveStoneBlock,100
512,Inactive Stone Block,InactiveStoneBlock,100
513,Lever,Lever,5
514,Laser Rifle,LaserRifle,1
515,Crystal Bullet,CrystalBullet,99
516,Holy Arrow,HolyArrow,99
517,Magic Dagger,MagicDagger,1
518,Crystal Storm,CrystalStorm,1
519,Cursed Flames,CursedFlames,1
520,Soul of Light,SoulofLight,25
521,Soul of Night,SoulofNight,25
522,Cursed Flame,CursedFlame,25
523,Cursed Torch,CursedTorch,100
524,Adamantite Forge,AdamantiteForge,1
525,Mythril Anvil,MythrilAnvil,1
526,Unicorn Horn,UnicornHorn,5
527,Dark Shard,DarkShard,1
528,Light Shard,LightShard,1
529,Red Pressure Plate,RedPressurePlate,5
530,Wire,Wire,100
531,Spell Tome,SpellTome,1
532,Star Cloak,StarCloak,1
533,Megashark,Megashark,1
534,Shotgun,Shotgun,1
535,Philosopher's Stone,PhilosophersStone,1
536,Titan Glove,TitanGlove,1
537,Cobalt Naginata,CobaltNaginata,1
538,Switch,Switch,5
539,Dart Trap,DartTrap,5
540,Boulder,Boulder,5
541,Green Pressure Plate,GreenPressurePlate,5
542,Gray Pressure Plate,GrayPressurePlate,5
543,Brown Pressure Plate,BrownPressurePlate,5
544,Mechanical Eye,MechanicalEye,3
545,Cursed Arrow,CursedArrow,99
546,Cursed Bullet,CursedBullet,99
547,Soul of Fright,SoulofFright,25
548,Soul of Might,SoulofMight,25
549,Soul of Sight,SoulofSight,25
550,Gungnir,Gungnir,1
551,Hallowed Plate Mail,HallowedPlateMail,1
552,Hallowed Greaves,HallowedGreaves,1
553,Hallowed Helmet,HallowedHelmet,1
554,Cross Necklace,CrossNecklace,1
555,Mana Flower,ManaFlower,1
556,Mechanical Worm,MechanicalWorm,3
557,Mechanical Skull,MechanicalSkull,3
558,Hallowed Headgear,HallowedHeadgear,1
559,Hallowed Mask,HallowedMask,1
560,Slime Crown,SlimeCrown,3
561,Light Disc,LightDisc,1
562,Music Box (Overworld Day),MusicBoxOverworldDay,1
563,Music Box (Eerie),MusicBoxEerie,1
564,Music Box (Night),MusicBoxNight,1
565,Music Box (Title),MusicBoxTitle,1
566,Music Box (Underground),MusicBoxUnderground,1
567,Music Box (Boss 1),MusicBoxBoss1,1
568,Music Box (Jungle),MusicBoxJungle,1
569,Music Box (Corruption),MusicBoxCorruption,1
570,Music Box (Underground Corruption),MusicBoxUndergroundCorruption,1
571,Music Box (The Hallow),MusicBoxTheHallow,1
572,Music Box (Boss 2),MusicBoxBoss2,1
573,Music Box (Underground Hallow),MusicBoxUndergroundHallow,1
574,Music Box (Boss 3),MusicBoxBoss3,1
575,Soul of Flight,SoulofFlight,25
576,Music Box,MusicBox,1
577,Demonite Brick,DemoniteBrick,100
578,Hallowed Repeater,HallowedRepeater,1
579,Drax,Drax,1
580,Explosives,Explosives,5
581,Inlet Pump,InletPump,1
582,Outlet Pump,OutletPump,1
583,1 Second Timer,Timer1Second,1
584,3 Second Timer,Timer3Second,1
585,5 Second Timer,Timer5Second,1
586,Candy Cane Block,CandyCaneBlock,100
587,Candy Cane Wall,CandyCaneWall,400
588,Santa Hat,SantaHat,1
589,Santa Shirt,SantaShirt,1
590,Santa Pants,SantaPants,1
591,Green Candy Cane Block,GreenCandyCaneBlock,100
592,Green Candy Cane Wall,GreenCandyCaneWall,400
593,Snow Block,SnowBlock,100
594,Snow Brick,SnowBrick,100
595,Snow Brick Wall,SnowBrickWall,400
596,Blue Light,BlueLight,25
597,Red Light,RedLight,25
598,Green Light,GreenLight,25
599,(Deprecated),BluePresent,n/a
600,(Deprecated),GreenPresent,n/a
601,(Deprecated),YellowPresent,n/a
602,Snow Globe,SnowGlobe,3
603,Carrot,Carrot,1
604,Adamantite Beam,AdamantiteBeam,100
605,Adamantite Beam Wall,AdamantiteBeamWall,400
606,Demonite Brick Wall,DemoniteBrickWall,400
607,Sandstone Brick,SandstoneBrick,100
608,Sandstone Brick Wall,SandstoneBrickWall,400
609,Ebonstone Brick,EbonstoneBrick,100
610,Ebonstone Brick Wall,EbonstoneBrickWall,400
611,Red Stucco,RedStucco,100
612,Yellow Stucco,YellowStucco,100
613,Green Stucco,GreenStucco,100
614,Gray Stucco,GrayStucco,100
615,Red Stucco Wall,RedStuccoWall,400
616,Yellow Stucco Wall,YellowStuccoWall,400
617,Green Stucco Wall,GreenStuccoWall,400
618,Gray Stucco Wall,GrayStuccoWall,400
619,Ebonwood,Ebonwood,100
620,Rich Mahogany,RichMahogany,100
621,Pearlwood,Pearlwood,100
622,Ebonwood Wall,EbonwoodWall,400
623,Rich Mahogany Wall,RichMahoganyWall,400
624,Pearlwood Wall,PearlwoodWall,400
625,Ebonwood Chest,EbonwoodChest,1
626,Rich Mahogany Chest,RichMahoganyChest,1
627,Pearlwood Chest,PearlwoodChest,1
628,Ebonwood Chair,EbonwoodChair,1
629,Rich Mahogany Chair,RichMahoganyChair,1
630,Pearlwood Chair,PearlwoodChair,1
631,Ebonwood Platform,EbonwoodPlatform,200
632,Rich Mahogany Platform,RichMahoganyPlatform,200
633,Pearlwood Platform,PearlwoodPlatform,200
634,Bone Platform,BonePlatform,200
635,Ebonwood Work Bench,EbonwoodWorkBench,1
636,Rich Mahogany Work Bench,RichMahoganyWorkBench,1
637,Pearlwood Work Bench,PearlwoodWorkBench,1
638,Ebonwood Table,EbonwoodTable,1
639,Rich Mahogany Table,RichMahoganyTable,1
640,Pearlwood Table,PearlwoodTable,1
641,Ebonwood Piano,EbonwoodPiano,1
642,Rich Mahogany Piano,RichMahoganyPiano,1
643,Pearlwood Piano,PearlwoodPiano,1
644,Ebonwood Bed,EbonwoodBed,1
645,Rich Mahogany Bed,RichMahoganyBed,1
646,Pearlwood Bed,PearlwoodBed,1
647,Ebonwood Dresser,EbonwoodDresser,1
648,Rich Mahogany Dresser,RichMahoganyDresser,1
649,Pearlwood Dresser,PearlwoodDresser,1
650,Ebonwood Door,EbonwoodDoor,1
651,Rich Mahogany Door,RichMahoganyDoor,1
652,Pearlwood Door,PearlwoodDoor,1
653,Ebonwood Sword,EbonwoodSword,1
654,Ebonwood Hammer,EbonwoodHammer,1
655,Ebonwood Bow,EbonwoodBow,1
656,Rich Mahogany Sword,RichMahoganySword,1
657,Rich Mahogany Hammer,RichMahoganyHammer,1
658,Rich Mahogany Bow,RichMahoganyBow,1
659,Pearlwood Sword,PearlwoodSword,1
660,Pearlwood Hammer,PearlwoodHammer,1
661,Pearlwood Bow,PearlwoodBow,1
662,Rainbow Brick,RainbowBrick,100
663,Rainbow Brick Wall,RainbowBrickWall,400
664,Ice Block,IceBlock,100
665,Red's Wings,RedsWings,1
666,Red's Helmet,RedsHelmet,1
667,Red's Breastplate,RedsBreastplate,1
668,Red's Leggings,RedsLeggings,1
669,Fish,Fish,1
670,Ice Boomerang,IceBoomerang,1
671,Keybrand,Keybrand,1
672,Cutlass,Cutlass,1
673,Boreal Wood Work Bench,BorealWoodWorkBench,1
674,True Excalibur,TrueExcalibur,1
675,True Night's Edge,TrueNightsEdge,1
676,Frostbrand,Frostbrand,1
677,Boreal Wood Table,BorealWoodTable,1
678,Red Potion,RedPotion,3
679,Tactical Shotgun,TacticalShotgun,1
680,Ivy Chest,IvyChest,1
681,Frozen Chest,IceChest,1
682,Marrow,Marrow,1
683,Unholy Trident,UnholyTrident,1
684,Frost Helmet,FrostHelmet,1
685,Frost Breastplate,FrostBreastplate,1
686,Frost Leggings,FrostLeggings,1
687,Tin Helmet,TinHelmet,1
688,Tin Chainmail,TinChainmail,1
689,Tin Greaves,TinGreaves,1
690,Lead Helmet,LeadHelmet,1
691,Lead Chainmail,LeadChainmail,1
692,Lead Greaves,LeadGreaves,1
693,Tungsten Helmet,TungstenHelmet,1
694,Tungsten Chainmail,TungstenChainmail,1
695,Tungsten Greaves,TungstenGreaves,1
696,Platinum Helmet,PlatinumHelmet,1
697,Platinum Chainmail,PlatinumChainmail,1
698,Platinum Greaves,PlatinumGreaves,1
699,Tin Ore,TinOre,100
700,Lead Ore,LeadOre,100
701,Tungsten Ore,TungstenOre,100
702,Platinum Ore,PlatinumOre,100
703,Tin Bar,TinBar,25
704,Lead Bar,LeadBar,25
705,Tungsten Bar,TungstenBar,25
706,Platinum Bar,PlatinumBar,25
707,Tin Watch,TinWatch,1
708,Tungsten Watch,TungstenWatch,1
709,Platinum Watch,PlatinumWatch,1
710,Tin Chandelier,TinChandelier,1
711,Tungsten Chandelier,TungstenChandelier,1
712,Platinum Chandelier,PlatinumChandelier,1
713,Platinum Candle,PlatinumCandle,1
714,Platinum Candelabra,PlatinumCandelabra,1
715,Platinum Crown,PlatinumCrown,1
716,Lead Anvil,LeadAnvil,1
717,Tin Brick,TinBrick,100
718,Tungsten Brick,TungstenBrick,100
719,Platinum Brick,PlatinumBrick,100
720,Tin Brick Wall,TinBrickWall,400
721,Tungsten Brick Wall,TungstenBrickWall,400
722,Platinum Brick Wall,PlatinumBrickWall,400
723,Beam Sword,BeamSword,1
724,Ice Blade,IceBlade,1
725,Ice Bow,IceBow,1
726,Frost Staff,FrostStaff,1
727,Wood Helmet,WoodHelmet,1
728,Wood Breastplate,WoodBreastplate,1
729,Wood Greaves,WoodGreaves,1
730,Ebonwood Helmet,EbonwoodHelmet,1
731,Ebonwood Breastplate,EbonwoodBreastplate,1
732,Ebonwood Greaves,EbonwoodGreaves,1
733,Rich Mahogany Helmet,RichMahoganyHelmet,1
734,Rich Mahogany Breastplate,RichMahoganyBreastplate,1
735,Rich Mahogany Greaves,RichMahoganyGreaves,1
736,Pearlwood Helmet,PearlwoodHelmet,1
737,Pearlwood Breastplate,PearlwoodBreastplate,1
738,Pearlwood Greaves,PearlwoodGreaves,1
739,Amethyst Staff,AmethystStaff,1
740,Topaz Staff,TopazStaff,1
741,Sapphire Staff,SapphireStaff,1
742,Emerald Staff,EmeraldStaff,1
743,Ruby Staff,RubyStaff,1
744,Diamond Staff,DiamondStaff,1
745,Grass Wall,GrassWall,400
746,Jungle Wall,JungleWall,400
747,Flower Wall,FlowerWall,400
748,Jetpack,Jetpack,1
749,Butterfly Wings,ButterflyWings,1
750,Cactus Wall,CactusWall,400
751,Cloud,Cloud,100
752,Cloud Wall,CloudWall,400
753,Seaweed,Seaweed,1
754,Rune Hat,RuneHat,1
755,Rune Robe,RuneRobe,1
756,Mushroom Spear,MushroomSpear,1
757,Terra Blade,TerraBlade,1
758,Grenade Launcher,GrenadeLauncher,1
759,Rocket Launcher,RocketLauncher,1
760,Proximity Mine Launcher,ProximityMineLauncher,1
761,Fairy Wings,FairyWings,1
762,Slime Block,SlimeBlock,100
763,Flesh Block,FleshBlock,100
764,Mushroom Wall,MushroomWall,400
765,Rain Cloud,RainCloud,100
766,Bone Block,BoneBlock,100
767,Frozen Slime Block,FrozenSlimeBlock,100
768,Bone Block Wall,BoneBlockWall,400
769,Slime Block Wall,SlimeBlockWall,400
770,Flesh Block Wall,FleshBlockWall,400
771,Rocket I,RocketI,99
772,Rocket II,RocketII,99
773,Rocket III,RocketIII,99
774,Rocket IV,RocketIV,99
775,Asphalt Block,AsphaltBlock,100
776,Cobalt Pickaxe,CobaltPickaxe,1
777,Mythril Pickaxe,MythrilPickaxe,1
778,Adamantite Pickaxe,AdamantitePickaxe,1
779,Clentaminator,Clentaminator,1
780,Green Solution,GreenSolution,99
781,Blue Solution,BlueSolution,99
782,Purple Solution,PurpleSolution,99
783,Dark Blue Solution,DarkBlueSolution,99
784,Red Solution,RedSolution,99
785,Harpy Wings,HarpyWings,1
786,Bone Wings,BoneWings,1
787,Hammush,Hammush,1
788,Nettle Burst,NettleBurst,1
789,Ankh Banner,AnkhBanner,1
790,Snake Banner,SnakeBanner,1
791,Omega Banner,OmegaBanner,1
792,Crimson Helmet,CrimsonHelmet,1
793,Crimson Scalemail,CrimsonScalemail,1
794,Crimson Greaves,CrimsonGreaves,1
795,Blood Butcherer,BloodButcherer,1
796,Tendon Bow,TendonBow,1
797,Flesh Grinder,FleshGrinder,1
798,Deathbringer Pickaxe,DeathbringerPickaxe,1
799,Blood Lust Cluster,BloodLustCluster,1
800,The Undertaker,TheUndertaker,1
801,The Meatball,TheMeatball,1
802,The Rotted Fork,TheRottedFork,1
803,Snow Hood,EskimoHood,1
804,Snow Coat,EskimoCoat,1
805,Snow Pants,EskimoPants,1
806,Living Wood Chair,LivingWoodChair,1
807,Cactus Chair,CactusChair,1
808,Bone Chair,BoneChair,1
809,Flesh Chair,FleshChair,1
810,Mushroom Chair,MushroomChair,1
811,Bone Work Bench,BoneWorkBench,1
812,Cactus Work Bench,CactusWorkBench,1
813,Flesh Work Bench,FleshWorkBench,1
814,Mushroom Work Bench,MushroomWorkBench,1
815,Slime Work Bench,SlimeWorkBench,1
816,Cactus Door,CactusDoor,1
817,Flesh Door,FleshDoor,1
818,Mushroom Door,MushroomDoor,1
819,Living Wood Door,LivingWoodDoor,1
820,Bone Door,BoneDoor,1
821,Flame Wings,FlameWings,1
822,Frozen Wings,FrozenWings,1
823,Spectre Wings,GhostWings,1
824,Sunplate Block,SunplateBlock,100
825,Disc Wall,DiscWall,400
826,Skyware Chair,SkywareChair,1
827,Bone Table,BoneTable,1
828,Flesh Table,FleshTable,1
829,Living Wood Table,LivingWoodTable,1
830,Skyware Table,SkywareTable,1
831,Living Wood Chest,LivingWoodChest,1
832,Living Wood Wand,LivingWoodWand,1
833,Purple Ice Block,PurpleIceBlock,100
834,Pink Ice Block,PinkIceBlock,100
835,Red Ice Block,RedIceBlock,100
836,Crimstone Block,CrimstoneBlock,100
837,Skyware Door,SkywareDoor,1
838,Skyware Chest,SkywareChest,1
839,Steampunk Hat,SteampunkHat,1
840,Steampunk Shirt,SteampunkShirt,1
841,Steampunk Pants,SteampunkPants,1
842,Bee Hat,BeeHat,1
843,Bee Shirt,BeeShirt,1
844,Bee Pants,BeePants,1
845,World Banner,WorldBanner,1
846,Sun Banner,SunBanner,1
847,Gravity Banner,GravityBanner,1
848,Pharaoh's Mask,PharaohsMask,1
849,Actuator,Actuator,50
850,Blue Wrench,BlueWrench,1
851,Green Wrench,GreenWrench,1
852,Blue Pressure Plate,BluePressurePlate,5
853,Yellow Pressure Plate,YellowPressurePlate,5
854,Discount Card,DiscountCard,1
855,Lucky Coin,LuckyCoin,1
856,Unicorn on a Stick,UnicornonaStick,1
857,Sandstorm in a Bottle,SandstorminaBottle,1
858,Boreal Wood Sofa,BorealWoodSofa,1
859,Beach Ball,BeachBall,1
860,Charm of Myths,CharmofMyths,1
861,Moon Shell,MoonShell,1
862,Star Veil,StarVeil,1
863,Water Walking Boots,WaterWalkingBoots,1
864,Tiara,Tiara,1
865,Princess Dress,PrincessDress,1
866,Pharaoh's Robe,PharaohsRobe,1
867,Green Cap,GreenCap,1
868,Mushroom Cap,MushroomCap,1
869,Tam O' Shanter,TamOShanter,1
870,Mummy Mask,MummyMask,1
871,Mummy Shirt,MummyShirt,1
872,Mummy Pants,MummyPants,1
873,Cowboy Hat,CowboyHat,1
874,Cowboy Jacket,CowboyJacket,1
875,Cowboy Pants,CowboyPants,1
876,Pirate Hat,PirateHat,1
877,Pirate Shirt,PirateShirt,1
878,Pirate Pants,PiratePants,1
879,Viking Helmet,VikingHelmet,1
880,Crimtane Ore,CrimtaneOre,100
881,Cactus Sword,CactusSword,1
882,Cactus Pickaxe,CactusPickaxe,1
883,Ice Brick,IceBrick,100
884,Ice Brick Wall,IceBrickWall,400
885,Adhesive Bandage,AdhesiveBandage,1
886,Armor Polish,ArmorPolish,1
887,Bezoar,Bezoar,1
888,Blindfold,Blindfold,1
889,Fast Clock,FastClock,1
890,Megaphone,Megaphone,1
891,Nazar,Nazar,1
892,Vitamins,Vitamins,1
893,Trifold Map,TrifoldMap,1
894,Cactus Helmet,CactusHelmet,1
895,Cactus Breastplate,CactusBreastplate,1
896,Cactus Leggings,CactusLeggings,1
897,Power Glove,PowerGlove,1
898,Lightning Boots,LightningBoots,1
899,Sun Stone,SunStone,1
900,Moon Stone,MoonStone,1
901,Armor Bracing,ArmorBracing,1
902,Medicated Bandage,MedicatedBandage,1
903,The Plan,ThePlan,1
904,Countercurse Mantra,CountercurseMantra,1
905,Coin Gun,CoinGun,1
906,Lava Charm,LavaCharm,1
907,Obsidian Water Walking Boots,ObsidianWaterWalkingBoots,1
908,Lava Waders,LavaWaders,1
909,Pure Water Fountain,PureWaterFountain,1
910,Desert Water Fountain,DesertWaterFountain,1
911,Shadewood,Shadewood,100
912,Shadewood Door,ShadewoodDoor,1
913,Shadewood Platform,ShadewoodPlatform,200
914,Shadewood Chest,ShadewoodChest,1
915,Shadewood Chair,ShadewoodChair,1
916,Shadewood Work Bench,ShadewoodWorkBench,1
917,Shadewood Table,ShadewoodTable,1
918,Shadewood Dresser,ShadewoodDresser,1
919,Shadewood Piano,ShadewoodPiano,1
920,Shadewood Bed,ShadewoodBed,1
921,Shadewood Sword,ShadewoodSword,1
922,Shadewood Hammer,ShadewoodHammer,1
923,Shadewood Bow,ShadewoodBow,1
924,Shadewood Helmet,ShadewoodHelmet,1
925,Shadewood Breastplate,ShadewoodBreastplate,1
926,Shadewood Greaves,ShadewoodGreaves,1
927,Shadewood Wall,ShadewoodWall,400
928,Cannon,Cannon,1
929,Cannonball,Cannonball,25
930,Flare Gun,FlareGun,1
931,Flare,Flare,99
932,Bone Wand,BoneWand,1
933,Leaf Wand,LeafWand,1
934,Flying Carpet,FlyingCarpet,1
935,Avenger Emblem,AvengerEmblem,1
936,Mechanical Glove,MechanicalGlove,1
937,Land Mine,LandMine,5
938,Paladin's Shield,PaladinsShield,1
939,Web Slinger,WebSlinger,1
940,Jungle Water Fountain,JungleWaterFountain,1
941,Icy Water Fountain,IcyWaterFountain,1
942,Corrupt Water Fountain,CorruptWaterFountain,1
943,Crimson Water Fountain,CrimsonWaterFountain,1
944,Hallowed Water Fountain,HallowedWaterFountain,1
945,Blood Water Fountain,BloodWaterFountain,1
946,Umbrella,Umbrella,1
947,Chlorophyte Ore,ChlorophyteOre,100
948,Steampunk Wings,SteampunkWings,1
949,Snowball,Snowball,99
950,Ice Skates,IceSkates,1
951,Snowball Launcher,SnowballLauncher,1
952,Web Covered Chest,WebCoveredChest,1
953,Climbing Claws,ClimbingClaws,1
954,Ancient Iron Helmet,AncientIronHelmet,1
955,Ancient Gold Helmet,AncientGoldHelmet,1
956,Ancient Shadow Helmet,AncientShadowHelmet,1
957,Ancient Shadow Scalemail,AncientShadowScalemail,1
958,Ancient Shadow Greaves,AncientShadowGreaves,1
959,Ancient Necro Helmet,AncientNecroHelmet,1
960,Ancient Cobalt Helmet,AncientCobaltHelmet,1
961,Ancient Cobalt Breastplate,AncientCobaltBreastplate,1
962,Ancient Cobalt Leggings,AncientCobaltLeggings,1
963,Black Belt,BlackBelt,1
964,Boomstick,Boomstick,1
965,Rope,Rope,100
966,Campfire,Campfire,1
967,Marshmallow,Marshmallow,5
968,Marshmallow on a Stick,MarshmallowonaStick,5
969,Cooked Marshmallow,CookedMarshmallow,5
970,Red Rocket,RedRocket,5
971,Green Rocket,GreenRocket,5
972,Blue Rocket,BlueRocket,5
973,Yellow Rocket,YellowRocket,5
974,Ice Torch,IceTorch,100
975,Shoe Spikes,ShoeSpikes,1
976,Tiger Climbing Gear,TigerClimbingGear,1
977,Tabi,Tabi,1
978,Pink Snow Hood,PinkEskimoHood,1
979,Pink Snow Coat,PinkEskimoCoat,1
980,Pink Snow Pants,PinkEskimoPants,1
981,Pink Thread,PinkThread,5
982,Mana Regeneration Band,ManaRegenerationBand,1
983,Sandstorm in a Balloon,SandstorminaBalloon,1
984,Master Ninja Gear,MasterNinjaGear,1
985,Rope Coil,RopeCoil,10
986,Blowgun,Blowgun,1
987,Blizzard in a Bottle,BlizzardinaBottle,1
988,Frostburn Arrow,FrostburnArrow,99
989,Enchanted Sword,EnchantedSword,1
990,Pickaxe Axe,PickaxeAxe,1
991,Cobalt Waraxe,CobaltWaraxe,1
992,Mythril Waraxe,MythrilWaraxe,1
993,Adamantite Waraxe,AdamantiteWaraxe,1
994,Eater's Bone,EatersBone,1
995,Blend-O-Matic,BlendOMatic,1
996,Meat Grinder,MeatGrinder,1
997,Extractinator,Extractinator,1
998,Solidifier,Solidifier,1
999,Amber,Amber,15
1000,Confetti Gun,ConfettiGun,5
1001,Chlorophyte Mask,ChlorophyteMask,1
1002,Chlorophyte Helmet,ChlorophyteHelmet,1
1003,Chlorophyte Headgear,ChlorophyteHeadgear,1
1004,Chlorophyte Plate Mail,ChlorophytePlateMail,1
1005,Chlorophyte Greaves,ChlorophyteGreaves,1
1006,Chlorophyte Bar,ChlorophyteBar,25
1007,Red Dye,RedDye,3
1008,Orange Dye,OrangeDye,3
1009,Yellow Dye,YellowDye,3
1010,Lime Dye,LimeDye,3
1011,Green Dye,GreenDye,3
1012,Teal Dye,TealDye,3
1013,Cyan Dye,CyanDye,3
1014,Sky Blue Dye,SkyBlueDye,3
1015,Blue Dye,BlueDye,3
1016,Purple Dye,PurpleDye,3
1017,Violet Dye,VioletDye,3
1018,Pink Dye,PinkDye,3
1019,Red and Black Dye,RedandBlackDye,3
1020,Orange and Black Dye,OrangeandBlackDye,3
1021,Yellow and Black Dye,YellowandBlackDye,3
1022,Lime and Black Dye,LimeandBlackDye,3
1023,Green and Black Dye,GreenandBlackDye,3
1024,Teal and Black Dye,TealandBlackDye,3
1025,Cyan and Black Dye,CyanandBlackDye,3
1026,Sky Blue and Black Dye,SkyBlueandBlackDye,3
1027,Blue and Black Dye,BlueandBlackDye,3
1028,Purple and Black Dye,PurpleandBlackDye,3
1029,Violet and Black Dye,VioletandBlackDye,3
1030,Pink and Black Dye,PinkandBlackDye,3
1031,Flame Dye,FlameDye,3
1032,Flame and Black Dye,FlameAndBlackDye,3
1033,Green Flame Dye,GreenFlameDye,3
1034,Green Flame and Black Dye,GreenFlameAndBlackDye,3
1035,Blue Flame Dye,BlueFlameDye,3
1036,Blue Flame and Black Dye,BlueFlameAndBlackDye,3
1037,Silver Dye,SilverDye,3
1038,Bright Red Dye,BrightRedDye,3
1039,Bright Orange Dye,BrightOrangeDye,3
1040,Bright Yellow Dye,BrightYellowDye,3
1041,Bright Lime Dye,BrightLimeDye,3
1042,Bright Green Dye,BrightGreenDye,3
1043,Bright Teal Dye,BrightTealDye,3
1044,Bright Cyan Dye,BrightCyanDye,3
1045,Bright Sky Blue Dye,BrightSkyBlueDye,3
1046,Bright Blue Dye,BrightBlueDye,3
1047,Bright Purple Dye,BrightPurpleDye,3
1048,Bright Violet Dye,BrightVioletDye,3
1049,Bright Pink Dye,BrightPinkDye,3
1050,Black Dye,BlackDye,3
1051,Red and Silver Dye,RedandSilverDye,3
1052,Orange and Silver Dye,OrangeandSilverDye,3
1053,Yellow and Silver Dye,YellowandSilverDye,3
1054,Lime and Silver Dye,LimeandSilverDye,3
1055,Green and Silver Dye,GreenandSilverDye,3
1056,Teal and Silver Dye,TealandSilverDye,3
1057,Cyan and Silver Dye,CyanandSilverDye,3
1058,Sky Blue and Silver Dye,SkyBlueandSilverDye,3
1059,Blue and Silver Dye,BlueandSilverDye,3
1060,Purple and Silver Dye,PurpleandSilverDye,3
1061,Violet and Silver Dye,VioletandSilverDye,3
1062,Pink and Silver Dye,PinkandSilverDye,3
1063,Intense Flame Dye,IntenseFlameDye,3
1064,Intense Green Flame Dye,IntenseGreenFlameDye,3
1065,Intense Blue Flame Dye,IntenseBlueFlameDye,3
1066,Rainbow Dye,RainbowDye,3
1067,Intense Rainbow Dye,IntenseRainbowDye,3
1068,Yellow Gradient Dye,YellowGradientDye,3
1069,Cyan Gradient Dye,CyanGradientDye,3
1070,Violet Gradient Dye,VioletGradientDye,3
1071,Paintbrush,Paintbrush,1
1072,Paint Roller,PaintRoller,1
1073,Red Paint,RedPaint,100
1074,Orange Paint,OrangePaint,100
1075,Yellow Paint,YellowPaint,100
1076,Lime Paint,LimePaint,100
1077,Green Paint,GreenPaint,100
1078,Teal Paint,TealPaint,100
1079,Cyan Paint,CyanPaint,100
1080,Sky Blue Paint,SkyBluePaint,100
1081,Blue Paint,BluePaint,100
1082,Purple Paint,PurplePaint,100
1083,Violet Paint,VioletPaint,100
1084,Pink Paint,PinkPaint,100
1085,Deep Red Paint,DeepRedPaint,100
1086,Deep Orange Paint,DeepOrangePaint,100
1087,Deep Yellow Paint,DeepYellowPaint,100
1088,Deep Lime Paint,DeepLimePaint,100
1089,Deep Green Paint,DeepGreenPaint,100
1090,Deep Teal Paint,DeepTealPaint,100
1091,Deep Cyan Paint,DeepCyanPaint,100
1092,Deep Sky Blue Paint,DeepSkyBluePaint,100
1093,Deep Blue Paint,DeepBluePaint,100
1094,Deep Purple Paint,DeepPurplePaint,100
1095,Deep Violet Paint,DeepVioletPaint,100
1096,Deep Pink Paint,DeepPinkPaint,100
1097,Black Paint,BlackPaint,100
1098,White Paint,WhitePaint,100
1099,Gray Paint,GrayPaint,100
1100,Paint Scraper,PaintScraper,1
1101,Lihzahrd Brick,LihzahrdBrick,100
1102,Lihzahrd Brick Wall,LihzahrdBrickWall,400
1103,Slush Block,SlushBlock,200
1104,Palladium Ore,PalladiumOre,100
1105,Orichalcum Ore,OrichalcumOre,100
1106,Titanium Ore,TitaniumOre,100
1107,Teal Mushroom,TealMushroom,3
1108,Green Mushroom,GreenMushroom,3
1109,Sky Blue Flower,SkyBlueFlower,3
1110,Yellow Marigold,YellowMarigold,3
1111,Blue Berries,BlueBerries,3
1112,Lime Kelp,LimeKelp,3
1113,Pink Prickly Pear,PinkPricklyPear,3
1114,Orange Bloodroot,OrangeBloodroot,3
1115,Red Husk,RedHusk,3
1116,Cyan Husk,CyanHusk,3
1117,Violet Husk,VioletHusk,3
1118,Purple Mucus,PurpleMucos,3
1119,Black Ink,BlackInk,3
1120,Dye Vat,DyeVat,1
1121,Bee Gun,BeeGun,1
1122,Possessed Hatchet,PossessedHatchet,1
1123,Bee Keeper,BeeKeeper,1
1124,Hive,Hive,100
1125,Honey Block,HoneyBlock,100
1126,Hive Wall,HiveWall,400
1127,Crispy Honey Block,CrispyHoneyBlock,100
1128,Honey Bucket,HoneyBucket,1
1129,Hive Wand,HiveWand,1
1130,Beenade,Beenade,99
1131,Gravity Globe,GravityGlobe,1
1132,Honey Comb,HoneyComb,1
1133,Abeemination,Abeemination,3
1134,Bottled Honey,BottledHoney,30
1135,Rain Hat,RainHat,1
1136,Rain Coat,RainCoat,1
1137,Lihzahrd Door,LihzahrdDoor,1
1138,Dungeon Door,DungeonDoor,1
1139,Lead Door,LeadDoor,1
1140,Iron Door,IronDoor,1
1141,Temple Key,TempleKey,1
1142,Lihzahrd Chest,LihzahrdChest,1
1143,Lihzahrd Chair,LihzahrdChair,1
1144,Lihzahrd Table,LihzahrdTable,1
1145,Lihzahrd Work Bench,LihzahrdWorkBench,1
1146,Super Dart Trap,SuperDartTrap,5
1147,Flame Trap,FlameTrap,5
1148,Spiky Ball Trap,SpikyBallTrap,5
1149,Spear Trap,SpearTrap,5
1150,Wooden Spike,WoodenSpike,100
1151,Lihzahrd Pressure Plate,LihzahrdPressurePlate,5
1152,Lihzahrd Statue,LihzahrdStatue,1
1153,Lihzahrd Watcher Statue,LihzahrdWatcherStatue,1
1154,Lihzahrd Guardian Statue,LihzahrdGuardianStatue,1
1155,Wasp Gun,WaspGun,1
1156,Piranha Gun,PiranhaGun,1
1157,Pygmy Staff,PygmyStaff,1
1158,Pygmy Necklace,PygmyNecklace,1
1159,Tiki Mask,TikiMask,1
1160,Tiki Shirt,TikiShirt,1
1161,Tiki Pants,TikiPants,1
1162,Leaf Wings,LeafWings,1
1163,Blizzard in a Balloon,BlizzardinaBalloon,1
1164,Bundle of Balloons,BundleofBalloons,1
1165,Bat Wings,BatWings,1
1166,Bone Sword,BoneSword,1
1167,Hercules Beetle,HerculesBeetle,1
1168,Smoke Bomb,SmokeBomb,25
1169,Bone Key,BoneKey,1
1170,Nectar,Nectar,1
1171,Tiki Totem,TikiTotem,1
1172,Lizard Egg,LizardEgg,1
1173,Grave Marker,GraveMarker,2
1174,Cross Grave Marker,CrossGraveMarker,2
1175,Headstone,Headstone,2
1176,Gravestone,Gravestone,2
1177,Obelisk,Obelisk,2
1178,Leaf Blower,LeafBlower,1
1179,Chlorophyte Bullet,ChlorophyteBullet,99
1180,Parrot Cracker,ParrotCracker,1
1181,Strange Glowing Mushroom,StrangeGlowingMushroom,1
1182,Seedling,Seedling,1
1183,Wisp in a Bottle,WispinaBottle,1
1184,Palladium Bar,PalladiumBar,25
1185,Palladium Sword,PalladiumSword,1
1186,Palladium Pike,PalladiumPike,1
1187,Palladium Repeater,PalladiumRepeater,1
1188,Palladium Pickaxe,PalladiumPickaxe,1
1189,Palladium Drill,PalladiumDrill,1
1190,Palladium Chainsaw,PalladiumChainsaw,1
1191,Orichalcum Bar,OrichalcumBar,25
1192,Orichalcum Sword,OrichalcumSword,1
1193,Orichalcum Halberd,OrichalcumHalberd,1
1194,Orichalcum Repeater,OrichalcumRepeater,1
1195,Orichalcum Pickaxe,OrichalcumPickaxe,1
1196,Orichalcum Drill,OrichalcumDrill,1
1197,Orichalcum Chainsaw,OrichalcumChainsaw,1
1198,Titanium Bar,TitaniumBar,25
1199,Titanium Sword,TitaniumSword,1
1200,Titanium Trident,TitaniumTrident,1
1201,Titanium Repeater,TitaniumRepeater,1
1202,Titanium Pickaxe,TitaniumPickaxe,1
1203,Titanium Drill,TitaniumDrill,1
1204,Titanium Chainsaw,TitaniumChainsaw,1
1205,Palladium Mask,PalladiumMask,1
1206,Palladium Helmet,PalladiumHelmet,1
1207,Palladium Headgear,PalladiumHeadgear,1
1208,Palladium Breastplate,PalladiumBreastplate,1
1209,Palladium Leggings,PalladiumLeggings,1
1210,Orichalcum Mask,OrichalcumMask,1
1211,Orichalcum Helmet,OrichalcumHelmet,1
1212,Orichalcum Headgear,OrichalcumHeadgear,1
1213,Orichalcum Breastplate,OrichalcumBreastplate,1
1214,Orichalcum Leggings,OrichalcumLeggings,1
1215,Titanium Mask,TitaniumMask,1
1216,Titanium Helmet,TitaniumHelmet,1
1217,Titanium Headgear,TitaniumHeadgear,1
1218,Titanium Breastplate,TitaniumBreastplate,1
1219,Titanium Leggings,TitaniumLeggings,1
1220,Orichalcum Anvil,OrichalcumAnvil,1
1221,Titanium Forge,TitaniumForge,1
1222,Palladium Waraxe,PalladiumWaraxe,1
1223,Orichalcum Waraxe,OrichalcumWaraxe,1
1224,Titanium Waraxe,TitaniumWaraxe,1
1225,Hallowed Bar,HallowedBar,25
1226,Chlorophyte Claymore,ChlorophyteClaymore,1
1227,Chlorophyte Saber,ChlorophyteSaber,1
1228,Chlorophyte Partisan,ChlorophytePartisan,1
1229,Chlorophyte Shotbow,ChlorophyteShotbow,1
1230,Chlorophyte Pickaxe,ChlorophytePickaxe,1
1231,Chlorophyte Drill,ChlorophyteDrill,1
1232,Chlorophyte Chainsaw,ChlorophyteChainsaw,1
1233,Chlorophyte Greataxe,ChlorophyteGreataxe,1
1234,Chlorophyte Warhammer,ChlorophyteWarhammer,1
1235,Chlorophyte Arrow,ChlorophyteArrow,99
1236,Amethyst Hook,AmethystHook,1
1237,Topaz Hook,TopazHook,1
1238,Sapphire Hook,SapphireHook,1
1239,Emerald Hook,EmeraldHook,1
1240,Ruby Hook,RubyHook,1
1241,Diamond Hook,DiamondHook,1
1242,Amber Mosquito,AmberMosquito,1
1243,Umbrella Hat,UmbrellaHat,1
1244,Nimbus Rod,NimbusRod,1
1245,Orange Torch,OrangeTorch,100
1246,Crimsand Block,CrimsandBlock,100
1247,Bee Cloak,BeeCloak,1
1248,Eye of the Golem,EyeoftheGolem,1
1249,Honey Balloon,HoneyBalloon,1
1250,Blue Horseshoe Balloon,BlueHorseshoeBalloon,1
1251,White Horseshoe Balloon,WhiteHorseshoeBalloon,1
1252,Yellow Horseshoe Balloon,YellowHorseshoeBalloon,1
1253,Frozen Turtle Shell,FrozenTurtleShell,1
1254,Sniper Rifle,SniperRifle,1
1255,Venus Magnum,VenusMagnum,1
1256,Crimson Rod,CrimsonRod,1
1257,Crimtane Bar,CrimtaneBar,25
1258,Stynger,Stynger,1
1259,Flower Pow,FlowerPow,1
1260,Rainbow Gun,RainbowGun,1
1261,Stynger Bolt,StyngerBolt,99
1262,Chlorophyte Jackhammer,ChlorophyteJackhammer,1
1263,Teleporter,Teleporter,1
1264,Flower of Frost,FlowerofFrost,1
1265,Uzi,Uzi,1
1266,Magnet Sphere,MagnetSphere,1
1267,Purple Stained Glass,PurpleStainedGlass,400
1268,Yellow Stained Glass,YellowStainedGlass,400
1269,Blue Stained Glass,BlueStainedGlass,400
1270,Green Stained Glass,GreenStainedGlass,400
1271,Red Stained Glass,RedStainedGlass,400
1272,Multicolored Stained Glass,MulticoloredStainedGlass,400
1273,Skeletron Hand,SkeletronHand,1
1274,Skull,Skull,1
1275,Balla Hat,BallaHat,1
1276,Gangsta Hat,GangstaHat,1
1277,Sailor Hat,SailorHat,1
1278,Eye Patch,EyePatch,1
1279,Sailor Shirt,SailorShirt,1
1280,Sailor Pants,SailorPants,1
1281,Skeletron Mask,SkeletronMask,1
1282,Amethyst Robe,AmethystRobe,1
1283,Topaz Robe,TopazRobe,1
1284,Sapphire Robe,SapphireRobe,1
1285,Emerald Robe,EmeraldRobe,1
1286,Ruby Robe,RubyRobe,1
1287,Diamond Robe,DiamondRobe,1
1288,White Tuxedo Shirt,WhiteTuxedoShirt,1
1289,White Tuxedo Pants,WhiteTuxedoPants,1
1290,Panic Necklace,PanicNecklace,1
1291,Life Fruit,LifeFruit,10
1292,Lihzahrd Altar,LihzahrdAltar,1
1293,Lihzahrd Power Cell,LihzahrdPowerCell,3
1294,Picksaw,Picksaw,1
1295,Heat Ray,HeatRay,1
1296,Staff of Earth,StaffofEarth,1
1297,Golem Fist,GolemFist,1
1298,Water Chest,WaterChest,1
1299,Binoculars,Binoculars,1
1300,Rifle Scope,RifleScope,1
1301,Destroyer Emblem,DestroyerEmblem,1
1302,High Velocity Bullet,HighVelocityBullet,99
1303,Jellyfish Necklace,JellyfishNecklace,1
1304,Zombie Arm,ZombieArm,1
1305,The Axe,TheAxe,1
1306,Ice Sickle,IceSickle,1
1307,Clothier Voodoo Doll,ClothierVoodooDoll,1
1308,Poison Staff,PoisonStaff,1
1309,Slime Staff,SlimeStaff,1
1310,Poison Dart,PoisonDart,99
1311,Eye Spring,EyeSpring,1
1312,Toy Sled,ToySled,1
1313,Book of Skulls,BookofSkulls,1
1314,KO Cannon,KOCannon,1
1315,Pirate Map,PirateMap,3
1316,Turtle Helmet,TurtleHelmet,1
1317,Turtle Scale Mail,TurtleScaleMail,1
1318,Turtle Leggings,TurtleLeggings,1
1319,Snowball Cannon,SnowballCannon,1
1320,Bone Pickaxe,BonePickaxe,1
1321,Magic Quiver,MagicQuiver,1
1322,Magma Stone,MagmaStone,1
1323,Obsidian Rose,ObsidianRose,1
1324,Bananarang,Bananarang,1
1325,Chain Knife,ChainKnife,1
1326,Rod of Discord,RodofDiscord,1
1327,Death Sickle,DeathSickle,1
1328,Turtle Shell,TurtleShell,3
1329,Tissue Sample,TissueSample,25
1330,Vertebra,Vertebrae,25
1331,Bloody Spine,BloodySpine,3
1332,Ichor,Ichor,25
1333,Ichor Torch,IchorTorch,100
1334,Ichor Arrow,IchorArrow,99
1335,Ichor Bullet,IchorBullet,99
1336,Golden Shower,GoldenShower,1
1337,Bunny Cannon,BunnyCannon,1
1338,Explosive Bunny,ExplosiveBunny,25
1339,Vial of Venom,VialofVenom,25
1340,Flask of Venom,FlaskofVenom,20
1341,Venom Arrow,VenomArrow,99
1342,Venom Bullet,VenomBullet,99
1343,Fire Gauntlet,FireGauntlet,1
1344,Cog,Cog,100
1345,Confetti,Confetti,25
1346,Nanites,Nanites,25
1347,Explosive Powder,ExplosivePowder,25
1348,Gold Dust,GoldDust,25
1349,Party Bullet,PartyBullet,99
1350,Nano Bullet,NanoBullet,99
1351,Exploding Bullet,ExplodingBullet,99
1352,Golden Bullet,GoldenBullet,99
1353,Flask of Cursed Flames,FlaskofCursedFlames,20
1354,Flask of Fire,FlaskofFire,20
1355,Flask of Gold,FlaskofGold,20
1356,Flask of Ichor,FlaskofIchor,20
1357,Flask of Nanites,FlaskofNanites,20
1358,Flask of Party,FlaskofParty,20
1359,Flask of Poison,FlaskofPoison,20
1360,Eye of Cthulhu Trophy,EyeofCthulhuTrophy,1
1361,Eater of Worlds Trophy,EaterofWorldsTrophy,1
1362,Brain of Cthulhu Trophy,BrainofCthulhuTrophy,1
1363,Skeletron Trophy,SkeletronTrophy,1
1364,Queen Bee Trophy,QueenBeeTrophy,1
1365,Wall of Flesh Trophy,WallofFleshTrophy,1
1366,Destroyer Trophy,DestroyerTrophy,1
1367,Skeletron Prime Trophy,SkeletronPrimeTrophy,1
1368,Retinazer Trophy,RetinazerTrophy,1
1369,Spazmatism Trophy,SpazmatismTrophy,1
1370,Plantera Trophy,PlanteraTrophy,1
1371,Golem Trophy,GolemTrophy,1
1372,Blood Moon Rising,BloodMoonRising,1
1373,The Hanged Man,TheHangedMan,1
1374,Glory of the Fire,GloryoftheFire,1
1375,Bone Warp,BoneWarp,1
1376,Wall Skeleton,WallSkeleton,1
1377,Hanging Skeleton,HangingSkeleton,1
1378,Blue Slab Wall,BlueSlabWall,400
1379,Blue Tiled Wall,BlueTiledWall,400
1380,Pink Slab Wall,PinkSlabWall,400
1381,Pink Tiled Wall,PinkTiledWall,400
1382,Green Slab Wall,GreenSlabWall,400
1383,Green Tiled Wall,GreenTiledWall,400
1384,Blue Brick Platform,BlueBrickPlatform,25
1385,Pink Brick Platform,PinkBrickPlatform,25
1386,Green Brick Platform,GreenBrickPlatform,25
1387,Metal Shelf,MetalShelf,25
1388,Brass Shelf,BrassShelf,25
1389,Wood Shelf,WoodShelf,25
1390,Brass Lantern,BrassLantern,1
1391,Caged Lantern,CagedLantern,1
1392,Carriage Lantern,CarriageLantern,1
1393,Alchemy Lantern,AlchemyLantern,1
1394,Diabolist Lamp,DiablostLamp,1
1395,Oil Rag Sconce,OilRagSconse,1
1396,Blue Dungeon Chair,BlueDungeonChair,1
1397,Blue Dungeon Table,BlueDungeonTable,1
1398,Blue Dungeon Work Bench,BlueDungeonWorkBench,1
1399,Green Dungeon Chair,GreenDungeonChair,1
1400,Green Dungeon Table,GreenDungeonTable,1
1401,Green Dungeon Work Bench,GreenDungeonWorkBench,1
1402,Pink Dungeon Chair,PinkDungeonChair,1
1403,Pink Dungeon Table,PinkDungeonTable,1
1404,Pink Dungeon Work Bench,PinkDungeonWorkBench,1
1405,Blue Dungeon Candle,BlueDungeonCandle,1
1406,Green Dungeon Candle,GreenDungeonCandle,1
1407,Pink Dungeon Candle,PinkDungeonCandle,1
1408,Blue Dungeon Vase,BlueDungeonVase,1
1409,Green Dungeon Vase,GreenDungeonVase,1
1410,Pink Dungeon Vase,PinkDungeonVase,1
1411,Blue Dungeon Door,BlueDungeonDoor,1
1412,Green Dungeon Door,GreenDungeonDoor,1
1413,Pink Dungeon Door,PinkDungeonDoor,1
1414,Blue Dungeon Bookcase,BlueDungeonBookcase,1
1415,Green Dungeon Bookcase,GreenDungeonBookcase,1
1416,Pink Dungeon Bookcase,PinkDungeonBookcase,1
1417,Catacomb,Catacomb,1
1418,Dungeon Shelf,DungeonShelf,25
1419,Skellington J Skellingsworth,SkellingtonJSkellingsworth,1
1420,The Cursed Man,TheCursedMan,1
1421,The Eye Sees the End,TheEyeSeestheEnd,1
1422,Something Evil is Watching You,SomethingEvilisWatchingYou,1
1423,The Twins Have Awoken,TheTwinsHaveAwoken,1
1424,The Screamer,TheScreamer,1
1425,Goblins Playing Poker,GoblinsPlayingPoker,1
1426,Dryadisque,Dryadisque,1
1427,Sunflowers,Sunflowers,1
1428,Terrarian Gothic,TerrarianGothic,1
1429,Beanie,Beanie,1
1430,Imbuing Station,ImbuingStation,1
1431,Star in a Bottle,StarinaBottle,1
1432,Empty Bullet,EmptyBullet,100
1433,Impact,Impact,1
1434,Powered by Birds,PoweredbyBirds,1
1435,The Destroyer,TheDestroyer,1
1436,The Persistency of Eyes,ThePersistencyofEyes,1
1437,Unicorn Crossing the Hallows,UnicornCrossingtheHallows,1
1438,Great Wave,GreatWave,1
1439,Starry Night,StarryNight,1
1440,Guide Picasso,GuidePicasso,1
1441,The Guardian's Gaze,TheGuardiansGaze,1
1442,Father of Someone,FatherofSomeone,1
1443,Nurse Lisa,NurseLisa,1
1444,Shadowbeam Staff,ShadowbeamStaff,1
1445,Inferno Fork,InfernoFork,1
1446,Spectre Staff,SpectreStaff,1
1447,Wooden Fence,WoodenFence,400
1448,Lead Fence,LeadFence,400
1449,Bubble Machine,BubbleMachine,1
1450,Bubble Wand,BubbleWand,1
1451,Marching Bones Banner,MarchingBonesBanner,1
1452,Necromantic Sign,NecromanticSign,1
1453,Rusted Company Standard,RustedCompanyStandard,1
1454,Ragged Brotherhood Sigil,RaggedBrotherhoodSigil,1
1455,Molten Legion Flag,MoltenLegionFlag,1
1456,Diabolic Sigil,DiabolicSigil,1
1457,Obsidian Platform,ObsidianPlatform,200
1458,Obsidian Door,ObsidianDoor,1
1459,Obsidian Chair,ObsidianChair,1
1460,Obsidian Table,ObsidianTable,1
1461,Obsidian Work Bench,ObsidianWorkBench,1
1462,Obsidian Vase,ObsidianVase,1
1463,Obsidian Bookcase,ObsidianBookcase,1
1464,Hellbound Banner,HellboundBanner,1
1465,Hell Hammer Banner,HellHammerBanner,1
1466,Helltower Banner,HelltowerBanner,1
1467,Lost Hopes of Man Banner,LostHopesofManBanner,1
1468,Obsidian Watcher Banner,ObsidianWatcherBanner,1
1469,Lava Erupts Banner,LavaEruptsBanner,1
1470,Blue Dungeon Bed,BlueDungeonBed,1
1471,Green Dungeon Bed,GreenDungeonBed,1
1472,Pink Dungeon Bed,PinkDungeonBed,1
1473,Obsidian Bed,ObsidianBed,1
1474,Waldo,Waldo,1
1475,Darkness,Darkness,1
1476,Dark Soul Reaper,DarkSoulReaper,1
1477,Land,Land,1
1478,Trapped Ghost,TrappedGhost,1
1479,Demon's Eye,DemonsEye,1
1480,Finding Gold,FindingGold,1
1481,First Encounter,FirstEncounter,1
1482,Good Morning,GoodMorning,1
1483,Underground Reward,UndergroundReward,1
1484,Through the Window,ThroughtheWindow,1
1485,Place Above the Clouds,PlaceAbovetheClouds,1
1486,Do Not Step on the Grass,DoNotStepontheGrass,1
1487,Cold Waters in the White Land,ColdWatersintheWhiteLand,1
1488,Lightless Chasms,LightlessChasms,1
1489,The Land of Deceiving Looks,TheLandofDeceivingLooks,1
1490,Daylight,Daylight,1
1491,Secret of the Sands,SecretoftheSands,1
1492,Deadland Comes Alive,DeadlandComesAlive,1
1493,Evil Presence,EvilPresence,1
1494,Sky Guardian,SkyGuardian,1
1495,American Explosive,AmericanExplosive,1
1496,Discover,Discover,1
1497,Hand Earth,HandEarth,1
1498,Old Miner,OldMiner,1
1499,Skelehead,Skelehead,1
1500,Facing the Cerebral Mastermind,FacingtheCerebralMastermind,1
1501,Lake of Fire,LakeofFire,1
1502,Trio Super Heroes,TrioSuperHeroes,1
1503,Spectre Hood,SpectreHood,1
1504,Spectre Robe,SpectreRobe,1
1505,Spectre Pants,SpectrePants,1
1506,Spectre Pickaxe,SpectrePickaxe,1
1507,Spectre Hamaxe,SpectreHamaxe,1
1508,Ectoplasm,Ectoplasm,25
1509,Gothic Chair,GothicChair,1
1510,Gothic Table,GothicTable,1
1511,Gothic Work Bench,GothicWorkBench,1
1512,Gothic Bookcase,GothicBookcase,1
1513,Paladin's Hammer,PaladinsHammer,1
1514,SWAT Helmet,SWATHelmet,1
1515,Bee Wings,BeeWings,1
1516,Giant Harpy Feather,GiantHarpyFeather,1
1517,Bone Feather,BoneFeather,1
1518,Fire Feather,FireFeather,1
1519,Ice Feather,IceFeather,1
1520,Broken Bat Wing,BrokenBatWing,1
1521,Tattered Bee Wing,TatteredBeeWing,1
1522,Large Amethyst,LargeAmethyst,1
1523,Large Topaz,LargeTopaz,1
1524,Large Sapphire,LargeSapphire,1
1525,Large Emerald,LargeEmerald,1
1526,Large Ruby,LargeRuby,1
1527,Large Diamond,LargeDiamond,1
1528,Jungle Chest,JungleChest,1
1529,Corruption Chest,CorruptionChest,1
1530,Crimson Chest,CrimsonChest,1
1531,Hallowed Chest,HallowedChest,1
1532,Ice Chest,FrozenChest,1
1533,Jungle Key,JungleKey,1
1534,Corruption Key,CorruptionKey,1
1535,Crimson Key,CrimsonKey,1
1536,Hallowed Key,HallowedKey,1
1537,Frozen Key,FrozenKey,1
1538,Imp Face,ImpFace,1
1539,Ominous Presence,OminousPresence,1
1540,Shining Moon,ShiningMoon,1
1541,Living Gore,LivingGore,1
1542,Flowing Magma,FlowingMagma,1
1543,Spectre Paintbrush,SpectrePaintbrush,1
1544,Spectre Paint Roller,SpectrePaintRoller,1
1545,Spectre Paint Scraper,SpectrePaintScraper,1
1546,Shroomite Headgear,ShroomiteHeadgear,1
1547,Shroomite Mask,ShroomiteMask,1
1548,Shroomite Helmet,ShroomiteHelmet,1
1549,Shroomite Breastplate,ShroomiteBreastplate,1
1550,Shroomite Leggings,ShroomiteLeggings,1
1551,Autohammer,Autohammer,1
1552,Shroomite Bar,ShroomiteBar,25
1553,S.D.M.G.,SDMG,1
1554,Cenx's Tiara,CenxsTiara,1
1555,Cenx's Breastplate,CenxsBreastplate,1
1556,Cenx's Leggings,CenxsLeggings,1
1557,Crowno's Mask,CrownosMask,1
1558,Crowno's Breastplate,CrownosBreastplate,1
1559,Crowno's Leggings,CrownosLeggings,1
1560,Will's Helmet,WillsHelmet,1
1561,Will's Breastplate,WillsBreastplate,1
1562,Will's Leggings,WillsLeggings,1
1563,Jim's Helmet,JimsHelmet,1
1564,Jim's Breastplate,JimsBreastplate,1
1565,Jim's Leggings,JimsLeggings,1
1566,Aaron's Helmet,AaronsHelmet,1
1567,Aaron's Breastplate,AaronsBreastplate,1
1568,Aaron's Leggings,AaronsLeggings,1
1569,Vampire Knives,VampireKnives,1
1570,Broken Hero Sword,BrokenHeroSword,1
1571,Scourge of the Corruptor,ScourgeoftheCorruptor,1
1572,Staff of the Frost Hydra,StaffoftheFrostHydra,1
1573,The Creation of the Guide,TheCreationoftheGuide,1
1574,The Merchant,TheMerchant,1
1575,Crowno Devours His Lunch,CrownoDevoursHisLunch,1
1576,Rare Enchantment,RareEnchantment,1
1577,Glorious Night,GloriousNight,1
1578,Sweetheart Necklace,SweetheartNecklace,1
1579,Flurry Boots,FlurryBoots,1
1580,D-Town's Helmet,DTownsHelmet,1
1581,D-Town's Breastplate,DTownsBreastplate,1
1582,D-Town's Leggings,DTownsLeggings,1
1583,D-Town's Wings,DTownsWings,1
1584,Will's Wings,WillsWings,1
1585,Crowno's Wings,CrownosWings,1
1586,Cenx's Wings,CenxsWings,1
1587,Cenx's Dress,CenxsDress,1
1588,Cenx's Dress Pants,CenxsDressPants,1
1589,Palladium Column,PalladiumColumn,100
1590,Palladium Column Wall,PalladiumColumnWall,400
1591,Bubblegum Block,BubblegumBlock,100
1592,Bubblegum Block Wall,BubblegumBlockWall,400
1593,Titanstone Block,TitanstoneBlock,100
1594,Titanstone Block Wall,TitanstoneBlockWall,400
1595,Magic Cuffs,MagicCuffs,1
1596,Music Box (Snow),MusicBoxSnow,1
1597,Music Box (Space Night),MusicBoxSpace,1
1598,Music Box (Crimson),MusicBoxCrimson,1
1599,Music Box (Boss 4),MusicBoxBoss4,1
1600,Music Box (Alt Overworld Day),MusicBoxAltOverworldDay,1
1601,Music Box (Rain),MusicBoxRain,1
1602,Music Box (Ice),MusicBoxIce,1
1603,Music Box (Desert),MusicBoxDesert,1
1604,Music Box (Ocean Day),MusicBoxOcean,1
1605,Music Box (Dungeon),MusicBoxDungeon,1
1606,Music Box (Plantera),MusicBoxPlantera,1
1607,Music Box (Boss 5),MusicBoxBoss5,1
1608,Music Box (Temple),MusicBoxTemple,1
1609,Music Box (Eclipse),MusicBoxEclipse,1
1610,Music Box (Mushrooms),MusicBoxMushrooms,1
1611,Butterfly Dust,ButterflyDust,1
1612,Ankh Charm,AnkhCharm,1
1613,Ankh Shield,AnkhShield,1
1614,Blue Flare,BlueFlare,99
1615,Angler Fish Banner,AnglerFishBanner,1
1616,Angry Nimbus Banner,AngryNimbusBanner,1
1617,Anomura Fungus Banner,AnomuraFungusBanner,1
1618,Antlion Banner,AntlionBanner,1
1619,Arapaima Banner,ArapaimaBanner,1
1620,Armored Skeleton Banner,ArmoredSkeletonBanner,1
1621,Cave Bat Banner,BatBanner,1
1622,Bird Banner,BirdBanner,1
1623,Black Recluse Banner,BlackRecluseBanner,1
1624,Blood Feeder Banner,BloodFeederBanner,1
1625,Blood Jelly Banner,BloodJellyBanner,1
1626,Blood Crawler Banner,BloodCrawlerBanner,1
1627,Bone Serpent Banner,BoneSerpentBanner,1
1628,Bunny Banner,BunnyBanner,1
1629,Chaos Elemental Banner,ChaosElementalBanner,1
1630,Mimic Banner,MimicBanner,1
1631,Clown Banner,ClownBanner,1
1632,Corrupt Bunny Banner,CorruptBunnyBanner,1
1633,Corrupt Goldfish Banner,CorruptGoldfishBanner,1
1634,Crab Banner,CrabBanner,1
1635,Crimera Banner,CrimeraBanner,1
1636,Crimson Axe Banner,CrimsonAxeBanner,1
1637,Cursed Hammer Banner,CursedHammerBanner,1
1638,Demon Banner,DemonBanner,1
1639,Demon Eye Banner,DemonEyeBanner,1
1640,Derpling Banner,DerplingBanner,1
1641,Eater of Souls Banner,EaterofSoulsBanner,1
1642,Enchanted Sword Banner,EnchantedSwordBanner,1
1643,Frozen Zombie Banner,ZombieEskimoBanner,1
1644,Face Monster Banner,FaceMonsterBanner,1
1645,Floaty Gross Banner,FloatyGrossBanner,1
1646,Flying Fish Banner,FlyingFishBanner,1
1647,Flying Snake Banner,FlyingSnakeBanner,1
1648,Frankenstein Banner,FrankensteinBanner,1
1649,Fungi Bulb Banner,FungiBulbBanner,1
1650,Fungo Fish Banner,FungoFishBanner,1
1651,Gastropod Banner,GastropodBanner,1
1652,Goblin Thief Banner,GoblinThiefBanner,1
1653,Goblin Sorcerer Banner,GoblinSorcererBanner,1
1654,Goblin Peon Banner,GoblinPeonBanner,1
1655,Goblin Scout Banner,GoblinScoutBanner,1
1656,Goblin Warrior Banner,GoblinWarriorBanner,1
1657,Goldfish Banner,GoldfishBanner,1
1658,Harpy Banner,HarpyBanner,1
1659,Hellbat Banner,HellbatBanner,1
1660,Herpling Banner,HerplingBanner,1
1661,Hornet Banner,HornetBanner,1
1662,Ice Elemental Banner,IceElementalBanner,1
1663,Icy Merman Banner,IcyMermanBanner,1
1664,Fire Imp Banner,FireImpBanner,1
1665,Blue Jellyfish Banner,JellyfishBanner,1
1666,Jungle Creeper Banner,JungleCreeperBanner,1
1667,Lihzahrd Banner,LihzahrdBanner,1
1668,Man Eater Banner,ManEaterBanner,1
1669,Meteor Head Banner,MeteorHeadBanner,1
1670,Moth Banner,MothBanner,1
1671,Mummy Banner,MummyBanner,1
1672,Mushi Ladybug Banner,MushiLadybugBanner,1
1673,Parrot Banner,ParrotBanner,1
1674,Pigron Banner,PigronBanner,1
1675,Piranha Banner,PiranhaBanner,1
1676,Pirate Deckhand Banner,PirateBanner,1
1677,Pixie Banner,PixieBanner,1
1678,Raincoat Zombie Banner,RaincoatZombieBanner,1
1679,Reaper Banner,ReaperBanner,1
1680,Shark Banner,SharkBanner,1
1681,Skeleton Banner,SkeletonBanner,1
1682,Dark Caster Banner,SkeletonMageBanner,1
1683,Blue Slime Banner,SlimeBanner,1
1684,Snow Flinx Banner,SnowFlinxBanner,1
1685,Wall Creeper Banner,SpiderBanner,1
1686,Spore Zombie Banner,SporeZombieBanner,1
1687,Swamp Thing Banner,SwampThingBanner,1
1688,Giant Tortoise Banner,TortoiseBanner,1
1689,Toxic Sludge Banner,ToxicSludgeBanner,1
1690,Umbrella Slime Banner,UmbrellaSlimeBanner,1
1691,Unicorn Banner,UnicornBanner,1
1692,Vampire Banner,VampireBanner,1
1693,Vulture Banner,VultureBanner,1
1694,Nymph Banner,NypmhBanner,1
1695,Werewolf Banner,WerewolfBanner,1
1696,Wolf Banner,WolfBanner,1
1697,World Feeder Banner,WorldFeederBanner,1
1698,Worm Banner,WormBanner,1
1699,Wraith Banner,WraithBanner,1
1700,Wyvern Banner,WyvernBanner,1
1701,Zombie Banner,ZombieBanner,1
1702,Glass Platform,GlassPlatform,200
1703,Glass Chair,GlassChair,1
1704,Golden Chair,GoldenChair,1
1705,Golden Toilet,GoldenToilet,1
1706,Bar Stool,BarStool,1
1707,Honey Chair,HoneyChair,1
1708,Steampunk Chair,SteampunkChair,1
1709,Glass Door,GlassDoor,1
1710,Golden Door,GoldenDoor,1
1711,Honey Door,HoneyDoor,1
1712,Steampunk Door,SteampunkDoor,1
1713,Glass Table,GlassTable,1
1714,Banquet Table,BanquetTable,1
1715,Bar,Bar,1
1716,Golden Table,GoldenTable,1
1717,Honey Table,HoneyTable,1
1718,Steampunk Table,SteampunkTable,1
1719,Glass Bed,GlassBed,1
1720,Golden Bed,GoldenBed,1
1721,Honey Bed,HoneyBed,1
1722,Steampunk Bed,SteampunkBed,1
1723,Living Wood Wall,LivingWoodWall,400
1724,Fart in a Jar,FartinaJar,1
1725,Pumpkin,Pumpkin,100
1726,Pumpkin Wall,PumpkinWall,400
1727,Hay,Hay,100
1728,Hay Wall,HayWall,400
1729,Spooky Wood,SpookyWood,100
1730,Spooky Wood Wall,SpookyWoodWall,400
1731,Pumpkin Helmet,PumpkinHelmet,1
1732,Pumpkin Breastplate,PumpkinBreastplate,1
1733,Pumpkin Leggings,PumpkinLeggings,1
1734,Candy Apple,CandyApple,n/a
1735,Soul Cake,SoulCake,n/a
1736,Nurse Hat,NurseHat,1
1737,Nurse Shirt,NurseShirt,1
1738,Nurse Pants,NursePants,1
1739,Wizard's Hat,WizardsHat,1
1740,Guy Fawkes Mask,GuyFawkesMask,1
1741,Dye Trader Robe,DyeTraderRobe,1
1742,Steampunk Goggles,SteampunkGoggles,1
1743,Cyborg Helmet,CyborgHelmet,1
1744,Cyborg Shirt,CyborgShirt,1
1745,Cyborg Pants,CyborgPants,1
1746,Creeper Mask,CreeperMask,1
1747,Creeper Shirt,CreeperShirt,1
1748,Creeper Pants,CreeperPants,1
1749,Cat Mask,CatMask,1
1750,Cat Shirt,CatShirt,1
1751,Cat Pants,CatPants,1
1752,Ghost Mask,GhostMask,1
1753,Ghost Shirt,GhostShirt,1
1754,Pumpkin Mask,PumpkinMask,1
1755,Pumpkin Shirt,PumpkinShirt,1
1756,Pumpkin Pants,PumpkinPants,1
1757,Robot Mask,RobotMask,1
1758,Robot Shirt,RobotShirt,1
1759,Robot Pants,RobotPants,1
1760,Unicorn Mask,UnicornMask,1
1761,Unicorn Shirt,UnicornShirt,1
1762,Unicorn Pants,UnicornPants,1
1763,Vampire Mask,VampireMask,1
1764,Vampire Shirt,VampireShirt,1
1765,Vampire Pants,VampirePants,1
1766,Witch Hat,WitchHat,1
1767,Leprechaun Hat,LeprechaunHat,1
1768,Leprechaun Shirt,LeprechaunShirt,1
1769,Leprechaun Pants,LeprechaunPants,1
1770,Pixie Shirt,PixieShirt,1
1771,Pixie Pants,PixiePants,1
1772,Princess Hat,PrincessHat,1
1773,Princess Dress,PrincessDressNew,1
1774,Goodie Bag,GoodieBag,10
1775,Witch Dress,WitchDress,1
1776,Witch Boots,WitchBoots,1
1777,Bride of Frankenstein Mask,BrideofFrankensteinMask,1
1778,Bride of Frankenstein Dress,BrideofFrankensteinDress,1
1779,Karate Tortoise Mask,KarateTortoiseMask,1
1780,Karate Tortoise Shirt,KarateTortoiseShirt,1
1781,Karate Tortoise Pants,KarateTortoisePants,1
1782,Candy Corn Rifle,CandyCornRifle,1
1783,Candy Corn,CandyCorn,99
1784,Jack 'O Lantern Launcher,JackOLanternLauncher,1
1785,Explosive Jack 'O Lantern,ExplosiveJackOLantern,99
1786,Sickle,Sickle,1
1787,Pumpkin Pie,PumpkinPie,5
1788,Scarecrow Hat,ScarecrowHat,1
1789,Scarecrow Shirt,ScarecrowShirt,1
1790,Scarecrow Pants,ScarecrowPants,1
1791,Cauldron,Cauldron,1
1792,Pumpkin Chair,PumpkinChair,1
1793,Pumpkin Door,PumpkinDoor,1
1794,Pumpkin Table,PumpkinTable,1
1795,Pumpkin Work Bench,PumpkinWorkBench,1
1796,Pumpkin Platform,PumpkinPlatform,200
1797,Tattered Fairy Wings,TatteredFairyWings,1
1798,Spider Egg,SpiderEgg,1
1799,Magical Pumpkin Seed,MagicalPumpkinSeed,1
1800,Bat Hook,BatHook,1
1801,Bat Scepter,BatScepter,1
1802,Raven Staff,RavenStaff,1
1803,Jungle Key Mold,JungleKeyMold,n/a
1804,Corruption Key Mold,CorruptionKeyMold,n/a
1805,Crimson Key Mold,CrimsonKeyMold,n/a
1806,Hallowed Key Mold,HallowedKeyMold,n/a
1807,Frozen Key Mold,FrozenKeyMold,n/a
1808,Hanging Jack 'O Lantern,HangingJackOLantern,1
1809,Rotten Egg,RottenEgg,99
1810,Unlucky Yarn,UnluckyYarn,1
1811,Black Fairy Dust,BlackFairyDust,1
1812,Jackelier,Jackelier,1
1813,Jack 'O Lantern,JackOLantern,1
1814,Spooky Chair,SpookyChair,1
1815,Spooky Door,SpookyDoor,1
1816,Spooky Table,SpookyTable,1
1817,Spooky Work Bench,SpookyWorkBench,1
1818,Spooky Wood Platform,SpookyPlatform,200
1819,Reaper Hood,ReaperHood,1
1820,Reaper Robe,ReaperRobe,1
1821,Fox Mask,FoxMask,1
1822,Fox Shirt,FoxShirt,1
1823,Fox Pants,FoxPants,1
1824,Cat Ears,CatEars,1
1825,Bloody Machete,BloodyMachete,1
1826,The Horseman's Blade,TheHorsemansBlade,1
1827,Bladed Glove,BladedGlove,1
1828,Pumpkin Seed,PumpkinSeed,25
1829,Spooky Hook,SpookyHook,1
1830,Spooky Wings,SpookyWings,1
1831,Spooky Twig,SpookyTwig,1
1832,Spooky Helmet,SpookyHelmet,1
1833,Spooky Breastplate,SpookyBreastplate,1
1834,Spooky Leggings,SpookyLeggings,1
1835,Stake Launcher,StakeLauncher,1
1836,Stake,Stake,99
1837,Cursed Sapling,CursedSapling,1
1838,Space Creature Mask,SpaceCreatureMask,1
1839,Space Creature Shirt,SpaceCreatureShirt,1
1840,Space Creature Pants,SpaceCreaturePants,1
1841,Wolf Mask,WolfMask,1
1842,Wolf Shirt,WolfShirt,1
1843,Wolf Pants,WolfPants,1
1844,Pumpkin Moon Medallion,PumpkinMoonMedallion,3
1845,Necromantic Scroll,NecromanticScroll,1
1846,Jacking Skeletron,JackingSkeletron,1
1847,Bitter Harvest,BitterHarvest,1
1848,Blood Moon Countess,BloodMoonCountess,1
1849,Hallow's Eve,HallowsEve,1
1850,Morbid Curiosity,MorbidCuriosity,1
1851,Treasure Hunter Shirt,TreasureHunterShirt,1
1852,Treasure Hunter Pants,TreasureHunterPants,1
1853,Dryad Coverings,DryadCoverings,1
1854,Dryad Loincloth,DryadLoincloth,1
1855,Mourning Wood Trophy,MourningWoodTrophy,1
1856,Pumpking Trophy,PumpkingTrophy,1
1857,Jack 'O Lantern Mask,JackOLanternMask,1
1858,Sniper Scope,SniperScope,1
1859,Heart Lantern,HeartLantern,1
1860,Jellyfish Diving Gear,JellyfishDivingGear,1
1861,Arctic Diving Gear,ArcticDivingGear,1
1862,Frostspark Boots,FrostsparkBoots,1
1863,Fart in a Balloon,FartInABalloon,1
1864,Papyrus Scarab,PapyrusScarab,1
1865,Celestial Stone,CelestialStone,1
1866,Hoverboard,Hoverboard,1
1867,Candy Cane,CandyCane,n/a
1868,Sugar Plum,SugarPlum,n/a
1869,Present,Present,10
1870,Red Ryder,RedRyder,1
1871,Festive Wings,FestiveWings,1
1872,Pine Tree Block,PineTreeBlock,100
1873,Christmas Tree,ChristmasTree,1
1874,Star Topper 1,StarTopper1,1
1875,Star Topper 2,StarTopper2,1
1876,Star Topper 3,StarTopper3,1
1877,Bow Topper,BowTopper,1
1878,White Garland,WhiteGarland,1
1879,White and Red Garland,WhiteAndRedGarland,1
1880,Red Garland,RedGardland,1
1881,Red and Green Garland,RedAndGreenGardland,1
1882,Green Garland,GreenGardland,1
1883,Green and White Garland,GreenAndWhiteGarland,1
1884,Multicolored Bulb,MulticoloredBulb,1
1885,Red Bulb,RedBulb,1
1886,Yellow Bulb,YellowBulb,1
1887,Green Bulb,GreenBulb,1
1888,Red and Green Bulb,RedAndGreenBulb,1
1889,Yellow and Green Bulb,YellowAndGreenBulb,1
1890,Red and Yellow Bulb,RedAndYellowBulb,1
1891,White Bulb,WhiteBulb,1
1892,White and Red Bulb,WhiteAndRedBulb,1
1893,White and Yellow Bulb,WhiteAndYellowBulb,1
1894,White and Green Bulb,WhiteAndGreenBulb,1
1895,Multicolored Lights,MulticoloredLights,1
1896,Red Lights,RedLights,1
1897,Green Lights,GreenLights,1
1898,Blue Lights,BlueLights,1
1899,Yellow Lights,YellowLights,1
1900,Red and Yellow Lights,RedAndYellowLights,1
1901,Red and Green Lights,RedAndGreenLights,1
1902,Yellow and Green Lights,YellowAndGreenLights,1
1903,Blue and Green Lights,BlueAndGreenLights,1
1904,Red and Blue Lights,RedAndBlueLights,1
1905,Blue and Yellow Lights,BlueAndYellowLights,1
1906,Giant Bow,GiantBow,1
1907,Reindeer Antlers,ReindeerAntlers,1
1908,Holly,Holly,1
1909,Candy Cane Sword,CandyCaneSword,1
1910,Elf Melter,ElfMelter,1
1911,Christmas Pudding,ChristmasPudding,5
1912,Eggnog,Eggnog,30
1913,Star Anise,StarAnise,99
1914,Reindeer Bells,ReindeerBells,1
1915,Candy Cane Hook,CandyCaneHook,1
1916,Christmas Hook,ChristmasHook,1
1917,Candy Cane Pickaxe,CnadyCanePickaxe,1
1918,Fruitcake Chakram,FruitcakeChakram,1
1919,Sugar Cookie,SugarCookie,5
1920,Gingerbread Cookie,GingerbreadCookie,5
1921,Hand Warmer,HandWarmer,1
1922,Coal,Coal,1
1923,Toolbox,Toolbox,1
1924,Pine Door,PineDoor,1
1925,Pine Chair,PineChair,1
1926,Pine Table,PineTable,1
1927,Dog Whistle,DogWhistle,1
1928,Christmas Tree Sword,ChristmasTreeSword,1
1929,Chain Gun,ChainGun,1
1930,Razorpine,Razorpine,1
1931,Blizzard Staff,BlizzardStaff,1
1932,Mrs. Claus Hat,MrsClauseHat,1
1933,Mrs. Claus Shirt,MrsClauseShirt,1
1934,Mrs. Claus Heels,MrsClauseHeels,1
1935,Parka Hood,ParkaHood,1
1936,Parka Coat,ParkaCoat,1
1937,Parka Pants,ParkaPants,1
1938,Snow Hat,SnowHat,1
1939,Ugly Sweater,UglySweater,1
1940,Tree Mask,TreeMask,1
1941,Tree Shirt,TreeShirt,1
1942,Tree Trunks,TreeTrunks,1
1943,Elf Hat,ElfHat,1
1944,Elf Shirt,ElfShirt,1
1945,Elf Pants,ElfPants,1
1946,Snowman Cannon,SnowmanCannon,1
1947,North Pole,NorthPole,1
1948,Christmas Tree Wallpaper,ChristmasTreeWallpaper,400
1949,Ornament Wallpaper,OrnamentWallpaper,400
1950,Candy Cane Wallpaper,CandyCaneWallpaper,400
1951,Festive Wallpaper,FestiveWallpaper,400
1952,Stars Wallpaper,StarsWallpaper,400
1953,Squiggles Wallpaper,SquigglesWallpaper,400
1954,Snowflake Wallpaper,SnowflakeWallpaper,400
1955,Krampus Horn Wallpaper,KrampusHornWallpaper,400
1956,Bluegreen Wallpaper,BluegreenWallpaper,400
1957,Grinch Finger Wallpaper,GrinchFingerWallpaper,400
1958,Naughty Present,NaughtyPresent,3
1959,Baby Grinch's Mischief Whistle,BabyGrinchMischiefWhistle,1
1960,Ice Queen Trophy,IceQueenTrophy,1
1961,Santa-NK1 Trophy,SantaNK1Trophy,1
1962,Everscream Trophy,EverscreamTrophy,1
1963,Music Box (Pumpkin Moon),MusicBoxPumpkinMoon,1
1964,Music Box (Alt Underground),MusicBoxAltUnderground,1
1965,Music Box (Frost Moon),MusicBoxFrostMoon,1
1966,Brown Paint,BrownPaint,100
1967,Shadow Paint,ShadowPaint,100
1968,Negative Paint,NegativePaint,100
1969,Team Dye,TeamDye,3
1970,Amethyst Gemspark Block,AmethystGemsparkBlock,100
1971,Topaz Gemspark Block,TopazGemsparkBlock,100
1972,Sapphire Gemspark Block,SapphireGemsparkBlock,100
1973,Emerald Gemspark Block,EmeraldGemsparkBlock,100
1974,Ruby Gemspark Block,RubyGemsparkBlock,100
1975,Diamond Gemspark Block,DiamondGemsparkBlock,100
1976,Amber Gemspark Block,AmberGemsparkBlock,100
1977,Life Hair Dye,LifeHairDye,1
1978,Mana Hair Dye,ManaHairDye,1
1979,Depth Hair Dye,DepthHairDye,1
1980,Money Hair Dye,MoneyHairDye,1
1981,Time Hair Dye,TimeHairDye,1
1982,Team Hair Dye,TeamHairDye,1
1983,Biome Hair Dye,BiomeHairDye,1
1984,Party Hair Dye,PartyHairDye,1
1985,Rainbow Hair Dye,RainbowHairDye,1
1986,Speed Hair Dye,SpeedHairDye,1
1987,Angel Halo,AngelHalo,1
1988,Fez,Fez,1
1989,Womannequin,Womannquin,1
1990,Hair Dye Remover,HairDyeRemover,1
1991,Bug Net,BugNet,1
1992,Firefly,Firefly,5
1993,Firefly in a Bottle,FireflyinaBottle,1
1994,Monarch Butterfly,MonarchButterfly,5
1995,Purple Emperor Butterfly,PurpleEmperorButterfly,5
1996,Red Admiral Butterfly,RedAdmiralButterfly,5
1997,Ulysses Butterfly,UlyssesButterfly,5
1998,Sulphur Butterfly,SulphurButterfly,5
1999,Tree Nymph Butterfly,TreeNymphButterfly,5
2000,Zebra Swallowtail Butterfly,ZebraSwallowtailButterfly,5
2001,Julia Butterfly,JuliaButterfly,5
2002,Worm,Worm,5
2003,Mouse,Mouse,5
2004,Lightning Bug,LightningBug,5
2005,Lightning Bug in a Bottle,LightningBuginaBottle,1
2006,Snail,Snail,5
2007,Glowing Snail,GlowingSnail,5
2008,Fancy Gray Wallpaper,FancyGreyWallpaper,400
2009,Ice Floe Wallpaper,IceFloeWallpaper,400
2010,Music Wallpaper,MusicWallpaper,400
2011,Purple Rain Wallpaper,PurpleRainWallpaper,400
2012,Rainbow Wallpaper,RainbowWallpaper,400
2013,Sparkle Stone Wallpaper,SparkleStoneWallpaper,400
2014,Starlit Heaven Wallpaper,StarlitHeavenWallpaper,400
2015,Bird,Bird,5
2016,Blue Jay,BlueJay,5
2017,Cardinal,Cardinal,5
2018,Squirrel,Squirrel,5
2019,Bunny,Bunny,5
2020,Cactus Bookcase,CactusBookcase,1
2021,Ebonwood Bookcase,EbonwoodBookcase,1
2022,Flesh Bookcase,FleshBookcase,1
2023,Honey Bookcase,HoneyBookcase,1
2024,Steampunk Bookcase,SteampunkBookcase,1
2025,Glass Bookcase,GlassBookcase,1
2026,Rich Mahogany Bookcase,RichMahoganyBookcase,1
2027,Pearlwood Bookcase,PearlwoodBookcase,1
2028,Spooky Bookcase,SpookyBookcase,1
2029,Skyware Bookcase,SkywareBookcase,1
2030,Lihzahrd Bookcase,LihzahrdBookcase,1
2031,Frozen Bookcase,FrozenBookcase,1
2032,Cactus Lantern,CactusLantern,1
2033,Ebonwood Lantern,EbonwoodLantern,1
2034,Flesh Lantern,FleshLantern,1
2035,Honey Lantern,HoneyLantern,1
2036,Steampunk Lantern,SteampunkLantern,1
2037,Glass Lantern,GlassLantern,1
2038,Rich Mahogany Lantern,RichMahoganyLantern,1
2039,Pearlwood Lantern,PearlwoodLantern,1
2040,Frozen Lantern,FrozenLantern,1
2041,Lihzahrd Lantern,LihzahrdLantern,1
2042,Skyware Lantern,SkywareLantern,1
2043,Spooky Lantern,SpookyLantern,1
2044,Frozen Door,FrozenDoor,1
2045,Cactus Candle,CactusCandle,1
2046,Ebonwood Candle,EbonwoodCandle,1
2047,Flesh Candle,FleshCandle,1
2048,Glass Candle,GlassCandle,1
2049,Frozen Candle,FrozenCandle,1
2050,Rich Mahogany Candle,RichMahoganyCandle,1
2051,Pearlwood Candle,PearlwoodCandle,1
2052,Lihzahrd Candle,LihzahrdCandle,1
2053,Skyware Candle,SkywareCandle,1
2054,Pumpkin Candle,PumpkinCandle,1
2055,Cactus Chandelier,CactusChandelier,1
2056,Ebonwood Chandelier,EbonwoodChandelier,1
2057,Flesh Chandelier,FleshChandelier,1
2058,Honey Chandelier,HoneyChandelier,1
2059,Frozen Chandelier,FrozenChandelier,1
2060,Rich Mahogany Chandelier,RichMahoganyChandelier,1
2061,Pearlwood Chandelier,PearlwoodChandelier,1
2062,Lihzahrd Chandelier,LihzahrdChandelier,1
2063,Skyware Chandelier,SkywareChandelier,1
2064,Spooky Chandelier,SpookyChandelier,1
2065,Glass Chandelier,GlassChandelier,1
2066,Cactus Bed,CactusBed,1
2067,Flesh Bed,FleshBed,1
2068,Frozen Bed,FrozenBed,1
2069,Lihzahrd Bed,LihzahrdBed,1
2070,Skyware Bed,SkywareBed,1
2071,Spooky Bed,SpookyBed,1
2072,Cactus Bathtub,CactusBathtub,1
2073,Ebonwood Bathtub,EbonwoodBathtub,1
2074,Flesh Bathtub,FleshBathtub,1
2075,Glass Bathtub,GlassBathtub,1
2076,Frozen Bathtub,FrozenBathtub,1
2077,Rich Mahogany Bathtub,RichMahoganyBathtub,1
2078,Pearlwood Bathtub,PearlwoodBathtub,1
2079,Lihzahrd Bathtub,LihzahrdBathtub,1
2080,Skyware Bathtub,SkywareBathtub,1
2081,Spooky Bathtub,SpookyBathtub,1
2082,Cactus Lamp,CactusLamp,1
2083,Ebonwood Lamp,EbonwoodLamp,1
2084,Flesh Lamp,FleshLamp,1
2085,Glass Lamp,GlassLamp,1
2086,Frozen Lamp,FrozenLamp,1
2087,Rich Mahogany Lamp,RichMahoganyLamp,1
2088,Pearlwood Lamp,PearlwoodLamp,1
2089,Lihzahrd Lamp,LihzahrdLamp,1
2090,Skyware Lamp,SkywareLamp,1
2091,Spooky Lamp,SpookyLamp,1
2092,Cactus Candelabra,CactusCandelabra,1
2093,Ebonwood Candelabra,EbonwoodCandelabra,1
2094,Flesh Candelabra,FleshCandelabra,1
2095,Honey Candelabra,HoneyCandelabra,1
2096,Steampunk Candelabra,SteampunkCandelabra,1
2097,Glass Candelabra,GlassCandelabra,1
2098,Rich Mahogany Candelabra,RichMahoganyCandelabra,1
2099,Pearlwood Candelabra,PearlwoodCandelabra,1
2100,Frozen Candelabra,FrozenCandelabra,1
2101,Lihzahrd Candelabra,LihzahrdCandelabra,1
2102,Skyware Candelabra,SkywareCandelabra,1
2103,Spooky Candelabra,SpookyCandelabra,1
2104,Brain of Cthulhu Mask,BrainMask,1
2105,Wall of Flesh Mask,FleshMask,1
2106,Twin Mask,TwinMask,1
2107,Skeletron Prime Mask,SkeletronPrimeMask,1
2108,Queen Bee Mask,BeeMask,1
2109,Plantera Mask,PlanteraMask,1
2110,Golem Mask,GolemMask,1
2111,Eater of Worlds Mask,EaterMask,1
2112,Eye of Cthulhu Mask,EyeMask,1
2113,Destroyer Mask,DestroyerMask,1
2114,Blacksmith Rack,BlacksmithRack,1
2115,Carpentry Rack,CarpentryRack,1
2116,Helmet Rack,HelmetRack,1
2117,Spear Rack,SpearRack,1
2118,Sword Rack,SwordRack,1
2119,Stone Slab,StoneSlab,100
2120,Sandstone Slab,SandstoneSlab,100
2121,Frog,Frog,5
2122,Mallard Duck,MallardDuck,5
2123,Duck,Duck,5
2124,Honey Bathtub,HoneyBathtub,1
2125,Steampunk Bathtub,SteampunkBathtub,1
2126,Living Wood Bathtub,LivingWoodBathtub,1
2127,Shadewood Bathtub,ShadewoodBathtub,1
2128,Bone Bathtub,BoneBathtub,1
2129,Honey Lamp,HoneyLamp,1
2130,Steampunk Lamp,SteampunkLamp,1
2131,Living Wood Lamp,LivingWoodLamp,1
2132,Shadewood Lamp,ShadewoodLamp,1
2133,Golden Lamp,GoldenLamp,1
2134,Bone Lamp,BoneLamp,1
2135,Living Wood Bookcase,LivingWoodBookcase,1
2136,Shadewood Bookcase,ShadewoodBookcase,1
2137,Golden Bookcase,GoldenBookcase,1
2138,Bone Bookcase,BoneBookcase,1
2139,Living Wood Bed,LivingWoodBed,1
2140,Bone Bed,BoneBed,1
2141,Living Wood Chandelier,LivingWoodChandelier,1
2142,Shadewood Chandelier,ShadewoodChandelier,1
2143,Golden Chandelier,GoldenChandelier,1
2144,Bone Chandelier,BoneChandelier,1
2145,Living Wood Lantern,LivingWoodLantern,1
2146,Shadewood Lantern,ShadewoodLantern,1
2147,Golden Lantern,GoldenLantern,1
2148,Bone Lantern,BoneLantern,1
2149,Living Wood Candelabra,LivingWoodCandelabra,1
2150,Shadewood Candelabra,ShadewoodCandelabra,1
2151,Golden Candelabra,GoldenCandelabra,1
2152,Bone Candelabra,BoneCandelabra,1
2153,Living Wood Candle,LivingWoodCandle,1
2154,Shadewood Candle,ShadewoodCandle,1
2155,Golden Candle,GoldenCandle,1
2156,Black Scorpion,BlackScorpion,5
2157,Scorpion,Scorpion,5
2158,Bubble Wallpaper,BubbleWallpaper,400
2159,Copper Pipe Wallpaper,CopperPipeWallpaper,400
2160,Ducky Wallpaper,DuckyWallpaper,400
2161,Frost Core,FrostCore,3
2162,Bunny Cage,BunnyCage,1
2163,Squirrel Cage,SquirrelCage,1
2164,Mallard Duck Cage,MallardDuckCage,1
2165,Duck Cage,DuckCage,1
2166,Bird Cage,BirdCage,1
2167,Blue Jay Cage,BlueJayCage,1
2168,Cardinal Cage,CardinalCage,1
2169,Waterfall Wall,WaterfallWall,400
2170,Lavafall Wall,LavafallWall,400
2171,Crimson Seeds,CrimsonSeeds,25
2172,Heavy Assembler,HeavyWorkBench,1
2173,Copper Plating,CopperPlating,100
2174,Snail Cage,SnailCage,1
2175,Glowing Snail Cage,GlowingSnailCage,1
2176,Shroomite Digging Claw,ShroomiteDiggingClaw,1
2177,Ammo Box,AmmoBox,1
2178,Monarch Butterfly Jar,MonarchButterflyJar,1
2179,Purple Emperor Butterfly Jar,PurpleEmperorButterflyJar,1
2180,Red Admiral Butterfly Jar,RedAdmiralButterflyJar,1
2181,Ulysses Butterfly Jar,UlyssesButterflyJar,1
2182,Sulphur Butterfly Jar,SulphurButterflyJar,1
2183,Tree Nymph Butterfly Jar,TreeNymphButterflyJar,1
2184,Zebra Swallowtail Butterfly Jar,ZebraSwallowtailButterflyJar,1
2185,Julia Butterfly Jar,JuliaButterflyJar,1
2186,Scorpion Cage,ScorpionCage,1
2187,Black Scorpion Cage,BlackScorpionCage,1
2188,Venom Staff,VenomStaff,1
2189,Spectre Mask,SpectreMask,1
2190,Frog Cage,FrogCage,1
2191,Mouse Cage,MouseCage,1
2192,Bone Welder,BoneWelder,1
2193,Flesh Cloning Vat,FleshCloningVaat,1
2194,Glass Kiln,GlassKiln,1
2195,Lihzahrd Furnace,LihzahrdFurnace,1
2196,Living Loom,LivingLoom,1
2197,Sky Mill,SkyMill,1
2198,Ice Machine,IceMachine,1
2199,Beetle Helmet,BeetleHelmet,1
2200,Beetle Scale Mail,BeetleScaleMail,1
2201,Beetle Shell,BeetleShell,1
2202,Beetle Leggings,BeetleLeggings,1
2203,Steampunk Boiler,SteampunkBoiler,1
2204,Honey Dispenser,HoneyDispenser,1
2205,Penguin,Penguin,5
2206,Penguin Cage,PenguinCage,1
2207,Worm Cage,WormCage,1
2208,Terrarium,Terrarium,1
2209,Super Mana Potion,SuperManaPotion,30
2210,Ebonwood Fence,EbonwoodFence,400
2211,Rich Mahogany Fence,RichMahoganyFence,400
2212,Pearlwood Fence,PearlwoodFence,400
2213,Shadewood Fence,ShadewoodFence,400
2214,Brick Layer,BrickLayer,1
2215,Extendo Grip,ExtendoGrip,1
2216,Paint Sprayer,PaintSprayer,1
2217,Portable Cement Mixer,PortableCementMixer,1
2218,Beetle Husk,BeetleHusk,25
2219,Celestial Magnet,CelestialMagnet,1
2220,Celestial Emblem,CelestialEmblem,1
2221,Celestial Cuffs,CelestialCuffs,1
2222,Peddler's Hat,PeddlersHat,1
2223,Pulse Bow,PulseBow,1
2224,Large Dynasty Lantern,DynastyChandelier,1
2225,Dynasty Lamp,DynastyLamp,1
2226,Dynasty Lantern,DynastyLantern,1
2227,Large Dynasty Candle,DynastyCandelabra,1
2228,Dynasty Chair,DynastyChair,1
2229,Dynasty Work Bench,DynastyWorkBench,1
2230,Dynasty Chest,DynastyChest,1
2231,Dynasty Bed,DynastyBed,1
2232,Dynasty Bathtub,DynastyBathtub,1
2233,Dynasty Bookcase,DynastyBookcase,1
2234,Dynasty Cup,DynastyCup,1
2235,Dynasty Bowl,DynastyBowl,1
2236,Dynasty Candle,DynastyCandle,1
2237,Dynasty Clock,DynastyClock,1
2238,Golden Clock,GoldenClock,1
2239,Glass Clock,GlassClock,1
2240,Honey Clock,HoneyClock,1
2241,Steampunk Clock,SteampunkClock,1
2242,Fancy Dishes,FancyDishes,1
2243,Glass Bowl,GlassBowl,1
2244,Wine Glass,WineGlass,1
2245,Living Wood Piano,LivingWoodPiano,1
2246,Flesh Piano,FleshPiano,1
2247,Frozen Piano,FrozenPiano,1
2248,Frozen Table,FrozenTable,1
2249,Honey Chest,HoneyChest,1
2250,Steampunk Chest,SteampunkChest,1
2251,Honey Work Bench,HoneyWorkBench,1
2252,Frozen Work Bench,FrozenWorkBench,1
2253,Steampunk Work Bench,SteampunkWorkBench,1
2254,Glass Piano,GlassPiano,1
2255,Honey Piano,HoneyPiano,1
2256,Steampunk Piano,SteampunkPiano,1
2257,Honey Cup,HoneyCup,1
2258,Chalice,SteampunkCup,1
2259,Dynasty Table,DynastyTable,1
2260,Dynasty Wood,DynastyWood,100
2261,Red Dynasty Shingles,RedDynastyShingles,100
2262,Blue Dynasty Shingles,BlueDynastyShingles,100
2263,White Dynasty Wall,WhiteDynastyWall,400
2264,Blue Dynasty Wall,BlueDynastyWall,400
2265,Dynasty Door,DynastyDoor,1
2266,Sake,Sake,20
2267,Pad Thai,PadThai,5
2268,Pho,Pho,5
2269,Revolver,Revolver,1
2270,Gatligator,Gatligator,1
2271,Arcane Rune Wall,ArcaneRuneWall,400
2272,Water Gun,WaterGun,1
2273,Katana,Katana,1
2274,Ultrabright Torch,UltrabrightTorch,100
2275,Magic Hat,MagicHat,1
2276,Diamond Ring,DiamondRing,1
2277,Gi,Gi,1
2278,Kimono,Kimono,1
2279,Mystic Robe,GypsyRobe,1
2280,Beetle Wings,BeetleWings,1
2281,Tiger Skin,TigerSkin,1
2282,Leopard Skin,LeopardSkin,1
2283,Zebra Skin,ZebraSkin,1
2284,Crimson Cloak,CrimsonCloak,1
2285,Mysterious Cape,MysteriousCape,1
2286,Red Cape,RedCape,1
2287,Winter Cape,WinterCape,1
2288,Frozen Chair,FrozenChair,1
2289,Wood Fishing Pole,WoodFishingPole,1
2290,Bass,Bass,3
2291,Reinforced Fishing Pole,ReinforcedFishingPole,1
2292,Fiberglass Fishing Pole,FiberglassFishingPole,1
2293,Fisher of Souls,FisherofSouls,1
2294,Golden Fishing Rod,GoldenFishingRod,1
2295,Mechanic's Rod,MechanicsRod,1
2296,Sitting Duck's Fishing Pole,SittingDucksFishingRod,1
2297,Trout,Trout,3
2298,Salmon,Salmon,3
2299,Atlantic Cod,AtlanticCod,3
2300,Tuna,Tuna,3
2301,Red Snapper,RedSnapper,3
2302,Neon Tetra,NeonTetra,3
2303,Armored Cavefish,ArmoredCavefish,3
2304,Damselfish,Damselfish,3
2305,Crimson Tigerfish,CrimsonTigerfish,3
2306,Frost Minnow,FrostMinnow,3
2307,Princess Fish,PrincessFish,3
2308,Golden Carp,GoldenCarp,3
2309,Specular Fish,SpecularFish,3
2310,Prismite,Prismite,3
2311,Variegated Lardfish,VariegatedLardfish,3
2312,Flarefin Koi,FlarefinKoi,3
2313,Double Cod,DoubleCod,3
2314,Honeyfin,Honeyfin,30
2315,Obsidifish,Obsidifish,3
2316,Shrimp,Shrimp,3
2317,Chaos Fish,ChaosFish,3
2318,Ebonkoi,Ebonkoi,3
2319,Hemopiranha,Hemopiranha,3
2320,Rockfish,Rockfish,1
2321,Stinkfish,Stinkfish,3
2322,Mining Potion,MiningPotion,20
2323,Heartreach Potion,HeartreachPotion,20
2324,Calming Potion,CalmingPotion,20
2325,Builder Potion,BuilderPotion,20
2326,Titan Potion,TitanPotion,20
2327,Flipper Potion,FlipperPotion,20
2328,Summoning Potion,SummoningPotion,20
2329,Dangersense Potion,TrapsightPotion,20
2330,Purple Clubberfish,PurpleClubberfish,1
2331,Obsidian Swordfish,ObsidianSwordfish,1
2332,Swordfish,Swordfish,1
2333,Iron Fence,IronFence,400
2334,Wooden Crate,WoodenCrate,10
2335,Iron Crate,IronCrate,10
2336,Golden Crate,GoldenCrate,10
2337,Old Shoe,OldShoe,1
2338,Seaweed,FishingSeaweed,1
2339,Tin Can,TinCan,1
2340,Minecart Track,MinecartTrack,100
2341,Reaver Shark,ReaverShark,1
2342,Sawtooth Shark,SawtoothShark,1
2343,Minecart,Minecart,1
2344,Ammo Reservation Potion,AmmoReservationPotion,20
2345,Lifeforce Potion,LifeforcePotion,20
2346,Endurance Potion,EndurancePotion,20
2347,Rage Potion,RagePotion,20
2348,Inferno Potion,InfernoPotion,20
2349,Wrath Potion,WrathPotion,20
2350,Recall Potion,RecallPotion,20
2351,Teleportation Potion,TeleportationPotion,20
2352,Love Potion,LovePotion,20
2353,Stink Potion,StinkPotion,20
2354,Fishing Potion,FishingPotion,20
2355,Sonar Potion,SonarPotion,20
2356,Crate Potion,CratePotion,20
2357,Shiverthorn Seeds,ShiverthornSeeds,25
2358,Shiverthorn,Shiverthorn,25
2359,Warmth Potion,WarmthPotion,20
2360,Fish Hook,FishHook,1
2361,Bee Headgear,BeeHeadgear,1
2362,Bee Breastplate,BeeBreastplate,1
2363,Bee Greaves,BeeGreaves,1
2364,Hornet Staff,HornetStaff,1
2365,Imp Staff,ImpStaff,1
2366,Queen Spider Staff,QueenSpiderStaff,1
2367,Angler Hat,AnglerHat,1
2368,Angler Vest,AnglerVest,1
2369,Angler Pants,AnglerPants,1
2370,Spider Mask,SpiderMask,1
2371,Spider Breastplate,SpiderBreastplate,1
2372,Spider Greaves,SpiderGreaves,1
2373,High Test Fishing Line,HighTestFishingLine,1
2374,Angler Earring,AnglerEarring,1
2375,Tackle Box,TackleBox,1
2376,Blue Dungeon Piano,BlueDungeonPiano,1
2377,Green Dungeon Piano,GreenDungeonPiano,1
2378,Pink Dungeon Piano,PinkDungeonPiano,1
2379,Golden Piano,GoldenPiano,1
2380,Obsidian Piano,ObsidianPiano,1
2381,Bone Piano,BonePiano,1
2382,Cactus Piano,CactusPiano,1
2383,Spooky Piano,SpookyPiano,1
2384,Skyware Piano,SkywarePiano,1
2385,Lihzahrd Piano,LihzahrdPiano,1
2386,Blue Dungeon Dresser,BlueDungeonDresser,1
2387,Green Dungeon Dresser,GreenDungeonDresser,1
2388,Pink Dungeon Dresser,PinkDungeonDresser,1
2389,Golden Dresser,GoldenDresser,1
2390,Obsidian Dresser,ObsidianDresser,1
2391,Bone Dresser,BoneDresser,1
2392,Cactus Dresser,CactusDresser,1
2393,Spooky Dresser,SpookyDresser,1
2394,Skyware Dresser,SkywareDresser,1
2395,Honey Dresser,HoneyDresser,1
2396,Lihzahrd Dresser,LihzahrdDresser,1
2397,Sofa,Sofa,1
2398,Ebonwood Sofa,EbonwoodSofa,1
2399,Rich Mahogany Sofa,RichMahoganySofa,1
2400,Pearlwood Sofa,PearlwoodSofa,1
2401,Shadewood Sofa,ShadewoodSofa,1
2402,Blue Dungeon Sofa,BlueDungeonSofa,1
2403,Green Dungeon Sofa,GreenDungeonSofa,1
2404,Pink Dungeon Sofa,PinkDungeonSofa,1
2405,Golden Sofa,GoldenSofa,1
2406,Obsidian Sofa,ObsidianSofa,1
2407,Bone Sofa,BoneSofa,1
2408,Cactus Sofa,CactusSofa,1
2409,Spooky Sofa,SpookySofa,1
2410,Skyware Sofa,SkywareSofa,1
2411,Honey Sofa,HoneySofa,1
2412,Steampunk Sofa,SteampunkSofa,1
2413,Mushroom Sofa,MushroomSofa,1
2414,Glass Sofa,GlassSofa,1
2415,Pumpkin Sofa,PumpkinSofa,1
2416,Lihzahrd Sofa,LihzahrdSofa,1
2417,Seashell Hairpin,SeashellHairpin,1
2418,Mermaid Adornment,MermaidAdornment,1
2419,Mermaid Tail,MermaidTail,1
2420,Zephyr Fish,ZephyrFish,1
2421,Fleshcatcher,Fleshcatcher,1
2422,Hotline Fishing Hook,HotlineFishingHook,1
2423,Frog Leg,FrogLeg,1
2424,Anchor,Anchor,1
2425,Cooked Fish,CookedFish,5
2426,Cooked Shrimp,CookedShrimp,5
2427,Sashimi,Sashimi,5
2428,Fuzzy Carrot,FuzzyCarrot,1
2429,Scaly Truffle,ScalyTruffle,1
2430,Slimy Saddle,SlimySaddle,1
2431,Bee Wax,BeeWax,25
2432,Copper Plating Wall,CopperPlatingWall,400
2433,Stone Slab Wall,StoneSlabWall,400
2434,Sail,Sail,400
2435,Coralstone Block,CoralstoneBlock,100
2436,Blue Jellyfish,BlueJellyfish,3
2437,Green Jellyfish,GreenJellyfish,3
2438,Pink Jellyfish,PinkJellyfish,3
2439,Blue Jellyfish Jar,BlueJellyfishJar,1
2440,Green Jellyfish Jar,GreenJellyfishJar,1
2441,Pink Jellyfish Jar,PinkJellyfishJar,1
2442,Life Preserver,LifePreserver,1
2443,Ship's Wheel,ShipsWheel,1
2444,Compass Rose,CompassRose,1
2445,Wall Anchor,WallAnchor,1
2446,Goldfish Trophy,GoldfishTrophy,1
2447,Bunnyfish Trophy,BunnyfishTrophy,1
2448,Swordfish Trophy,SwordfishTrophy,1
2449,Sharkteeth Trophy,SharkteethTrophy,1
2450,Batfish,Batfish,2
2451,Bumblebee Tuna,BumblebeeTuna,2
2452,Catfish,Catfish,2
2453,Cloudfish,Cloudfish,2
2454,Cursedfish,Cursedfish,2
2455,Dirtfish,Dirtfish,2
2456,Dynamite Fish,DynamiteFish,2
2457,Eater of Plankton,EaterofPlankton,2
2458,Fallen Starfish,FallenStarfish,2
2459,The Fish of Cthulhu,TheFishofCthulu,2
2460,Fishotron,Fishotron,2
2461,Harpyfish,Harpyfish,2
2462,Hungerfish,Hungerfish,2
2463,Ichorfish,Ichorfish,2
2464,Jewelfish,Jewelfish,2
2465,Mirage Fish,MirageFish,2
2466,Mutant Flinxfin,MutantFlinxfin,2
2467,Pengfish,Pengfish,2
2468,Pixiefish,Pixiefish,2
2469,Spiderfish,Spiderfish,2
2470,Tundra Trout,TundraTrout,2
2471,Unicorn Fish,UnicornFish,2
2472,Guide Voodoo Fish,GuideVoodooFish,2
2473,Wyverntail,Wyverntail,2
2474,Zombie Fish,ZombieFish,2
2475,Amanita Fungifin,AmanitaFungifin,2
2476,Angelfish,Angelfish,2
2477,Bloody Manowar,BloodyManowar,2
2478,Bonefish,Bonefish,2
2479,Bunnyfish,Bunnyfish,2
2480,Cap'n Tunabeard,CapnTunabeard,2
2481,Clownfish,Clownfish,2
2482,Demonic Hellfish,DemonicHellfish,2
2483,Derpfish,Derpfish,2
2484,Fishron,Fishron,2
2485,Infected Scabbardfish,InfectedScabbardfish,2
2486,Mudfish,Mudfish,2
2487,Slimefish,Slimefish,2
2488,Tropical Barracuda,TropicalBarracuda,2
2489,King Slime Trophy,KingSlimeTrophy,1
2490,Ship in a Bottle,ShipInABottle,1
2491,Hardy Saddle,HardySaddle,1
2492,Pressure Plate Track,PressureTrack,5
2493,King Slime Mask,KingSlimeMask,1
2494,Fin Wings,FinWings,1
2495,Treasure Map,TreasureMap,1
2496,Seaweed Planter,SeaweedPlanter,1
2497,Pillagin' Me Pixels,PillaginMePixels,1
2498,Fish Costume Mask,FishCostumeMask,1
2499,Fish Costume Shirt,FishCostumeShirt,1
2500,Fish Costume Finskirt,FishCostumeFinskirt,1
2501,Ginger Beard,GingerBeard,1
2502,Honeyed Goggles,HoneyedGoggles,1
2503,Boreal Wood,BorealWood,100
2504,Palm Wood,PalmWood,100
2505,Boreal Wood Wall,BorealWoodWall,400
2506,Palm Wood Wall,PalmWoodWall,400
2507,Boreal Wood Fence,BorealWoodFence,400
2508,Palm Wood Fence,PalmWoodFence,400
2509,Boreal Wood Helmet,BorealWoodHelmet,1
2510,Boreal Wood Breastplate,BorealWoodBreastplate,1
2511,Boreal Wood Greaves,BorealWoodGreaves,1
2512,Palm Wood Helmet,PalmWoodHelmet,1
2513,Palm Wood Breastplate,PalmWoodBreastplate,1
2514,Palm Wood Greaves,PalmWoodGreaves,1
2515,Palm Wood Bow,PalmWoodBow,1
2516,Palm Wood Hammer,PalmWoodHammer,1
2517,Palm Wood Sword,PalmWoodSword,1
2518,Palm Wood Platform,PalmWoodPlatform,200
2519,Palm Wood Bathtub,PalmWoodBathtub,1
2520,Palm Wood Bed,PalmWoodBed,1
2521,Palm Wood Bench,PalmWoodBench,1
2522,Palm Wood Candelabra,PalmWoodCandelabra,1
2523,Palm Wood Candle,PalmWoodCandle,1
2524,Palm Wood Chair,PalmWoodChair,1
2525,Palm Wood Chandelier,PalmWoodChandelier,1
2526,Palm Wood Chest,PalmWoodChest,1
2527,Palm Wood Sofa,PalmWoodSofa,1
2528,Palm Wood Door,PalmWoodDoor,1
2529,Palm Wood Dresser,PalmWoodDresser,1
2530,Palm Wood Lantern,PalmWoodLantern,1
2531,Palm Wood Piano,PalmWoodPiano,1
2532,Palm Wood Table,PalmWoodTable,1
2533,Palm Wood Lamp,PalmWoodLamp,1
2534,Palm Wood Work Bench,PalmWoodWorkBench,1
2535,Optic Staff,OpticStaff,1
2536,Palm Wood Bookcase,PalmWoodBookcase,1
2537,Mushroom Bathtub,MushroomBathtub,1
2538,Mushroom Bed,MushroomBed,1
2539,Mushroom Bench,MushroomBench,1
2540,Mushroom Bookcase,MushroomBookcase,1
2541,Mushroom Candelabra,MushroomCandelabra,1
2542,Mushroom Candle,MushroomCandle,1
2543,Mushroom Chandelier,MushroomChandelier,1
2544,Mushroom Chest,MushroomChest,1
2545,Mushroom Dresser,MushroomDresser,1
2546,Mushroom Lantern,MushroomLantern,1
2547,Mushroom Lamp,MushroomLamp,1
2548,Mushroom Piano,MushroomPiano,1
2549,Mushroom Platform,MushroomPlatform,200
2550,Mushroom Table,MushroomTable,1
2551,Spider Staff,SpiderStaff,1
2552,Boreal Wood Bathtub,BorealWoodBathtub,1
2553,Boreal Wood Bed,BorealWoodBed,1
2554,Boreal Wood Bookcase,BorealWoodBookcase,1
2555,Boreal Wood Candelabra,BorealWoodCandelabra,1
2556,Boreal Wood Candle,BorealWoodCandle,1
2557,Boreal Wood Chair,BorealWoodChair,1
2558,Boreal Wood Chandelier,BorealWoodChandelier,1
2559,Boreal Wood Chest,BorealWoodChest,1
2560,Boreal Wood Clock,BorealWoodClock,1
2561,Boreal Wood Door,BorealWoodDoor,1
2562,Boreal Wood Dresser,BorealWoodDresser,1
2563,Boreal Wood Lamp,BorealWoodLamp,1
2564,Boreal Wood Lantern,BorealWoodLantern,1
2565,Boreal Wood Piano,BorealWoodPiano,1
2566,Boreal Wood Platform,BorealWoodPlatform,200
2567,Slime Bathtub,SlimeBathtub,1
2568,Slime Bed,SlimeBed,1
2569,Slime Bookcase,SlimeBookcase,1
2570,Slime Candelabra,SlimeCandelabra,1
2571,Slime Candle,SlimeCandle,1
2572,Slime Chair,SlimeChair,1
2573,Slime Chandelier,SlimeChandelier,1
2574,Slime Chest,SlimeChest,1
2575,Slime Clock,SlimeClock,1
2576,Slime Door,SlimeDoor,1
2577,Slime Dresser,SlimeDresser,1
2578,Slime Lamp,SlimeLamp,1
2579,Slime Lantern,SlimeLantern,1
2580,Slime Piano,SlimePiano,1
2581,Slime Platform,SlimePlatform,200
2582,Slime Sofa,SlimeSofa,1
2583,Slime Table,SlimeTable,1
2584,Pirate Staff,PirateStaff,1
2585,Slime Hook,SlimeHook,1
2586,Sticky Grenade,StickyGrenade,99
2587,Beguiling Lyre,TartarSauce,1
2588,Duke Fishron Mask,DukeFishronMask,1
2589,Duke Fishron Trophy,DukeFishronTrophy,1
2590,Molotov Cocktail,MolotovCocktail,99
2591,Bone Clock,BoneClock,1
2592,Cactus Clock,CactusClock,1
2593,Ebonwood Clock,EbonwoodClock,1
2594,Frozen Clock,FrozenClock,1
2595,Lihzahrd Clock,LihzahrdClock,1
2596,Living Wood Clock,LivingWoodClock,1
2597,Rich Mahogany Clock,RichMahoganyClock,1
2598,Flesh Clock,FleshClock,1
2599,Mushroom Clock,MushroomClock,1
2600,Obsidian Clock,ObsidianClock,1
2601,Palm Wood Clock,PalmWoodClock,1
2602,Pearlwood Clock,PearlwoodClock,1
2603,Pumpkin Clock,PumpkinClock,1
2604,Shadewood Clock,ShadewoodClock,1
2605,Spooky Clock,SpookyClock,1
2606,Skyware Clock,SkywareClock,1
2607,Spider Fang,SpiderFang,25
2608,Falcon Blade,FalconBlade,1
2609,Fishron Wings,FishronWings,1
2610,Slime Gun,SlimeGun,1
2611,Flairoon,Flairon,1
2612,Green Dungeon Chest,GreenDungeonChest,1
2613,Pink Dungeon Chest,PinkDungeonChest,1
2614,Blue Dungeon Chest,BlueDungeonChest,1
2615,Bone Chest,BoneChest,1
2616,Cactus Chest,CactusChest,1
2617,Flesh Chest,FleshChest,1
2618,Obsidian Chest,ObsidianChest,1
2619,Pumpkin Chest,PumpkinChest,1
2620,Spooky Chest,SpookyChest,1
2621,Tempest Staff,TempestStaff,1
2622,Razorblade Typhoon,RazorbladeTyphoon,1
2623,Bubble Gun,BubbleGun,1
2624,Tsunami,Tsunami,1
2625,Seashell,Seashell,5
2626,Starfish,Starfish,5
2627,Steampunk Platform,SteampunkPlatform,200
2628,Skyware Platform,SkywarePlatform,200
2629,Living Wood Platform,LivingWoodPlatform,200
2630,Honey Platform,HoneyPlatform,200
2631,Skyware Work Bench,SkywareWorkbench,1
2632,Glass Work Bench,GlassWorkBench,1
2633,Living Wood Work Bench,LivingWoodWorkBench,1
2634,Flesh Sofa,FleshSofa,1
2635,Frozen Sofa,FrozenSofa,1
2636,Living Wood Sofa,LivingWoodSofa,1
2637,Pumpkin Dresser,PumpkinDresser,1
2638,Steampunk Dresser,SteampunkDresser,1
2639,Glass Dresser,GlassDresser,1
2640,Flesh Dresser,FleshDresser,1
2641,Pumpkin Lantern,PumpkinLantern,1
2642,Obsidian Lantern,ObsidianLantern,1
2643,Pumpkin Lamp,PumpkinLamp,1
2644,Obsidian Lamp,ObsidianLamp,1
2645,Blue Dungeon Lamp,BlueDungeonLamp,1
2646,Green Dungeon Lamp,GreenDungeonLamp,1
2647,Pink Dungeon Lamp,PinkDungeonLamp,1
2648,Honey Candle,HoneyCandle,1
2649,Steampunk Candle,SteampunkCandle,1
2650,Spooky Candle,SpookyCandle,1
2651,Obsidian Candle,ObsidianCandle,1
2652,Blue Dungeon Chandelier,BlueDungeonChandelier,1
2653,Green Dungeon Chandelier,GreenDungeonChandelier,1
2654,Pink Dungeon Chandelier,PinkDungeonChandelier,1
2655,Steampunk Chandelier,SteampunkChandelier,1
2656,Pumpkin Chandelier,PumpkinChandelier,1
2657,Obsidian Chandelier,ObsidianChandelier,1
2658,Blue Dungeon Bathtub,BlueDungeonBathtub,1
2659,Green Dungeon Bathtub,GreenDungeonBathtub,1
2660,Pink Dungeon Bathtub,PinkDungeonBathtub,1
2661,Pumpkin Bathtub,PumpkinBathtub,1
2662,Obsidian Bathtub,ObsidianBathtub,1
2663,Golden Bathtub,GoldenBathtub,1
2664,Blue Dungeon Candelabra,BlueDungeonCandelabra,1
2665,Green Dungeon Candelabra,GreenDungeonCandelabra,1
2666,Pink Dungeon Candelabra,PinkDungeonCandelabra,1
2667,Obsidian Candelabra,ObsidianCandelabra,1
2668,Pumpkin Candelabra,PumpkinCandelabra,1
2669,Pumpkin Bed,PumpkinBed,1
2670,Pumpkin Bookcase,PumpkinBookcase,1
2671,Pumpkin Piano,PumpkinPiano,1
2672,Shark Statue,SharkStatue,1
2673,Truffle Worm,TruffleWorm,3
2674,Apprentice Bait,ApprenticeBait,5
2675,Journeyman Bait,JourneymanBait,5
2676,Master Bait,MasterBait,5
2677,Amber Gemspark Wall,AmberGemsparkWall,400
2678,Offline Amber Gemspark Wall,AmberGemsparkWallOff,400
2679,Amethyst Gemspark Wall,AmethystGemsparkWall,400
2680,Offline Amethyst Gemspark Wall,AmethystGemsparkWallOff,400
2681,Diamond Gemspark Wall,DiamondGemsparkWall,400
2682,Offline Diamond Gemspark Wall,DiamondGemsparkWallOff,400
2683,Emerald Gemspark Wall,EmeraldGemsparkWall,400
2684,Offline Emerald Gemspark Wall,EmeraldGemsparkWallOff,400
2685,Ruby Gemspark Wall,RubyGemsparkWall,400
2686,Offline Ruby Gemspark Wall,RubyGemsparkWallOff,400
2687,Sapphire Gemspark Wall,SapphireGemsparkWall,400
2688,Offline Sapphire Gemspark Wall,SapphireGemsparkWallOff,400
2689,Topaz Gemspark Wall,TopazGemsparkWall,400
2690,Offline Topaz Gemspark Wall,TopazGemsparkWallOff,400
2691,Tin Plating Wall,TinPlatingWall,400
2692,Tin Plating,TinPlating,100
2693,Waterfall Block,WaterfallBlock,100
2694,Lavafall Block,LavafallBlock,100
2695,Confetti Block,ConfettiBlock,100
2696,Confetti Wall,ConfettiWall,400
2697,Midnight Confetti Block,ConfettiBlockBlack,100
2698,Midnight Confetti Wall,ConfettiWallBlack,400
2699,Weapon Rack,WeaponRack,1
2700,Fireworks Box,FireworksBox,1
2701,Living Fire Block,LivingFireBlock,100
2702,'0' Statue,AlphabetStatue0,1
2703,'1' Statue,AlphabetStatue1,1
2704,'2' Statue,AlphabetStatue2,1
2705,'3' Statue,AlphabetStatue3,1
2706,'4' Statue,AlphabetStatue4,1
2707,'5' Statue,AlphabetStatue5,1
2708,'6' Statue,AlphabetStatue6,1
2709,'7' Statue,AlphabetStatue7,1
2710,'8' Statue,AlphabetStatue8,1
2711,'9' Statue,AlphabetStatue9,1
2712,'A' Statue,AlphabetStatueA,1
2713,'B' Statue,AlphabetStatueB,1
2714,'C' Statue,AlphabetStatueC,1
2715,'D' Statue,AlphabetStatueD,1
2716,'E' Statue,AlphabetStatueE,1
2717,'F' Statue,AlphabetStatueF,1
2718,'G' Statue,AlphabetStatueG,1
2719,'H' Statue,AlphabetStatueH,1
2720,'I' Statue,AlphabetStatueI,1
2721,'J' Statue,AlphabetStatueJ,1
2722,'K' Statue,AlphabetStatueK,1
2723,'L' Statue,AlphabetStatueL,1
2724,'M' Statue,AlphabetStatueM,1
2725,'N' Statue,AlphabetStatueN,1
2726,'O' Statue,AlphabetStatueO,1
2727,'P' Statue,AlphabetStatueP,1
2728,'Q' Statue,AlphabetStatueQ,1
2729,'R' Statue,AlphabetStatueR,1
2730,'S' Statue,AlphabetStatueS,1
2731,'T' Statue,AlphabetStatueT,1
2732,'U' Statue,AlphabetStatueU,1
2733,'V' Statue,AlphabetStatueV,1
2734,'W' Statue,AlphabetStatueW,1
2735,'X' Statue,AlphabetStatueX,1
2736,'Y' Statue,AlphabetStatueY,1
2737,'Z' Statue,AlphabetStatueZ,1
2738,Firework Fountain,FireworkFountain,1
2739,Booster Track,BoosterTrack,5
2740,Grasshopper,Grasshopper,5
2741,Grasshopper Cage,GrasshopperCage,1
2742,Music Box (Underground Crimson),MusicBoxUndergroundCrimson,1
2743,Cactus Table,CactusTable,1
2744,Cactus Platform,CactusPlatform,200
2745,Boreal Wood Sword,BorealWoodSword,1
2746,Boreal Wood Hammer,BorealWoodHammer,1
2747,Boreal Wood Bow,BorealWoodBow,1
2748,Glass Chest,GlassChest,1
2749,Xeno Staff,XenoStaff,1
2750,Meteor Staff,MeteorStaff,1
2751,Living Cursed Fire Block,LivingCursedFireBlock,100
2752,Living Demon Fire Block,LivingDemonFireBlock,100
2753,Living Frost Fire Block,LivingFrostFireBlock,100
2754,Living Ichor Block,LivingIchorBlock,100
2755,Living Ultrabright Fire Block,LivingUltrabrightFireBlock,100
2756,Gender Change Potion,GenderChangePotion,20
2757,Vortex Helmet,VortexHelmet,1
2758,Vortex Breastplate,VortexBreastplate,1
2759,Vortex Leggings,VortexLeggings,1
2760,Nebula Helmet,NebulaHelmet,1
2761,Nebula Breastplate,NebulaBreastplate,1
2762,Nebula Leggings,NebulaLeggings,1
2763,Solar Flare Helmet,SolarFlareHelmet,1
2764,Solar Flare Breastplate,SolarFlareBreastplate,1
2765,Solar Flare Leggings,SolarFlareLeggings,1
2766,Solar Tablet Fragment,LunarTabletFragment,10
2767,Solar Tablet,SolarTablet,3
2768,Drill Containment Unit,DrillContainmentUnit,1
2769,Cosmic Car Key,CosmicCarKey,1
2770,Mothron Wings,MothronWings,1
2771,Brain Scrambler,BrainScrambler,1
2772,(Deprecated),VortexAxe,n/a
2773,(Deprecated),VortexChainsaw,n/a
2774,Vortex Drill,VortexDrill,1
2775,(Deprecated),VortexHammer,n/a
2776,Vortex Pickaxe,VortexPickaxe,1
2777,(Deprecated),NebulaAxe,n/a
2778,(Deprecated),NebulaChainsaw,n/a
2779,Nebula Drill,NebulaDrill,1
2780,(Deprecated),NebulaHammer,n/a
2781,Nebula Pickaxe,NebulaPickaxe,1
2782,(Deprecated),SolarFlareAxe,n/a
2783,(Deprecated),SolarFlareChainsaw,n/a
2784,Solar Flare Drill,SolarFlareDrill,1
2785,(Deprecated),SolarFlareHammer,n/a
2786,Solar Flare Pickaxe,SolarFlarePickaxe,1
2787,Honeyfall Block,HoneyfallBlock,100
2788,Honeyfall Wall,HoneyfallWall,400
2789,Chlorophyte Brick Wall,ChlorophyteBrickWall,400
2790,Crimtane Brick Wall,CrimtaneBrickWall,400
2791,Shroomite Plating Wall,ShroomitePlatingWall,400
2792,Chlorophyte Brick,ChlorophyteBrick,100
2793,Crimtane Brick,CrimtaneBrick,100
2794,Shroomite Plating,ShroomitePlating,100
2795,Laser Machinegun,LaserMachinegun,1
2796,Electrosphere Launcher,ElectrosphereLauncher,1
2797,Xenopopper,Xenopopper,1
2798,Laser Drill,LaserDrill,1
2799,Mechanical Ruler,LaserRuler,1
2800,Anti-Gravity Hook,AntiGravityHook,1
2801,Moon Mask,MoonMask,1
2802,Sun Mask,SunMask,1
2803,Martian Costume Mask,MartianCostumeMask,1
2804,Martian Costume Shirt,MartianCostumeShirt,1
2805,Martian Costume Pants,MartianCostumePants,1
2806,Martian Uniform Helmet,MartianUniformHelmet,1
2807,Martian Uniform Torso,MartianUniformTorso,1
2808,Martian Uniform Pants,MartianUniformPants,1
2809,Martian Astro Clock,MartianAstroClock,1
2810,Martian Bathtub,MartianBathtub,1
2811,Martian Bed,MartianBed,1
2812,Martian Hover Chair,MartianHoverChair,1
2813,Martian Chandelier,MartianChandelier,1
2814,Martian Chest,MartianChest,1
2815,Martian Door,MartianDoor,1
2816,Martian Dresser,MartianDresser,1
2817,Martian Holobookcase,MartianHolobookcase,1
2818,Martian Hover Candle,MartianHoverCandle,1
2819,Martian Lamppost,MartianLamppost,1
2820,Martian Lantern,MartianLantern,1
2821,Martian Piano,MartianPiano,1
2822,Martian Platform,MartianPlatform,200
2823,Martian Sofa,MartianSofa,1
2824,Martian Table,MartianTable,1
2825,Martian Table Lamp,MartianTableLamp,1
2826,Martian Work Bench,MartianWorkBench,1
2827,Wooden Sink,WoodenSink,1
2828,Ebonwood Sink,EbonwoodSink,1
2829,Rich Mahogany Sink,RichMahoganySink,1
2830,Pearlwood Sink,PearlwoodSink,1
2831,Bone Sink,BoneSink,1
2832,Flesh Sink,FleshSink,1
2833,Living Wood Sink,LivingWoodSink,1
2834,Skyware Sink,SkywareSink,1
2835,Shadewood Sink,ShadewoodSink,1
2836,Lihzahrd Sink,LihzahrdSink,1
2837,Blue Dungeon Sink,BlueDungeonSink,1
2838,Green Dungeon Sink,GreenDungeonSink,1
2839,Pink Dungeon Sink,PinkDungeonSink,1
2840,Obsidian Sink,ObsidianSink,1
2841,Metal Sink,MetalSink,1
2842,Glass Sink,GlassSink,1
2843,Golden Sink,GoldenSink,1
2844,Honey Sink,HoneySink,1
2845,Steampunk Sink,SteampunkSink,1
2846,Pumpkin Sink,PumpkinSink,1
2847,Spooky Sink,SpookySink,1
2848,Frozen Sink,FrozenSink,1
2849,Dynasty Sink,DynastySink,1
2850,Palm Wood Sink,PalmWoodSink,1
2851,Mushroom Sink,MushroomSink,1
2852,Boreal Wood Sink,BorealWoodSink,1
2853,Slime Sink,SlimeSink,1
2854,Cactus Sink,CactusSink,1
2855,Martian Sink,MartianSink,1
2856,Solar Cultist Hood,WhiteLunaticHood,1
2857,Lunar Cultist Hood,BlueLunaticHood,1
2858,Solar Cultist Robe,WhiteLunaticRobe,1
2859,Lunar Cultist Robe,BlueLunaticRobe,1
2860,Martian Conduit Plating,MartianConduitPlating,100
2861,Martian Conduit Wall,MartianConduitWall,400
2862,HiTek Sunglasses,HiTekSunglasses,1
2863,Martian Hair Dye,MartianHairDye,1
2864,Martian Dye,MartianArmorDye,3
2865,Castle Marsberg,PaintingCastleMarsberg,1
2866,Martia Lisa,PaintingMartiaLisa,1
2867,The Truth Is Up There,PaintingTheTruthIsUpThere,1
2868,Smoke Block,SmokeBlock,100
2869,Living Flame Dye,LivingFlameDye,3
2870,Living Rainbow Dye,LivingRainbowDye,3
2871,Shadow Dye,ShadowDye,3
2872,Negative Dye,NegativeDye,3
2873,Living Ocean Dye,LivingOceanDye,3
2874,Brown Dye,BrownDye,3
2875,Brown and Black Dye,BrownAndBlackDye,3
2876,Bright Brown Dye,BrightBrownDye,3
2877,Brown and Silver Dye,BrownAndSilverDye,3
2878,Wisp Dye,WispDye,3
2879,Pixie Dye,PixieDye,3
2880,Influx Waver,InfluxWaver,1
2881,(Deprecated),PhasicWarpEjector,n/a
2882,Charged Blaster Cannon,ChargedBlasterCannon,1
2883,Chlorophyte Dye,ChlorophyteDye,3
2884,Unicorn Wisp Dye,UnicornWispDye,3
2885,Infernal Wisp Dye,InfernalWispDye,3
2886,Vicious Powder,ViciousPowder,99
2887,Vicious Mushroom,ViciousMushroom,25
2888,The Bee's Knees,BeesKnees,1
2889,Gold Bird,GoldBird,3
2890,Gold Bunny,GoldBunny,3
2891,Gold Butterfly,GoldButterfly,3
2892,Gold Frog,GoldFrog,3
2893,Gold Grasshopper,GoldGrasshopper,3
2894,Gold Mouse,GoldMouse,3
2895,Gold Worm,GoldWorm,3
2896,Sticky Dynamite,StickyDynamite,99
2897,Angry Trapper Banner,AngryTrapperBanner,1
2898,Armored Viking Banner,ArmoredVikingBanner,1
2899,Black Slime Banner,BlackSlimeBanner,1
2900,Blue Armored Bones Banner,BlueArmoredBonesBanner,1
2901,Blue Cultist Archer Banner,BlueCultistArcherBanner,1
2902,Lunatic Devotee Banner,BlueCultistCasterBanner,1
2903,Blue Cultist Fighter Banner,BlueCultistFighterBanner,n/a
2904,Bone Lee Banner,BoneLeeBanner,1
2905,Clinger Banner,ClingerBanner,1
2906,Cochineal Beetle Banner,CochinealBeetleBanner,1
2907,Corrupt Penguin Banner,CorruptPenguinBanner,1
2908,Corrupt Slime Banner,CorruptSlimeBanner,1
2909,Corruptor Banner,CorruptorBanner,1
2910,Crimslime Banner,CrimslimeBanner,1
2911,Cursed Skull Banner,CursedSkullBanner,1
2912,Cyan Beetle Banner,CyanBeetleBanner,1
2913,Devourer Banner,DevourerBanner,1
2914,Diabolist Banner,DiablolistBanner,1
2915,Doctor Bones Banner,DoctorBonesBanner,1
2916,Dungeon Slime Banner,DungeonSlimeBanner,1
2917,Dungeon Spirit Banner,DungeonSpiritBanner,1
2918,Elf Archer Banner,ElfArcherBanner,1
2919,Elf Copter Banner,ElfCopterBanner,1
2920,Eyezor Banner,EyezorBanner,1
2921,Flocko Banner,FlockoBanner,1
2922,Ghost Banner,GhostBanner,1
2923,Giant Bat Banner,GiantBatBanner,1
2924,Giant Cursed Skull Banner,GiantCursedSkullBanner,1
2925,Giant Flying Fox Banner,GiantFlyingFoxBanner,1
2926,Gingerbread Man Banner,GingerbreadManBanner,1
2927,Goblin Archer Banner,GoblinArcherBanner,1
2928,Green Slime Banner,GreenSlimeBanner,1
2929,Headless Horseman Banner,HeadlessHorsemanBanner,1
2930,Hell Armored Bones Banner,HellArmoredBonesBanner,1
2931,Hellhound Banner,HellhoundBanner,1
2932,Hoppin' Jack Banner,HoppinJackBanner,1
2933,Ice Bat Banner,IceBatBanner,1
2934,Ice Golem Banner,IceGolemBanner,1
2935,Ice Slime Banner,IceSlimeBanner,1
2936,Ichor Sticker Banner,IchorStickerBanner,1
2937,Illuminant Bat Banner,IlluminantBatBanner,1
2938,Illuminant Slime Banner,IlluminantSlimeBanner,1
2939,Jungle Bat Banner,JungleBatBanner,1
2940,Jungle Slime Banner,JungleSlimeBanner,1
2941,Krampus Banner,KrampusBanner,1
2942,Lac Beetle Banner,LacBeetleBanner,1
2943,Lava Bat Banner,LavaBatBanner,1
2944,Lava Slime Banner,LavaSlimeBanner,1
2945,Martian Brain Scrambler Banner,MartianBrainscramblerBanner,1
2946,Martian Drone Banner,MartianDroneBanner,1
2947,Martian Engineer Banner,MartianEngineerBanner,1
2948,Martian Gigazapper Banner,MartianGigazapperBanner,1
2949,Martian Gray Grunt Banner,MartianGreyGruntBanner,1
2950,Martian Officer Banner,MartianOfficerBanner,1
2951,Martian Ray Gunner Banner,MartianRaygunnerBanner,1
2952,Martian Scutlix Gunner Banner,MartianScutlixGunnerBanner,1
2953,Martian Tesla Turret Banner,MartianTeslaTurretBanner,1
2954,Mister Stabby Banner,MisterStabbyBanner,1
2955,Mother Slime Banner,MotherSlimeBanner,1
2956,Necromancer Banner,NecromancerBanner,1
2957,Nutcracker Banner,NutcrackerBanner,1
2958,Paladin Banner,PaladinBanner,1
2959,Penguin Banner,PenguinBanner,1
2960,Pinky Banner,PinkyBanner,1
2961,Poltergeist Banner,PoltergeistBanner,1
2962,Possessed Armor Banner,PossessedArmorBanner,1
2963,Present Mimic Banner,PresentMimicBanner,1
2964,Purple Slime Banner,PurpleSlimeBanner,1
2965,Ragged Caster Banner,RaggedCasterBanner,1
2966,Rainbow Slime Banner,RainbowSlimeBanner,1
2967,Raven Banner,RavenBanner,1
2968,Red Slime Banner,RedSlimeBanner,1
2969,Rune Wizard Banner,RuneWizardBanner,1
2970,Rusty Armored Bones Banner,RustyArmoredBonesBanner,1
2971,Scarecrow Banner,ScarecrowBanner,1
2972,Scutlix Banner,ScutlixBanner,1
2973,Skeleton Archer Banner,SkeletonArcherBanner,1
2974,Skeleton Commando Banner,SkeletonCommandoBanner,1
2975,Skeleton Sniper Banner,SkeletonSniperBanner,1
2976,Slimer Banner,SlimerBanner,1
2977,Snatcher Banner,SnatcherBanner,1
2978,Snow Balla Banner,SnowBallaBanner,1
2979,Snowman Gangsta Banner,SnowmanGangstaBanner,1
2980,Spiked Ice Slime Banner,SpikedIceSlimeBanner,1
2981,Spiked Jungle Slime Banner,SpikedJungleSlimeBanner,1
2982,Splinterling Banner,SplinterlingBanner,1
2983,Squid Banner,SquidBanner,1
2984,Tactical Skeleton Banner,TacticalSkeletonBanner,1
2985,The Groom Banner,TheGroomBanner,1
2986,Tim Banner,TimBanner,1
2987,Undead Miner Banner,UndeadMinerBanner,1
2988,Undead Viking Banner,UndeadVikingBanner,1
2989,White Cultist Archer Banner,WhiteCultistArcherBanner,n/a
2990,White Cultist Caster Banner,WhiteCultistCasterBanner,n/a
2991,White Cultist Fighter Banner,WhiteCultistFighterBanner,n/a
2992,Yellow Slime Banner,YellowSlimeBanner,1
2993,Yeti Banner,YetiBanner,1
2994,Zombie Elf Banner,ZombieElfBanner,1
2995,Sparky,SparkyPainting,1
2996,Vine Rope,VineRope,100
2997,Wormhole Potion,WormholePotion,20
2998,Summoner Emblem,SummonerEmblem,1
2999,Bewitching Table,BewitchingTable,1
3000,Alchemy Table,AlchemyTable,1
3001,Strange Brew,StrangeBrew,30
3002,Spelunker Glowstick,SpelunkerGlowstick,100
3003,Bone Arrow,BoneArrow,99
3004,Bone Torch,BoneTorch,100
3005,Vine Rope Coil,VineRopeCoil,10
3006,Life Drain,SoulDrain,1
3007,Dart Pistol,DartPistol,1
3008,Dart Rifle,DartRifle,1
3009,Crystal Dart,CrystalDart,99
3010,Cursed Dart,CursedDart,99
3011,Ichor Dart,IchorDart,99
3012,Chain Guillotines,ChainGuillotines,1
3013,Fetid Baghnakhs,FetidBaghnakhs,1
3014,Clinger Staff,ClingerStaff,1
3015,Putrid Scent,PutridScent,1
3016,Flesh Knuckles,FleshKnuckles,1
3017,Flower Boots,FlowerBoots,1
3018,Seedler,Seedler,1
3019,Hellwing Bow,HellwingBow,1
3020,Tendon Hook,TendonHook,1
3021,Thorn Hook,ThornHook,1
3022,Illuminant Hook,IlluminantHook,1
3023,Worm Hook,WormHook,1
3024,Skiphs' Blood,DevDye,3
3025,Purple Ooze Dye,PurpleOozeDye,3
3026,Reflective Silver Dye,ReflectiveSilverDye,3
3027,Reflective Gold Dye,ReflectiveGoldDye,3
3028,Blue Acid Dye,BlueAcidDye,3
3029,Daedalus Stormbow,DaedalusStormbow,1
3030,Flying Knife,FlyingKnife,1
3031,Bottomless Water Bucket,BottomlessBucket,1
3032,Super Absorbant Sponge,SuperAbsorbantSponge,1
3033,Gold Ring,GoldRing,1
3034,Coin Ring,CoinRing,1
3035,Greedy Ring,GreedyRing,1
3036,Fish Finder,FishFinder,1
3037,Weather Radio,WeatherRadio,1
3038,Hades Dye,HadesDye,3
3039,Twilight Dye,TwilightDye,3
3040,Acid Dye,AcidDye,3
3041,Glowing Mushroom Dye,MushroomDye,3
3042,Phase Dye,PhaseDye,3
3043,Magic Lantern,MagicLantern,1
3044,Music Box (Lunar Boss),MusicBoxLunarBoss,1
3045,Rainbow Torch,RainbowTorch,100
3046,Cursed Campfire,CursedCampfire,1
3047,Demon Campfire,DemonCampfire,1
3048,Frozen Campfire,FrozenCampfire,1
3049,Ichor Campfire,IchorCampfire,1
3050,Rainbow Campfire,RainbowCampfire,1
3051,Crystal Vile Shard,CrystalVileShard,1
3052,Shadowflame Bow,ShadowFlameBow,1
3053,Shadowflame Hex Doll,ShadowFlameHexDoll,1
3054,Shadowflame Knife,ShadowFlameKnife,1
3055,Acorns,PaintingAcorns,1
3056,Cold Snap,PaintingColdSnap,1
3057,Cursed Saint,PaintingCursedSaint,1
3058,Snowfellas,PaintingSnowfellas,1
3059,The Season,PaintingTheSeason,1
3060,Bone Rattle,BoneRattle,1
3061,Architect Gizmo Pack,ArchitectGizmoPack,1
3062,Crimson Heart,CrimsonHeart,1
3063,Meowmere,Meowmere,1
3064,Enchanted Sundial,Sundial,1
3065,Star Wrath,StarWrath,1
3066,Smooth Marble Block,MarbleBlock,100
3067,Hellstone Brick Wall,HellstoneBrickWall,400
3068,Guide to Plant Fiber Cordage,CordageGuide,1
3069,Wand of Sparking,WandofSparking,1
3070,Gold Bird Cage,GoldBirdCage,1
3071,Gold Bunny Cage,GoldBunnyCage,1
3072,Gold Butterfly Jar,GoldButterflyCage,1
3073,Gold Frog Cage,GoldFrogCage,1
3074,Gold Grasshopper Cage,GoldGrasshopperCage,1
3075,Gold Mouse Cage,GoldMouseCage,1
3076,Gold Worm Cage,GoldWormCage,1
3077,Silk Rope,SilkRope,100
3078,Web Rope,WebRope,100
3079,Silk Rope Coil,SilkRopeCoil,10
3080,Web Rope Coil,WebRopeCoil,10
3081,Marble Block,Marble,100
3082,Marble Wall,MarbleWall,400
3083,Smooth Marble Wall,MarbleBlockWall,400
3084,Radar,Radar,1
3085,Golden Lock Box,LockBox,5
3086,Granite Block,Granite,100
3087,Smooth Granite Block,GraniteBlock,100
3088,Granite Wall,GraniteWall,400
3089,Smooth Granite Wall,GraniteBlockWall,400
3090,Royal Gel,RoyalGel,1
3091,Key of Night,NightKey,1
3092,Key of Light,LightKey,1
3093,Herb Bag,HerbBag,2
3094,Javelin,Javelin,99
3095,Tally Counter,TallyCounter,1
3096,Sextant,Sextant,1
3097,Shield of Cthulhu,EoCShield,1
3098,Butcher's Chainsaw,ButchersChainsaw,1
3099,Stopwatch,Stopwatch,1
3100,Meteorite Brick,MeteoriteBrick,100
3101,Meteorite Brick Wall,MeteoriteBrickWall,400
3102,Metal Detector,MetalDetector,1
3103,Endless Quiver,EndlessQuiver,1
3104,Endless Musket Pouch,EndlessMusketPouch,1
3105,Toxic Flask,ToxicFlask,1
3106,Psycho Knife,PsychoKnife,1
3107,Nail Gun,NailGun,1
3108,Nail,Nail,99
3109,Night Vision Helmet,NightVisionHelmet,1
3110,Celestial Shell,CelestialShell,1
3111,Pink Gel,PinkGel,5
3112,Bouncy Glowstick,BouncyGlowstick,100
3113,Pink Slime Block,PinkSlimeBlock,100
3114,Pink Torch,PinkTorch,100
3115,Bouncy Bomb,BouncyBomb,99
3116,Bouncy Grenade,BouncyGrenade,99
3117,Peace Candle,PeaceCandle,1
3118,Lifeform Analyzer,LifeformAnalyzer,1
3119,DPS Meter,DPSMeter,1
3120,Fisherman's Pocket Guide,FishermansGuide,1
3121,Goblin Tech,GoblinTech,1
3122,R.E.K. 3000,REK,1
3123,PDA,PDA,1
3124,Cell Phone,CellPhone,1
3125,Granite Chest,GraniteChest,1
3126,Meteorite Clock,MeteoriteClock,1
3127,Marble Clock,MarbleClock,1
3128,Granite Clock,GraniteClock,1
3129,Meteorite Door,MeteoriteDoor,1
3130,Marble Door,MarbleDoor,1
3131,Granite Door,GraniteDoor,1
3132,Meteorite Dresser,MeteoriteDresser,1
3133,Marble Dresser,MarbleDresser,1
3134,Granite Dresser,GraniteDresser,1
3135,Meteorite Lamp,MeteoriteLamp,1
3136,Marble Lamp,MarbleLamp,1
3137,Granite Lamp,GraniteLamp,1
3138,Meteorite Lantern,MeteoriteLantern,1
3139,Marble Lantern,MarbleLantern,1
3140,Granite Lantern,GraniteLantern,1
3141,Meteorite Piano,MeteoritePiano,1
3142,Marble Piano,MarblePiano,1
3143,Granite Piano,GranitePiano,1
3144,Meteorite Platform,MeteoritePlatform,200
3145,Marble Platform,MarblePlatform,200
3146,Granite Platform,GranitePlatform,200
3147,Meteorite Sink,MeteoriteSink,1
3148,Marble Sink,MarbleSink,1
3149,Granite Sink,GraniteSink,1
3150,Meteorite Sofa,MeteoriteSofa,1
3151,Marble Sofa,MarbleSofa,1
3152,Granite Sofa,GraniteSofa,1
3153,Meteorite Table,MeteoriteTable,1
3154,Marble Table,MarbleTable,1
3155,Granite Table,GraniteTable,1
3156,Meteorite Work Bench,MeteoriteWorkBench,1
3157,Marble Work Bench,MarbleWorkBench,1
3158,Granite Work Bench,GraniteWorkBench,1
3159,Meteorite Bathtub,MeteoriteBathtub,1
3160,Marble Bathtub,MarbleBathtub,1
3161,Granite Bathtub,GraniteBathtub,1
3162,Meteorite Bed,MeteoriteBed,1
3163,Marble Bed,MarbleBed,1
3164,Granite Bed,GraniteBed,1
3165,Meteorite Bookcase,MeteoriteBookcase,1
3166,Marble Bookcase,MarbleBookcase,1
3167,Granite Bookcase,GraniteBookcase,1
3168,Meteorite Candelabra,MeteoriteCandelabra,1
3169,Marble Candelabra,MarbleCandelabra,1
3170,Granite Candelabra,GraniteCandelabra,1
3171,Meteorite Candle,MeteoriteCandle,1
3172,Marble Candle,MarbleCandle,1
3173,Granite Candle,GraniteCandle,1
3174,Meteorite Chair,MeteoriteChair,1
3175,Marble Chair,MarbleChair,1
3176,Granite Chair,GraniteChair,1
3177,Meteorite Chandelier,MeteoriteChandelier,1
3178,Marble Chandelier,MarbleChandelier,1
3179,Granite Chandelier,GraniteChandelier,1
3180,Meteorite Chest,MeteoriteChest,1
3181,Marble Chest,MarbleChest,1
3182,Magic Water Dropper,MagicWaterDropper,1
3183,Golden Bug Net,GoldenBugNet,1
3184,Magic Lava Dropper,MagicLavaDropper,1
3185,Magic Honey Dropper,MagicHoneyDropper,1
3186,Empty Dropper,EmptyDropper,1
3187,Gladiator Helmet,GladiatorHelmet,1
3188,Gladiator Breastplate,GladiatorBreastplate,1
3189,Gladiator Leggings,GladiatorLeggings,1
3190,Reflective Dye,ReflectiveDye,3
3191,Enchanted Nightcrawler,EnchantedNightcrawler,5
3192,Grubby,Grubby,5
3193,Sluggy,Sluggy,5
3194,Buggy,Buggy,5
3195,Grub Soup,GrubSoup,5
3196,Bomb Fish,BombFish,99
3197,Frost Daggerfish,FrostDaggerfish,99
3198,Sharpening Station,SharpeningStation,1
3199,Ice Mirror,IceMirror,1
3200,Sailfish Boots,SailfishBoots,1
3201,Tsunami in a Bottle,TsunamiInABottle,1
3202,Target Dummy,TargetDummy,1
3203,Corrupt Crate,CorruptFishingCrate,5
3204,Crimson Crate,CrimsonFishingCrate,5
3205,Dungeon Crate,DungeonFishingCrate,5
3206,Sky Crate,FloatingIslandFishingCrate,5
3207,Hallowed Crate,HallowedFishingCrate,5
3208,Jungle Crate,JungleFishingCrate,5
3209,Crystal Serpent,CrystalSerpent,1
3210,Toxikarp,Toxikarp,1
3211,Bladetongue,Bladetongue,1
3212,Shark Tooth Necklace,SharkToothNecklace,1
3213,Money Trough,MoneyTrough,1
3214,Bubble,Bubble,100
3215,Daybloom Planter Box,DayBloomPlanterBox,25
3216,Moonglow Planter Box,MoonglowPlanterBox,25
3217,Deathweed Planter Box,CorruptPlanterBox,25
3218,Deathweed Planter Box,CrimsonPlanterBox,25
3219,Blinkroot Planter Box,BlinkrootPlanterBox,25
3220,Waterleaf Planter Box,WaterleafPlanterBox,25
3221,Shiverthorn Planter Box,ShiverthornPlanterBox,25
3222,Fireblossom Planter Box,FireBlossomPlanterBox,25
3223,Brain of Confusion,BrainOfConfusion,1
3224,Worm Scarf,WormScarf,1
3225,Balloon Pufferfish,BalloonPufferfish,1
3226,Lazure's Valkyrie Circlet,BejeweledValkyrieHead,1
3227,Lazure's Valkyrie Cloak,BejeweledValkyrieBody,1
3228,Lazure's Barrier Platform,BejeweledValkyrieWing,1
3229,Golden Cross Grave Marker,RichGravestone1,2
3230,Golden Tombstone,RichGravestone2,2
3231,Golden Grave Marker,RichGravestone3,2
3232,Golden Gravestone,RichGravestone4,2
3233,Golden Headstone,RichGravestone5,2
3234,Crystal Block,CrystalBlock,100
3235,Music Box (Martian Madness),MusicBoxMartians,1
3236,Music Box (Pirate Invasion),MusicBoxPirates,1
3237,Music Box (Hell),MusicBoxHell,1
3238,Crystal Block Wall,CrystalBlockWall,400
3239,Trap Door,Trapdoor,1
3240,Tall Gate,TallGate,1
3241,Sharkron Balloon,SharkronBalloon,1
3242,Tax Collector's Hat,TaxCollectorHat,1
3243,Tax Collector's Suit,TaxCollectorSuit,1
3244,Tax Collector's Pants,TaxCollectorPants,1
3245,Bone Glove,BoneGlove,1
3246,Clothier's Jacket,ClothierJacket,1
3247,Clothier's Pants,ClothierPants,1
3248,Dye Trader's Turban,DyeTraderTurban,1
3249,Deadly Sphere Staff,DeadlySphereStaff,1
3250,Green Horseshoe Balloon,BalloonHorseshoeFart,1
3251,Amber Horseshoe Balloon,BalloonHorseshoeHoney,1
3252,Pink Horseshoe Balloon,BalloonHorseshoeSharkron,1
3253,Lava Lamp,LavaLamp,1
3254,Enchanted Nightcrawler Cage,CageEnchantedNightcrawler,1
3255,Buggy Cage,CageBuggy,1
3256,Grubby Cage,CageGrubby,1
3257,Sluggy Cage,CageSluggy,1
3258,Slap Hand,SlapHand,1
3259,Twilight Hair Dye,TwilightHairDye,1
3260,Blessed Apple,BlessedApple,1
3261,Spectre Bar,SpectreBar,25
3262,Code 1,Code1,1
3263,Buccaneer Bandana,BuccaneerBandana,1
3264,Buccaneer Tunic,BuccaneerShirt,1
3265,Buccaneer Pantaloons,BuccaneerPants,1
3266,Obsidian Outlaw Hat,ObsidianHelm,1
3267,Obsidian Longcoat,ObsidianShirt,1
3268,Obsidian Pants,ObsidianPants,1
3269,Medusa Head,MedusaHead,1
3270,Item Frame,ItemFrame,1
3271,Sandstone Block,Sandstone,100
3272,Hardened Sand Block,HardenedSand,100
3273,Sandstone Wall,SandstoneWall,400
3274,Hardened Ebonsand Block,CorruptHardenedSand,100
3275,Hardened Crimsand Block,CrimsonHardenedSand,100
3276,Ebonsandstone Block,CorruptSandstone,100
3277,Crimsandstone Block,CrimsonSandstone,100
3278,Wooden Yoyo,WoodYoyo,1
3279,Malaise,CorruptYoyo,1
3280,Artery,CrimsonYoyo,1
3281,Amazon,JungleYoyo,1
3282,Cascade,Cascade,1
3283,Chik,Chik,1
3284,Code 2,Code2,1
3285,Rally,Rally,1
3286,Yelets,Yelets,1
3287,Red's Throw,RedsYoyo,1
3288,Valkyrie Yoyo,ValkyrieYoyo,1
3289,Amarok,Amarok,1
3290,Hel-Fire,HelFire,1
3291,Kraken,Kraken,1
3292,The Eye of Cthulhu,TheEyeOfCthulhu,1
3293,Red String,RedString,1
3294,Orange String,OrangeString,1
3295,Yellow String,YellowString,1
3296,Lime String,LimeString,1
3297,Green String,GreenString,1
3298,Teal String,TealString,1
3299,Cyan String,CyanString,1
3300,Sky Blue String,SkyBlueString,1
3301,Blue String,BlueString,1
3302,Purple String,PurpleString,1
3303,Violet String,VioletString,1
3304,Pink String,PinkString,1
3305,Brown String,BrownString,1
3306,White String,WhiteString,1
3307,Rainbow String,RainbowString,1
3308,Black String,BlackString,1
3309,Black Counterweight,BlackCounterweight,1
3310,Blue Counterweight,BlueCounterweight,1
3311,Green Counterweight,GreenCounterweight,1
3312,Purple Counterweight,PurpleCounterweight,1
3313,Red Counterweight,RedCounterweight,1
3314,Yellow Counterweight,YellowCounterweight,1
3315,Format:C,FormatC,1
3316,Gradient,Gradient,1
3317,Valor,Valor,1
3318,Treasure Bag (King Slime),KingSlimeBossBag,3
3319,Treasure Bag (Eye of Cthulhu),EyeOfCthulhuBossBag,3
3320,Treasure Bag (Eater of Worlds),EaterOfWorldsBossBag,3
3321,Treasure Bag (Brain of Cthulhu),BrainOfCthulhuBossBag,3
3322,Treasure Bag (Queen Bee),QueenBeeBossBag,3
3323,Treasure Bag (Skeletron),SkeletronBossBag,3
3324,Treasure Bag (Wall of Flesh),WallOfFleshBossBag,3
3325,Treasure Bag (The Destroyer),DestroyerBossBag,3
3326,Treasure Bag (The Twins),TwinsBossBag,3
3327,Treasure Bag (Skeletron Prime),SkeletronPrimeBossBag,3
3328,Treasure Bag (Plantera),PlanteraBossBag,3
3329,Treasure Bag (Golem),GolemBossBag,3
3330,Treasure Bag (Duke Fishron),FishronBossBag,3
3331,Treasure Bag (Lunatic Cultist),CultistBossBag,n/a
3332,Treasure Bag (Moon Lord),MoonLordBossBag,3
3333,Hive Pack,HiveBackpack,1
3334,Yoyo Glove,YoYoGlove,1
3335,Demon Heart,DemonHeart,1
3336,Spore Sac,SporeSac,1
3337,Shiny Stone,ShinyStone,1
3338,Hardened Pearlsand Block,HallowHardenedSand,100
3339,Pearlsandstone Block,HallowSandstone,100
3340,Hardened Sand Wall,HardenedSandWall,400
3341,Hardened Ebonsand Wall,CorruptHardenedSandWall,400
3342,Hardened Crimsand Wall,CrimsonHardenedSandWall,400
3343,Hardened Pearlsand Wall,HallowHardenedSandWall,400
3344,Ebonsandstone Wall,CorruptSandstoneWall,400
3345,Crimsandstone Wall,CrimsonSandstoneWall,400
3346,Pearlsandstone Wall,HallowSandstoneWall,400
3347,Desert Fossil,DesertFossil,200
3348,Desert Fossil Wall,DesertFossilWall,400
3349,Exotic Scimitar,DyeTradersScimitar,1
3350,Paintball Gun,PainterPaintballGun,1
3351,Classy Cane,TaxCollectorsStickOfDoom,1
3352,Stylish Scissors,StylistKilLaKillScissorsIWish,1
3353,Mechanical Cart,MinecartMech,1
3354,Mechanical Wheel Piece,MechanicalWheelPiece,1
3355,Mechanical Wagon Piece,MechanicalWagonPiece,1
3356,Mechanical Battery Piece,MechanicalBatteryPiece,1
3357,Lunatic Cultist Trophy,AncientCultistTrophy,1
3358,Martian Saucer Trophy,MartianSaucerTrophy,1
3359,Flying Dutchman Trophy,FlyingDutchmanTrophy,1
3360,Living Mahogany Wand,LivingMahoganyWand,1
3361,Rich Mahogany Leaf Wand,LivingMahoganyLeafWand,1
3362,Fallen Tuxedo Shirt,FallenTuxedoShirt,1
3363,Fallen Tuxedo Pants,FallenTuxedoPants,1
3364,Fireplace,Fireplace,1
3365,Chimney,Chimney,1
3366,Yoyo Bag,YoyoBag,1
3367,Shrimpy Truffle,ShrimpyTruffle,1
3368,Arkhalis,Arkhalis,1
3369,Confetti Cannon,ConfettiCannon,1
3370,Music Box (The Towers),MusicBoxTowers,1
3371,Music Box (Goblin Invasion),MusicBoxGoblins,1
3372,Lunatic Cultist Mask,BossMaskCultist,1
3373,Moon Lord Mask,BossMaskMoonlord,1
3374,Fossil Helmet,FossilHelm,1
3375,Fossil Plate,FossilShirt,1
3376,Fossil Greaves,FossilPants,1
3377,Amber Staff,AmberStaff,1
3378,Bone Javelin,BoneJavelin,99
3379,Bone Throwing Knife,BoneDagger,99
3380,Sturdy Fossil,FossilOre,100
3381,Stardust Helmet,StardustHelmet,1
3382,Stardust Plate,StardustBreastplate,1
3383,Stardust Leggings,StardustLeggings,1
3384,Portal Gun,PortalGun,1
3385,Strange Plant,StrangePlant1,3
3386,Strange Plant,StrangePlant2,3
3387,Strange Plant,StrangePlant3,3
3388,Strange Plant,StrangePlant4,3
3389,Terrarian,Terrarian,1
3390,Goblin Warlock Banner,GoblinSummonerBanner,1
3391,Salamander Banner,SalamanderBanner,1
3392,Giant Shelly Banner,GiantShellyBanner,1
3393,Crawdad Banner,CrawdadBanner,1
3394,Fritz Banner,FritzBanner,1
3395,Creature From The Deep Banner,CreatureFromTheDeepBanner,1
3396,Dr. Man Fly Banner,DrManFlyBanner,1
3397,Mothron Banner,MothronBanner,1
3398,Severed Hand Banner,SeveredHandBanner,n/a
3399,The Possessed Banner,ThePossessedBanner,1
3400,Butcher Banner,ButcherBanner,1
3401,Psycho Banner,PsychoBanner,1
3402,Deadly Sphere Banner,DeadlySphereBanner,1
3403,Nailhead Banner,NailheadBanner,1
3404,Poisonous Spore Banner,PoisonousSporeBanner,n/a
3405,Medusa Banner,MedusaBanner,1
3406,Hoplite Banner,GreekSkeletonBanner,1
3407,Granite Elemental Banner,GraniteFlyerBanner,1
3408,Granite Golem Banner,GraniteGolemBanner,1
3409,Blood Zombie Banner,BloodZombieBanner,1
3410,Drippler Banner,DripplerBanner,1
3411,Tomb Crawler Banner,TombCrawlerBanner,1
3412,Dune Splicer Banner,DuneSplicerBanner,1
3413,Antlion Swarmer Banner,FlyingAntlionBanner,1
3414,Antlion Charger Banner,WalkingAntlionBanner,1
3415,Ghoul Banner,DesertGhoulBanner,1
3416,Lamia Banner,DesertLamiaBanner,1
3417,Desert Spirit Banner,DesertDjinnBanner,1
3418,Basilisk Banner,DesertBasiliskBanner,1
3419,Sand Poacher Banner,RavagerScorpionBanner,1
3420,Stargazer Banner,StardustSoldierBanner,1
3421,Milkyway Weaver Banner,StardustWormBanner,1
3422,Flow Invader Banner,StardustJellyfishBanner,1
3423,Twinkle Popper Banner,StardustSpiderBanner,1
3424,Mini Star Cell Banner,StardustSmallCellBanner,1
3425,Star Cell Banner,StardustLargeCellBanner,1
3426,Corite Banner,SolarCoriteBanner,1
3427,Sroller Banner,SolarSrollerBanner,1
3428,Crawltipede Banner,SolarCrawltipedeBanner,1
3429,Drakomire Rider Banner,SolarDrakomireRiderBanner,1
3430,Drakomire Banner,SolarDrakomireBanner,1
3431,Selenian Banner,SolarSolenianBanner,1
3432,Predictor Banner,NebulaSoldierBanner,1
3433,Brain Suckler Banner,NebulaHeadcrabBanner,1
3434,Nebula Floater Banner,NebulaBrainBanner,1
3435,Evolution Beast Banner,NebulaBeastBanner,1
3436,Alien Larva Banner,VortexLarvaBanner,1
3437,Alien Queen Banner,VortexHornetQueenBanner,1
3438,Alien Hornet Banner,VortexHornetBanner,1
3439,Vortexian Banner,VortexSoldierBanner,1
3440,Storm Diver Banner,VortexRiflemanBanner,1
3441,Pirate Captain Banner,PirateCaptainBanner,1
3442,Pirate Deadeye Banner,PirateDeadeyeBanner,1
3443,Pirate Corsair Banner,PirateCorsairBanner,1
3444,Pirate Crossbower Banner,PirateCrossbowerBanner,1
3445,Martian Walker Banner,MartianWalkerBanner,1
3446,Red Devil Banner,RedDevilBanner,1
3447,Pink Jellyfish Banner,PinkJellyfishBanner,1
3448,Green Jellyfish Banner,GreenJellyfishBanner,1
3449,Dark Mummy Banner,DarkMummyBanner,1
3450,Light Mummy Banner,LightMummyBanner,1
3451,Angry Bones Banner,AngryBonesBanner,1
3452,Ice Tortoise Banner,IceTortoiseBanner,1
3453,Damage Booster,NebulaPickup1,n/a
3454,Life Booster,NebulaPickup2,n/a
3455,Mana Booster,NebulaPickup3,n/a
3456,Vortex Fragment,FragmentVortex,25
3457,Nebula Fragment,FragmentNebula,25
3458,Solar Fragment,FragmentSolar,25
3459,Stardust Fragment,FragmentStardust,25
3460,Luminite,LunarOre,100
3461,Luminite Brick,LunarBrick,100
3462,(Deprecated),StardustAxe,n/a
3463,(Deprecated),StardustChainsaw,n/a
3464,Stardust Drill,StardustDrill,1
3465,(Deprecated),StardustHammer,n/a
3466,Stardust Pickaxe,StardustPickaxe,1
3467,Luminite Bar,LunarBar,25
3468,Solar Wings,WingsSolar,1
3469,Vortex Booster,WingsVortex,1
3470,Nebula Mantle,WingsNebula,1
3471,Stardust Wings,WingsStardust,1
3472,Luminite Brick Wall,LunarBrickWall,400
3473,Solar Eruption,SolarEruption,1
3474,Stardust Cell Staff,StardustCellStaff,1
3475,Vortex Beater,VortexBeater,1
3476,Nebula Arcanum,NebulaArcanum,1
3477,Blood Water,BloodWater,99
3478,Wedding Veil,TheBrideHat,1
3479,Wedding Dress,TheBrideDress,1
3480,Platinum Bow,PlatinumBow,1
3481,Platinum Hammer,PlatinumHammer,1
3482,Platinum Axe,PlatinumAxe,1
3483,Platinum Shortsword,PlatinumShortsword,1
3484,Platinum Broadsword,PlatinumBroadsword,1
3485,Platinum Pickaxe,PlatinumPickaxe,1
3486,Tungsten Bow,TungstenBow,1
3487,Tungsten Hammer,TungstenHammer,1
3488,Tungsten Axe,TungstenAxe,1
3489,Tungsten Shortsword,TungstenShortsword,1
3490,Tungsten Broadsword,TungstenBroadsword,1
3491,Tungsten Pickaxe,TungstenPickaxe,1
3492,Lead Bow,LeadBow,1
3493,Lead Hammer,LeadHammer,1
3494,Lead Axe,LeadAxe,1
3495,Lead Shortsword,LeadShortsword,1
3496,Lead Broadsword,LeadBroadsword,1
3497,Lead Pickaxe,LeadPickaxe,1
3498,Tin Bow,TinBow,1
3499,Tin Hammer,TinHammer,1
3500,Tin Axe,TinAxe,1
3501,Tin Shortsword,TinShortsword,1
3502,Tin Broadsword,TinBroadsword,1
3503,Tin Pickaxe,TinPickaxe,1
3504,Copper Bow,CopperBow,1
3505,Copper Hammer,CopperHammer,1
3506,Copper Axe,CopperAxe,1
3507,Copper Shortsword,CopperShortsword,1
3508,Copper Broadsword,CopperBroadsword,1
3509,Copper Pickaxe,CopperPickaxe,1
3510,Silver Bow,SilverBow,1
3511,Silver Hammer,SilverHammer,1
3512,Silver Axe,SilverAxe,1
3513,Silver Shortsword,SilverShortsword,1
3514,Silver Broadsword,SilverBroadsword,1
3515,Silver Pickaxe,SilverPickaxe,1
3516,Gold Bow,GoldBow,1
3517,Gold Hammer,GoldHammer,1
3518,Gold Axe,GoldAxe,1
3519,Gold Shortsword,GoldShortsword,1
3520,Gold Broadsword,GoldBroadsword,1
3521,Gold Pickaxe,GoldPickaxe,1
3522,Solar Flare Hamaxe,LunarHamaxeSolar,1
3523,Vortex Hamaxe,LunarHamaxeVortex,1
3524,Nebula Hamaxe,LunarHamaxeNebula,1
3525,Stardust Hamaxe,LunarHamaxeStardust,1
3526,Solar Dye,SolarDye,3
3527,Nebula Dye,NebulaDye,3
3528,Vortex Dye,VortexDye,3
3529,Stardust Dye,StardustDye,3
3530,Void Dye,VoidDye,3
3531,Stardust Dragon Staff,StardustDragonStaff,1
3532,Bacon,Bacon,5
3533,Shifting Sands Dye,ShiftingSandsDye,3
3534,Mirage Dye,MirageDye,3
3535,Shifting Pearlsands Dye,ShiftingPearlSandsDye,3
3536,Vortex Monolith,VortexMonolith,1
3537,Nebula Monolith,NebulaMonolith,1
3538,Stardust Monolith,StardustMonolith,1
3539,Solar Monolith,SolarMonolith,1
3540,Phantasm,Phantasm,1
3541,Last Prism,LastPrism,1
3542,Nebula Blaze,NebulaBlaze,1
3543,Daybreak,DayBreak,1
3544,Super Healing Potion,SuperHealingPotion,30
3545,Detonator,Detonator,1
3546,Celebration,FireworksLauncher,1
3547,Bouncy Dynamite,BouncyDynamite,99
3548,Happy Grenade,PartyGirlGrenade,99
3549,Ancient Manipulator,LunarCraftingStation,1
3550,Flame and Silver Dye,FlameAndSilverDye,3
3551,Green Flame and Silver Dye,GreenFlameAndSilverDye,3
3552,Blue Flame and Silver Dye,BlueFlameAndSilverDye,3
3553,Reflective Copper Dye,ReflectiveCopperDye,3
3554,Reflective Obsidian Dye,ReflectiveObsidianDye,3
3555,Reflective Metal Dye,ReflectiveMetalDye,3
3556,Midnight Rainbow Dye,MidnightRainbowDye,3
3557,Black and White Dye,BlackAndWhiteDye,3
3558,Bright Silver Dye,BrightSilverDye,3
3559,Silver and Black Dye,SilverAndBlackDye,3
3560,Red Acid Dye,RedAcidDye,3
3561,Gel Dye,GelDye,3
3562,Pink Gel Dye,PinkGelDye,3
3563,Red Squirrel,SquirrelRed,5
3564,Gold Squirrel,SquirrelGold,3
3565,Red Squirrel Cage,SquirrelOrangeCage,1
3566,Gold Squirrel Cage,SquirrelGoldCage,1
3567,Luminite Bullet,MoonlordBullet,99
3568,Luminite Arrow,MoonlordArrow,99
3569,Lunar Portal Staff,MoonlordTurretStaff,1
3570,Lunar Flare,LunarFlareBook,1
3571,Rainbow Crystal Staff,RainbowCrystalStaff,1
3572,Lunar Hook,LunarHook,1
3573,Solar Fragment Block,LunarBlockSolar,100
3574,Vortex Fragment Block,LunarBlockVortex,100
3575,Nebula Fragment Block,LunarBlockNebula,100
3576,Stardust Fragment Block,LunarBlockStardust,100
3577,Suspicious Looking Tentacle,SuspiciousLookingTentacle,1
3578,Yoraiz0r's Uniform,Yoraiz0rShirt,1
3579,Yoraiz0r's Skirt,Yoraiz0rPants,1
3580,Yoraiz0r's Spell,Yoraiz0rWings,1
3581,Yoraiz0r's Scowl,Yoraiz0rDarkness,1
3582,Jim's Wings,JimsWings,1
3583,Yoraiz0r's Recolored Goggles,Yoraiz0rHead,1
3584,Living Leaf Wall,LivingLeafWall,400
3585,Skiphs' Mask,SkiphsHelm,1
3586,Skiphs' Skin,SkiphsShirt,1
3587,Skiphs' Bear Butt,SkiphsPants,1
3588,Skiphs' Paws,SkiphsWings,1
3589,Loki's Helmet,LokisHelm,1
3590,Loki's Breastplate,LokisShirt,1
3591,Loki's Greaves,LokisPants,1
3592,Loki's Wings,LokisWings,1
3593,Sand Slime Banner,SandSlimeBanner,1
3594,Sea Snail Banner,SeaSnailBanner,1
3595,Moon Lord Trophy,MoonLordTrophy,1
3596,"Not a Kid, nor a Squid",MoonLordPainting,1
3597,Burning Hades Dye,BurningHadesDye,3
3598,Grim Dye,GrimDye,3
3599,Loki's Dye,LokisDye,3
3600,Shadowflame Hades Dye,ShadowflameHadesDye,3
3601,Celestial Sigil,CelestialSigil,3
3602,Logic Gate Lamp (Off),LogicGateLamp_Off,5
3603,Logic Gate (AND),LogicGate_AND,5
3604,Logic Gate (OR),LogicGate_OR,5
3605,Logic Gate (NAND),LogicGate_NAND,5
3606,Logic Gate (NOR),LogicGate_NOR,5
3607,Logic Gate (XOR),LogicGate_XOR,5
3608,Logic Gate (XNOR),LogicGate_NXOR,5
3609,Conveyor Belt (Clockwise),ConveyorBeltLeft,100
3610,Conveyor Belt (Counter Clockwise),ConveyorBeltRight,100
3611,The Grand Design,WireKite,1
3612,Yellow Wrench,YellowWrench,1
3613,Logic Sensor (Day),LogicSensor_Sun,5
3614,Logic Sensor (Night),LogicSensor_Moon,5
3615,Logic Sensor (Player Above),LogicSensor_Above,5
3616,Junction Box,WirePipe,25
3617,Announcement Box,AnnouncementBox,1
3618,Logic Gate Lamp (On),LogicGateLamp_On,5
3619,Mechanical Lens,MechanicalLens,1
3620,Actuation Rod,ActuationRod,1
3621,Red Team Block,TeamBlockRed,100
3622,Red Team Platform,TeamBlockRedPlatform,200
3623,Static Hook,StaticHook,1
3624,Presserator,ActuationAccessory,1
3625,Multicolor Wrench,MulticolorWrench,1
3626,Pink Weighted Pressure Plate,WeightedPressurePlatePink,5
3627,Engineering Helmet,EngineeringHelmet,1
3628,Companion Cube,CompanionCube,1
3629,Wire Bulb,WireBulb,5
3630,Orange Weighted Pressure Plate,WeightedPressurePlateOrange,5
3631,Purple Weighted Pressure Plate,WeightedPressurePlatePurple,5
3632,Cyan Weighted Pressure Plate,WeightedPressurePlateCyan,5
3633,Green Team Block,TeamBlockGreen,100
3634,Blue Team Block,TeamBlockBlue,100
3635,Yellow Team Block,TeamBlockYellow,100
3636,Pink Team Block,TeamBlockPink,100
3637,White Team Block,TeamBlockWhite,100
3638,Green Team Platform,TeamBlockGreenPlatform,200
3639,Blue Team Platform,TeamBlockBluePlatform,200
3640,Yellow Team Platform,TeamBlockYellowPlatform,200
3641,Pink Team Platform,TeamBlockPinkPlatform,200
3642,White Team Platform,TeamBlockWhitePlatform,200
3643,Large Amber,LargeAmber,1
3644,Ruby Gem Lock,GemLockRuby,1
3645,Sapphire Gem Lock,GemLockSapphire,1
3646,Emerald Gem Lock,GemLockEmerald,1
3647,Topaz Gem Lock,GemLockTopaz,1
3648,Amethyst Gem Lock,GemLockAmethyst,1
3649,Diamond Gem Lock,GemLockDiamond,1
3650,Amber Gem Lock,GemLockAmber,1
3651,Squirrel Statue,SquirrelStatue,1
3652,Butterfly Statue,ButterflyStatue,1
3653,Worm Statue,WormStatue,1
3654,Firefly Statue,FireflyStatue,1
3655,Scorpion Statue,ScorpionStatue,1
3656,Snail Statue,SnailStatue,1
3657,Grasshopper Statue,GrasshopperStatue,1
3658,Mouse Statue,MouseStatue,1
3659,Duck Statue,DuckStatue,1
3660,Penguin Statue,PenguinStatue,1
3661,Frog Statue,FrogStatue,1
3662,Buggy Statue,BuggyStatue,1
3663,Logic Gate Lamp (Faulty),LogicGateLamp_Faulty,5
3664,Portal Gun Station,PortalGunStation,1
3665,Trapped Chest,Fake_Chest,1
3666,Trapped Gold Chest,Fake_GoldChest,1
3667,Trapped Shadow Chest,Fake_ShadowChest,1
3668,Trapped Ebonwood Chest,Fake_EbonwoodChest,1
3669,Trapped Rich Mahogany Chest,Fake_RichMahoganyChest,1
3670,Trapped Pearlwood Chest,Fake_PearlwoodChest,1
3671,Trapped Ivy Chest,Fake_IvyChest,1
3672,Trapped Frozen Chest,Fake_IceChest,1
3673,Trapped Living Wood Chest,Fake_LivingWoodChest,1
3674,Trapped Skyware Chest,Fake_SkywareChest,1
3675,Trapped Shadewood Chest,Fake_ShadewoodChest,1
3676,Trapped Web Covered Chest,Fake_WebCoveredChest,1
3677,Trapped Lihzahrd Chest,Fake_LihzahrdChest,1
3678,Trapped Water Chest,Fake_WaterChest,1
3679,Trapped Jungle Chest,Fake_JungleChest,1
3680,Trapped Corruption Chest,Fake_CorruptionChest,1
3681,Trapped Crimson Chest,Fake_CrimsonChest,1
3682,Trapped Hallowed Chest,Fake_HallowedChest,1
3683,Trapped Ice Chest,Fake_FrozenChest,1
3684,Trapped Dynasty Chest,Fake_DynastyChest,1
3685,Trapped Honey Chest,Fake_HoneyChest,1
3686,Trapped Steampunk Chest,Fake_SteampunkChest,1
3687,Trapped Palm Wood Chest,Fake_PalmWoodChest,1
3688,Trapped Mushroom Chest,Fake_MushroomChest,1
3689,Trapped Boreal Wood Chest,Fake_BorealWoodChest,1
3690,Trapped Slime Chest,Fake_SlimeChest,1
3691,Trapped Green Dungeon Chest,Fake_GreenDungeonChest,1
3692,Trapped Pink Dungeon Chest,Fake_PinkDungeonChest,1
3693,Trapped Blue Dungeon Chest,Fake_BlueDungeonChest,1
3694,Trapped Bone Chest,Fake_BoneChest,1
3695,Trapped Cactus Chest,Fake_CactusChest,1
3696,Trapped Flesh Chest,Fake_FleshChest,1
3697,Trapped Obsidian Chest,Fake_ObsidianChest,1
3698,Trapped Pumpkin Chest,Fake_PumpkinChest,1
3699,Trapped Spooky Chest,Fake_SpookyChest,1
3700,Trapped Glass Chest,Fake_GlassChest,1
3701,Trapped Martian Chest,Fake_MartianChest,1
3702,Trapped Meteorite Chest,Fake_MeteoriteChest,1
3703,Trapped Granite Chest,Fake_GraniteChest,1
3704,Trapped Marble Chest,Fake_MarbleChest,1
3705,(Deprecated),Fake_newchest1,n/a
3706,(Deprecated),Fake_newchest2,n/a
3707,Teal Pressure Pad,ProjectilePressurePad,5
3708,Wall Creeper Statue,WallCreeperStatue,1
3709,Unicorn Statue,UnicornStatue,1
3710,Drippler Statue,DripplerStatue,1
3711,Wraith Statue,WraithStatue,1
3712,Bone Skeleton Statue,BoneSkeletonStatue,1
3713,Undead Viking Statue,UndeadVikingStatue,1
3714,Medusa Statue,MedusaStatue,1
3715,Harpy Statue,HarpyStatue,1
3716,Pigron Statue,PigronStatue,1
3717,Hoplite Statue,HopliteStatue,1
3718,Granite Golem Statue,GraniteGolemStatue,1
3719,Armed Zombie Statue,ZombieArmStatue,1
3720,Blood Zombie Statue,BloodZombieStatue,1
3721,Angler Tackle Bag,AnglerTackleBag,1
3722,Geyser,GeyserTrap,5
3723,Ultrabright Campfire,UltraBrightCampfire,1
3724,Bone Campfire,BoneCampfire,1
3725,Pixel Box,PixelBox,25
3726,Liquid Sensor (Water),LogicSensor_Water,5
3727,Liquid Sensor (Lava),LogicSensor_Lava,5
3728,Liquid Sensor (Honey),LogicSensor_Honey,5
3729,Liquid Sensor (Any),LogicSensor_Liquid,5
3730,Bundled Party Balloons,PartyBundleOfBalloonsAccessory,1
3731,Balloon Animal,PartyBalloonAnimal,1
3732,Party Hat,PartyHat,1
3733,Silly Sunflower Petals,FlowerBoyHat,1
3734,Silly Sunflower Tops,FlowerBoyShirt,1
3735,Silly Sunflower Bottoms,FlowerBoyPants,1
3736,Silly Pink Balloon,SillyBalloonPink,100
3737,Silly Purple Balloon,SillyBalloonPurple,100
3738,Silly Green Balloon,SillyBalloonGreen,100
3739,Blue Streamer,SillyStreamerBlue,100
3740,Green Streamer,SillyStreamerGreen,100
3741,Pink Streamer,SillyStreamerPink,100
3742,Silly Balloon Machine,SillyBalloonMachine,1
3743,Silly Tied Balloon (Pink),SillyBalloonTiedPink,1
3744,Silly Tied Balloon (Purple),SillyBalloonTiedPurple,1
3745,Silly Tied Balloon (Green),SillyBalloonTiedGreen,1
3746,Pigronata,Pigronata,1
3747,Party Center,PartyMonolith,1
3748,Silly Tied Bundle of Balloons,PartyBundleOfBalloonTile,1
3749,Party Present,PartyPresent,1
3750,Slice of Cake,SliceOfCake,3
3751,Cog Wall,CogWall,400
3752,Sandfall Wall,SandFallWall,400
3753,Snowfall Wall,SnowFallWall,400
3754,Sandfall Block,SandFallBlock,100
3755,Snowfall Block,SnowFallBlock,100
3756,Snow Cloud,SnowCloudBlock,100
3757,Pedguin's Hood,PedguinHat,1
3758,Pedguin's Jacket,PedguinShirt,1
3759,Pedguin's Trousers,PedguinPants,1
3760,Silly Pink Balloon Wall,SillyBalloonPinkWall,400
3761,Silly Purple Balloon Wall,SillyBalloonPurpleWall,400
3762,Silly Green Balloon Wall,SillyBalloonGreenWall,400
3763,0x33's Aviators,AviatorSunglasses,1
3764,Blue Phasesaber,BluePhasesaber,1
3765,Red Phasesaber,RedPhasesaber,1
3766,Green Phasesaber,GreenPhasesaber,1
3767,Purple Phasesaber,PurplePhasesaber,1
3768,White Phasesaber,WhitePhasesaber,1
3769,Yellow Phasesaber,YellowPhasesaber,1
3770,Djinn's Curse,DjinnsCurse,1
3771,Ancient Horn,AncientHorn,1
3772,Mandible Blade,AntlionClaw,1
3773,Ancient Headdress,AncientArmorHat,1
3774,Ancient Garments,AncientArmorShirt,1
3775,Ancient Slacks,AncientArmorPants,1
3776,Forbidden Mask,AncientBattleArmorHat,1
3777,Forbidden Robes,AncientBattleArmorShirt,1
3778,Forbidden Treads,AncientBattleArmorPants,1
3779,Spirit Flame,SpiritFlame,1
3780,Sand Elemental Banner,SandElementalBanner,1
3781,Pocket Mirror,PocketMirror,1
3782,Magic Sand Dropper,MagicSandDropper,1
3783,Forbidden Fragment,AncientBattleArmorMaterial,3
3784,Lamia Tail,LamiaPants,1
3785,Lamia Wraps,LamiaShirt,1
3786,Lamia Mask,LamiaHat,1
3787,Sky Fracture,SkyFracture,1
3788,Onyx Blaster,OnyxBlaster,1
3789,Sand Shark Banner,SandsharkBanner,1
3790,Bone Biter Banner,SandsharkCorruptBanner,1
3791,Flesh Reaver Banner,SandsharkCrimsonBanner,1
3792,Crystal Thresher Banner,SandsharkHallowedBanner,1
3793,Angry Tumbler Banner,TumbleweedBanner,1
3794,Ancient Cloth,AncientCloth,5
3795,Desert Spirit Lamp,DjinnLamp,1
3796,Music Box (Sandstorm),MusicBoxSandstorm,1
3797,Apprentice's Hat,ApprenticeHat,1
3798,Apprentice's Robe,ApprenticeRobe,1
3799,Apprentice's Trousers,ApprenticeTrousers,1
3800,Squire's Great Helm,SquireGreatHelm,1
3801,Squire's Plating,SquirePlating,1
3802,Squire's Greaves,SquireGreaves,1
3803,Huntress's Wig,HuntressWig,1
3804,Huntress's Jerkin,HuntressJerkin,1
3805,Huntress's Pants,HuntressPants,1
3806,Monk's Bushy Brow Bald Cap,MonkBrows,1
3807,Monk's Shirt,MonkShirt,1
3808,Monk's Pants,MonkPants,1
3809,Apprentice's Scarf,ApprenticeScarf,1
3810,Squire's Shield,SquireShield,1
3811,Huntress's Buckler,HuntressBuckler,1
3812,Monk's Belt,MonkBelt,1
3813,Defender's Forge,DefendersForge,1
3814,War Table,WarTable,1
3815,War Table Banner,WarTableBanner,1
3816,Eternia Crystal Stand,DD2ElderCrystalStand,1
3817,Defender Medal,DefenderMedal,50
3818,Flameburst Rod,DD2FlameburstTowerT1Popper,1
3819,Flameburst Cane,DD2FlameburstTowerT2Popper,1
3820,Flameburst Staff,DD2FlameburstTowerT3Popper,1
3821,Ale Tosser,AleThrowingGlove,1
3822,Etherian Mana,DD2EnergyCrystal,n/a
3823,Brand of the Inferno,DD2SquireDemonSword,1
3824,Ballista Rod,DD2BallistraTowerT1Popper,1
3825,Ballista Cane,DD2BallistraTowerT2Popper,1
3826,Ballista Staff,DD2BallistraTowerT3Popper,1
3827,Flying Dragon,DD2SquireBetsySword,1
3828,Eternia Crystal,DD2ElderCrystal,3
3829,Lightning Aura Rod,DD2LightningAuraT1Popper,1
3830,Lightning Aura Cane,DD2LightningAuraT2Popper,1
3831,Lightning Aura Staff,DD2LightningAuraT3Popper,1
3832,Explosive Trap Rod,DD2ExplosiveTrapT1Popper,1
3833,Explosive Trap Cane,DD2ExplosiveTrapT2Popper,1
3834,Explosive Trap Staff,DD2ExplosiveTrapT3Popper,1
3835,Sleepy Octopod,MonkStaffT1,1
3836,Ghastly Glaive,MonkStaffT2,1
3837,Etherian Goblin Bomber Banner,DD2GoblinBomberBanner,1
3838,Etherian Goblin Banner,DD2GoblinBanner,1
3839,Old One's Skeleton Banner,DD2SkeletonBanner,1
3840,Drakin Banner,DD2DrakinBanner,1
3841,Kobold Glider Banner,DD2KoboldFlyerBanner,1
3842,Kobold Banner,DD2KoboldBanner,1
3843,Wither Beast Banner,DD2WitherBeastBanner,1
3844,Etherian Wyvern Banner,DD2WyvernBanner,1
3845,Etherian Javelin Thrower Banner,DD2JavelinThrowerBanner,1
3846,Etherian Lightning Bug Banner,DD2LightningBugBanner,1
3847,(Deprecated),OgreMask,n/a
3848,(Deprecated),GoblinMask,n/a
3849,(Deprecated),GoblinBomberCap,n/a
3850,(Deprecated),EtherianJavelin,n/a
3851,(Deprecated),KoboldDynamiteBackpack,n/a
3852,Tome of Infinite Wisdom,BookStaff,1
3853,(Deprecated),BoringBow,n/a
3854,Phantom Phoenix,DD2PhoenixBow,1
3855,Gato Egg,DD2PetGato,1
3856,Creeper Egg,DD2PetGhost,1
3857,Dragon Egg,DD2PetDragon,1
3858,Sky Dragon's Fury,MonkStaffT3,1
3859,Aerial Bane,DD2BetsyBow,1
3860,Treasure Bag (Betsy),BossBagBetsy,3
3861,(Deprecated),BossBagOgre,n/a
3862,(Deprecated),BossBagDarkMage,n/a
3863,Betsy Mask,BossMaskBetsy,1
3864,Dark Mage Mask,BossMaskDarkMage,1
3865,Ogre Mask,BossMaskOgre,1
3866,Betsy Trophy,BossTrophyBetsy,1
3867,Dark Mage Trophy,BossTrophyDarkmage,1
3868,Ogre Trophy,BossTrophyOgre,1
3869,Music Box (Old One's Army),MusicBoxDD2,1
3870,Betsy's Wrath,ApprenticeStaffT3,1
3871,Valhalla Knight's Helm,SquireAltHead,1
3872,Valhalla Knight's Breastplate,SquireAltShirt,1
3873,Valhalla Knight's Greaves,SquireAltPants,1
3874,Dark Artist's Hat,ApprenticeAltHead,1
3875,Dark Artist's Robes,ApprenticeAltShirt,1
3876,Dark Artist's Leggings,ApprenticeAltPants,1
3877,Red Riding Hood,HuntressAltHead,1
3878,Red Riding Dress,HuntressAltShirt,1
3879,Red Riding Leggings,HuntressAltPants,1
3880,Shinobi Infiltrator's Helmet,MonkAltHead,1
3881,Shinobi Infiltrator's Torso,MonkAltShirt,1
3882,Shinobi Infiltrator's Pants,MonkAltPants,1
3883,Betsy's Wings,BetsyWings,1
3884,Crystal Chest,CrystalChest,1
3885,Golden Chest,GoldenChest,1
3886,Trapped Crystal Chest,Fake_CrystalChest,1
3887,Trapped Golden Chest,Fake_GoldenChest,1
3888,Crystal Door,CrystalDoor,1
3889,Crystal Chair,CrystalChair,1
3890,Crystal Candle,CrystalCandle,1
3891,Crystal Lantern,CrystalLantern,1
3892,Crystal Lamp,CrystalLamp,1
3893,Crystal Candelabra,CrystalCandelabra,1
3894,Crystal Chandelier,CrystalChandelier,1
3895,Crystal Bathtub,CrystalBathtub,1
3896,Crystal Sink,CrystalSink,1
3897,Crystal Bed,CrystalBed,1
3898,Crystal Clock,CrystalClock,1
3899,Sunplate Clock,SkywareClock2,1
3900,Blue Dungeon Clock,DungeonClockBlue,1
3901,Green Dungeon Clock,DungeonClockGreen,1
3902,Pink Dungeon Clock,DungeonClockPink,1
3903,Crystal Platform,CrystalPlatform,200
3904,Golden Platform,GoldenPlatform,200
3905,Dynasty Wood Platform,DynastyPlatform,200
3906,Lihzahrd Platform,LihzahrdPlatform,200
3907,Flesh Platform,FleshPlatform,200
3908,Frozen Platform,FrozenPlatform,200
3909,Crystal Work Bench,CrystalWorkbench,1
3910,Golden Work Bench,GoldenWorkbench,1
3911,Crystal Dresser,CrystalDresser,1
3912,Dynasty Dresser,DynastyDresser,1
3913,Frozen Dresser,FrozenDresser,1
3914,Living Wood Dresser,LivingWoodDresser,1
3915,Crystal Piano,CrystalPiano,1
3916,Dynasty Piano,DynastyPiano,1
3917,Crystal Bookcase,CrystalBookCase,1
3918,Crystal Sofa,CrystalSofaHowDoesThatEvenWork,1
3919,Dynasty Sofa,DynastySofa,1
3920,Crystal Table,CrystalTable,1
3921,Arkhalis' Hood,ArkhalisHat,1
3922,Arkhalis' Bodice,ArkhalisShirt,1
3923,Arkhalis' Tights,ArkhalisPants,1
3924,Arkhalis' Lightwings,ArkhalisWings,1
3925,Leinfors' Hair Protector,LeinforsHat,1
3926,Leinfors' Excessive Style,LeinforsShirt,1
3927,Leinfors' Fancypants,LeinforsPants,1
3928,Leinfors' Prehensile Cloak,LeinforsWings,1
3929,Leinfors' Luxury Shampoo,LeinforsAccessory,1
3930,Celebration Mk2,Celeb2,1
3931,Spider Bathtub,SpiderBathtub,1
3932,Spider Bed,SpiderBed,1
3933,Spider Bookcase,SpiderBookcase,1
3934,Spider Dresser,SpiderDresser,1
3935,Spider Candelabra,SpiderCandelabra,1
3936,Spider Candle,SpiderCandle,1
3937,Spider Chair,SpiderChair,1
3938,Spider Chandelier,SpiderChandelier,1
3939,Spider Chest,SpiderChest,1
3940,Spider Clock,SpiderClock,1
3941,Spider Door,SpiderDoor,1
3942,Spider Lamp,SpiderLamp,1
3943,Spider Lantern,SpiderLantern,1
3944,Spider Piano,SpiderPiano,1
3945,Spider Platform,SpiderPlatform,200
3946,Spider Sink,SpiderSinkSpiderSinkDoesWhateverASpiderSinkDoes,1
3947,Spider Sofa,SpiderSofa,1
3948,Spider Table,SpiderTable,1
3949,Spider Work Bench,SpiderWorkbench,1
3950,Trapped Spider Chest,Fake_SpiderChest,1
3951,Iron Brick,IronBrick,100
3952,Iron Brick Wall,IronBrickWall,400
3953,Lead Brick,LeadBrick,100
3954,Lead Brick Wall,LeadBrickWall,400
3955,Lesion Block,LesionBlock,100
3956,Lesion Block Wall,LesionBlockWall,400
3957,Lesion Platform,LesionPlatform,200
3958,Lesion Bathtub,LesionBathtub,1
3959,Lesion Bed,LesionBed,1
3960,Lesion Bookcase,LesionBookcase,1
3961,Lesion Candelabra,LesionCandelabra,1
3962,Lesion Candle,LesionCandle,1
3963,Lesion Chair,LesionChair,1
3964,Lesion Chandelier,LesionChandelier,1
3965,Lesion Chest,LesionChest,1
3966,Lesion Clock,LesionClock,1
3967,Lesion Door,LesionDoor,1
3968,Lesion Dresser,LesionDresser,1
3969,Lesion Lamp,LesionLamp,1
3970,Lesion Lantern,LesionLantern,1
3971,Lesion Piano,LesionPiano,1
3972,Lesion Sink,LesionSink,1
3973,Lesion Sofa,LesionSofa,1
3974,Lesion Table,LesionTable,1
3975,Lesion Work Bench,LesionWorkbench,1
3976,Trapped Lesion Chest,Fake_LesionChest,1
3977,Hat Rack,HatRack,1
3978,(Deprecated),ColorOnlyDye,n/a
3979,Pearlwood Crate,WoodenCrateHard,10
3980,Mythril Crate,IronCrateHard,10
3981,Titanium Crate,GoldenCrateHard,10
3982,Defiled Crate,CorruptFishingCrateHard,5
3983,Hematic Crate,CrimsonFishingCrateHard,5
3984,Stockade Crate,DungeonFishingCrateHard,5
3985,Azure Crate,FloatingIslandFishingCrateHard,5
3986,Divine Crate,HallowedFishingCrateHard,5
3987,Bramble Crate,JungleFishingCrateHard,5
3988,Dead Man's Chest,DeadMansChest,1
3989,Golf Ball,GolfBall,1
3990,Amphibian Boots,AmphibianBoots,1
3991,Arcane Flower,ArcaneFlower,1
3992,Berserker's Glove,BerserkerGlove,1
3993,Fairy Boots,FairyBoots,1
3994,Frog Flipper,FrogFlipper,1
3995,Frog Gear,FrogGear,1
3996,Frog Webbing,FrogWebbing,1
3997,Frozen Shield,FrozenShield,1
3998,Hero Shield,HeroShield,1
3999,Magma Skull,LavaSkull,1
4000,Magnet Flower,MagnetFlower,1
4001,Mana Cloak,ManaCloak,1
4002,Molten Quiver,MoltenQuiver,1
4003,Molten Skull Rose,MoltenSkullRose,1
4004,Obsidian Skull Rose,ObsidianSkullRose,1
4005,Recon Scope,ReconScope,1
4006,Stalker's Quiver,StalkersQuiver,1
4007,Stinger Necklace,StingerNecklace,1
4008,Ultrabright Helmet,UltrabrightHelmet,1
4009,Apple,Apple,5
4010,(Deprecated),ApplePieSlice,n/a
4011,Apple Pie,ApplePie,5
4012,Banana Split,BananaSplit,5
4013,BBQ Ribs,BBQRibs,5
4014,Bunny Stew,BunnyStew,5
4015,Burger,Burger,5
4016,Chicken Nugget,ChickenNugget,5
4017,Chocolate Chip Cookie,ChocolateChipCookie,5
4018,Cream Soda,CreamSoda,5
4019,Escargot,Escargot,5
4020,Fried Egg,FriedEgg,5
4021,Fries,Fries,5
4022,Golden Delight,GoldenDelight,5
4023,Grapes,Grapes,5
4024,Grilled Squirrel,GrilledSquirrel,5
4025,Hotdog,Hotdog,5
4026,Ice Cream,IceCream,5
4027,Milkshake,Milkshake,5
4028,Nachos,Nachos,5
4029,Pizza,Pizza,5
4030,Potato Chips,PotatoChips,5
4031,Roasted Bird,RoastedBird,5
4032,Roasted Duck,RoastedDuck,5
4033,Sauteed Frog Legs,SauteedFrogLegs,5
4034,Seafood Dinner,SeafoodDinner,5
4035,Shrimp Po' Boy,ShrimpPoBoy,5
4036,Spaghetti,Spaghetti,5
4037,Steak,Steak,5
4038,Molten Charm,MoltenCharm,1
4039,Golf Club (Iron),GolfClubIron,1
4040,Golf Cup,GolfCup,1
4041,Blue Flower Seeds,FlowerPacketBlue,25
4042,Magenta Flower Seeds,FlowerPacketMagenta,25
4043,Pink Flower Seeds,FlowerPacketPink,25
4044,Red Flower Seeds,FlowerPacketRed,25
4045,Yellow Flower Seeds,FlowerPacketYellow,25
4046,Violet Flower Seeds,FlowerPacketViolet,25
4047,White Flower Seeds,FlowerPacketWhite,25
4048,Tall Grass Seeds,FlowerPacketTallGrass,25
4049,Lawn Mower,LawnMower,1
4050,Crimstone Brick,CrimstoneBrick,100
4051,Smooth Sandstone,SmoothSandstone,100
4052,Crimstone Brick Wall,CrimstoneBrickWall,400
4053,Smooth Sandstone Wall,SmoothSandstoneWall,400
4054,Blood Moon Monolith,BloodMoonMonolith,1
4055,Dunerider Boots,SandBoots,1
4056,Ancient Chisel,AncientChisel,1
4057,Rain Song,CarbonGuitar,1
4058,(Deprecated),SkeletonBow,n/a
4059,Fossil Pickaxe,FossilPickaxe,1
4060,Super Star Shooter,SuperStarCannon,1
4061,Storm Spear,ThunderSpear,1
4062,Thunder Zapper,ThunderStaff,1
4063,Drum Set,DrumSet,1
4064,Picnic Table,PicnicTable,1
4065,Fancy Picnic Table,PicnicTableWithCloth,1
4066,Desert Minecart,DesertMinecart,1
4067,Minecarp,FishMinecart,1
4068,Pink Fairy,FairyCritterPink,3
4069,Green Fairy,FairyCritterGreen,3
4070,Blue Fairy,FairyCritterBlue,3
4071,Junonia Shell,JunoniaShell,1
4072,Lightning Whelk Shell,LightningWhelkShell,1
4073,Tulip Shell,TulipShell,1
4074,Pin Wheel,PinWheel,1
4075,Weather Vane,WeatherVane,1
4076,Void Vault,VoidVault,1
4077,Music Box (Ocean Night),MusicBoxOceanAlt,1
4078,Music Box (Slime Rain),MusicBoxSlimeRain,1
4079,Music Box (Space Day),MusicBoxSpaceAlt,1
4080,Music Box (Town Day),MusicBoxTownDay,1
4081,Music Box (Town Night),MusicBoxTownNight,1
4082,Music Box (Windy Day),MusicBoxWindyDay,1
4083,White Pin Flag,GolfCupFlagWhite,1
4084,Red Pin Flag,GolfCupFlagRed,1
4085,Green Pin Flag,GolfCupFlagGreen,1
4086,Blue Pin Flag,GolfCupFlagBlue,1
4087,Yellow Pin Flag,GolfCupFlagYellow,1
4088,Purple Pin Flag,GolfCupFlagPurple,1
4089,Golf Tee,GolfTee,1
4090,Shell Pile,ShellPileBlock,100
4091,Anti-Portal Block,AntiPortalBlock,100
4092,Golf Club (Putter),GolfClubPutter,1
4093,Golf Club (Wedge),GolfClubWedge,1
4094,Golf Club (Driver),GolfClubDriver,1
4095,Golf Whistle,GolfWhistle,1
4096,Ebonwood Toilet,ToiletEbonyWood,1
4097,Rich Mahogany Toilet,ToiletRichMahogany,1
4098,Pearlwood Toilet,ToiletPearlwood,1
4099,Living Wood Toilet,ToiletLivingWood,1
4100,Cactus Toilet,ToiletCactus,1
4101,Bone Toilet,ToiletBone,1
4102,Flesh Toilet,ToiletFlesh,1
4103,Mushroom Toilet,ToiletMushroom,1
4104,Skyware Toilet,ToiletSunplate,1
4105,Shadewood Toilet,ToiletShadewood,1
4106,Lihzahrd Toilet,ToiletLihzhard,1
4107,Blue Dungeon Toilet,ToiletDungeonBlue,1
4108,Green Dungeon Toilet,ToiletDungeonGreen,1
4109,Pink Dungeon Toilet,ToiletDungeonPink,1
4110,Obsidian Toilet,ToiletObsidian,1
4111,Frozen Toilet,ToiletFrozen,1
4112,Glass Toilet,ToiletGlass,1
4113,Honey Toilet,ToiletHoney,1
4114,Steampunk Toilet,ToiletSteampunk,1
4115,Pumpkin Toilet,ToiletPumpkin,1
4116,Spooky Toilet,ToiletSpooky,1
4117,Dynasty Toilet,ToiletDynasty,1
4118,Palm Wood Toilet,ToiletPalm,1
4119,Boreal Wood Toilet,ToiletBoreal,1
4120,Slime Toilet,ToiletSlime,1
4121,Martian Toilet,ToiletMartian,1
4122,Granite Toilet,ToiletGranite,1
4123,Marble Toilet,ToiletMarble,1
4124,Crystal Toilet,ToiletCrystal,1
4125,Spider Toilet,ToiletSpider,1
4126,Lesion Toilet,ToiletLesion,1
4127,Diamond Toilet,ToiletDiamond,1
4128,Maid Bonnet,MaidHead,1
4129,Maid Dress,MaidShirt,1
4130,Maid Shoes,MaidPants,1
4131,Void Bag,VoidLens,1
4132,Pink Maid Bonnet,MaidHead2,1
4133,Pink Maid Dress,MaidShirt2,1
4134,Pink Maid Shoes,MaidPants2,1
4135,Country Club Cap,GolfHat,1
4136,Country Club Vest,GolfShirt,1
4137,Country Club Trousers,GolfPants,1
4138,Country Club Visor,GolfVisor,1
4139,Spider Nest Block,SpiderBlock,100
4140,Spider Nest Wall,SpiderWall,400
4141,Meteorite Toilet,ToiletMeteor,1
4142,Decay Chamber,LesionStation,1
4143,(Deprecated),ManaCloakStar,n/a
4144,Terragrim,Terragrim,1
4145,Solar Bathtub,SolarBathtub,1
4146,Solar Bed,SolarBed,1
4147,Solar Bookcase,SolarBookcase,1
4148,Solar Dresser,SolarDresser,1
4149,Solar Candelabra,SolarCandelabra,1
4150,Solar Candle,SolarCandle,1
4151,Solar Chair,SolarChair,1
4152,Solar Chandelier,SolarChandelier,1
4153,Solar Chest,SolarChest,1
4154,Solar Clock,SolarClock,1
4155,Solar Door,SolarDoor,1
4156,Solar Lamp,SolarLamp,1
4157,Solar Lantern,SolarLantern,1
4158,Solar Piano,SolarPiano,1
4159,Solar Platform,SolarPlatform,200
4160,Solar Sink,SolarSink,1
4161,Solar Sofa,SolarSofa,1
4162,Solar Table,SolarTable,1
4163,Solar Work Bench,SolarWorkbench,1
4164,Trapped Solar Chest,Fake_SolarChest,1
4165,Solar Toilet,SolarToilet,1
4166,Vortex Bathtub,VortexBathtub,1
4167,Vortex Bed,VortexBed,1
4168,Vortex Bookcase,VortexBookcase,1
4169,Vortex Dresser,VortexDresser,1
4170,Vortex Candelabra,VortexCandelabra,1
4171,Vortex Candle,VortexCandle,1
4172,Vortex Chair,VortexChair,1
4173,Vortex Chandelier,VortexChandelier,1
4174,Vortex Chest,VortexChest,1
4175,Vortex Clock,VortexClock,1
4176,Vortex Door,VortexDoor,1
4177,Vortex Lamp,VortexLamp,1
4178,Vortex Lantern,VortexLantern,1
4179,Vortex Piano,VortexPiano,1
4180,Vortex Platform,VortexPlatform,200
4181,Vortex Sink,VortexSink,1
4182,Vortex Sofa,VortexSofa,1
4183,Vortex Table,VortexTable,1
4184,Vortex Work Bench,VortexWorkbench,1
4185,Trapped Vortex Chest,Fake_VortexChest,1
4186,Vortex Toilet,VortexToilet,1
4187,Nebula Bathtub,NebulaBathtub,1
4188,Nebula Bed,NebulaBed,1
4189,Nebula Bookcase,NebulaBookcase,1
4190,Nebula Dresser,NebulaDresser,1
4191,Nebula Candelabra,NebulaCandelabra,1
4192,Nebula Candle,NebulaCandle,1
4193,Nebula Chair,NebulaChair,1
4194,Nebula Chandelier,NebulaChandelier,1
4195,Nebula Chest,NebulaChest,1
4196,Nebula Clock,NebulaClock,1
4197,Nebula Door,NebulaDoor,1
4198,Nebula Lamp,NebulaLamp,1
4199,Nebula Lantern,NebulaLantern,1
4200,Nebula Piano,NebulaPiano,1
4201,Nebula Platform,NebulaPlatform,200
4202,Nebula Sink,NebulaSink,1
4203,Nebula Sofa,NebulaSofa,1
4204,Nebula Table,NebulaTable,1
4205,Nebula Work Bench,NebulaWorkbench,1
4206,Trapped Nebula Chest,Fake_NebulaChest,1
4207,Nebula Toilet,NebulaToilet,1
4208,Stardust Bathtub,StardustBathtub,1
4209,Stardust Bed,StardustBed,1
4210,Stardust Bookcase,StardustBookcase,1
4211,Stardust Dresser,StardustDresser,1
4212,Stardust Candelabra,StardustCandelabra,1
4213,Stardust Candle,StardustCandle,1
4214,Stardust Chair,StardustChair,1
4215,Stardust Chandelier,StardustChandelier,1
4216,Stardust Chest,StardustChest,1
4217,Stardust Clock,StardustClock,1
4218,Stardust Door,StardustDoor,1
4219,Stardust Lamp,StardustLamp,1
4220,Stardust Lantern,StardustLantern,1
4221,Stardust Piano,StardustPiano,1
4222,Stardust Platform,StardustPlatform,200
4223,Stardust Sink,StardustSink,1
4224,Stardust Sofa,StardustSofa,1
4225,Stardust Table,StardustTable,1
4226,Stardust Work Bench,StardustWorkbench,1
4227,Trapped Stardust Chest,Fake_StardustChest,1
4228,Stardust Toilet,StardustToilet,1
4229,Solar Brick,SolarBrick,100
4230,Vortex Brick,VortexBrick,100
4231,Nebula Brick,NebulaBrick,100
4232,Stardust Brick,StardustBrick,100
4233,Solar Brick Wall,SolarBrickWall,400
4234,Vortex Brick Wall,VortexBrickWall,400
4235,Nebula Brick Wall,NebulaBrickWall,400
4236,Stardust Brick Wall,StardustBrickWall,400
4237,Music Box (Day Remix),MusicBoxDayRemix,1
4238,Cracked Blue Brick,CrackedBlueBrick,100
4239,Cracked Green Brick,CrackedGreenBrick,100
4240,Cracked Pink Brick,CrackedPinkBrick,100
4241,Wild Flower Seeds,FlowerPacketWild,25
4242,Black Golf Ball,GolfBallDyedBlack,1
4243,Blue Golf Ball,GolfBallDyedBlue,1
4244,Brown Golf Ball,GolfBallDyedBrown,1
4245,Cyan Golf Ball,GolfBallDyedCyan,1
4246,Green Golf Ball,GolfBallDyedGreen,1
4247,Lime Golf Ball,GolfBallDyedLimeGreen,1
4248,Orange Golf Ball,GolfBallDyedOrange,1
4249,Pink Golf Ball,GolfBallDyedPink,1
4250,Purple Golf Ball,GolfBallDyedPurple,1
4251,Red Golf Ball,GolfBallDyedRed,1
4252,Sky Blue Golf Ball,GolfBallDyedSkyBlue,1
4253,Teal Golf Ball,GolfBallDyedTeal,1
4254,Violet Golf Ball,GolfBallDyedViolet,1
4255,Yellow Golf Ball,GolfBallDyedYellow,1
4256,Amber Robe,AmberRobe,1
4257,Amber Hook,AmberHook,1
4258,Orange Phaseblade,OrangePhaseblade,1
4259,Orange Phasesaber,OrangePhasesaber,1
4260,Orange Stained Glass,OrangeStainedGlass,400
4261,Orange Pressure Plate,OrangePressurePlate,5
4262,Snake Charmer's Flute,MysticCoilSnake,1
4263,Magic Conch,MagicConch,1
4264,Golf Cart Keys,GolfCart,1
4265,Golf Chest,GolfChest,1
4266,Trapped Golf Chest,Fake_GolfChest,1
4267,Sandstone Chest,DesertChest,1
4268,Trapped Sandstone Chest,Fake_DesertChest,1
4269,Sanguine Staff,SanguineStaff,1
4270,Blood Thorn,SharpTears,1
4271,Bloody Tear,BloodMoonStarter,3
4272,Drippler Crippler,DripplerFlail,1
4273,Vampire Frog Staff,VampireFrogStaff,1
4274,Gold Goldfish,GoldGoldfish,3
4275,Gold Fish Bowl,GoldGoldfishBowl,1
4276,Bast Statue,CatBast,1
4277,Gold Starry Block,GoldStarryGlassBlock,100
4278,Blue Starry Block,BlueStarryGlassBlock,100
4279,Gold Starry Wall,GoldStarryGlassWall,400
4280,Blue Starry Wall,BlueStarryGlassWall,400
4281,Finch Staff,BabyBirdStaff,1
4282,Apricot,Apricot,5
4283,Banana,Banana,5
4284,Blackcurrant,BlackCurrant,5
4285,Blood Orange,BloodOrange,5
4286,Cherry,Cherry,5
4287,Coconut,Coconut,5
4288,Dragon Fruit,Dragonfruit,5
4289,Elderberry,Elderberry,5
4290,Grapefruit,Grapefruit,5
4291,Lemon,Lemon,5
4292,Mango,Mango,5
4293,Peach,Peach,5
4294,Pineapple,Pineapple,5
4295,Plum,Plum,5
4296,Rambutan,Rambutan,5
4297,Star Fruit,Starfruit,5
4298,Sandstone Bathtub,SandstoneBathtub,1
4299,Sandstone Bed,SandstoneBed,1
4300,Sandstone Bookcase,SandstoneBookcase,1
4301,Sandstone Dresser,SandstoneDresser,1
4302,Sandstone Candelabra,SandstoneCandelabra,1
4303,Sandstone Candle,SandstoneCandle,1
4304,Sandstone Chair,SandstoneChair,1
4305,Sandstone Chandelier,SandstoneChandelier,1
4306,Sandstone Clock,SandstoneClock,1
4307,Sandstone Door,SandstoneDoor,1
4308,Sandstone Lamp,SandstoneLamp,1
4309,Sandstone Lantern,SandstoneLantern,1
4310,Sandstone Piano,SandstonePiano,1
4311,Sandstone Platform,SandstonePlatform,200
4312,Sandstone Sink,SandstoneSink,1
4313,Sandstone Sofa,SandstoneSofa,1
4314,Sandstone Table,SandstoneTable,1
4315,Sandstone Work Bench,SandstoneWorkbench,1
4316,Sandstone Toilet,SandstoneToilet,1
4317,Haemorrhaxe,BloodHamaxe,1
4318,Void Monolith,VoidMonolith,1
4319,Arrow Sign,ArrowSign,1
4320,Painted Arrow Sign,PaintedArrowSign,1
4321,Master Gamer's Jacket,GameMasterShirt,1
4322,Master Gamer's Pants,GameMasterPants,1
4323,Star Princess Crown,StarPrincessCrown,1
4324,Star Princess Dress,StarPrincessDress,1
4325,Chum Caster,BloodFishingRod,1
4326,Plate,FoodPlatter,1
4327,Black Dragonfly Jar,BlackDragonflyJar,1
4328,Blue Dragonfly Jar,BlueDragonflyJar,1
4329,Green Dragonfly Jar,GreenDragonflyJar,1
4330,Orange Dragonfly Jar,OrangeDragonflyJar,1
4331,Red Dragonfly Jar,RedDragonflyJar,1
4332,Yellow Dragonfly Jar,YellowDragonflyJar,1
4333,Gold Dragonfly Jar,GoldDragonflyJar,1
4334,Black Dragonfly,BlackDragonfly,5
4335,Blue Dragonfly,BlueDragonfly,5
4336,Green Dragonfly,GreenDragonfly,5
4337,Orange Dragonfly,OrangeDragonfly,5
4338,Red Dragonfly,RedDragonfly,5
4339,Yellow Dragonfly,YellowDragonfly,5
4340,Gold Dragonfly,GoldDragonfly,3
4341,Step Stool,PortableStool,1
4342,Dragonfly Statue,DragonflyStatue,1
4343,Paper Airplane,PaperAirplaneA,1
4344,White Paper Airplane,PaperAirplaneB,1
4345,Can Of Worms,CanOfWorms,2
4346,Encumbering Stone,EncumberingStone,1
4347,Gray Zapinator,ZapinatorGray,1
4348,Orange Zapinator,ZapinatorOrange,1
4349,Green Moss,GreenMoss,25
4350,Brown Moss,BrownMoss,25
4351,Red Moss,RedMoss,25
4352,Blue Moss,BlueMoss,25
4353,Purple Moss,PurpleMoss,25
4354,Lava Moss,LavaMoss,25
4355,Boulder Statue,BoulderStatue,1
4356,Music Box (Journey's Beginning),MusicBoxTitleAlt,1
4357,Music Box (Storm),MusicBoxStorm,1
4358,Music Box (Graveyard),MusicBoxGraveyard,1
4359,Seagull,Seagull,5
4360,Seagull Statue,SeagullStatue,1
4361,Ladybug,LadyBug,5
4362,Gold Ladybug,GoldLadyBug,3
4363,Maggot,Maggot,5
4364,Maggot Cage,MaggotCage,1
4365,Celestial Wand,CelestialWand,1
4366,Eucalyptus Sap,EucaluptusSap,1
4367,Blue Kite,KiteBlue,1
4368,Blue and Yellow Kite,KiteBlueAndYellow,1
4369,Red Kite,KiteRed,1
4370,Red and Yellow Kite,KiteRedAndYellow,1
4371,Yellow Kite,KiteYellow,1
4372,Ivy,IvyGuitar,1
4373,Pupfish,Pupfish,5
4374,Grebe,Grebe,5
4375,Rat,Rat,5
4376,Rat Cage,RatCage,1
4377,Krypton Moss,KryptonMoss,25
4378,Xenon Moss,XenonMoss,25
4379,Wyvern Kite,KiteWyvern,1
4380,Ladybug Cage,LadybugCage,1
4381,Blood Rain Bow,BloodRainBow,1
4382,Advanced Combat Techniques,CombatBook,1
4383,Desert Torch,DesertTorch,100
4384,Coral Torch,CoralTorch,100
4385,Corrupt Torch,CorruptTorch,100
4386,Crimson Torch,CrimsonTorch,100
4387,Hallowed Torch,HallowedTorch,100
4388,Jungle Torch,JungleTorch,100
4389,Argon Moss,ArgonMoss,25
4390,Rolling Cactus,RollingCactus,5
4391,Thin Ice,ThinIce,100
4392,Echo Block,EchoBlock,100
4393,Scarab Fish,ScarabFish,2
4394,Scorpio Fish,ScorpioFish,2
4395,Owl,Owl,5
4396,Owl Cage,OwlCage,1
4397,Owl Statue,OwlStatue,1
4398,Pupfish Bowl,PupfishBowl,1
4399,Gold Ladybug Cage,GoldLadybugCage,1
4400,Geode,Geode,5
4401,Flounder,Flounder,3
4402,Rock Lobster,RockLobster,3
4403,Lobster Tail,LobsterTail,5
4404,Inner Tube,FloatingTube,1
4405,Frozen Crate,FrozenCrate,5
4406,Boreal Crate,FrozenCrateHard,5
4407,Oasis Crate,OasisCrate,5
4408,Mirage Crate,OasisCrateHard,5
4409,Spectre Goggles,SpectreGoggles,1
4410,Oyster,Oyster,5
4411,Shucked Oyster,ShuckedOyster,5
4412,White Pearl,WhitePearl,5
4413,Black Pearl,BlackPearl,5
4414,Pink Pearl,PinkPearl,5
4415,Stone Door,StoneDoor,1
4416,Stone Platform,StonePlatform,200
4417,Oasis Water Fountain,OasisFountain,1
4418,Water Strider,WaterStrider,5
4419,Gold Water Strider,GoldWaterStrider,3
4420,Lawn Flamingo,LawnFlamingo,1
4421,Music Box (Underground Jungle),MusicBoxUndergroundJungle,1
4422,Grate,Grate,100
4423,Scarab Bomb,ScarabBomb,99
4424,Wrought Iron Fence,WroughtIronFence,400
4425,Shark Bait,SharkBait,1
4426,Bee Minecart,BeeMinecart,1
4427,Ladybug Minecart,LadybugMinecart,1
4428,Pigron Minecart,PigronMinecart,1
4429,Sunflower Minecart,SunflowerMinecart,1
4430,Potted Forest Cedar,PottedForestCedar,1
4431,Potted Jungle Cedar,PottedJungleCedar,1
4432,Potted Hallow Cedar,PottedHallowCedar,1
4433,Potted Forest Tree,PottedForestTree,1
4434,Potted Jungle Tree,PottedJungleTree,1
4435,Potted Hallow Tree,PottedHallowTree,1
4436,Potted Forest Palm,PottedForestPalm,1
4437,Potted Jungle Palm,PottedJunglePalm,1
4438,Potted Hallow Palm,PottedHallowPalm,1
4439,Potted Forest Bamboo,PottedForestBamboo,1
4440,Potted Jungle Bamboo,PottedJungleBamboo,1
4441,Potted Hallow Bamboo,PottedHallowBamboo,1
4442,Scarab Fishing Rod,ScarabFishingRod,1
4443,Demonic Hellcart,HellMinecart,1
4444,Witch's Broom,WitchBroom,1
4445,Cluster Rocket I,ClusterRocketI,99
4446,Cluster Rocket II,ClusterRocketII,99
4447,Wet Rocket,WetRocket,99
4448,Lava Rocket,LavaRocket,99
4449,Honey Rocket,HoneyRocket,99
4450,Shroom Minecart,ShroomMinecart,1
4451,Amethyst Minecart,AmethystMinecart,1
4452,Topaz Minecart,TopazMinecart,1
4453,Sapphire Minecart,SapphireMinecart,1
4454,Emerald Minecart,EmeraldMinecart,1
4455,Ruby Minecart,RubyMinecart,1
4456,Diamond Minecart,DiamondMinecart,1
4457,Mini Nuke I,MiniNukeI,99
4458,Mini Nuke II,MiniNukeII,99
4459,Dry Rocket,DryRocket,99
4460,Sandcastle Bucket,SandcastleBucket,1
4461,Turtle Cage,TurtleCage,1
4462,Jungle Turtle Cage,TurtleJungleCage,1
4463,Gladius,Gladius,1
4464,Turtle,Turtle,5
4465,Jungle Turtle,TurtleJungle,5
4466,Turtle Statue,TurtleStatue,1
4467,Amber Minecart,AmberMinecart,1
4468,Beetle Minecart,BeetleMinecart,1
4469,Meowmere Minecart,MeowmereMinecart,1
4470,Party Wagon,PartyMinecart,1
4471,The Dutchman,PirateMinecart,1
4472,Steampunk Minecart,SteampunkMinecart,1
4473,Grebe Cage,GrebeCage,1
4474,Seagull Cage,SeagullCage,1
4475,Water Strider Cage,WaterStriderCage,1
4476,Gold Water Strider Cage,GoldWaterStriderCage,1
4477,Lesser Luck Potion,LuckPotionLesser,20
4478,Luck Potion,LuckPotion,20
4479,Greater Luck Potion,LuckPotionGreater,20
4480,Seahorse,Seahorse,5
4481,Seahorse Cage,SeahorseCage,1
4482,Gold Seahorse,GoldSeahorse,3
4483,Gold Seahorse Cage,GoldSeahorseCage,1
4484,1/2 Second Timer,TimerOneHalfSecond,1
4485,1/4 Second Timer,TimerOneFourthSecond,1
4486,Ebonstone Wall,EbonstoneEcho,400
4487,Mud Wall,MudWallEcho,400
4488,Pearlstone Wall,PearlstoneEcho,400
4489,Snow Wall,SnowWallEcho,400
4490,Amethyst Stone Wall,AmethystEcho,400
4491,Topaz Stone Wall,TopazEcho,400
4492,Sapphire Stone Wall,SapphireEcho,400
4493,Emerald Stone Wall,EmeraldEcho,400
4494,Ruby Stone Wall,RubyEcho,400
4495,Diamond Stone Wall,DiamondEcho,400
4496,Green Mossy Wall,Cave1Echo,400
4497,Brown Mossy Wall,Cave2Echo,400
4498,Red Mossy Wall,Cave3Echo,400
4499,Blue Mossy Wall,Cave4Echo,400
4500,Purple Mossy Wall,Cave5Echo,400
4501,Rocky Dirt Wall,Cave6Echo,400
4502,Old Stone Wall,Cave7Echo,400
4503,Spider Wall,SpiderEcho,400
4504,Corrupt Grass Wall,CorruptGrassEcho,400
4505,Hallowed Grass Wall,HallowedGrassEcho,400
4506,Ice Wall,IceEcho,400
4507,Obsidian Wall,ObsidianBackEcho,400
4508,Crimson Grass Wall,CrimsonGrassEcho,400
4509,Crimstone Wall,CrimstoneEcho,400
4510,Cave Dirt Wall,CaveWall1Echo,400
4511,Rough Dirt Wall,CaveWall2Echo,400
4512,Craggy Stone Wall,Cave8Echo,400
4513,Corrupt Growth Wall,Corruption1Echo,400
4514,Corrupt Mass Wall,Corruption2Echo,400
4515,Corrupt Pustule Wall,Corruption3Echo,400
4516,Corrupt Tendril Wall,Corruption4Echo,400
4517,Crimson Crust Wall,Crimson1Echo,400
4518,Crimson Scab Wall,Crimson2Echo,400
4519,Crimson Teeth Wall,Crimson3Echo,400
4520,Crimson Blister Wall,Crimson4Echo,400
4521,Layered Dirt Wall,Dirt1Echo,400
4522,Crumbling Dirt Wall,Dirt2Echo,400
4523,Cracked Dirt Wall,Dirt3Echo,400
4524,Wavy Dirt Wall,Dirt4Echo,400
4525,Hallowed Prism Wall,Hallow1Echo,400
4526,Hallowed Cavern Wall,Hallow2Echo,400
4527,Hallowed Shard Wall,Hallow3Echo,400
4528,Hallowed Crystalline Wall,Hallow4Echo,400
4529,Lichen Stone Wall,Jungle1Echo,400
4530,Leafy Jungle Wall,Jungle2Echo,400
4531,Ivy Stone Wall,Jungle3Echo,400
4532,Jungle Vine Wall,Jungle4Echo,400
4533,Ember Wall,Lava1Echo,400
4534,Cinder Wall,Lava2Echo,400
4535,Magma Wall,Lava3Echo,400
4536,Smouldering Stone Wall,Lava4Echo,400
4537,Worn Stone Wall,Rocks1Echo,400
4538,Stalactite Stone Wall,Rocks2Echo,400
4539,Mottled Stone Wall,Rocks3Echo,400
4540,Fractured Stone Wall,Rocks4Echo,400
4541,The Bride Banner,TheBrideBanner,1
4542,Zombie Merman Banner,ZombieMermanBanner,1
4543,Wandering Eye Fish Banner,EyeballFlyingFishBanner,1
4544,Blood Squid Banner,BloodSquidBanner,1
4545,Blood Eel Banner,BloodEelBanner,1
4546,Hemogoblin Shark Banner,GoblinSharkBanner,1
4547,Large Bamboo,LargeBambooBlock,100
4548,Large Bamboo Wall,LargeBambooBlockWall,400
4549,Demon Horns,DemonHorns,1
4550,Bamboo Leaf,BambooLeaf,1
4551,Slice of Hell Cake,HellCake,1
4552,Fog Machine,FogMachine,1
4553,Plasma Lamp,PlasmaLamp,1
4554,Marble Column,MarbleColumn,50
4555,Chef Hat,ChefHat,1
4556,Chef Uniform,ChefShirt,1
4557,Chef Pants,ChefPants,1
4558,Star Hairpin,StarHairpin,1
4559,Heart Hairpin,HeartHairpin,1
4560,Bunny Ears,BunnyEars,1
4561,Devil Horns,DevilHorns,1
4562,Fedora,Fedora,1
4563,Fake Unicorn Horn,UnicornHornHat,1
4564,Bamboo,BambooBlock,100
4565,Bamboo Wall,BambooBlockWall,400
4566,Bamboo Bathtub,BambooBathtub,1
4567,Bamboo Bed,BambooBed,1
4568,Bamboo Bookcase,BambooBookcase,1
4569,Bamboo Dresser,BambooDresser,1
4570,Bamboo Candelabra,BambooCandelabra,1
4571,Bamboo Candle,BambooCandle,1
4572,Bamboo Chair,BambooChair,1
4573,Bamboo Chandelier,BambooChandelier,1
4574,Bamboo Chest,BambooChest,1
4575,Bamboo Clock,BambooClock,1
4576,Bamboo Door,BambooDoor,1
4577,Bamboo Lamp,BambooLamp,1
4578,Bamboo Lantern,BambooLantern,1
4579,Bamboo Piano,BambooPiano,1
4580,Bamboo Platform,BambooPlatform,200
4581,Bamboo Sink,BambooSink,1
4582,Bamboo Sofa,BambooSofa,1
4583,Bamboo Table,BambooTable,1
4584,Bamboo Work Bench,BambooWorkbench,1
4585,Trapped Bamboo Chest,Fake_BambooChest,1
4586,Bamboo Toilet,BambooToilet,1
4587,Worn Golf Club (Iron),GolfClubStoneIron,1
4588,Worn Golf Club (Putter),GolfClubRustyPutter,1
4589,Worn Golf Club (Wedge),GolfClubBronzeWedge,1
4590,Worn Golf Club (Driver),GolfClubWoodDriver,1
4591,Fancy Golf Club (Iron),GolfClubMythrilIron,1
4592,Fancy Golf Club (Putter),GolfClubLeadPutter,1
4593,Fancy Golf Club (Wedge),GolfClubGoldWedge,1
4594,Fancy Golf Club (Driver),GolfClubPearlwoodDriver,1
4595,Premium Golf Club (Iron),GolfClubTitaniumIron,1
4596,Premium Golf Club (Putter),GolfClubShroomitePutter,1
4597,Premium Golf Club (Wedge),GolfClubDiamondWedge,1
4598,Premium Golf Club (Driver),GolfClubChlorophyteDriver,1
4599,Bronze Golf Trophy,GolfTrophyBronze,1
4600,Silver Golf Trophy,GolfTrophySilver,1
4601,Gold Golf Trophy,GolfTrophyGold,1
4602,Dreadnautilus Banner,BloodNautilusBanner,1
4603,Birdie Rattle,BirdieRattle,1
4604,Exotic Chew Toy,ExoticEasternChewToy,1
4605,Bedazzled Nectar,BedazzledNectar,1
4606,Music Box (Jungle Night),MusicBoxJungleNight,1
4607,Desert Tiger Staff,StormTigerStaff,1
4608,Chum Bucket,ChumBucket,25
4609,Garden Gnome,GardenGnome,1
4610,Bone Serpent Kite,KiteBoneSerpent,1
4611,World Feeder Kite,KiteWorldFeeder,1
4612,Bunny Kite,KiteBunny,1
4613,Pigron Kite,KitePigron,1
4614,Apple Juice,AppleJuice,5
4615,Grape Juice,GrapeJuice,5
4616,Lemonade,Lemonade,5
4617,Frozen Banana Daiquiri,BananaDaiquiri,5
4618,Peach Sangria,PeachSangria,5
4619,Piña Colada,PinaColada,5
4620,Tropical Smoothie,TropicalSmoothie,5
4621,Bloody Moscato,BloodyMoscato,5
4622,Smoothie of Darkness,SmoothieofDarkness,5
4623,Prismatic Punch,PrismaticPunch,5
4624,Fruit Juice,FruitJuice,5
4625,Fruit Salad,FruitSalad,5
4626,Andrew Sphinx,AndrewSphinx,1
4627,Watchful Antlion,WatchfulAntlion,1
4628,Burning Spirit,BurningSpirit,1
4629,Jaws of Death,JawsOfDeath,1
4630,The Sands of Slime,TheSandsOfSlime,1
4631,"Snakes, I Hate Snakes",SnakesIHateSnakes,1
4632,Life Above the Sand,LifeAboveTheSand,1
4633,Oasis,Oasis,1
4634,Prehistory Preserved,PrehistoryPreserved,1
4635,Ancient Tablet,AncientTablet,1
4636,Uluru,Uluru,1
4637,Visiting the Pyramids,VisitingThePyramids,1
4638,Bandage Boy,BandageBoy,1
4639,Divine Eye,DivineEye,1
4640,Amethyst Stone Block,AmethystStoneBlock,100
4641,Topaz Stone Block,TopazStoneBlock,100
4642,Sapphire Stone Block,SapphireStoneBlock,100
4643,Emerald Stone Block,EmeraldStoneBlock,100
4644,Ruby Stone Block,RubyStoneBlock,100
4645,Diamond Stone Block,DiamondStoneBlock,100
4646,Amber Stone Block,AmberStoneBlock,100
4647,Amber Stone Wall,AmberStoneWallEcho,400
4648,Man Eater Kite,KiteManEater,1
4649,Blue Jellyfish Kite,KiteJellyfishBlue,1
4650,Pink Jellyfish Kite,KiteJellyfishPink,1
4651,Shark Kite,KiteShark,1
4652,Superhero Mask,SuperHeroMask,1
4653,Superhero Costume,SuperHeroCostume,1
4654,Superhero Tights,SuperHeroTights,1
4655,Pink Fairy Jar,PinkFairyJar,1
4656,Green Fairy Jar,GreenFairyJar,1
4657,Blue Fairy Jar,BlueFairyJar,1
4658,The Rolling Greens,GolfPainting1,1
4659,Study of a Ball at Rest,GolfPainting2,1
4660,Fore!,GolfPainting3,1
4661,The Duplicity of Reflections,GolfPainting4,1
4662,Fogbound Dye,FogboundDye,3
4663,Bloodbath Dye,BloodbathDye,3
4664,Pretty Pink Dress,PrettyPinkDressSkirt,1
4665,Pretty Pink Stockings,PrettyPinkDressPants,1
4666,Pretty Pink Ribbon,PrettyPinkRibbon,1
4667,Bamboo Fence,BambooFence,400
4668,Illuminant Coating,GlowPaint,100
4669,Sand Shark Kite,KiteSandShark,1
4670,Corrupt Bunny Kite,KiteBunnyCorrupt,1
4671,Vicious Bunny Kite,KiteBunnyCrimson,1
4672,Leather Whip,BlandWhip,1
4673,Drumstick,DrumStick,1
4674,Goldfish Kite,KiteGoldfish,1
4675,Angry Trapper Kite,KiteAngryTrapper,1
4676,Koi Kite,KiteKoi,1
4677,Crawltipede Kite,KiteCrawltipede,1
4678,Durendal,SwordWhip,1
4679,Morning Star,MaceWhip,1
4680,Dark Harvest,ScytheWhip,1
4681,Spectrum Kite,KiteSpectrum,1
4682,Release Doves,ReleaseDoves,5
4683,Wandering Eye Kite,KiteWanderingEye,1
4684,Unicorn Kite,KiteUnicorn,1
4685,Gravedigger Hat,UndertakerHat,1
4686,Gravedigger Coat,UndertakerCoat,1
4687,Angry Dandelion Banner,DandelionBanner,1
4688,Gnome Banner,GnomeBanner,1
4689,Desert Campfire,DesertCampfire,1
4690,Coral Campfire,CoralCampfire,1
4691,Corrupt Campfire,CorruptCampfire,1
4692,Crimson Campfire,CrimsonCampfire,1
4693,Hallowed Campfire,HallowedCampfire,1
4694,Jungle Campfire,JungleCampfire,1
4695,Soul of Light in a Bottle,SoulBottleLight,1
4696,Soul of Night in a Bottle,SoulBottleNight,1
4697,Soul of Flight in a Bottle,SoulBottleFlight,1
4698,Soul of Sight in a Bottle,SoulBottleSight,1
4699,Soul of Might in a Bottle,SoulBottleMight,1
4700,Soul of Fright in a Bottle,SoulBottleFright,1
4701,Mud Bud,MudBud,1
4702,Release Lantern,ReleaseLantern,5
4703,Quad-Barrel Shotgun,QuadBarrelShotgun,1
4704,Funeral Hat,FuneralHat,1
4705,Funeral Coat,FuneralCoat,1
4706,Funeral Pants,FuneralPants,1
4707,Tragic Umbrella,TragicUmbrella,1
4708,Victorian Goth Hat,VictorianGothHat,1
4709,Victorian Goth Dress,VictorianGothDress,1
4710,Tattered Wood Sign,TatteredWoodSign,1
4711,Gravedigger's Shovel,GravediggerShovel,1
4712,Desert Chest,DungeonDesertChest,1
4713,Trapped Desert Chest,Fake_DungeonDesertChest,1
4714,Desert Key,DungeonDesertKey,1
4715,Stellar Tune,SparkleGuitar,1
4716,Mollusk Whistle,MolluskWhistle,1
4717,Boreal Beam,BorealBeam,50
4718,Rich Mahogany Beam,RichMahoganyBeam,50
4719,Granite Column,GraniteColumn,50
4720,Sandstone Column,SandstoneColumn,50
4721,Mushroom Beam,MushroomBeam,50
4722,(Deprecated),FirstFractal,n/a
4723,Nevermore,Nevermore,1
4724,Reborn,Reborn,1
4725,Graveyard,Graveyard,1
4726,Ghost Manifestation,GhostManifestation,1
4727,Wicked Undead,WickedUndead,1
4728,Bloody Goblet,BloodyGoblet,1
4729,Still Life,StillLife,1
4730,Ghostar's Infinity Eight,GhostarsWings,1
4731,Terra Toilet,TerraToilet,1
4732,Ghostar's Soul Jar,GhostarSkullPin,1
4733,Ghostar's Garb,GhostarShirt,1
4734,Ghostar's Tights,GhostarPants,1
4735,Ball O' Fuse Wire,BallOfFuseWire,1
4736,Full Moon Squeaky Toy,FullMoonSqueakyToy,1
4737,Ornate Shadow Key,OrnateShadowKey,1
4738,Dr. Man Fly Mask,DrManFlyMask,1
4739,Dr. Man Fly's Lab Coat,DrManFlyLabCoat,1
4740,Butcher Mask,ButcherMask,1
4741,Butcher's Bloodstained Apron,ButcherApron,1
4742,Butcher's Bloodstained Pants,ButcherPants,1
4743,Football,Football,1
4744,Hunter Cloak,HunterCloak,1
4745,Coffin Minecart,CoffinMinecart,1
4746,Safeman's Blanket Cape,SafemanWings,1
4747,Safeman's Sunny Day,SafemanSunHair,1
4748,Safeman's Sun Dress,SafemanSunDress,1
4749,Safeman's Pink Leggings,SafemanDressLeggings,1
4750,FoodBarbarian's Tattered Dragon Wings,FoodBarbarianWings,1
4751,FoodBarbarian's Horned Helm,FoodBarbarianHelm,1
4752,FoodBarbarian's Wild Wolf Spaulders,FoodBarbarianArmor,1
4753,FoodBarbarian's Savage Greaves,FoodBarbarianGreaves,1
4754,Grox The Great's Wings,GroxTheGreatWings,1
4755,Grox The Great's Horned Cowl,GroxTheGreatHelm,1
4756,Grox The Great's Chestplate,GroxTheGreatArmor,1
4757,Grox The Great's Greaves,GroxTheGreatGreaves,1
4758,Blade Staff,Smolstar,1
4759,Squirrel Hook,SquirrelHook,1
4760,Sergeant United Shield,BouncingShield,1
4761,Rock Golem Head,RockGolemHead,1
4762,Critter Shampoo,CritterShampoo,1
4763,Digging Molecart,DiggingMoleMinecart,1
4764,Shroomerang,Shroomerang,1
4765,Tree Globe,TreeGlobe,1
4766,World Globe,WorldGlobe,1
4767,Guide to Critter Companionship,DontHurtCrittersBook,1
4768,Dog Ears,DogEars,1
4769,Dog Tail,DogTail,1
4770,Fox Ears,FoxEars,1
4771,Fox Tail,FoxTail,1
4772,Lizard Ears,LizardEars,1
4773,Lizard Tail,LizardTail,1
4774,Panda Ears,PandaEars,1
4775,Bunny Tail,BunnyTail,1
4776,Fairy Glowstick,FairyGlowstick,100
4777,Lightning Carrot,LightningCarrot,1
4778,Prismatic Dye,HallowBossDye,3
4779,Mushroom Hat,MushroomHat,1
4780,Mushroom Vest,MushroomVest,1
4781,Mushroom Pants,MushroomPants,1
4782,Treasure Bag (Empress of Light),FairyQueenBossBag,3
4783,Empress of Light Trophy,FairyQueenTrophy,1
4784,Empress of Light Mask,FairyQueenMask,1
4785,Dusty Rawhide Saddle,PaintedHorseSaddle,1
4786,Royal Gilded Saddle,MajesticHorseSaddle,1
4787,Black Studded Saddle,DarkHorseSaddle,1
4788,Jousting Lance,JoustingLance,1
4789,Shadow Jousting Lance,ShadowJoustingLance,1
4790,Hallowed Jousting Lance,HallowJoustingLance,1
4791,Pogo Stick,PogoStick,1
4792,The Black Spot,PirateShipMountItem,1
4793,Hexxed Branch,SpookyWoodMountItem,1
4794,Toy Tank,SantankMountItem,1
4795,Goat Skull,WallOfFleshGoatMountItem,1
4796,Dark Mage's Tome,DarkMageBookMountItem,1
4797,Royal Delight,KingSlimePetItem,1
4798,Suspicious Grinning Eye,EyeOfCthulhuPetItem,1
4799,Writhing Remains,EaterOfWorldsPetItem,1
4800,Brain in a Jar,BrainOfCthulhuPetItem,1
4801,Possessed Skull,SkeletronPetItem,1
4802,Sparkling Honey,QueenBeePetItem,1
4803,Deactivated Probe,DestroyerPetItem,1
4804,Pair of Eyeballs,TwinsPetItem,1
4805,Robotic Skull,SkeletronPrimePetItem,1
4806,Plantera Seedling,PlanteraPetItem,1
4807,Guardian Golem,GolemPetItem,1
4808,Pork of the Sea,DukeFishronPetItem,1
4809,Tablet Fragment,LunaticCultistPetItem,1
4810,Piece of Moon Squid,MoonLordPetItem,1
4811,Jewel of Light,FairyQueenPetItem,1
4812,Pumpkin Scented Candle,PumpkingPetItem,1
4813,Shrub Star,EverscreamPetItem,1
4814,Frozen Crown,IceQueenPetItem,1
4815,Cosmic Skateboard,MartianPetItem,1
4816,Ogre's Club,DD2OgrePetItem,1
4817,Betsy's Egg,DD2BetsyPetItem,1
4818,Combat Wrench,CombatWrench,1
4819,Demon Conch,DemonConch,1
4820,Bottomless Lava Bucket,BottomlessLavaBucket,1
4821,Lavaproof Bug Net,FireproofBugNet,1
4822,Flame Waker Boots,FlameWakerBoots,1
4823,Empress Wings,RainbowWings,1
4824,Wet Bomb,WetBomb,99
4825,Lava Bomb,LavaBomb,99
4826,Honey Bomb,HoneyBomb,99
4827,Dry Bomb,DryBomb,99
4828,Superheated Blood,SuperheatedBlood,1
4829,Cat License,LicenseCat,5
4830,Dog License,LicenseDog,5
4831,Amethyst Squirrel,GemSquirrelAmethyst,5
4832,Topaz Squirrel,GemSquirrelTopaz,5
4833,Sapphire Squirrel,GemSquirrelSapphire,5
4834,Emerald Squirrel,GemSquirrelEmerald,5
4835,Ruby Squirrel,GemSquirrelRuby,5
4836,Diamond Squirrel,GemSquirrelDiamond,5
4837,Amber Squirrel,GemSquirrelAmber,5
4838,Amethyst Bunny,GemBunnyAmethyst,5
4839,Topaz Bunny,GemBunnyTopaz,5
4840,Sapphire Bunny,GemBunnySapphire,5
4841,Emerald Bunny,GemBunnyEmerald,5
4842,Ruby Bunny,GemBunnyRuby,5
4843,Diamond Bunny,GemBunnyDiamond,5
4844,Amber Bunny,GemBunnyAmber,5
4845,Hell Butterfly,HellButterfly,5
4846,Hell Butterfly Jar,HellButterflyJar,1
4847,Lavafly,Lavafly,5
4848,Lavafly in a Bottle,LavaflyinaBottle,1
4849,Magma Snail,MagmaSnail,5
4850,Magma Snail Cage,MagmaSnailCage,1
4851,Topaz Gemcorn,GemTreeTopazSeed,5
4852,Amethyst Gemcorn,GemTreeAmethystSeed,5
4853,Sapphire Gemcorn,GemTreeSapphireSeed,5
4854,Emerald Gemcorn,GemTreeEmeraldSeed,5
4855,Ruby Gemcorn,GemTreeRubySeed,5
4856,Diamond Gemcorn,GemTreeDiamondSeed,5
4857,Amber Gemcorn,GemTreeAmberSeed,5
4858,Hanging Pot,PotSuspended,1
4859,Hanging Daybloom,PotSuspendedDaybloom,1
4860,Hanging Moonglow,PotSuspendedMoonglow,1
4861,Hanging Waterleaf,PotSuspendedWaterleaf,1
4862,Hanging Shiverthorn,PotSuspendedShiverthorn,1
4863,Hanging Blinkroot,PotSuspendedBlinkroot,1
4864,Hanging Corrupt Deathweed,PotSuspendedDeathweedCorrupt,1
4865,Hanging Crimson Deathweed,PotSuspendedDeathweedCrimson,1
4866,Hanging Fireblossom,PotSuspendedFireblossom,1
4867,Hanging Brazier,BrazierSuspended,1
4868,Mini Volcano,VolcanoSmall,1
4869,Large Volcano,VolcanoLarge,1
4870,Potion of Return,PotionOfReturn,20
4871,Sakura Sapling,VanityTreeSakuraSeed,25
4872,Lava Absorbant Sponge,LavaAbsorbantSponge,1
4873,Hallowed Hood,HallowedHood,1
4874,Hellfire Treads,HellfireTreads,1
4875,Jungle Pylon,TeleportationPylonJungle,1
4876,Forest Pylon,TeleportationPylonPurity,1
4877,Obsidian Crate,LavaCrate,5
4878,Hellstone Crate,LavaCrateHard,5
4879,Obsidian Lock Box,ObsidianLockbox,5
4880,Lava Serpent Bowl,LavaFishbowl,1
4881,Lavaproof Fishing Hook,LavaFishingHook,1
4882,Amethyst Bunny Cage,AmethystBunnyCage,1
4883,Topaz Bunny Cage,TopazBunnyCage,1
4884,Sapphire Bunny Cage,SapphireBunnyCage,1
4885,Emerald Bunny Cage,EmeraldBunnyCage,1
4886,Ruby Bunny Cage,RubyBunnyCage,1
4887,Diamond Bunny Cage,DiamondBunnyCage,1
4888,Amber Bunny Cage,AmberBunnyCage,1
4889,Amethyst Squirrel Cage,AmethystSquirrelCage,1
4890,Topaz Squirrel Cage,TopazSquirrelCage,1
4891,Sapphire Squirrel Cage,SapphireSquirrelCage,1
4892,Emerald Squirrel Cage,EmeraldSquirrelCage,1
4893,Ruby Squirrel Cage,RubySquirrelCage,1
4894,Diamond Squirrel Cage,DiamondSquirrelCage,1
4895,Amber Squirrel Cage,AmberSquirrelCage,1
4896,Ancient Hallowed Mask,AncientHallowedMask,1
4897,Ancient Hallowed Helmet,AncientHallowedHelmet,1
4898,Ancient Hallowed Headgear,AncientHallowedHeadgear,1
4899,Ancient Hallowed Hood,AncientHallowedHood,1
4900,Ancient Hallowed Plate Mail,AncientHallowedPlateMail,1
4901,Ancient Hallowed Greaves,AncientHallowedGreaves,1
4902,Potted Magma Palm,PottedLavaPlantPalm,1
4903,Potted Brimstone Bush,PottedLavaPlantBush,1
4904,Potted Fire Brambles,PottedLavaPlantBramble,1
4905,Potted Lava Bulb,PottedLavaPlantBulb,1
4906,Potted Ember Tendrils,PottedLavaPlantTendrils,1
4907,Yellow Willow Sapling,VanityTreeYellowWillowSeed,25
4908,Dirt Bomb,DirtBomb,99
4909,Sticky Dirt Bomb,DirtStickyBomb,99
4910,Bunny License,LicenseBunny,5
4911,Cool Whip,CoolWhip,1
4912,Firecracker,FireWhip,1
4913,Snapthorn,ThornWhip,1
4914,Kaleidoscope,RainbowWhip,1
4915,Tungsten Bullet,TungstenBullet,99
4916,Hallow Pylon,TeleportationPylonHallow,1
4917,Cavern Pylon,TeleportationPylonUnderground,1
4918,Ocean Pylon,TeleportationPylonOcean,1
4919,Desert Pylon,TeleportationPylonDesert,1
4920,Snow Pylon,TeleportationPylonSnow,1
4921,Mushroom Pylon,TeleportationPylonMushroom,1
4922,Cavern Water Fountain,CavernFountain,1
4923,Starlight,PiercingStarlight,1
4924,Eye of Cthulhu Relic,EyeofCthulhuMasterTrophy,1
4925,Eater of Worlds Relic,EaterofWorldsMasterTrophy,1
4926,Brain of Cthulhu Relic,BrainofCthulhuMasterTrophy,1
4927,Skeletron Relic,SkeletronMasterTrophy,1
4928,Queen Bee Relic,QueenBeeMasterTrophy,1
4929,King Slime Relic,KingSlimeMasterTrophy,1
4930,Wall of Flesh Relic,WallofFleshMasterTrophy,1
4931,Twins Relic,TwinsMasterTrophy,1
4932,Destroyer Relic,DestroyerMasterTrophy,1
4933,Skeletron Prime Relic,SkeletronPrimeMasterTrophy,1
4934,Plantera Relic,PlanteraMasterTrophy,1
4935,Golem Relic,GolemMasterTrophy,1
4936,Duke Fishron Relic,DukeFishronMasterTrophy,1
4937,Lunatic Cultist Relic,LunaticCultistMasterTrophy,1
4938,Moon Lord Relic,MoonLordMasterTrophy,1
4939,Martian Saucer Relic,UFOMasterTrophy,1
4940,Flying Dutchman Relic,FlyingDutchmanMasterTrophy,1
4941,Mourning Wood Relic,MourningWoodMasterTrophy,1
4942,Pumpking Relic,PumpkingMasterTrophy,1
4943,Ice Queen Relic,IceQueenMasterTrophy,1
4944,Everscream Relic,EverscreamMasterTrophy,1
4945,Santa-NK1 Relic,SantankMasterTrophy,1
4946,Dark Mage Relic,DarkMageMasterTrophy,1
4947,Ogre Relic,OgreMasterTrophy,1
4948,Betsy Relic,BetsyMasterTrophy,1
4949,Empress of Light Relic,FairyQueenMasterTrophy,1
4950,Queen Slime Relic,QueenSlimeMasterTrophy,1
4951,Universal Pylon,TeleportationPylonVictory,1
4952,Nightglow,FairyQueenMagicItem,1
4953,Eventide,FairyQueenRangedItem,1
4954,Celestial Starboard,LongRainbowTrailWings,1
4955,Rabbit Perch,RabbitOrder,1
4956,Zenith,Zenith,1
4957,Treasure Bag (Queen Slime),QueenSlimeBossBag,3
4958,Queen Slime Trophy,QueenSlimeTrophy,1
4959,Queen Slime Mask,QueenSlimeMask,1
4960,Regal Delicacy,QueenSlimePetItem,1
4961,Prismatic Lacewing,EmpressButterfly,3
4962,Stone Accent Slab,AccentSlab,100
4963,Truffle Worm Cage,TruffleWormCage,1
4964,Prismatic Lacewing Jar,EmpressButterflyJar,1
4965,Rock Golem Banner,RockGolemBanner,1
4966,Blood Mummy Banner,BloodMummyBanner,1
4967,Spore Skeleton Banner,SporeSkeletonBanner,1
4968,Spore Bat Banner,SporeBatBanner,1
4969,Antlion Larva Banner,LarvaeAntlionBanner,1
4970,Vicious Bunny Banner,CrimsonBunnyBanner,1
4971,Vicious Goldfish Banner,CrimsonGoldfishBanner,1
4972,Vicious Penguin Banner,CrimsonPenguinBanner,1
4973,Corrupt Mimic Banner,BigMimicCorruptionBanner,1
4974,Crimson Mimic Banner,BigMimicCrimsonBanner,1
4975,Hallowed Mimic Banner,BigMimicHallowBanner,1
4976,Moss Hornet Banner,MossHornetBanner,1
4977,Wandering Eye Banner,WanderingEyeBanner,1
4978,Fledgling Wings,CreativeWings,1
4979,Music Box (Queen Slime),MusicBoxQueenSlime,1
4980,Hook of Dissonance,QueenSlimeHook,1
4981,Gelatinous Pillion,QueenSlimeMountSaddle,1
4982,Crystal Assassin Hood,CrystalNinjaHelmet,1
4983,Crystal Assassin Shirt,CrystalNinjaChestplate,1
4984,Crystal Assassin Pants,CrystalNinjaLeggings,1
4985,Music Box (Empress Of Light),MusicBoxEmpressOfLight,1
4986,Sparkle Slime Balloon,GelBalloon,50
4987,Volatile Gelatin,VolatileGelatin,1
4988,Gelatin Crystal,QueenSlimeCrystal,3
4989,Soaring Insignia,EmpressFlightBooster,1
4990,Music Box (Duke Fishron),MusicBoxDukeFishron,1
4991,Music Box (Morning Rain),MusicBoxMorningRain,1
4992,Music Box (Alt Title),MusicBoxConsoleTitle,1
4993,Chippy's Couch,ChippysCouch,1
4994,Blue Graduation Cap,GraduationCapBlue,1
4995,Maroon Graduation Cap,GraduationCapMaroon,1
4996,Black Graduation Cap,GraduationCapBlack,1
4997,Blue Graduation Gown,GraduationGownBlue,1
4998,Maroon Graduation Gown,GraduationGownMaroon,1
4999,Black Graduation Gown,GraduationGownBlack,1
5000,Terraspark Boots,TerrasparkBoots,1
5001,Moon Lord Legs,MoonLordLegs,1
5002,Ocean Crate,OceanCrate,5
5003,Seaside Crate,OceanCrateHard,5
5004,Badger's Hat,BadgersHat,1
5005,Terraprisma,EmpressBlade,1
5006,Music Box (Underground Desert),MusicBoxUndergroundDesert,1
5007,Dead Man's Sweater,DeadMansSweater,1
5008,Teapot,TeaKettle,1
5009,Teacup,Teacup,5
5010,Treasure Magnet,TreasureMagnet,1
5011,Mace,Mace,1
5012,Flaming Mace,FlamingMace,1
5013,[[|]],SleepingIcon,n/a
5014,Otherworldly Music Box (Rain),MusicBoxOWRain,1
5015,Otherworldly Music Box (Overworld Day),MusicBoxOWDay,1
5016,Otherworldly Music Box (Night),MusicBoxOWNight,1
5017,Otherworldly Music Box (Underground),MusicBoxOWUnderground,1
5018,Otherworldly Music Box (Desert),MusicBoxOWDesert,1
5019,Otherworldly Music Box (Ocean),MusicBoxOWOcean,1
5020,Otherworldly Music Box (Mushrooms),MusicBoxOWMushroom,1
5021,Otherworldly Music Box (Dungeon),MusicBoxOWDungeon,1
5022,Otherworldly Music Box (Space),MusicBoxOWSpace,1
5023,Otherworldly Music Box (Underworld),MusicBoxOWUnderworld,1
5024,Otherworldly Music Box (Snow),MusicBoxOWSnow,1
5025,Otherworldly Music Box (Corruption),MusicBoxOWCorruption,1
5026,Otherworldly Music Box (Underground Corruption),MusicBoxOWUndergroundCorruption,1
5027,Otherworldly Music Box (Crimson),MusicBoxOWCrimson,1
5028,Otherworldly Music Box (Underground Crimson),MusicBoxOWUndergroundCrimson,1
5029,Otherworldly Music Box (Ice),MusicBoxOWUndergroundSnow,1
5030,Otherworldly Music Box (Underground Hallow),MusicBoxOWUndergroundHallow,1
5031,Otherworldly Music Box (Eerie),MusicBoxOWBloodMoon,1
5032,Otherworldly Music Box (Boss 2),MusicBoxOWBoss2,1
5033,Otherworldly Music Box (Boss 1),MusicBoxOWBoss1,1
5034,Otherworldly Music Box (Invasion),MusicBoxOWInvasion,1
5035,Otherworldly Music Box (The Towers),MusicBoxOWTowers,1
5036,Otherworldly Music Box (Lunar Boss),MusicBoxOWMoonLord,1
5037,Otherworldly Music Box (Plantera),MusicBoxOWPlantera,1
5038,Otherworldly Music Box (Jungle),MusicBoxOWJungle,1
5039,Otherworldly Music Box (Wall of Flesh),MusicBoxOWWallOfFlesh,1
5040,Otherworldly Music Box (Hallow),MusicBoxOWHallow,1
5041,Carton of Milk,MilkCarton,5
5042,Coffee,CoffeeCup,5
5043,Torch God's Favor,TorchGodsFavor,1
5044,Music Box (Journey's End),MusicBoxCredits,1
5045,Plaguebringer's Skull,PlaguebringerHelmet,1
5046,Plaguebringer's Cloak,PlaguebringerChestplate,1
5047,Plaguebringer's Treads,PlaguebringerGreaves,1
5048,Wandering Jingasa,RoninHat,1
5049,Wandering Yukata,RoninShirt,1
5050,Wandering Geta,RoninPants,1
5051,Timeless Traveler's Hood,TimelessTravelerHood,1
5052,Timeless Traveler's Cloak,TimelessTravelerRobe,1
5053,Timeless Traveler's Footwear,TimelessTravelerBottom,1
5054,Floret Protector Helmet,FloretProtectorHelmet,1
5055,Floret Protector Shirt,FloretProtectorChestplate,1
5056,Floret Protector Pants,FloretProtectorLegs,1
5057,Capricorn Helmet,CapricornMask,1
5058,Capricorn Chestplate,CapricornChestplate,1
5059,Capricorn Hooves,CapricornLegs,1
5060,Capricorn Tail,CapricornTail,1
5061,Video Visage,TVHeadMask,1
5062,Lazer Blazer,TVHeadSuit,1
5063,Pinstripe Pants,TVHeadPants,1
5064,Lavaproof Tackle Bag,LavaproofTackleBag,1
5065,Resonance Scepter,PrincessWeapon,1
5066,Bee Hive,BeeHive,5
5067,Antlion Eggs,AntlionEggs,5
5068,Flinx Fur Coat,FlinxFurCoat,1
5069,Flinx Staff,FlinxStaff,1
5070,Flinx Fur,FlinxFur,15
5071,Royal Tiara,RoyalTiara,1
5072,Royal Blouse,RoyalDressTop,1
5073,Royal Dress,RoyalDressBottom,1
5074,Spinal Tap,BoneWhip,1
5075,Rainbow Cursor,RainbowCursor,1
5076,Royal Scepter,RoyalScepter,1
5077,Glass Slipper,GlassSlipper,1
5078,Prince Uniform,PrinceUniform,1
5079,Prince Pants,PrincePants,1
5080,Prince Cape,PrinceCape,1
5081,Potted Crystal Fern,PottedCrystalPlantFern,1
5082,Potted Crystal Spiral,PottedCrystalPlantSpiral,1
5083,Potted Crystal Teardrop,PottedCrystalPlantTeardrop,1
5084,Potted Crystal Tree,PottedCrystalPlantTree,1
5085,Princess 64,Princess64,1
5086,Painting of a Lass,PaintingOfALass,1
5087,Dark Side of the Hallow,DarkSideHallow,1
5088,Bernie's Button,BerniePetItem,1
5089,Glommer's Flower,GlommerPetItem,1
5090,Deerclops Eyeball,DeerclopsPetItem,1
5091,Monster Meat,PigPetItem,1
5092,Monster Lasagna,MonsterLasagna,5
5093,Froggle Bunwich,FroggleBunwich,5
5094,Tentacle Spike,TentacleSpike,1
5095,Lucy the Axe,LucyTheAxe,1
5096,Ham Bat,HamBat,1
5097,Bat Bat,BatBat,1
5098,Eye Bone,ChesterPetItem,1
5099,Garland,GarlandHat,1
5100,Bone Helm,BoneHelm,1
5101,Eyebrella,Eyebrella,1
5102,Gentleman's Vest,WilsonShirt,1
5103,Gentleman's Trousers,WilsonPants,1
5104,Gentleman's Beard,WilsonBeardShort,1
5105,Gentleman's Long Beard,WilsonBeardLong,1
5106,Gentleman's Magnificent Beard,WilsonBeardMagnificent,1
5107,Magiluminescence,Magiluminescence,1
5108,Deerclops Trophy,DeerclopsTrophy,1
5109,Deerclops Mask,DeerclopsMask,1
5110,Deerclops Relic,DeerclopsMasterTrophy,1
5111,Treasure Bag (Deerclops),DeerclopsBossBag,3
5112,Music Box (Deerclops),MusicBoxDeerclops,1
5113,Radio Thing,DontStarveShaderItem,1
5114,Abigail's Flower,AbigailsFlower,1
5115,Firestarter's Sweater,WillowShirt,1
5116,Firestarter's Skirt,WillowSkirt,1
5117,Pew-matic Horn,PewMaticHorn,1
5118,Weather Pain,WeatherPain,1
5119,Houndius Shootius,HoundiusShootius,1
5120,Deer Thing,DeerThing,3
5121,The Gentleman Scientist,PaintingWilson,1
5122,The Firestarter,PaintingWillow,1
5123,The Bereaved,PaintingWendy,1
5124,The Strongman,PaintingWolfgang,1
5125,Fart Kart,FartMinecart,1
5126,Hand Of Creation,HandOfCreation,1
5127,Neon Moss,VioletMoss,25
5128,Helium Moss,RainbowMoss,25
5129,Flymeal,Flymeal,1
5130,Lilith's Necklace,WolfMountItem,1
5131,Resplendent Dessert,ResplendentDessert,1
5132,Stinkbug,Stinkbug,5
5133,Stinkbug Cage,StinkbugCage,1
5134,Terraformer,Clentaminator2,1
5135,Venom Dart Trap,VenomDartTrap,5
5136,Vulkelf Ears,VulkelfEar,1
5137,Stinkbug Blocker,StinkbugHousingBlocker,1
5138,Ghostly Stinkbug Blocker,StinkbugHousingBlockerEcho,1
5139,Fishing Bobber,FishingBobber,1
5140,Glowing Fishing Bobber,FishingBobberGlowingStar,1
5141,Lava Moss Fishing Bobber,FishingBobberGlowingLava,1
5142,Krypton Moss Fishing Bobber,FishingBobberGlowingKrypton,1
5143,Xenon Moss Fishing Bobber,FishingBobberGlowingXenon,1
5144,Argon Moss Fishing Bobber,FishingBobberGlowingArgon,1
5145,Neon Moss Fishing Bobber,FishingBobberGlowingViolet,1
5146,Helium Moss Fishing Bobber,FishingBobberGlowingRainbow,1
5147,Wand of Frosting,WandofFrosting,1
5148,Reef Bathtub,CoralBathtub,1
5149,Reef Bed,CoralBed,1
5150,Reef Bookcase,CoralBookcase,1
5151,Reef Dresser,CoralDresser,1
5152,Reef Candelabra,CoralCandelabra,1
5153,Reef Candle,CoralCandle,1
5154,Reef Chair,CoralChair,1
5155,Reef Chandelier,CoralChandelier,1
5156,Reef Chest,CoralChest,1
5157,Reef Clock,CoralClock,1
5158,Reef Door,CoralDoor,1
5159,Reef Lamp,CoralLamp,1
5160,Reef Lantern,CoralLantern,1
5161,Reef Piano,CoralPiano,1
5162,Reef Platform,CoralPlatform,200
5163,Reef Sink,CoralSink,1
5164,Reef Sofa,CoralSofa,1
5165,Reef Table,CoralTable,1
5166,Reef Work Bench,CoralWorkbench,1
5167,Trapped Reef Chest,Fake_CoralChest,1
5168,Reef Toilet,CoralToilet,1
5169,Balloon Bathtub,BalloonBathtub,1
5170,Balloon Bed,BalloonBed,1
5171,Balloon Bookcase,BalloonBookcase,1
5172,Balloon Dresser,BalloonDresser,1
5173,Balloon Candelabra,BalloonCandelabra,1
5174,Balloon Candle,BalloonCandle,1
5175,Balloon Chair,BalloonChair,1
5176,Balloon Chandelier,BalloonChandelier,1
5177,Balloon Chest,BalloonChest,1
5178,Balloon Clock,BalloonClock,1
5179,Balloon Door,BalloonDoor,1
5180,Balloon Lamp,BalloonLamp,1
5181,Balloon Lantern,BalloonLantern,1
5182,Balloon Piano,BalloonPiano,1
5183,Balloon Platform,BalloonPlatform,200
5184,Balloon Sink,BalloonSink,1
5185,Balloon Sofa,BalloonSofa,1
5186,Balloon Table,BalloonTable,1
5187,Balloon Work Bench,BalloonWorkbench,1
5188,Trapped Balloon Chest,Fake_BalloonChest,1
5189,Balloon Toilet,BalloonToilet,1
5190,Ash Wood Bathtub,AshWoodBathtub,1
5191,Ash Wood Bed,AshWoodBed,1
5192,Ash Wood Bookcase,AshWoodBookcase,1
5193,Ash Wood Dresser,AshWoodDresser,1
5194,Ash Wood Candelabra,AshWoodCandelabra,1
5195,Ash Wood Candle,AshWoodCandle,1
5196,Ash Wood Chair,AshWoodChair,1
5197,Ash Wood Chandelier,AshWoodChandelier,1
5198,Ash Wood Chest,AshWoodChest,1
5199,Ash Wood Clock,AshWoodClock,1
5200,Ash Wood Door,AshWoodDoor,1
5201,Ash Wood Lamp,AshWoodLamp,1
5202,Ash Wood Lantern,AshWoodLantern,1
5203,Ash Wood Piano,AshWoodPiano,1
5204,Ash Wood Platform,AshWoodPlatform,200
5205,Ash Wood Sink,AshWoodSink,1
5206,Ash Wood Sofa,AshWoodSofa,1
5207,Ash Wood Table,AshWoodTable,1
5208,Ash Wood Work Bench,AshWoodWorkbench,1
5209,Trapped Ash Wood Chest,Fake_AshWoodChest,1
5210,Ash Wood Toilet,AshWoodToilet,1
5211,Biome Sight Potion,BiomeSightPotion,20
5212,Scarlet Macaw,ScarletMacaw,5
5213,Scarlet Macaw Cage,ScarletMacawCage,1
5214,Ash Grass Seeds,AshGrassSeeds,25
5215,Ash Wood,AshWood,100
5216,Ash Wood Wall,AshWoodWall,400
5217,Ash Wood Fence,AshWoodFence,400
5218,Outcast,Outcast,1
5219,Fairy Guides,FairyGuides,1
5220,A Horrible Night for Alchemy,AHorribleNightforAlchemy,1
5221,Morning Hunt,MorningHunt,1
5222,Suspiciously Sparkly,SuspiciouslySparkly,1
5223,Requiem,Requiem,1
5224,Cat Sword,CatSword,1
5225,Kargoh's Summon,KargohsSummon,1
5226,High Pitch,HighPitch,1
5227,A Machine for Terrarians,AMachineforTerrarians,1
5228,Terra Blade Chronicles,TerraBladeChronicles,1
5229,Benny Warhol,BennyWarhol,1
5230,Lizard King,LizardKing,1
5231,My Son,MySon,1
5232,Duality,Duality,1
5233,Parsec Pals,ParsecPals,1
5234,Remnants of Devotion,RemnantsofDevotion,1
5235,Not So Lost In Paradise,NotSoLostInParadise,1
5236,Ocular Resonance,OcularResonance,1
5237,Wings of Evil,WingsofEvil,1
5238,Constellation,Constellation,1
5239,Eyezorhead,Eyezorhead,1
5240,Dread of the Red Sea,DreadoftheRedSea,1
5241,Do Not Eat the Vile Mushroom!,DoNotEattheVileMushroom,1
5242,"Yuuma, The Blue Tiger",YuumaTheBlueTiger,1
5243,Moonman & Company,MoonmanandCompany,1
5244,Sunshine of Israpony,SunshineofIsrapony,1
5245,Purity,Purity,1
5246,Sufficiently Advanced,SufficientlyAdvanced,1
5247,Strange Growth,StrangeGrowth,1
5248,Happy Little Tree,HappyLittleTree,1
5249,Strange Dead Fellows,StrangeDeadFellows,1
5250,Secrets,Secrets,1
5251,Thunderbolt,Thunderbolt,1
5252,Crustography,Crustography,1
5253,The Werewolf,TheWerewolf,1
5254,Blessing from the Heavens,BlessingfromTheHeavens,1
5255,Love is in the Trash Slot,LoveisintheTrashSlot,1
5256,Fangs,Fangs,1
5257,Hail to the King,HailtotheKing,1
5258,See The World For What It Is,SeeTheWorldForWhatItIs,1
5259,What Lurks Below,WhatLurksBelow,1
5260,This Is Getting Out Of Hand,ThisIsGettingOutOfHand,1
5261,Buddies,Buddies,1
5262,Midnight Sun,MidnightSun,1
5263,Couch Gag,CouchGag,1
5264,Silent Fish,SilentFish,1
5265,The Duke,TheDuke,1
5266,Royal Romance,RoyalRomance,1
5267,Bioluminescence,Bioluminescence,1
5268,Wildflowers,Wildflowers,1
5269,Viking Voyage,VikingVoyage,1
5270,Bifrost,Bifrost,1
5271,Heartlands,Heartlands,1
5272,Forest Troll,ForestTroll,1
5273,Aurora Borealis,AuroraBorealis,1
5274,Lady Of The Lake,LadyOfTheLake,1
5275,Joja Cola,JojaCola,5
5276,Stardrop,JunimoPetItem,1
5277,Spicy Pepper,SpicyPepper,5
5278,Pomegranate,Pomegranate,5
5279,Ash Wood Helmet,AshWoodHelmet,1
5280,Ash Wood Breastplate,AshWoodBreastplate,1
5281,Ash Wood Greaves,AshWoodGreaves,1
5282,Ash Wood Bow,AshWoodBow,1
5283,Ash Wood Hammer,AshWoodHammer,1
5284,Ash Wood Sword,AshWoodSword,1
5285,Moon Globe,MoonGlobe,1
5286,Repaired Life Crystal,RepairedLifeCrystal,10
5287,Repaired Mana Crystal,RepairedManaCrystal,10
5288,Terra Fart Kart,TerraFartMinecart,1
5289,Minecart Upgrade Kit,MinecartPowerup,1
5290,Jim's Cap,JimsCap,1
5291,Echo Wall,EchoWall,400
5292,Echo Platform,EchoPlatform,200
5293,Mushroom Torch,MushroomTorch,100
5294,Hive-Five,HiveFive,1
5295,Axe of Regrowth,AcornAxe,1
5296,Chlorophyte Extractinator,ChlorophyteExtractinator,1
5297,Blue Chicken Egg,BlueEgg,1
5298,Trimarang,Trimarang,1
5299,Mushroom Campfire,MushroomCampfire,1
5300,Blue Macaw,BlueMacaw,5
5301,Blue Macaw Cage,BlueMacawCage,1
5302,Bottomless Honey Bucket,BottomlessHoneyBucket,1
5303,Honey Absorbant Sponge,HoneyAbsorbantSponge,1
5304,Ultra Absorbant Sponge,UltraAbsorbantSponge,1
5305,Goblorc Ears,GoblorcEar,1
5306,Reef Block,ReefBlock,100
5307,Reef Wall,ReefWall,400
5308,r/Terraria,PlacePainting,1
5309,Guide to Environmental Preservation,DontHurtNatureBook,1
5310,Princess Style,PrincessStyle,1
5311,Toucan,Toucan,5
5312,Yellow Cockatiel,YellowCockatiel,5
5313,Gray Cockatiel,GrayCockatiel,5
5314,Toucan Cage,ToucanCage,1
5315,Yellow Cockatiel Cage,YellowCockatielCage,1
5316,Gray Cockatiel Cage,GrayCockatielCage,1
5317,Macaw Statue,MacawStatue,1
5318,Toucan Statue,ToucanStatue,1
5319,Cockatiel Statue,CockatielStatue,1
5320,Decorative Healing Potion,PlaceableHealingPotion,30
5321,Decorative Mana Potion,PlaceableManaPotion,30
5322,Shadow Candle,ShadowCandle,1
5323,Guide to Peaceful Coexistence,DontHurtComboBook,1
5324,Rubblemaker (Small),RubblemakerSmall,1
5325,Closed Void Bag,ClosedVoidBag,n/a
5326,Artisan Loaf,ArtisanLoaf,1
5327,TNT Barrel,TNTBarrel,5
5328,Chest Lock,ChestLock,5
5329,Rubblemaker (Medium),RubblemakerMedium,n/a
5330,Rubblemaker (Large),RubblemakerLarge,n/a
5331,Bundle of Horseshoe Balloons,HorseshoeBundle,1
5332,Spiffo Plush,SpiffoPlush,1
5333,Glow Tulip,GlowTulip,1
5334,Ocram's Razor,MechdusaSummon,3
5335,Rod of Harmony,RodOfHarmony,1
5336,Advanced Combat Techniques: Volume Two,CombatBookVolumeTwo,1
5337,Vital Crystal,AegisCrystal,1
5338,Aegis Fruit,AegisFruit,1
5339,Arcane Crystal,ArcaneCrystal,1
5340,Galaxy Pearl,GalaxyPearl,1
5341,Gummy Worm,GummyWorm,1
5342,Ambrosia,Ambrosia,1
5343,Peddler's Satchel,PeddlersSatchel,1
5344,Echo Coating,EchoCoating,100
5345,Echo Chamber,EchoMonolith,1
5346,Gas Trap,GasTrap,1
5347,Aether Monolith,ShimmerMonolith,1
5348,Shimmer Arrow,ShimmerArrow,99
5349,Aetherium Block,ShimmerBlock,50
5350,Faeling,Shimmerfly,5
5351,Faeling in a Bottle,ShimmerflyinaBottle,1
5352,Shimmer Slime Banner,ShimmerSlimeBanner,1
5353,Aether Torch,ShimmerTorch,100
5354,Reflective Shades,ReflectiveShades,1
5355,Chromatic Cloak,ShimmerCloak,1
5356,Used Gas Trap,UsedGasTrap,1
5357,Aether Campfire,ShimmerCampfire,1
5358,Shellphone (Home),Shellphone,n/a
5359,Shellphone (Spawn),ShellphoneSpawn,n/a
5360,Shellphone (Ocean),ShellphoneOcean,n/a
5361,Shellphone (Underworld),ShellphoneHell,n/a
5362,Music Box (Aether),MusicBoxShimmer,1
5363,Infested Spider Wall,SpiderWallUnsafe,400
5364,Bottomless Shimmer Bucket,BottomlessShimmerBucket,1
5365,Cursed Blue Brick Wall,BlueBrickWallUnsafe,400
5366,Cursed Blue Slab Wall,BlueSlabWallUnsafe,400
5367,Cursed Blue Tiled Wall,BlueTiledWallUnsafe,400
5368,Cursed Pink Brick Wall,PinkBrickWallUnsafe,400
5369,Cursed Pink Slab Wall,PinkSlabWallUnsafe,400
5370,Cursed Pink Tiled Wall,PinkTiledWallUnsafe,400
5371,Cursed Green Brick Wall,GreenBrickWallUnsafe,400
5372,Cursed Green Slab Wall,GreenSlabWallUnsafe,400
5373,Cursed Green Tiled Wall,GreenTiledWallUnsafe,400
5374,Treacherous Sandstone Wall,SandstoneWallUnsafe,400
5375,Treacherous Hardened Sand Wall,HardenedSandWallUnsafe,400
5376,Forbidden Lihzahrd Brick Wall,LihzahrdWallUnsafe,400
5377,Spelunker Flare,SpelunkerFlare,99
5378,Cursed Flare,CursedFlare,99
5379,Rainbow Flare,RainbowFlare,99
5380,Shimmer Flare,ShimmerFlare,99
5381,Enchanted Moondial,Moondial,1
5382,Waffle's Iron,WaffleIron,1
5383,Bouncy Boulder,BouncyBoulder,5
5384,Life Crystal Boulder,LifeCrystalBoulder,5
5385,Dizzy's Rare Gecko Chester,DizzyHat,1
5386,Raynbro's Hoodie,LincolnsHoodie,1
5387,Raynbro's Pants,LincolnsPants,1
5388,Eye of the Sun,SunOrnament,1
5389,Cheesy Pizza Poster,HoplitePizza,1
5390,Raynbro's Hood,LincolnsHood,1
5391,Uncumbering Stone,UncumberingStone,n/a
5392,Yellow Solution,SandSolution,99
5393,White Solution,SnowSolution,99
5394,Brown Solution,DirtSolution,99
5395,Poo,PoopBlock,100
5396,Poo Wall,PoopWall,400
5397,Aetherium Wall,ShimmerWall,200
5398,Aetherium Brick,ShimmerBrick,50
5399,Aetherium Brick Wall,ShimmerBrickWall,200
5400,The Dirtiest Block,DirtiestBlock,1
5401,Lunar Rust Brick,LunarRustBrick,100
5402,Dark Celestial Brick,DarkCelestialBrick,100
5403,Astra Brick,AstraBrick,100
5404,Cosmic Ember Brick,CosmicEmberBrick,100
5405,Cryocore Brick,CryocoreBrick,100
5406,Mercury Brick,MercuryBrick,100
5407,Star Royale Brick,StarRoyaleBrick,100
5408,Heavenforge Brick,HeavenforgeBrick,100
5409,Lunar Rust Brick Wall,LunarRustBrickWall,400
5410,Dark Celestial Brick Wall,DarkCelestialBrickWall,400
5411,Astra Brick Wall,AstraBrickWall,400
5412,Cosmic Ember Brick Wall,CosmicEmberBrickWall,400
5413,Cryocore Brick Wall,CryocoreBrickWall,400
5414,Mercury Brick Wall,MercuryBrickWall,400
5415,Star Royale Brick Wall,StarRoyaleBrickWall,400
5416,Heavenforge Brick Wall,HeavenforgeBrickWall,400
5417,Ancient Blue Brick,AncientBlueDungeonBrick,100
5418,Ancient Blue Brick Wall,AncientBlueDungeonBrickWall,400
5419,Ancient Green Brick,AncientGreenDungeonBrick,100
5420,Ancient Green Brick Wall,AncientGreenDungeonBrickWall,400
5421,Ancient Pink Brick,AncientPinkDungeonBrick,100
5422,Ancient Pink Brick Wall,AncientPinkDungeonBrickWall,400
5423,Ancient Gold Brick,AncientGoldBrick,100
5424,Ancient Gold Brick Wall,AncientGoldBrickWall,400
5425,Ancient Silver Brick,AncientSilverBrick,100
5426,Ancient Silver Brick Wall,AncientSilverBrickWall,400
5427,Ancient Copper Brick,AncientCopperBrick,100
5428,Ancient Copper Brick Wall,AncientCopperBrickWall,400
5429,Ancient Cobalt Brick,AncientCobaltBrick,100
5430,Ancient Cobalt Brick Wall,AncientCobaltBrickWall,400
5431,Ancient Mythril Brick,AncientMythrilBrick,100
5432,Ancient Mythril Brick Wall,AncientMythrilBrickWall,400
5433,Ancient Obsidian Brick,AncientObsidianBrick,100
5434,Ancient Obsidian Brick Wall,AncientObsidianBrickWall,400
5435,Ancient Hellstone Brick,AncientHellstoneBrick,100
5436,Ancient Hellstone Brick Wall,AncientHellstoneBrickWall,400
5437,Shellphone,ShellphoneDummy,1
5438,Fertilizer,Fertilizer,30
5439,Lava Moss Brick,LavaMossBlock,100
5440,Argon Moss Brick,ArgonMossBlock,100
5441,Krypton Moss Brick,KryptonMossBlock,100
5442,Xenon Moss Brick,XenonMossBlock,100
5443,Neon Moss Brick,VioletMossBlock,100
5444,Helium Moss Brick,RainbowMossBlock,100
5445,Lava Moss Brick Wall,LavaMossBlockWall,400
5446,Argon Moss Brick Wall,ArgonMossBlockWall,400
5447,Krypton Moss Brick Wall,KryptonMossBlockWall,400
5448,Xenon Moss Brick Wall,XenonMossBlockWall,400
5449,Neon Moss Brick Wall,VioletMossBlockWall,400
5450,Helium Moss Brick Wall,RainbowMossBlockWall,400
5451,Kwad Racer Drone,JimsDrone,1
5452,FPV Goggles,JimsDroneVisor,1
5453,Guide to Critter Companionship (Inactive),DontHurtCrittersBookInactive,n/a
5454,Guide to Environmental Preservation (Inactive),DontHurtNatureBookInactive,n/a
5455,Guide to Peaceful Coexistence (Inactive),DontHurtComboBookInactive,n/a
5456,Mushroom Staff,DeadCellsMushroomBoiSummonItem,1
5457,The Beheaded's Head,DeadCellsBeheadedHead,1
5458,The Beheaded's Cuirass,DeadCellsBeheadedBody,1
5459,The Beheaded's Trousers,DeadCellsBeheadedLegs,1
5460,Barrel Launcher,DeadCellsBarrelLauncher,1
5461,Killing Deck,DeadCellsKillingDeck,1
5462,Flint,DeadCellsFlint,1
5463,Barnacle Staff,DeadCellsBarnacleSummonItem,1
5464,Mitey-Titey,MiteyTitey,1
5465,Ram Rune,DeadCellsRamRune,1
5466,Swarm Grenade,DeadCellsSwarmGrenade,1
5467,Replica Demon Altar,DemonAltarReplica,1
5468,Replica Crimson Altar,CrimsonAltarReplica,1
5469,Replica Shadow Orb,ShadowOrbReplica,1
5470,Replica Crimson Heart,CrimsonHeartReplica,1
5471,Decorative Cobweb,CobwebReplica,50
5472,Item Flask,DeadCellsDisplayJar,1
5473,Cobwhip,CobWhip,1
5474,Soulscourge,CorruptWhip,1
5475,Vasculash,CrimsonWhip,1
5476,Starcrash,MeteorWhip,1
5477,Vulgar Display of Flower,FlowerWhip,1
5478,Electric Eel,EelWhip,1
5479,Constellation,ConstellationWhip,1
5480,Possession,MoonLordWhip,1
5481,Portable Kiln,PortableKiln,1
5482,Alchemy Flask,DeadCellsPotionStation,1
5483,Queen of Bees,QueenOfBees,1
5484,Cow Bell,PlayerVoiceCowbellItem,1
5485,Chicken Charm,PlayerVoiceChickenFeetItem,1
5486,The Sea of Silence,TheSeaOfSilence,1
5487,Heroes From Another World,HeroesFromAnotherWorld,1
5488,Crystallize,Crystallize,1
5489,Eater Of Life,EaterOfLife,1
5490,Brasilian Skies,ThisIsCanonNow,1
5491,Winter At Varingskollen,WinterAtVaringskollen,1
5492,Magic Shimmer Dropper,MagicShimmerDropper,1
5493,Shimmerfall Block,ShimmerFallBlock,100
5494,Shimmerfall Wall,ShimmerFallWall,400
5495,Shimmer Gun,ShimmerGun,1
5496,Jungle Juice,LifeFruitHealingPotion,30
5497,Pink Banner,PinkBanner,1
5498,White Banner,WhiteBanner,1
5499,Froggy Neckband,PlayerVoiceFrogItem,1
5500,Goat's Tuft,PlayerVoiceGoatItem,1
5501,Old Companion Locket,PlayerVoiceRetroItem,1
5502,Cat Chime,PlayerVoiceCatItem,1
5503,Dog Collar,PlayerVoiceDogItem,1
5504,Turkey Wattle Necklace,PlayerVoiceTurkeyItem,1
5505,Mean Goblin's Spikes,PlayerVoiceGoblinItem,1
5506,Crow's Beak,PlayerVoiceCrowItem,1
5507,Balloony Beads,PlayerVoiceBalloonItem,1
5508,Grim Old Barb,PlayerVoiceUndeadItem,1
5509,Vampire Pendant,PlayerVoiceVampireItem,1
5510,Slasher's Mysterious Skull,VelociraptorMountItem,1
5511,Pufferfish,Pufferfish,5
5512,Pufferfish Cage,PufferfishCage,1
5513,Puffer Shrimp,PufferfishPet,1
5514,Rainbow Boulder,RainbowBoulder,5
5515,Moon Lord Torso,MoonLordBody,1
5516,Poo Boulder,Poulder,5
5517,Faecorn,AxeFairyPetItem,1
5518,Infused Fertilizer,SuperFertilizer,30
5519,Axearang,Axearang,1
5520,Lava Boulder,LavaBoulder,5
5521,Spider Boulder,SpiderBoulder,5
5522,Ghoulder,Ghoulder,5
5523,Friendly Boulder,BoulderPet,1
5524,Chlorophyte Visor,ChlorophyteVisor,1
5525,Cursed Piper Flute,RatMountItem,1
5526,Flairon,FlaironFlail,1
5527,Of Sea and Dreams,OfSeaAndDreams,1
5528,The Runic Pixie,TheRunicPixie,1
5529,Banner of the Beast,BannerOfTheBeast,1
5530,Stickman vs Terr Terr,StickmanVsTerrTerr,1
5531,Cozy Window,CozyWindow,1
5532,Demon Altar,DemonAltar,1
5533,Crimson Altar,CrimsonAltar,1
5534,Fairy Choker,PlayerVoiceFairyItem,1
5535,Pink Phaseblade,PinkPhaseblade,1
5536,Pink Phasesaber,PinkPhasesaber,1
5537,Blackened Fish,BlackenedFish,5
5538,Music Box (Queen Bee),MusicBoxQueenBee,1
5539,Music Box (The Twins),MusicBoxTwins,1
5540,Magic String,MagicString,1
5541,Magic Yoyo Bag,MagicYoyoBag,1
5542,Freeze Bomb,FreezeBomb,99
5543,Stress Ball,StressBall,1
5544,Cloud Platform,CloudPlatform,200
5545,Overgrown Living Wood Wall,LivingWoodWallUnsafe,400
5546,Natural Dirt Wall,DirtWallUnsafe,400
5547,Strung Counterweight,StrungCounterweight,1
5548,Aetherium Bathtub,AetheriumBathtub,1
5549,Aetherium Bed,AetheriumBed,1
5550,Aetherium Bookcase,AetheriumBookcase,1
5551,Aetherium Dresser,AetheriumDresser,1
5552,Aetherium Candelabra,AetheriumCandelabra,1
5553,Aetherium Candle,AetheriumCandle,1
5554,Aetherium Chair,AetheriumChair,1
5555,Aetherium Chandelier,AetheriumChandelier,1
5556,Aetherium Chest,AetheriumChest,1
5557,Aetherium Clock,AetheriumClock,1
5558,Aetherium Door,AetheriumDoor,1
5559,Aetherium Lamp,AetheriumLamp,1
5560,Aetherium Lantern,AetheriumLantern,1
5561,Aetherium Piano,AetheriumPiano,1
5562,Aetherium Platform,AetheriumPlatform,200
5563,Aetherium Sink,AetheriumSink,1
5564,Aetherium Sofa,AetheriumSofa,1
5565,Aetherium Table,AetheriumTable,1
5566,Aetherium Work Bench,AetheriumWorkbench,1
5567,Trapped Aetherium Chest,Fake_AetheriumChest,1
5568,Aetherium Toilet,AetheriumToilet,1
5569,Lava Cloud,LavaCloud,100
5570,Star Cloud,StarCloud,100
5571,Rainbow Cloud,RainbowCloud,100
5572,Mud Ball,MudBallPlayer,100
5573,Torch God's Flavor,TorchGodPotion,20
5574,Lucky Clover,LuckyClover,1
5575,Wilted Clover,WiltedClover,1
5576,Raven Feather,RavenFeather,1
5577,Pretty Mirror,PrettyMirror,99
5578,Music Box (King Slime),MusicBoxKingSlime,1
5579,Music Box (Alt Queen Bee),MusicBoxQueenBeeAlt,1
5580,Music Box (Lunatic Cultist),MusicBoxLunaticCultist,1
5581,Music Box (Skeletron Prime),MusicBoxSkeletronPrime,1
5582,Music Box (The Destroyer),MusicBoxDestroyer,1
5583,Chicken Bones' Visor,ChickenBonesHead,1
5584,Chicken Bones' Vest,ChickenBonesBody,1
5585,Chicken Bones' Pants,ChickenBonesLegs,1
5586,Chicken Bones' Wings,ChickenBonesWings,1
5587,Chicken Bones' Robe,ChickenBonesRobe,1
5588,Prospector Helmet,UpgradedMiningHead,1
5589,Prospector Shirt,UpgradedMiningBody,1
5590,Prospector Pants,UpgradedMiningLegs,1
5591,Captain Hat,UpgradedFishingHead,1
5592,Captain Vest,UpgradedFishingBody,1
5593,Captain Pants,UpgradedFishingLegs,1
5594,Power Bomb,SuperBomb,99
5595,Sticky Power Bomb,SuperStickyBomb,99
5596,Welding Mask,WeldingMask,1
5597,Amulet of the Night,BatMountItem,1
5598,CRT Monolith,CRTMonolith,1
5599,Retro Monolith,RetroMonolith,1
5600,Blue Roller Skates,RollerSkatesBlueMountItem,1
5601,Fallen Star Bathtub,FallenStarBathtub,1
5602,Fallen Star Bed,FallenStarBed,1
5603,Fallen Star Bookcase,FallenStarBookcase,1
5604,Fallen Star Dresser,FallenStarDresser,1
5605,Fallen Star Candelabra,FallenStarCandelabra,1
5606,Fallen Star Candle,FallenStarCandle,1
5607,Fallen Star Chair,FallenStarChair,1
5608,Fallen Star Chandelier,FallenStarChandelier,1
5609,Fallen Star Chest,FallenStarChest,1
5610,Fallen Star Clock,FallenStarClock,1
5611,Fallen Star Door,FallenStarDoor,1
5612,Fallen Star Lamp,FallenStarLamp,1
5613,Fallen Star Lantern,FallenStarLantern,1
5614,Fallen Star Piano,FallenStarPiano,1
5615,Fallen Star Platform,FallenStarPlatform,200
5616,Fallen Star Sink,FallenStarSink,1
5617,Fallen Star Sofa,FallenStarSofa,1
5618,Fallen Star Table,FallenStarTable,1
5619,Fallen Star Work Bench,FallenStarWorkbench,1
5620,Trapped Fallen Star Chest,Fake_FallenStarChest,1
5621,Fallen Star Toilet,FallenStarToilet,1
5622,Fallen Star Block,FallenStarBlock,100
5623,Fallen Star Wall,FallenStarWall,400
5624,Chippy's Helmet,ChippysHead,1
5625,Chippy's Chestplate,ChippysBody,1
5626,Chippy's Greaves,ChippysLegs,1
5627,Chippy's Cloak,ChippysWings,1
5628,Chippy's Headband,ChippysHeadband,1
5629,Acorn Slingshot,AcornSlingshot,1
5630,r/Terraria 2023,PaintingRPlace2023,1
5631,Bould and Bash,PaintingBouldChoices,1
5632,Dark Forebodings,PaintingDarkForebodings,1
5633,Oktober,PaintingGermanZenith,1
5634,It's Scragglin' Time,PaintingItsScragglinTime,1
5635,Kaguya,PaintingKaguya,1
5636,Prost,PaintingGermanBeer,1
5637,Music Box (Eater of Worlds),MusicBoxEaterOfWorlds,1
5638,Music Box (Torch God),MusicBoxTorchGod,1
5639,Music Box (Alt Torch God),MusicBoxTorchGodAlt,1
5640,Green Roller Skates,RollerSkatesGreenMountItem,1
5641,Classic Roller Skates,RollerSkatesClassicMountItem,1
5642,Party Roller Skates,RollerSkatesPartyMountItem,1
5643,Rainbow Glowstick,RainbowGlowstick,100
5644,Scrying Orb,ScryingOrb,1
5645,Rock Candy,RockCandy,5
5646,Blue Bikini Top,BlueBikiniBody,1
5647,Blue Bikini Bottom,BlueBikiniLegs,1
5648,Red Swimsuit,RedSwimsuit,1
5649,Green Swimshorts,GreenSwimshorts,1
5650,Gray Swimshorts,GraySwimshorts,1
5651,Orca Banner,OrcaBanner,1
5652,Underworld Pylon,TeleportationPylonUnderworld,1
5653,Aether Pylon,TeleportationPylonShimmer,1
5654,Friendly Rainbow Boulder,RainbowBoulderPet,1
5655,Film Projector,NoirMonolith,1
5656,Heroicis' Hat,HeroicisHead,1
5657,Heroicis' Coat,HeroicisBody,1
5658,Heroicis' Pants,HeroicisLegs,1
5659,Heroicis' Wings,HeroicisWings,1
5660,Hallowed Crown,HallowedCrown,1
5661,Heroicis' Wings (Inactive),HeroicisWingsInactive,1
5662,Enchanted Pixie Dust,EnchantedPixieDust,1
5663,Cattiva,PalworldMinionCattiva,1
5664,Foxparks,PalworldMinionFoxsparks,1
5665,Chillet,PalworldPetChillet,1
5666,Chillet Ignis,PalworldPetChilletIgnis,1
5667,Digtoise,PalworldDigtoise,1
5668,The Imploder,SoundGun,n/a
5669,True Copper Shortsword,TrueCopperShortsword,1
5670,Rainbow Phaseblade,RainbowPhaseblade,1
5671,Rainbow Phasesaber,RainbowPhasesaber,1
5672,Librarian Skeleton Banner,LibrarianSkeletonBanner,1
5673,Water Bolt Mimic Banner,WaterBoltMimicBanner,1
5674,Dull Red Team Block,TeamBlockRedVariant,100
5675,Dull Green Team Block,TeamBlockGreenVariant,100
5676,Dull Blue Team Block,TeamBlockBlueVariant,100
5677,Dull Yellow Team Block,TeamBlockYellowVariant,100
5678,Dull Pink Team Block,TeamBlockPinkVariant,100
5679,Dull White Team Block,TeamBlockWhiteVariant,100
5680,Lilac Dusk Hairclip,LilacDuskHead,1
5681,Lilac Dusk Dress,LilacDuskBody,1
5682,Lilac Dusk Skirt,LilacDuskLegs,1
5683,Kazzymodus' Hood,KazzymodusHood,1
5684,Kazzymodus' Chestpiece,KazzymodusChestpiece,1
5685,Kazzymodus' Leggings,KazzymodusLeggings,1
5686,Kazzymodus' Wings,KazzymodusWings,1
5687,Slime Spear,SlimeSpear,1
5688,Slime Whip,SlimeWhip,1
5689,Feywood Bathtub,FeywoodBathtub,1
5690,Feywood Bed,FeywoodBed,1
5691,Feywood Bookcase,FeywoodBookcase,1
5692,Feywood Dresser,FeywoodDresser,1
5693,Feywood Candelabra,FeywoodCandelabra,1
5694,Feywood Candle,FeywoodCandle,1
5695,Feywood Chair,FeywoodChair,1
5696,Feywood Chandelier,FeywoodChandelier,1
5697,Feywood Chest,FeywoodChest,1
5698,Feywood Clock,FeywoodClock,1
5699,Feywood Door,FeywoodDoor,1
5700,Feywood Lamp,FeywoodLamp,1
5701,Feywood Lantern,FeywoodLantern,1
5702,Feywood Piano,FeywoodPiano,1
5703,Feywood Platform,FeywoodPlatform,200
5704,Feywood Sink,FeywoodSink,1
5705,Feywood Sofa,FeywoodSofa,1
5706,Feywood Table,FeywoodTable,1
5707,Feywood Work Bench,FeywoodWorkbench,1
5708,Trapped Feywood Chest,Fake_FeywoodChest,1
5709,Feywood Toilet,FeywoodToilet,1
5710,Feywood,Feywood,100
5711,Feywood Wall,FeywoodWall,400
5712,Hallowed Bathtub,HallowedBathtub,1
5713,Hallowed Bed,HallowedBed,1
5714,Hallowed Bookcase,HallowedBookcase,1
5715,Hallowed Dresser,HallowedDresser,1
5716,Hallowed Candelabra,HallowedCandelabra,1
5717,Hallowed Candle,HallowedCandle,1
5718,Hallowed Chair,HallowedChair,1
5719,Hallowed Chandelier,HallowedChandelier,1
5720,Fancy Hallowed Chest,HallowedFurnitureChest,1
5721,Hallowed Clock,HallowedClock,1
5722,Hallowed Door,HallowedDoor,1
5723,Hallowed Lamp,HallowedLamp,1
5724,Hallowed Lantern,HallowedLantern,1
5725,Hallowed Piano,HallowedPiano,1
5726,Hallowed Platform,HallowedPlatform,200
5727,Hallowed Sink,HallowedSink,1
5728,Hallowed Sofa,HallowedSofa,1
5729,Hallowed Table,HallowedTable,1
5730,Hallowed Work Bench,HallowedWorkbench,1
5731,Trapped Fancy Hallowed Chest,Fake_HallowedFurnitureChest,1
5732,Hallowed Toilet,HallowedToilet,1
5733,Hallowed Brick,HallowedBrick,100
5734,Hallowed Brick Wall,HallowedBrickWall,400
5735,Pal Metal Chestplate,PalworldPalMetalArmorBody,1
5736,Pal Metal Leggings,PalworldPalMetalArmorLegs,1
5737,Chippy's Cloak (Inactive),ChippysWingsInactive,1
5738,Wall Racer Car,RemoteControlCar,1
5739,Gothic Bathtub,GothicBathtub,1
5740,Gothic Bed,GothicBed,1
5741,Gothic Dresser,GothicDresser,1
5742,Gothic Candelabra,GothicCandelabra,1
5743,Gothic Candle,GothicCandle,1
5744,Gothic Chandelier,GothicChandelier,1
5745,Gothic Chest,GothicChest,1
5746,Gothic Clock,GothicClock,1
5747,Gothic Door,GothicDoor,1
5748,Gothic Lamp,GothicLamp,1
5749,Gothic Lantern,GothicLantern,1
5750,Gothic Piano,GothicPiano,1
5751,Gothic Platform,GothicPlatform,200
5752,Gothic Sink,GothicSink,1
5753,Gothic Sofa,GothicSofa,1
5754,Trapped Gothic Chest,Fake_GothicChest,1
5755,Gothic Toilet,GothicToilet,1
5756,Demonite Bathtub,DemoniteBathtub,1
5757,Demonite Bed,DemoniteBed,1
5758,Demonite Bookcase,DemoniteBookcase,1
5759,Demonite Candelabra,DemoniteCandelabra,1
5760,Demonite Candle,DemoniteCandle,1
5761,Demonite Chair,DemoniteChair,1
5762,Demonite Chandelier,DemoniteChandelier,1
5763,Demonite Chest,DemoniteChest,1
5764,Demonite Clock,DemoniteClock,1
5765,Demonite Door,DemoniteDoor,1
5766,Demonite Dresser,DemoniteDresser,1
5767,Demonite Lamp,DemoniteLamp,1
5768,Demonite Lantern,DemoniteLantern,1
5769,Demonite Piano,DemonitePiano,1
5770,Demonite Platform,DemonitePlatform,200
5771,Demonite Sink,DemoniteSink,1
5772,Demonite Sofa,DemoniteSofa,1
5773,Demonite Table,DemoniteTable,1
5774,Demonite Toilet,DemoniteToilet,1
5775,Demonite Work Bench,DemoniteWorkbench,1
5776,Trapped Demonite Chest,Fake_DemoniteChest,1
5777,Crimtane Bathtub,CrimtaneBathtub,1
5778,Crimtane Bed,CrimtaneBed,1
5779,Crimtane Bookcase,CrimtaneBookcase,1
5780,Crimtane Candelabra,CrimtaneCandelabra,1
5781,Crimtane Candle,CrimtaneCandle,1
5782,Crimtane Chair,CrimtaneChair,1
5783,Crimtane Chandelier,CrimtaneChandelier,1
5784,Crimtane Chest,CrimtaneChest,1
5785,Crimtane Clock,CrimtaneClock,1
5786,Crimtane Door,CrimtaneDoor,1
5787,Crimtane Dresser,CrimtaneDresser,1
5788,Crimtane Lamp,CrimtaneLamp,1
5789,Crimtane Lantern,CrimtaneLantern,1
5790,Crimtane Piano,CrimtanePiano,1
5791,Crimtane Platform,CrimtanePlatform,200
5792,Crimtane Sink,CrimtaneSink,1
5793,Crimtane Sofa,CrimtaneSofa,1
5794,Crimtane Table,CrimtaneTable,1
5795,Crimtane Toilet,CrimtaneToilet,1
5796,Crimtane Work Bench,CrimtaneWorkbench,1
5797,Trapped Crimtane Chest,Fake_CrimtaneChest,1
5798,Snow Bathtub,SnowBathtub,1
5799,Snow Bed,SnowBed,1
5800,Snow Bookcase,SnowBookcase,1
5801,Snow Candelabra,SnowCandelabra,1
5802,Snow Candle,SnowCandle,1
5803,Snow Chair,SnowChair,1
5804,Snow Chandelier,SnowChandelier,1
5805,Snow Chest,SnowChest,1
5806,Snow Clock,SnowClock,1
5807,Snow Door,SnowDoor,1
5808,Snow Dresser,SnowDresser,1
5809,Snow Lamp,SnowLamp,1
5810,Snow Lantern,SnowLantern,1
5811,Snow Piano,SnowPiano,1
5812,Snow Platform,SnowPlatform,200
5813,Snow Sink,SnowSink,1
5814,Snow Sofa,SnowSofa,1
5815,Snow Table,SnowTable,1
5816,Snow Toilet,SnowToilet,1
5817,Snow Work Bench,SnowWorkbench,1
5818,Trapped Snow Chest,Fake_SnowChest,1
5819,Flinx Fur Bathtub,FlinxFurBathtub,1
5820,Flinx Fur Bed,FlinxFurBed,1
5821,Flinx Fur Bookcase,FlinxFurBookcase,1
5822,Flinx Fur Candelabra,FlinxFurCandelabra,1
5823,Flinx Fur Candle,FlinxFurCandle,1
5824,Flinx Fur Chair,FlinxFurChair,1
5825,Flinx Fur Chandelier,FlinxFurChandelier,1
5826,Flinx Fur Chest,FlinxFurChest,1
5827,Flinx Fur Clock,FlinxFurClock,1
5828,Flinx Fur Door,FlinxFurDoor,1
5829,Flinx Fur Dresser,FlinxFurDresser,1
5830,Flinx Fur Lamp,FlinxFurLamp,1
5831,Flinx Fur Lantern,FlinxFurLantern,1
5832,Flinx Fur Piano,FlinxFurPiano,1
5833,Flinx Fur Platform,FlinxFurPlatform,200
5834,Flinx Fur Sink,FlinxFurSink,1
5835,Flinx Fur Sofa,FlinxFurSofa,1
5836,Flinx Fur Table,FlinxFurTable,1
5837,Flinx Fur Toilet,FlinxFurToilet,1
5838,Flinx Fur Work Bench,FlinxFurWorkbench,1
5839,Trapped Flinx Fur Chest,Fake_FlinxFurChest,1
5840,Pine Bathtub,PineBathtub,1
5841,Pine Bed,PineBed,1
5842,Pine Bookcase,PineBookcase,1
5843,Pine Candelabra,PineCandelabra,1
5844,Pine Candle,PineCandle,1
5845,Pine Chandelier,PineChandelier,1
5846,Pine Chest,PineChest,1
5847,Pine Clock,PineClock,1
5848,Pine Dresser,PineDresser,1
5849,Pine Lamp,PineLamp,1
5850,Pine Lantern,PineLantern,1
5851,Pine Piano,PinePiano,1
5852,Pine Platform,PinePlatform,200
5853,Pine Sink,PineSink,1
5854,Pine Sofa,PineSofa,1
5855,Pine Toilet,PineToilet,1
5856,Pine Work Bench,PineWorkbench,1
5857,Trapped Pine Chest,Fake_PineChest,1
5858,Easter Bathtub,EasterBathtub,1
5859,Easter Bed,EasterBed,1
5860,Easter Bookcase,EasterBookcase,1
5861,Easter Candelabra,EasterCandelabra,1
5862,Easter Candle,EasterCandle,1
5863,Easter Chair,EasterChair,1
5864,Easter Chandelier,EasterChandelier,1
5865,Easter Chest,EasterChest,1
5866,Easter Clock,EasterClock,1
5867,Easter Door,EasterDoor,1
5868,Easter Dresser,EasterDresser,1
5869,Easter Lamp,EasterLamp,1
5870,Easter Lantern,EasterLantern,1
5871,Easter Piano,EasterPiano,1
5872,Easter Platform,EasterPlatform,200
5873,Easter Sink,EasterSink,1
5874,Easter Sofa,EasterSofa,1
5875,Easter Table,EasterTable,1
5876,Easter Toilet,EasterToilet,1
5877,Easter Work Bench,EasterWorkbench,1
5878,Trapped Easter Chest,Fake_EasterChest,1
5879,Stone Bathtub,StoneBathtub,1
5880,Stone Bed,StoneBed,1
5881,Stone Bookcase,StoneBookcase,1
5882,Stone Candelabra,StoneCandelabra,1
5883,Stone Candle,StoneCandle,1
5884,Stone Chair,StoneChair,1
5885,Stone Chandelier,StoneChandelier,1
5886,Stone Chest,StoneChest,1
5887,Stone Clock,StoneClock,1
5888,Stone Dresser,StoneDresser,1
5889,Stone Lamp,StoneLamp,1
5890,Stone Lantern,StoneLantern,1
5891,Stone Piano,StonePiano,1
5892,Stone Sink,StoneSink,1
5893,Stone Sofa,StoneSofa,1
5894,Stone Table,StoneTable,1
5895,Stone Toilet,StoneToilet,1
5896,Stone Work Bench,StoneWorkbench,1
5897,Trapped Stone Chest,Fake_StoneChest,1
5898,Jellyfish Bathtub,JellyfishBathtub,1
5899,Jellyfish Bed,JellyfishBed,1
5900,Jellyfish Bookcase,JellyfishBookcase,1
5901,Jellyfish Candelabra,JellyfishCandelabra,1
5902,Jellyfish Candle,JellyfishCandle,1
5903,Jellyfish Chair,JellyfishChair,1
5904,Jellyfish Chandelier,JellyfishChandelier,1
5905,Jellyfish Chest,JellyfishChest,1
5906,Jellyfish Clock,JellyfishClock,1
5907,Jellyfish Door,JellyfishDoor,1
5908,Jellyfish Dresser,JellyfishDresser,1
5909,Jellyfish Lamp,JellyfishLamp,1
5910,Jellyfish Lantern,JellyfishLantern,1
5911,Jellyfish Piano,JellyfishPiano,1
5912,Jellyfish Platform,JellyfishPlatform,200
5913,Jellyfish Sink,JellyfishSink,1
5914,Jellyfish Sofa,JellyfishSofa,1
5915,Jellyfish Table,JellyfishTable,1
5916,Jellyfish Toilet,JellyfishToilet,1
5917,Jellyfish Work Bench,JellyfishWorkbench,1
5918,Trapped Jellyfish Chest,Fake_JellyfishChest,1
5919,Pine Tree Wall,PineTreeBlockWall,400
5920,Easter Block,EasterBlock,100
5921,Easter Wall,EasterBlockWall,400
5922,Gothic Brick,GothicBrick,100
5923,Gothic Brick Wall,GothicBrickWall,400
5924,Flinx Fur Block,FlinxFurBlock,100
5925,Flinx Fur Wall,FlinxFurBlockWall,400
5926,Jellyfish Block,JellyfishBlock,100
5927,Jellyfish Wall,JellyfishBlockWall,400
5928,Toybreaker Brick,ToyBreakerBlock,100
5929,Remix,PaintingRemix,1
5930,Pine Wood,PineWoodBlock,100
5931,Pine Wood Wall,PineWoodBlockWall,400
5932,Harpy Bathtub,HarpyBathtub,1
5933,Harpy Bed,HarpyBed,1
5934,Harpy Bookcase,HarpyBookcase,1
5935,Harpy Candelabra,HarpyCandelabra,1
5936,Harpy Candle,HarpyCandle,1
5937,Harpy Chair,HarpyChair,1
5938,Harpy Chandelier,HarpyChandelier,1
5939,Harpy Chest,HarpyChest,1
5940,Harpy Clock,HarpyClock,1
5941,Harpy Door,HarpyDoor,1
5942,Harpy Dresser,HarpyDresser,1
5943,Harpy Lamp,HarpyLamp,1
5944,Harpy Lantern,HarpyLantern,1
5945,Harpy Piano,HarpyPiano,1
5946,Harpy Platform,HarpyPlatform,200
5947,Harpy Sink,HarpySink,1
5948,Harpy Sofa,HarpySofa,1
5949,Harpy Table,HarpyTable,1
5950,Harpy Toilet,HarpyToilet,1
5951,Harpy Work Bench,HarpyWorkbench,1
5952,Trapped Harpy Chest,Fake_HarpyChest,1
5953,Harpy Block,HarpyBlock,100
5954,Harpy Wall,HarpyBlockWall,400
5955,Cloud Bathtub,CloudBathtub,1
5956,Cloud Bed,CloudBed,1
5957,Cloud Bookcase,CloudBookcase,1
5958,Cloud Candelabra,CloudCandelabra,1
5959,Cloud Candle,CloudCandle,1
5960,Cloud Chair,CloudChair,1
5961,Cloud Chandelier,CloudChandelier,1
5962,Cloud Chest,CloudChest,1
5963,Cloud Clock,CloudClock,1
5964,Cloud Door,CloudDoor,1
5965,Cloud Dresser,CloudDresser,1
5966,Cloud Lamp,CloudLamp,1
5967,Cloud Lantern,CloudLantern,1
5968,Cloud Piano,CloudPiano,1
5969,Cloud Sink,CloudSink,1
5970,Cloud Sofa,CloudSofa,1
5971,Cloud Table,CloudTable,1
5972,Cloud Toilet,CloudToilet,1
5973,Cloud Work Bench,CloudWorkbench,1
5974,Trapped Cloud Chest,Fake_CloudChest,1
5975,Duskware Bathtub,MoonplateBathtub,1
5976,Duskware Bed,MoonplateBed,1
5977,Duskware Bookcase,MoonplateBookcase,1
5978,Duskware Candelabra,MoonplateCandelabra,1
5979,Duskware Candle,MoonplateCandle,1
5980,Duskware Chair,MoonplateChair,1
5981,Duskware Chandelier,MoonplateChandelier,1
5982,Duskware Chest,MoonplateChest,1
5983,Duskware Clock,MoonplateClock,1
5984,Duskware Door,MoonplateDoor,1
5985,Duskware Dresser,MoonplateDresser,1
5986,Duskware Lamp,MoonplateLamp,1
5987,Duskware Lantern,MoonplateLantern,1
5988,Duskware Piano,MoonplatePiano,1
5989,Duskware Platform,MoonplatePlatform,200
5990,Duskware Sink,MoonplateSink,1
5991,Duskware Sofa,MoonplateSofa,1
5992,Duskware Table,MoonplateTable,1
5993,Duskware Toilet,MoonplateToilet,1
5994,Duskware Work Bench,MoonplateWorkbench,1
5995,Trapped Duskware Chest,Fake_MoonplateChest,1
5996,Moonplate Block,MoonplateBlock,100
5997,Crescent Wall,MoonplateBlockWall,400
5998,Librarian Bathtub,LibrarianBathtub,1
5999,Librarian Bed,LibrarianBed,1
6000,Librarian Bookcase,LibrarianBookcase,1
6001,Librarian Candelabra,LibrarianCandelabra,1
6002,Librarian Candle,LibrarianCandle,1
6003,Librarian Chair,LibrarianChair,1
6004,Librarian Chandelier,LibrarianChandelier,1
6005,Librarian Chest,LibrarianChest,1
6006,Librarian Clock,LibrarianClock,1
6007,Librarian Door,LibrarianDoor,1
6008,Librarian Dresser,LibrarianDresser,1
6009,Librarian Lamp,LibrarianLamp,1
6010,Librarian Lantern,LibrarianLantern,1
6011,Librarian Piano,LibrarianPiano,1
6012,Librarian Platform,LibrarianPlatform,200
6013,Librarian Sink,LibrarianSink,1
6014,Librarian Sofa,LibrarianSofa,1
6015,Librarian Table,LibrarianTable,1
6016,Librarian Toilet,LibrarianToilet,1
6017,Librarian Work Bench,LibrarianWorkbench,1
6018,Trapped Librarian Chest,Fake_LibrarianChest,1
6019,Librarian Block,LibrarianBlock,100
6020,Librarian Wall,LibrarianBlockWall,400
6021,Spike Bathtub,SpikeBathtub,1
6022,Spike Bed,SpikeBed,1
6023,Spike Bookcase,SpikeBookcase,1
6024,Spike Candelabra,SpikeCandelabra,1
6025,Spike Candle,SpikeCandle,1
6026,Spike Chair,SpikeChair,1
6027,Spike Chandelier,SpikeChandelier,1
6028,Spike Chest,SpikeChest,1
6029,Spike Clock,SpikeClock,1
6030,Spike Door,SpikeDoor,1
6031,Spike Dresser,SpikeDresser,1
6032,Spike Lamp,SpikeLamp,1
6033,Spike Lantern,SpikeLantern,1
6034,Spike Piano,SpikePiano,1
6035,Spike Platform,SpikePlatform,200
6036,Spike Sink,SpikeSink,1
6037,Spike Sofa,SpikeSofa,1
6038,Spike Table,SpikeTable,1
6039,Spike Toilet,SpikeToilet,1
6040,Spike Work Bench,SpikeWorkbench,1
6041,Trapped Spike Chest,Fake_SpikeChest,1
6042,Spike Block,SpikeBlock,100
6043,Spike Wall,SpikeBlockWall,400
6044,Office Bathtub,OfficeBathtub,1
6045,Office Bed,OfficeBed,1
6046,Office Bookcase,OfficeBookcase,1
6047,Office Candelabra,OfficeCandelabra,1
6048,Office Candle,OfficeCandle,1
6049,Office Chair,OfficeChair,1
6050,Office Chandelier,OfficeChandelier,1
6051,Office Chest,OfficeChest,1
6052,Office Clock,OfficeClock,1
6053,Office Door,OfficeDoor,1
6054,Office Dresser,OfficeDresser,1
6055,Office Lamp,OfficeLamp,1
6056,Office Lantern,OfficeLantern,1
6057,Office Piano,OfficePiano,1
6058,Office Platform,OfficePlatform,200
6059,Office Sink,OfficeSink,1
6060,Office Sofa,OfficeSofa,1
6061,Office Table,OfficeTable,1
6062,Office Toilet,OfficeToilet,1
6063,Office Work Bench,OfficeWorkbench,1
6064,Trapped Office Chest,Fake_OfficeChest,1
6065,Office Block,OfficeBlock,100
6066,Office Wall,OfficeBlockWall,400
6067,Forbidden Bathtub,ForbiddenBathtub,1
6068,Forbidden Bed,ForbiddenBed,1
6069,Forbidden Bookcase,ForbiddenBookcase,1
6070,Forbidden Candelabra,ForbiddenCandelabra,1
6071,Forbidden Candle,ForbiddenCandle,1
6072,Forbidden Chair,ForbiddenChair,1
6073,Forbidden Chandelier,ForbiddenChandelier,1
6074,Forbidden Chest,ForbiddenChest,1
6075,Forbidden Clock,ForbiddenClock,1
6076,Forbidden Door,ForbiddenDoor,1
6077,Forbidden Dresser,ForbiddenDresser,1
6078,Forbidden Lamp,ForbiddenLamp,1
6079,Forbidden Lantern,ForbiddenLantern,1
6080,Forbidden Piano,ForbiddenPiano,1
6081,Forbidden Platform,ForbiddenPlatform,200
6082,Forbidden Sink,ForbiddenSink,1
6083,Forbidden Sofa,ForbiddenSofa,1
6084,Forbidden Table,ForbiddenTable,1
6085,Forbidden Toilet,ForbiddenToilet,1
6086,Forbidden Work Bench,ForbiddenWorkbench,1
6087,Trapped Forbidden Chest,Fake_ForbiddenChest,1
6088,Forbidden Block,ForbiddenBlock,100
6089,Forbidden Wall,ForbiddenBlockWall,400
6090,Aquarium Bathtub,WaterBathtub,1
6091,Aquarium Bed,WaterBed,1
6092,Aquarium Bookcase,WaterBookcase,1
6093,Aquarium Candelabra,WaterCandelabra,1
6094,Aquarium Candle,WaterFurnitureCandle,1
6095,Aquarium Chair,WaterChair,1
6096,Aquarium Chandelier,WaterChandelier,1
6097,Aquarium Clock,WaterClock,1
6098,Aquarium Door,WaterDoor,1
6099,Aquarium Dresser,WaterDresser,1
6100,Aquarium Lamp,WaterLamp,1
6101,Aquarium Lantern,WaterLantern,1
6102,Aquarium Piano,WaterPiano,1
6103,Aquarium Platform,WaterPlatform,200
6104,Aquarium Sink,WaterSink,1
6105,Aquarium Sofa,WaterSofa,1
6106,Aquarium Table,WaterTable,1
6107,Aquarium Toilet,WaterToilet,1
6108,Aquarium Work Bench,WaterWorkbench,1
6109,Aquarium Block,WaterBlock,100
6110,Aquarium Wall,WaterBlockWall,400
6111,Boulder Bathtub,BoulderBathtub,1
6112,Boulder Bed,BoulderBed,1
6113,Boulder Bookcase,BoulderBookcase,1
6114,Boulder Candelabra,BoulderCandelabra,1
6115,Boulder Candle,BoulderCandle,1
6116,Boulder Chair,BoulderChair,1
6117,Boulder Chandelier,BoulderChandelier,1
6118,Boulder Chest,BoulderChest,1
6119,Boulder Clock,BoulderClock,1
6120,Boulder Door,BoulderDoor,1
6121,Boulder Dresser,BoulderDresser,1
6122,Boulder Lamp,BoulderLamp,1
6123,Boulder Lantern,BoulderLantern,1
6124,Boulder Piano,BoulderPiano,1
6125,Boulder Platform,BoulderPlatform,200
6126,Boulder Sink,BoulderSink,1
6127,Boulder Sofa,BoulderSofa,1
6128,Boulder Table,BoulderTable,1
6129,Boulder Toilet,BoulderToilet,1
6130,Boulder Work Bench,BoulderWorkbench,1
6131,Trapped Boulder Chest,Fake_BoulderChest,1
6132,Boulder Block,BoulderBlock,100
6133,Boulder Wall,BoulderBlockWall,400
6134,Sharp Spike Block,DamagingSpikeBlock,100
6135,Demon Altar,DemonAltarIcon,n/a
6136,Crimson Altar,CrimsonAltarIcon,n/a
6137,Luna's Runic Pixie Hood,LunasHead,1
6138,Luna's Runic Pixie Shirt,LunasBody,1
6139,Luna's Runic Pixie Pants,LunasLegs,1
6140,Luna's Runic Pixie Wings,LunasWings,1
6141,Luna's Runic Pixie Cloak,LunasCloak,1
6142,Huge Dragon Egg,PalworldChilletEgg,1
6143,[[|]],FoxparksTagEffect,n/a
6144,Music Box (Skeletron),MusicBoxSkeletron,1
`;
