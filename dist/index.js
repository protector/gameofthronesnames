"use strict";

var _uniqueRandomArray = require("unique-random-array");

var _uniqueRandomArray2 = _interopRequireDefault(_uniqueRandomArray);

var _gameofthronesNames = require("./gameofthrones-names.json");

var _gameofthronesNames2 = _interopRequireDefault(_gameofthronesNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*This is an ES6 syntax for require, the babel can generate an ES5 syntax from this*/

var getRandomItem = (0, _uniqueRandomArray2.default)(_gameofthronesNames2.default); //needs to be installed by npm install --save unique-random-array //this can be found on npmjs.org //with --save it puts the dependencie into package.json

Array.prototype.concatAll = function () {
    var results = [];
    this.forEach(function (subArray) {
        subArray.forEach(function (item) {
            results.push(item);
        });
    });
    return results;
};

var spliceNames = function spliceNames(names, index1, index2, index3) {
    if (index1 < index2 && index1 < index3) {
        if (index2 < index3) {
            names.splice(index1, 1);
            names.splice(index2 - 1, 1);
            names.splice(index3 - 2, 1);
        } else {
            names.splice(index1, 1);
            names.splice(index3 - 1, 1);
            names.splice(index2 - 2, 1);
        }
    } else if (index2 < index1 && index2 < index3) {
        if (index1 < index3) {
            names.splice(index2, 1);
            names.splice(index1 - 1, 1);
            names.splice(index3 - 2, 1);
        } else {
            names.splice(index2, 1);
            names.splice(index3 - 1, 1);
            names.splice(index1 - 2, 1);
        }
    } else {
        if (index1 < index2) {
            names.splice(index3, 1);
            names.splice(index1 - 1, 1);
            names.splice(index2 - 2, 1);
        } else {
            names.splice(index3, 1);
            names.splice(index2 - 1, 1);
            names.splice(index1 - 2, 1);
        }
    }
    return names;
};

var createRandomName = function createRandomName(names) {
    var mixedNames = [];

    while (names.length > 0) {
        var index1 = Math.floor(Math.random() * names.length);
        var index2 = Math.floor(Math.random() * names.length);

        if (names[index1] == "of") {
            var condition = true;
            if (index1 == index2) {
                while (condition) {
                    index2 = Math.floor(Math.random() * names.length);
                    console.log(index1 + "+" + index2);
                    if (index2 != index1) condition = false;
                }
            }

            var index3 = Math.floor(Math.random() * names.length);
            if (index3 == index2 || index3 == index1) {
                var condition = true;
                while (condition) {
                    index3 = Math.floor(Math.random() * names.length);
                    if (index1 != index3 && index2 != index3) condition = false;
                }
            }
            mixedNames.push(names[index2] + " " + names[index1] + " " + names[index3]);

            names = spliceNames(names, index1, index2, index3);
        } else if (names[index2] == "of") {
            var condition = true;
            if (index1 == index2) {
                while (condition) {
                    index2 = Math.floor(Math.random() * names.length);
                    console.log(index1 + "+" + index2);
                    if (index2 != index1) condition = false;
                }
            }

            var index3 = Math.floor(Math.random() * names.length);
            if (index3 == index2 || index3 == index1) {
                var condition = true;
                while (condition) {
                    index3 = Math.floor(Math.random() * names.length);
                    if (index1 != index3 && index2 != index3) condition = false;
                }
            }
            mixedNames.push(names[index1] + " " + names[index2] + " " + names[index3]);

            names = spliceNames(names, index1, index2, index3);
        } else if (index1 == index2) {
            mixedNames.push(names[index1]);
            names.splice(index1, 1);
        } else {
            mixedNames.push(names[index1] + " " + names[index2]);
            if (index1 < index2) {
                names.splice(index1, 1);
                names.splice(index2 - 1, 1);
            } else {
                names.splice(index2, 1);
                names.splice(index1 - 1, 1);
            }
        }
    }
    //console.log(mixedNames);
    return mixedNames;
};

var splashArray = function splashArray(names) {
    var splittedNames = [];
    names.forEach(function (name) {
        splittedNames.push(name.split(" "));
    });
    return splittedNames.concatAll();
};

var mixRandomName = function mixRandomName(names) {
    return createRandomName(splashArray(names));
};

function random(number) {
    if (number === undefined) {
        return getRandomItem();
    } else {
        var randomItems = [];
        for (var i = 0; i < number; i++) {
            randomItems.push(getRandomItem());
        }
        return randomItems;
    }
}

module.exports = {
    all: _gameofthronesNames2.default,
    mix: mixRandomName(_gameofthronesNames2.default),
    //random: uniqueRandomArray(gameOfThronesNames),
    random: random,
    mixrandom: (0, _uniqueRandomArray2.default)(mixRandomName(_gameofthronesNames2.default))
};
