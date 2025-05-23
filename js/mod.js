let modInfo = {
	name: "Zavrsni rad",
	author: "Hrvoje Dragic",
	pointsName: "bits",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (1), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "1.0",
	name: "Literally nothing",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.0</h3><br>
		- Added things.<br>
		- Added stuff.`

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)
	if (hasUpgrade('px', 11)) gain = gain.times(2)
	if (hasUpgrade('px', 13)) gain = gain.times(2)
	if (hasUpgrade('px', 21)) gain = gain.times(2)
	if (hasUpgrade('px', 23)) gain = gain.times(2)
	if (hasUpgrade('px', 15)) gain = gain.times(2)
	if (hasUpgrade('px', 25)) gain = gain.times(2)

	if (hasUpgrade('kpx', 11)) gain = gain.times(2)
	if (hasUpgrade('kpx', 13)) gain = gain.times(2)
	if (hasUpgrade('kpx', 15)) gain = gain.times(2)
	if (hasUpgrade('kpx', 21)) gain = gain.times(2)
	if (hasUpgrade('kpx', 23)) gain = gain.times(2)
	if (hasUpgrade('kpx', 25)) gain = gain.times(2)

	if (hasUpgrade('kpx', 31)) gain = gain.times(10)

	if (hasUpgrade('Screen', 12)) gain = gain.times(2)
	if (hasUpgrade('Screen', 13)) gain = gain.times(2)
	if (hasUpgrade('Screen', 14)) gain = gain.times(2)

	if (hasUpgrade('kb', 21)) gain = gain.times(4)

	if (hasUpgrade('mib', 12)) gain = gain.times(2)
	if (hasUpgrade('mb', 12)) gain = gain.times(2)
	if (hasUpgrade('mib', 21)) gain = gain.times(4)
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("e280000000"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}