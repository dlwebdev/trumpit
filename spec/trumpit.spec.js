var Trumpit = require('../src/trumpit');

describe('Trumpit', function() {
    
    
    describe('isTrumped', function() {
        it('should be satisfied if a string contains "is great again" and should be case insensitive', function() {
            expect(Trumpit.isTrumped("Make programming great again.")).toBe(true);
            expect(Trumpit.isTrumped("Make programming Great Again.")).toBe(true);
            expect(Trumpit.isTrumped("Make programming awesome.")).toBe(false);            
        });
        
        it('should be satisfied if a string contains "build a wall" and should be case insensitive', function() {
            expect(Trumpit.isTrumped("We should build a wall.")).toBe(true);
            expect(Trumpit.isTrumped("Build a wall, blah, blah, blah..")).toBe(true);
            expect(Trumpit.isTrumped("Make programming awesome.")).toBe(false);            
        });        
    });
    
    
    describe('getTrumpism', function() {
    
        it('should return a random quote as a string from the little orange man', function() {
            expect(Trumpit.getTrumpism()).toBeTruthy();
            expect(typeof Trumpit.getTrumpism()).toEqual('string');
        });
        
    });    
    
    
});