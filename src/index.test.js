var expect = require('chai').expect;
var gameOfThronesNames = require('./index.js');

Array.prototype.concatAll= function() {
    var results = [];
    this.forEach(function(subArray) {
        subArray.forEach(function(item) {
            results.push(item);
        })
    });
    return results;
};

Array.prototype.splashArray = function(){
    var splittedNames = [];    
    this.forEach(function(name){
        splittedNames.push(name.split(" "));
    });    
    return splittedNames.concatAll();    
}

describe('game of thrones', function(){
    it('should run!', function(){
        expect(true).to.be.true;
    });
    
    describe('all', function() {
        it('should be an array of strings', function() {
            expect(gameOfThronesNames.all).to.satisfy(isArrayOfStrings);
            
            function isArrayOfStrings(array) {
                return array.every(function(item) {
                    return typeof item == 'string';
                });
            }
        });
    });
    
    describe('random', function() {
       it("should return a random item from gameOfThronesNames.all", function() {
           var randomItem = gameOfThronesNames.random();
           expect(gameOfThronesNames.all).to.include(randomItem);
       });
        
       it('should return an array of random items if passed a number', function () {
           var randomItems = gameOfThronesNames.random(3);
           expect(randomItems).to.have.length(3);
           randomItems.forEach(function(item){
              expect(gameOfThronesNames.all).to.include(item); 
           });
       });
    });
    
    describe('mix', function() {
       it("should contain the same amount of item as gameOfThronesNames.all", function() {
           var mixlen = gameOfThronesNames.mix.splashArray().length;
           var alllen = gameOfThronesNames.all.splashArray().length;
           expect(mixlen==alllen).to.be.true;
       });
    });
    
    describe('mixrandom', function() {
        it("should return a random item from gameOfThronesNames.mix", function() {
            var randomItem = gameOfThronesNames.mixrandom();
            expect(gameOfThronesNames.mix).to.include(randomItem);
        });
    });
});