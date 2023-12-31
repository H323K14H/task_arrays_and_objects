/**
 * These tasks are more complicated! Using combinations of arrays and objects is very common, here you will need to combine what you know about both to complete the tasks.
 */

unitedKingdom = [
  {
    name: "Scotland",
    capital: "Edinburgh",
    population: 5454000,
    touristAttractions: ["Stirling Castle", "Loch Ness"],
  },
  {
    name: "England",
    capital: "London",
    population: 55980000,
  },
  {
    name: "Wales",
    capital: "Swansea",
    population: 3163000,
    touristAttractions: ["Snowdonia"],
  },
  {
    name: "Northern Ireland",
    capital: "Belfast",
    population: 1885000,
    touristAttractions: ["Titanic Museum", "Giant's Causeway"],
  },
];

/**
 * Q1. Add some tourist attractions to England
 */

const england = unitedKingdom.find(country => country.name === "England");
england.touristAttractions = ["London eye", "Morleys", "London Gallery"];

console.log(england);

/**
 * Q2. Change the capital of Wales to "Cardiff"
 */

const wales = unitedKingdom.find(country => country.name === "Wales");
wales.capital = "Cardiff";

console.log(wales);

// console.log(wales);

/**
 * Q3. Find a method in the documentation which will give you all of the available keys for Northern Ireland
 */

const northernIreland = unitedKingdom.find(country => country.name === "Northern Ireland");
northernIrelandKeys = Object.keys(northernIreland);

console.log(northernIrelandKeys);

// console.log(northernIrelandKeys);

/**
 * Q4. Use an if statement to compare the population of Scotland to the other countries and print out if it is the biggest, smallest or somewhere in the middle.
 */

const scotland = unitedKingdom.find(country => country.name === "Scotland");

const largestPopulation = Math.max(england.population, wales.population, northernIreland.population);
const smallestPopulation = Math.min(england.population, wales.population, northernIreland.population);

if (scotland.population > largestPopulation) {
  console.log("Scotland has the largest population.");
} else if (scotland.population < smallestPopulation) {
  console.log("Scotland has the smallest population.");
} else {
  console.log("Scotland has a population in the middle of the other countries.");
}
