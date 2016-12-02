Node module example

Made with TDD for testing

Takes a string and returns true if a string is trumped or false if it is not.

A string is considered "trumped" if it contains any of the following phrases:
* is great again
* build a wall

### TODO
* Docs

### Usage

var trumpit = require("trumpit");

var isStringTrumped = trumpit.isTrumped("TEST");
var isStringTrumped2 = trumpit.isTrumped("Build a wall, blah, blah, blah..");

console.log("Is 'TEST' trumped: " + isStringTrumped);
console.log("Is 'Build a wall, blah, blah, blah..' trumped: " + isStringTrumped2);