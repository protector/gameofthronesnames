var uniqueRandomArray = require("unique-random-array");//needs to be installed by npm install --save unique-random-array //this can be found on npmjs.org //with --save it puts the dependencie into package.json
var gameOfThronesNames = require("../gameofthrones-names.json");

module.exports = {
    all: gameOfThronesNames,
    random: uniqueRandomArray(gameOfThronesNames)
};