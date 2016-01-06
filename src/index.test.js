var expect = require('chai').expect;
var gameOfThronesNames = require('./index.js');

describe('game of thrones', function(){
    it('should work!', function(){
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
    });
    
    describe('mix', function() {
       it("should contain the same amount of item as gameOfThronesNames.all", function() {
           var mixe = gameOfThronesNames.mix().split(' ');
           console.log(mixedItem[0]);
           expect(gameOfThronesNames.all).to.contains(mixedItem[0]);         
       });
    });
});