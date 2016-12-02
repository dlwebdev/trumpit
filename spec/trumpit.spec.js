var Trumpit = require('../src/trumpit');

describe('Trumpit', function() {
    
    describe('isTrumped', function() {
        it('should be satisfied if a string contains "is great again" and should be case insensitive', function() {
            expect(Trumpit.isTrumped("Make programming great again.")).toBe(true);
            expect(Trumpit.isTrumped("Make programming Great Again.")).toBe(true);
            expect(Trumpit.isTrumped("Make programming awesome.")).toBe(false);            
        });
    });
    
});