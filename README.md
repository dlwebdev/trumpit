Node module example poking fun at the president with the smallest hands in our nations history.... *sigh*

Made with TDD.

# Installation

Just use npm:
npm install --save trumpit


# Usage

```javascript
var trumpit = require("trumpit");
```

### isTrumped
Takes a string and returns true if a string is trumped or false if it is not.

A string is considered "trumped" if it contains any of the following phrases:
* is great again
* build a wall

```javascript
var isStringTrumped = trumpit.isTrumped("TEST");
var isStringTrumped2 = trumpit.isTrumped("Build a wall, blah, blah, blah..");

console.log("Is 'TEST' trumped: " + isStringTrumped);
console.log("Is 'Build a wall, blah, blah, blah..' trumped: " + isStringTrumped2);
```

### getTrumpism
Returns a random quote from Drumpf

```javascript
var drumpfQuote = trumpit.getTrumpism();
console.log("One of our next presidents classy quotes: " + drumpfQuote);
```

### trumpIt
Takes a phrase as a string and appends a quote from drumpf to end of it

```javascript
var phrase = "Test me";
var trumpedPhrase = Trumpit.trumpIt(phrase);

console.log("Trumped up phrase: " + trumpedPhrase);
```

### getTrumpMeme
Returns a random meme poking fun of him

```javascript
var trumpMemeUrl = trumpit.getTrumpMeme();
console.log("A random meme url about Trump: " + trumpMemeUrl);
```