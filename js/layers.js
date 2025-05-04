addLayer("px", {
    name: "pixels", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(24), // Can be a function that takes requirement increases into account
    resource: "pixel points", // Name of prestige currency
    baseResource: "pxels", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade("px", 12)) mult = mult.times(2)
        if (hasUpgrade("px", 14)) mult = mult.times(2)
        if (hasUpgrade("px", 22)) mult = mult.times(2)
        if (hasUpgrade("px", 24)) mult = mult.times(2)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "px", description: "P: Reset for pixel points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        11: {
            title: "Make this whatever you want!",
            description: "Double your point gain.",
            cost: new Decimal(1)
        },
        12: {
            title: "Double pixel point gain",
            description: "Doubles your pixel point gain.",
            cost: new Decimal(1)
        },
        13: {
            title: "Make this whatever you want!",
            description: "Double your point gain.",
            cost: new Decimal(1)
        },
        14: {
            title: "Double pixel point gain",
            description: "Doubles your pixel point gain.",
            cost: new Decimal(1)
        },
        21: {
            title: "Make this whatever you want!",
            description: "Double your point gain.",
            cost: new Decimal(1)
        },
        22: {
            title: "Double pixel point gain",
            description: "Doubles your pixel point gain.",
            cost: new Decimal(1)
        },
        23: {
            title: "Make this whatever you want!",
            description: "Double your point gain.",
            cost: new Decimal(1)
        },
        24: {
            title: "Double pixel point gain",
            description: "Doubles your pixel point gain.",
            cost: new Decimal(1)
        },
        15: {
            title: "Make this whatever you want!",
            description: "Double your point gain.",
            cost: new Decimal(1)
        },
        25: {
            title: "Make this whatever you want!",
            description: "Double your point gain.",
            cost: new Decimal(1)
        }
    },
})

addLayer("kpx", {
    name: "kilopixels",
    symbol: "KP",
    position: 0,
    startData() { return {
        unlocked: false,
        points: new Decimal(0),
    }},
    color: "#FFD700",
    requires: new Decimal(1000),
    resource: "kilopixel points",
    baseResource: "pixel points",
    baseAmount() { return player.px.points },
    type: "normal",
    exponent: 0.5,
    row: 1,
    branches: ["px"],
    layerShown() { 
        if (!player.px.unlocked) return false;
        let upgrades = [11,12,13,14,15,21,22,23,24,25];
        for (let id of upgrades) {
            if (!hasUpgrade("px", id)) return false;
        }
        return true;
    },
    upgrades: {},
})
