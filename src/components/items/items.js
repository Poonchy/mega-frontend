const Spells = require("./spells.js")

const items = [
    {
        "name": "Barbaric Chainmail Helmet",
        "ID": "1",
        "rarity": "Common",

        "modelID": "1",
        "colors": "117 117 117, 158 158 158, 191 54 12, 255 60 0",
        "showHair": "no",

        "slot": "Helmet",
        "type": "Mail",
        "value": "1",
        "armor": "3",
        "class": "warrior"
    },
    {
        "name": "Barbaric Chainmail Shoulderguards",
        "ID": "2",
        "rarity": "Common",

        "modelID": "2",
        "colors": "117 117 117, 158 158 158",

        "slot": "Shoulders",
        "type": "Mail",
        "value": "1",
        "armor": "3",
        "class": "warrior"
    },
    {
        "name": "Barbaric Chainmail Armor",
        "ID": "3",
        "rarity": "Common",

        "modelID": "3",
        "colors": "117 117 117, 158 158 158",

        "slot": "Chest",
        "type": "Mail",
        "value": "1",
        "armor": "3",
        "class": "warrior"
    },
    {
        "name": "Barbaric Chainmail Gloves",
        "ID": "4",
        "rarity": "Common",

        "modelID": "4",
        "colors": "117 117 117, 158 158 158, 191 54 12, 255 60 0",

        "slot": "Gloves",
        "type": "Mail",
        "value": "1",
        "armor": "3",
        "class": "warrior"
    },
    {
        "name": "Barbaric Chainmail Waistguard",
        "ID": "5",
        "rarity": "Common",

        "modelID": "5",
        "colors": "191 54 12, 255 60 0",

        "slot": "Waist",
        "type": "Mail",
        "value": "1",
        "armor": "3",
        "class": "warrior"
    },
    {
        "name": "Barbaric Chainmail Legguards",
        "ID": "6",
        "rarity": "Common",

        "modelID": "6",
        "colors": "117 117 117, 158 158 158",

        "slot": "Legs",
        "type": "Mail",
        "value": "1",
        "armor": "3",
        "class": "warrior"
    },
    {
        "name": "Barbaric Chainmail Sabatons",
        "ID": "7",
        "rarity": "Common",

        "modelID": "7",
        "colors": "117 117 117, 158 158 158",

        "slot": "Feet",
        "type": "Mail",
        "value": "1",
        "armor": "3",
        "class": "warrior"
    },
    {
        "name": "Heroic Chainmail Helmet",
        "ID": "27",
        "rarity": "Common",

        "modelID": "1",
        "colors": "117 117 117, 158 158 158, 63 81 181, 83 108 254",
        "showHair": "no",

        "slot": "Helmet",
        "type": "Mail",
        "value": "1",
        "armor": "3",
        "class": "warrior"
    },
    {
        "name": "Heroic Chainmail Shoulderguards",
        "ID": "28",
        "rarity": "Common",

        "modelID": "2",
        "colors": "117 117 117, 158 158 158",

        "slot": "Shoulders",
        "type": "Mail",
        "value": "1",
        "armor": "3",
        "class": "warrior"
    },
    {
        "name": "Heroic Chainmail Armor",
        "ID": "29",
        "rarity": "Common",

        "modelID": "3",
        "colors": "117 117 117, 158 158 158, 63 81 181, 83 108 254",

        "slot": "Chest",
        "type": "Mail",
        "value": "1",
        "armor": "3",
        "class": "warrior"
    },
    {
        "name": "Heroic Chainmail Gloves",
        "ID": "30",
        "rarity": "Common",

        "modelID": "4",
        "colors": "117 117 117, 158 158 158, 191 54 12, 255 60 0",

        "slot": "Gloves",
        "type": "Mail",
        "value": "1",
        "armor": "3",
        "class": "warrior"
    },
    {
        "name": "Heroic Chainmail Waistguard",
        "ID": "31",
        "rarity": "Common",

        "modelID": "5",
        "colors": "26 35 126, 83 108 254",

        "slot": "Waist",
        "type": "Mail",
        "value": "1",
        "armor": "3",
        "class": "warrior"
    },
    {
        "name": "Heroic Chainmail Legguards",
        "ID": "32",
        "rarity": "Common",

        "modelID": "6",
        "colors": "117 117 117, 158 158 158",

        "slot": "Legs",
        "type": "Mail",
        "value": "1",
        "armor": "3",
        "class": "warrior"
    },
    {
        "name": "Heroic Chainmail Sabatons",
        "ID": "33",
        "rarity": "Common",

        "modelID": "7",
        "colors": "117 117 117, 158 158 158",

        "slot": "Feet",
        "type": "Mail",
        "value": "1",
        "armor": "3",
        "class": "warrior"
    },
    {
        "name": "Broken Wooden Sword",
        "ID": "8",
        "rarity": "Common",

        "modelID": "8",
        "colors": "128 85 72,93 64 55",

        "slot": "Mainhand",
        "type": "Sword",
        "value": "1",
        "damage": "2 - 4",
        "class": "warrior"
    },
    {
        "name": "Wooden Buckler",
        "ID": "9",
        "rarity": "Common",

        "modelID": "9",
        "colors": "93 64 55, 128 85 72",

        "slot": "Offhand",
        "type": "Shield",
        "value": "1",
        "armor": "3",
        "class": "warrior"
    },
    {
        "name": "Neophyte Hat",
        "ID": "10",
        "rarity": "Common",

        "modelID": "10",
        "colors": "207 59 48, 244 67 54",
        "showHair": "no",

        "slot": "Helmet",
        "type": "Cloth",
        "value": "1",
        "armor": "1",
        "class": "mage"
    },
    {
        "name": "Neophyte Shoulderpads",
        "ID": "11",
        "rarity": "Common",

        "modelID": "11",
        "colors": "207 59 48, 244 67 54",

        "slot": "Shoulders",
        "type": "Cloth",
        "value": "1",
        "armor": "1",
        "class": "mage"
    },
    {
        "name": "Neophyte Robe",
        "ID": "12",
        "rarity": "Common",

        "modelID": "12",
        "colors": "207 59 48, 244 67 54",

        "slot": "Chest",
        "type": "Cloth",
        "value": "1",
        "armor": "1",
        "class": "mage"
    },
    {
        "name": "Neophyte Gloves",
        "ID": "13",
        "rarity": "Common",

        "modelID": "13",
        "colors": "103 58 183, 86 49 153",

        "slot": "Gloves",
        "type": "Cloth",
        "value": "1",
        "armor": "1",
        "class": "mage"
    },
    {
        "name": "Neophyte Sash",
        "ID": "14",
        "rarity": "Common",

        "modelID": "14",
        "colors": "103 58 183, 86 49 153",

        "slot": "Waist",
        "type": "Cloth",
        "value": "1",
        "armor": "1",
        "class": "mage"
    },
    {
        "name": "Neophyte Pants",
        "ID": "15",
        "rarity": "Common",

        "modelID": "15",
        "colors": "207 59 48, 244 67 54",

        "slot": "Legs",
        "type": "Cloth",
        "value": "1",
        "armor": "1",
        "class": "mage"
    },
    {
        "name": "Neophyte Slippers",
        "ID": "16",
        "rarity": "Common",

        "modelID": "16",
        "colors": "103 58 183, 86 49 153",

        "slot": "Feet",
        "type": "Cloth",
        "value": "1",
        "armor": "1",
        "class": "mage"
    },
    {
        "name": "Neophyte Rod",
        "ID": "17",
        "rarity": "Common",

        "modelID": "17",
        "colors": "121 85 72, 244 67 54",

        "slot": "Mainhand",
        "type": "Staff",
        "value": "1",
        "damage": "1-1",
        "class": "mage"
    },
    {
        "name": "Wizard Hat",
        "ID": "37",
        "rarity": "Common",

        "modelID": "10",
        "colors": "30 132 204, 33 150 243",
        "showHair": "no",

        "slot": "Helmet",
        "type": "Cloth",
        "value": "1",
        "armor": "1",
        "class": "mage"
    },
    {
        "name": "Wizard Shoulderpads",
        "ID": "38",
        "rarity": "Common",

        "modelID": "11",
        "colors": "30 132 204, 33 150 243",

        "slot": "Shoulders",
        "type": "Cloth",
        "value": "1",
        "armor": "1",
        "class": "mage"
    },
    {
        "name": "Wizard Robe",
        "ID": "39",
        "rarity": "Common",

        "modelID": "12",
        "colors": "30 132 204, 33 150 243",

        "slot": "Chest",
        "type": "Cloth",
        "value": "1",
        "armor": "1",
        "class": "mage"
    },
    {
        "name": "Wizard Gloves",
        "ID": "40",
        "rarity": "Common",

        "modelID": "13",
        "colors": "156 39 176, 144 36 163",

        "slot": "Gloves",
        "type": "Cloth",
        "value": "1",
        "armor": "1",
        "class": "mage"
    },
    {
        "name": "Wizard Sash",
        "ID": "41",
        "rarity": "Common",

        "modelID": "14",
        "colors": "156 39 176, 144 36 163",

        "slot": "Waist",
        "type": "Cloth",
        "value": "1",
        "armor": "1",
        "class": "mage"
    },
    {
        "name": "Wizard Pants",
        "ID": "42",
        "rarity": "Common",

        "modelID": "15",
        "colors": "30 132 204, 33 150 243",

        "slot": "Legs",
        "type": "Cloth",
        "value": "1",
        "armor": "1",
        "class": "mage"
    },
    {
        "name": "Wizard Slippers",
        "ID": "43",
        "rarity": "Common",

        "modelID": "16",
        "colors": "156 39 176, 144 36 163",

        "slot": "Feet",
        "type": "Cloth",
        "value": "1",
        "armor": "1",
        "class": "mage"
    },
    {
        "name": "Wizard Rod",
        "ID": "44",
        "rarity": "Common",

        "modelID": "17",
        "colors": "121 85 72, 33 150 243",

        "slot": "Mainhand",
        "type": "Staff",
        "value": "1",
        "damage": "1-1",
        "class": "mage"
    },
    
    {
        "name": "Thief Helmet",
        "ID": "18",
        "rarity": "Common",

        "modelID": "18",
        "colors": "107 71 62, 121 85 72",
        "showHair": "no",

        "slot": "Helmet",
        "type": "Leather",
        "value": "1",
        "armor": "2",
        "class": "rogue"
    },
    {
        "name": "Thief Shoulders",
        "ID": "19",
        "rarity": "Common",

        "modelID": "19",
        "colors": "107 71 62, 121 85 72",

        "slot": "Shoulders",
        "type": "Leather",
        "value": "1",
        "armor": "2",
        "class": "rogue"
    },
    {
        "name": "Thief Jerkin",
        "ID": "20",
        "rarity": "Common",

        "modelID": "20",
        "colors": "107 71 62, 121 85 72",

        "slot": "Chest",
        "type": "Leather",
        "value": "1",
        "armor": "2",
        "class": "rogue"
    },
    {
        "name": "Thief Gloves",
        "ID": "21",
        "rarity": "Common",

        "modelID": "21",
        "colors": "107 71 62, 121 85 72",

        "slot": "Gloves",
        "type": "Leather",
        "value": "1",
        "armor": "2",
        "class": "rogue"
    },
    {
        "name": "Thief Buckle",
        "ID": "22",
        "rarity": "Common",

        "modelID": "22",
        "colors": "61 41 35, 82 56 49, 61 61 61",

        "slot": "Waist",
        "type": "Leather",
        "value": "1",
        "armor": "2",
        "class": "rogue"
    },
    {
        "name": "Thief Pants",
        "ID": "23",
        "rarity": "Common",

        "modelID": "23",
        "colors": "107 71 62, 121 85 72",

        "slot": "Legs",
        "type": "Leather",
        "value": "1",
        "armor": "2",
        "class": "rogue"
    },
    {
        "name": "Thief Boots",
        "ID": "24",
        "rarity": "Common",

        "modelID": "24",
        "colors": "107 71 62, 121 85 72",

        "slot": "Feet",
        "type": "Leather",
        "value": "1",
        "armor": "2",
        "class": "rogue"
    },
    {
        "name": "Thief Dagger",
        "ID": "25",
        "rarity": "Common",

        "modelID": "25",
        "colors": "133 133 133, 107 107 107, 179 18 7",

        "slot": "Mainhand",
        "type": "Dagger",
        "value": "1",
        "damage": "1-3",
        "class": "rogue"
    },
    {
        "name": "Thief Shiv",
        "ID": "26",
        "rarity": "Common",

        "modelID": "26",
        "colors": "133 133 133, 107 107 107, 179 18 7",

        "slot": "Offhand",
        "type": "Dagger",
        "value": "1",
        "damage": "1-3",
        "class": "rogue"
    },
    {
        "name": "Copper Helmet",
        "ID": "45",
        "rarity": "Uncommon",
        "reagents": "4-copper,",

        "modelID": "1",
        "colors": "144 90 40, 201 128 60,  50 50 50, 105 105 105",
        "showHair": "no",
        "level":"5",

        "slot": "Helmet",
        "type": "Mail",
        "value": "3",
        "armor": "6",
        "stamina": "2",
        "class": "warrior"
    },
    {
        "name": "Copper Shoulderguards",
        "ID": "46",
        "rarity": "Uncommon",
        "reagents": "4-copper,",

        "modelID": "2",
        "colors": "201 128 60, 144 90 40",
        "level":"5",

        "slot": "Shoulders",
        "type": "Mail",
        "value": "3",
        "armor": "6",
        "stamina": "1",
        "stat": "1",
        "class": "warrior"
    },
    {
        "name": "Copper Armor",
        "ID": "47",
        "rarity": "Uncommon",
        "reagents": "4-copper,",

        "modelID": "3",
        "colors": "144 90 40, 201 128 60,  50 50 50, 105 105 105",
        "level":"5",

        "slot": "Chest",
        "type": "Mail",
        "value": "3",
        "armor": "6",
        "stamina": "2",
        "class": "warrior"
    },
    {
        "name": "Copper Gloves",
        "ID": "48",
        "rarity": "Uncommon",
        "reagents": "4-copper,",

        "modelID": "4",
        "colors": "144 90 40, 201 128 60,  50 50 50, 105 105 105",
        "level":"5",

        "slot": "Gloves",
        "type": "Mail",
        "value": "3",
        "armor": "6",
        "stat": "1",
        "class": "warrior"
    },
    {
        "name": "Copper Waistguard",
        "ID": "49",
        "rarity": "Uncommon",
        "reagents": "4-copper,",

        "modelID": "5",
        "colors": "181 108 40, 104 35 1",
        "level":"5",

        "slot": "Waist",
        "type": "Mail",
        "value": "3",
        "armor": "6",
        "stamina": "1",
        "class": "warrior"
    },
    {
        "name": "Copper Legguards",
        "ID": "50",
        "rarity": "Uncommon",
        "reagents": "4-copper,",

        "modelID": "6",
        "colors": "201 128 60, 144 90 40",
        "level":"5",

        "slot": "Legs",
        "type": "Mail",
        "value": "3",
        "armor": "6",
        "stamina": "2",
        "class": "warrior"
    },
    {
        "name": "Copper Sabatons",
        "ID": "51",
        "rarity": "Uncommon",
        "reagents": "4-copper,",

        "modelID": "7",
        "colors": "201 128 60, 144 90 40",
        "level":"5",

        "slot": "Feet",
        "type": "Mail",
        "value": "3",
        "armor": "6",
        "stat": "1",
        "class": "warrior"
    },
    {
        "name": "Copper Sword",
        "ID": "52",
        "rarity": "Uncommon",
        "reagents": "4-copper,",

        "modelID": "52",
        "colors": " 164 95 61, 201 128 60",
        "level":"5",

        "slot": "Mainhand",
        "type": "Sword",
        "value": "3",
        "stat": "2",
        "damage": "2 - 5",
        "class": "warrior"
    },
    {
        "name": "Copper Buckler",
        "ID": "53",
        "rarity": "Uncommon",
        "reagents": "4-copper,",

        "modelID": "9",
        "colors": " 164 95 61, 201 128 60",
        "level":"5",

        "slot": "Offhand",
        "type": "Shield",
        "value": "3",
        "armor": "6",
        "stamina": "2",
        "class": "warrior"
    },

    {
        "name": "Linen Hat",
        "ID": "54",
        "rarity": "Uncommon",
        "reagents": "4-linen,",

        "modelID": "10",
        "colors": "220 210 200, 250 240 230",
        "showHair": "no",
        "level":"5",

        "slot": "Helmet",
        "type": "Cloth",

        "stat": "1",

        "value": "1",
        "armor": "2",
        "class": "mage"
    },
    {
        "name": "Linen Shoulderpads",
        "ID": "55",
        "rarity": "Uncommon",
        "reagents": "4-linen,",

        "modelID": "11",
        "colors": "220 210 200, 250 240 230",
        "level":"5",

        "slot": "Shoulders",
        "type": "Cloth",

        "stamina": "1",
        "stat": "1",

        "value": "1",
        "armor": "2",
        "class": "mage"
    },
    {
        "name": "Linen Robe",
        "ID": "56",
        "rarity": "Uncommon",
        "reagents": "4-linen,",

        "modelID": "12",
        "colors": "220 210 200, 250 240 230",
        "level":"5",

        "slot": "Chest",
        "type": "Cloth",

        "stat": "2",

        "value": "1",
        "armor": "2",
        "class": "mage"
    },
    {
        "name": "Linen Gloves",
        "ID": "57",
        "rarity": "Uncommon",
        "reagents": "4-linen,",

        "modelID": "13",
        "colors": "225 216 207, 195 186 187",
        "level":"5",

        "slot": "Gloves",
        "type": "Cloth",

        "stat": "1",

        "value": "1",
        "armor": "2",
        "class": "mage"
    },
    {
        "name": "Linen Sash",
        "ID": "58",
        "rarity": "Uncommon",
        "reagents": "4-linen,",

        "modelID": "14",
        "colors": "195 186 187, 225 216 207, 100 100 100",
        "level":"5",

        "slot": "Waist",
        "type": "Cloth",

        "stamina": "1",

        "value": "1",
        "armor": "2",
        "class": "mage"
    },
    {
        "name": "Linen Pants",
        "ID": "59",
        "rarity": "Uncommon",
        "reagents": "4-linen,",

        "modelID": "15",
        "colors": "220 210 200, 250 240 230",
        "level":"5",

        "slot": "Legs",
        "type": "Cloth",

        "stat": "2",

        "value": "1",
        "armor": "2",
        "class": "mage"
    },
    {
        "name": "Linen Slippers",
        "ID": "60",
        "rarity": "Uncommon",
        "reagents": "4-linen,",

        "modelID": "16",
        "colors": "195 186 187, 225 216 207",
        "level":"5",

        "slot": "Feet",
        "type": "Cloth",

        "stat": "1",

        "value": "1",
        "armor": "2",
        "class": "mage"
    },
    {
        "name": "Linen Rod",
        "ID": "97",
        "rarity": "Uncommon",
        "reagents": "4-linen,",

        "modelID": "17",
        "colors": "121 85 72, 225 216 207",
        "level":"5",

        "slot": "Mainhand",
        "type": "Staff",

        "stat": "2",

        "value": "1",
        "damage": "1-1",
        "class": "mage"
    },

    {
        "name": "Embossed Cap",
        "ID": "61",
        "rarity": "Uncommon",
        "reagents": "4-light,",

        "modelID": "18",
        "colors": "107 71 62, 121 85 72",
        "showHair": "no",
        "level":"5",

        "slot": "Helmet",
        "type": "Leather",
        "value": "3",
        "armor": "4",
        "stamina": "1",
        "stat": "1",
        "class": "rogue"
    },
    {
        "name": "Embossed Shouldercap",
        "ID": "62",
        "rarity": "Uncommon",
        "reagents": "4-light,",

        "modelID": "19",
        "colors": "107 71 62, 121 85 72",
        "level":"5",

        "slot": "Shoulders",
        "type": "Leather",
        "value": "3",
        "armor": "4",
        "stamina": "1",
        "stat": "1",
        "class": "rogue"
    },
    {
        "name": "Embossed Jacket",
        "ID": "63",
        "rarity": "Uncommon",
        "reagents": "4-light,",

        "modelID": "20",
        "colors": "107 71 62, 121 85 72",
        "level":"5",

        "slot": "Chest",
        "type": "leather",
        "value": "3",
        "armor": "4",
        "stamina": "1",
        "stat": "1",
        "class": "rogue"
    },
    {
        "name": "Embossed Gloves",
        "ID": "64",
        "rarity": "Uncommon",
        "reagents": "4-light,",

        "modelID": "21",
        "colors": "107 71 62, 121 85 72",
        "level":"5",

        "slot": "Gloves",
        "type": "leather",
        "value": "3",
        "armor": "4",
        "stat": "1",
        "class": "rogue"
    },
    {
        "name": "Embossed Buckle",
        "ID": "65",
        "rarity": "Uncommon",
        "reagents": "4-light,",

        "modelID": "22",
        "colors": "61 41 35, 82 56 49, 61 61 61",
        "level":"5",

        "slot": "Waist",
        "type": "leather",
        "value": "3",
        "armor": "4",
        "stamina": "1",
        "class": "rogue"
    },
    {
        "name": "Embossed Pants",
        "ID": "66",
        "rarity": "Uncommon",
        "reagents": "4-light,",

        "modelID": "23",
        "colors": "107 71 62, 121 85 72",
        "level":"5",

        "slot": "Legs",
        "type": "leather",
        "value": "3",
        "armor": "4",
        "stamina": "1",
        "stat": "1",
        "class": "rogue"
    },
    {
        "name": "Embossed Boots",
        "ID": "67",
        "rarity": "Uncommon",
        "reagents": "4-light,",

        "modelID": "24",
        "colors": "107 71 62, 121 85 72",
        "level":"5",

        "slot": "Feet",
        "type": "leather",
        "value": "3",
        "armor": "4",
        "stat": "1",
        "class": "rogue"
    },
    {
        "name": "Embossed Dagger",
        "ID": "68",
        "rarity": "Uncommon",
        "reagents": "4-light,",

        "modelID": "25",
        "colors": "133 133 133, 107 107 107, 179 18 7",
        "level":"5",

        "slot": "Mainhand",
        "type": "Dagger",
        "value": "3",
        "stat": "1",
        "stamina": "1",
        "damage": "2 - 4",
        "class": "rogue"
    },
    {
        "name": "Embossed Shiv",
        "ID": "69",
        "rarity": "Uncommon",
        "reagents": "4-light,",

        "modelID": "26",
        "colors": " 164 95 61, 201 128 60",
        "level":"5",

        "slot": "Offhand",
        "type": "Dagger",
        "value": "3",
        "damage": "2 - 4",
        "stamina": "1",
        "stat": "1",
        "class": "rogue"
    },
    {
        "name": "Sentry Helmet",
        "ID": "70",
        "rarity": "Rare",

        "modelID": "70",
        "colors": "194 72 35, 255 87 34, 117 117 117, 158 158 158, 93 64 55",
        "showHair": "no",
        "level":"10",

        "slot": "Helmet",
        "type": "Mail",
        "value": "3",
        "armor": "9",
        "stamina": "3",
        "class": "warrior"
    },
    {
        "name": "Sentry Shoulderguards",
        "ID": "71",
        "rarity": "Rare",

        "modelID": "71",
        "colors": "194 72 35, 255 87 34, 117 117 117, 158 158 158, 93 64 55",
        "level":"10",

        "slot": "Shoulders",
        "type": "Mail",
        "value": "3",
        "armor": "9",
        "stamina": "2",
        "stat": "1",
        "class": "warrior"
    },
    {
        "name": "Sentry Armor",
        "ID": "72",
        "rarity": "Rare",

        "modelID": "72",
        "colors": "194 72 35, 255 87 34, 117 117 117, 158 158 158, 93 64 55",
        "level":"10",

        "slot": "Chest",
        "type": "Mail",
        "value": "3",
        "armor": "9",
        "stamina": "3",
        "class": "warrior"
    },
    {
        "name": "Sentry Gloves",
        "ID": "73",
        "rarity": "Rare",

        "modelID": "73",
        "colors": "194 72 35, 255 87 34, 117 117 117, 158 158 158, 93 64 55",
        "level":"10",

        "slot": "Gloves",
        "type": "Mail",
        "value": "3",
        "armor": "9",
        "stat": "2",
        "class": "warrior"
    },
    {
        "name": "Sentry Waistguard",
        "ID": "74",
        "rarity": "Rare",

        "modelID": "74",
        "colors": "194 72 35, 255 87 34, 117 117 117, 158 158 158, 93 64 55",
        "level":"10",

        "slot": "Waist",
        "type": "Mail",
        "value": "3",
        "armor": "9",
        "stamina": "2",
        "class": "warrior"
    },
    {
        "name": "Sentry Legguards",
        "ID": "75",
        "rarity": "Rare",

        "modelID": "75",
        "colors": "194 72 35, 255 87 34, 117 117 117, 158 158 158, 93 64 55",
        "level":"10",

        "slot": "Legs",
        "type": "Mail",
        "value": "3",
        "armor": "9",
        "stamina": "3",
        "class": "warrior"
    },
    {
        "name": "Sentry Sabatons",
        "ID": "76",
        "rarity": "Rare",

        "modelID": "76",
        "colors": "194 72 35, 255 87 34, 117 117 117, 158 158 158, 93 64 55",
        "level":"10",

        "slot": "Feet",
        "type": "Mail",
        "value": "3",
        "armor": "9",
        "stamina":"2",
        "class": "warrior"
    },
    {
        "name": "Sentry Warhammer",
        "ID": "77",
        "rarity": "Rare",

        "modelID": "77",
        "colors": "188 170 164, 215 204 200, 121 85 72, 109 76 65",
        "level":"10",

        "slot": "Mainhand",
        "type": "Mace",
        "value": "3",
        "stat": "3",
        "damage": "4 - 7",
        "class": "warrior"
    },
    {
        "name": "Sentry Buckler",
        "ID": "78",
        "rarity": "Rare",

        "modelID": "78",
        "colors": "194 72 35, 255 87 34, 117 117 117, 158 158 158, 93 64 55",
        "level":"10",

        "slot": "Offhand",
        "type": "Shield",
        "value": "3",
        "armor": "9",
        "stamina": "3",
        "class": "warrior"
    },

    {
        "name": "Apothecary Headband",
        "ID": "79",
        "rarity": "Rare",

        "modelID": "79",
        "colors": "189 189 189, 33 33 33",
        "showHair": "yes",
        "level":"10",

        "slot": "Helmet",
        "type": "Cloth",

        "stat": "3",
        "value": "1",
        "armor": "3",
        "class": "mage"
    },
    {
        "name": "Apothecary Shoulderpads",
        "ID": "80",
        "rarity": "Rare",

        "modelID": "80",
        "colors": "189 189 189, 33 33 33",
        "level":"10",

        "slot": "Shoulders",
        "type": "Cloth",

        "stamina": "1",
        "stat": "2",

        "value": "1",
        "armor": "3",
        "class": "mage"
    },
    {
        "name": "Apothecary Vestment",
        "ID": "81",
        "rarity": "Rare",

        "modelID": "81",
        "colors": "189 189 189, 33 33 33",
        "level":"10",

        "slot": "Chest",
        "type": "Cloth",

        "stat": "3",

        "value": "1",
        "armor": "3",
        "class": "mage"
    },
    {
        "name": "Apothecary Mittens",
        "ID": "82",
        "rarity": "Rare",

        "modelID": "82",
        "colors": "189 189 189, 33 33 33",
        "level":"10",

        "slot": "Gloves",
        "type": "Cloth",

        "stat": "2",

        "value": "1",
        "armor": "3",
        "class": "mage"
    },
    {
        "name": "Apothecary Sash",
        "ID": "83",
        "rarity": "Rare",

        "modelID": "83",
        "colors": "189 189 189, 33 33 33",
        "level":"10",

        "slot": "Waist",
        "type": "Cloth",

        "stamina": "2",

        "value": "1",
        "armor": "3",
        "class": "mage"
    },
    {
        "name": "Apothecary Kilt",
        "ID": "84",
        "rarity": "Rare",

        "modelID": "84",
        "colors": "189 189 189, 33 33 33",
        "level":"10",

        "slot": "Legs",
        "type": "Cloth",

        "stat": "3",

        "value": "1",
        "armor": "3",
        "class": "mage"
    },
    {
        "name": "Apothecary Slippers",
        "ID": "85",
        "rarity": "Rare",

        "modelID": "85",
        "colors": "33 33 33, 189 189 189",
        "level":"10",

        "slot": "Feet",
        "type": "Cloth",

        "stat": "2",

        "value": "1",
        "armor": "3",
        "class": "mage"
    },
    {
        "name": "Apothecary Rod",
        "ID": "86",
        "rarity": "Rare",

        "modelID": "86",
        "colors": "191 54 12, 153 43 9, 77 53 45, 109 76 65",
        "level":"10",

        "slot": "Mainhand",
        "type": "Staff",

        "stat": "3",

        "value": "1",
        "damage": "1-1",
        "class": "mage"
    },

    {
        "name": "Bandit Mask",
        "ID": "87",
        "rarity": "Rare",

        "modelID": "87",
        "colors": "33 33 33, 66 66 66",
        "showHair": "yes",
        "level":"10",

        "slot": "Helmet",
        "type": "Leather",
        "value": "3",
        "armor": "6",
        "stamina": "2",
        "stat": "1",
        "class": "rogue"
    },
    {
        "name": "Bandit Shouldercap",
        "ID": "88",
        "rarity": "Rare",

        "modelID": "88",
        "colors": "66 66 66, 97 97 97",
        "level":"10",

        "slot": "Shoulders",
        "type": "Leather",
        "value": "3",
        "armor": "6",
        "stamina": "1",
        "stat": "2",
        "class": "rogue"
    },
    {
        "name": "Bandit Jacket",
        "ID": "89",
        "rarity": "Rare",

        "modelID": "89",
        "colors": "66 66 66, 97 97 97",
        "level":"10",

        "slot": "Chest",
        "type": "leather",
        "value": "3",
        "armor": "6",
        "stamina": "2",
        "stat": "1",
        "class": "rogue"
    },
    {
        "name": "Bandit Gloves",
        "ID": "90",
        "rarity": "Rare",

        "modelID": "90",
        "colors": "66 66 66, 97 97 97, 78 52 46",
        "level":"10",

        "slot": "Gloves",
        "type": "leather",
        "value": "3",
        "armor": "6",
        "stat": "2",
        "class": "rogue"
    },
    {
        "name": "Bandit Buckle",
        "ID": "91",
        "rarity": "Rare",

        "modelID": "91",
        "colors": "66 66 66, 97 97 97",
        "level":"10",

        "slot": "Waist",
        "type": "leather",
        "value": "3",
        "armor": "6",
        "stamina": "2",
        "class": "rogue"
    },
    {
        "name": "Bandit Pants",
        "ID": "92",
        "rarity": "Rare",

        "modelID": "92",
        "colors": "66 66 66, 97 97 97",
        "level":"10",

        "slot": "Legs",
        "type": "leather",
        "value": "3",
        "armor": "6",
        "stamina": "1",
        "stat": "2",
        "class": "rogue"
    },
    {
        "name": "Bandit Boots",
        "ID": "93",
        "rarity": "Rare",

        "modelID": "93",
        "colors": "66 66 66, 97 97 97",
        "level":"10",

        "slot": "Feet",
        "type": "leather",
        "value": "3",
        "armor": "6",
        "stat": "1",
        "stamina": "1",
        "class": "rogue"
    },
    {
        "name": "Bandit Dagger",
        "ID": "94",
        "rarity": "Rare",

        "modelID": "94",
        "colors": "97 97 97, 158 158 158, 81 45 168",
        "level":"10",

        "slot": "Mainhand",
        "type": "Dagger",
        "value": "3",
        "stat": "3",
        "damage": "3 - 6",
        "class": "rogue"
    },
    {
        "name": "Bandit Shiv",
        "ID": "95",
        "rarity": "Rare",

        "modelID": "95",
        "colors": "97 97 97, 158 158 158, 81 45 168",
        "level":"10",

        "slot": "Offhand",
        "type": "Dagger",
        "value": "3",
        "damage": "3 - 6",
        "stamina": "3",
        "class": "rogue"
    },

    {
        "name": "Brotherhood Medallion",
        "ID": "96",
        "rarity": "Rare",

        "modelID": "95",
        "colors": " 164 95 61, 201 128 60",
        "level":"10",

        "slot": "Trinket",
        "value": "3",
        "class": "all",
        "spells": [Spells.findByID("3"), Spells.findByID("4")],
        "spellattrs": [{"A":"A"}, {"B":"B"}],
        
        "flavor":"Engraved on the bottom you can see, 'E.V. + V.C.'"
    },
    {
        "name": "Minor Health Potion",
        "ID": "1000",
        "rarity": "Common",
        "spells":[Spells.findByID("6")],
        "spellattrs": [{"health":30}],
        "charges":"1",
        "class": "all"
    },

    {
        "name": "Key To The Deadmines",
        "ID": "10001",
        "rarity": "Rare",
        "spells": [Spells.findByID("1")],
        "spellattrs": [{"dungeon":"DMVC"}],
        "charges":"1"
    },
    {
        "name": "Fragmented Key Blade",
        "ID": "10000",
        "rarity": "Rare",
        "flavor":"These fragments are ethereal, broken beyond repair. Perhaphs there is someone who can help you fix it."
    },
    {
        "name": "Fragmented Key Bow",
        "ID": "10002",
        "rarity": "Rare",
        "flavor":"These fragments are ethereal, broken beyond repair. Perhaphs there is someone who can help you fix it."
    },
    {
        "name": "Essence Of Karazhan",
        "ID": "10003",
        "rarity": "Rare",
        "flavor":"Holding onto this makes gives you the chills. It's presence creates the winds of Deadwind Pass. Perhaphs there is someone who can make use of this"
    },
    {
        "name": "Key To Karazhan",
        "ID": "10004",
        "rarity": "Epic",
        "spells": [Spells.findByID("2")],
        "spellattrs": [{"dungeon":"KARA"}],
        "charges":"1"
    }
]
export default items;