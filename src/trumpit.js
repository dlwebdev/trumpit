function isTrumped(s) {
    var phrases = [
        "great again",
        "build a wall"
    ];
    
    for( var i = 0; i < phrases.length; i++ ) {
        // check string passes in again each of these phrases. If it matches one, it will return true
        if(s.toLowerCase().indexOf(phrases[i]) > -1) return true;
    }
   
    // return false if it does not match any of our cases
    return false;
}

function getTrumpism() {
    var quotes = [
        "There’s nobody bigger or better at the military than I am.",
        "If Ivanka weren’t my daughter, perhaps I’d be dating her.",
        "I would build a great wall, and nobody builds walls better than me. Believe me.",
        "They're rapists. And some, I assume, are good people.",
        "If Hillary Clinton can't satisfy her husband what makes her think she can satisfy America?",
        "I would bring back waterboarding and I'd bring back a hell of a lot worse than waterboarding.",
        "I have no intention of ever running for president.",
        "John McCain is not a war hero. He’s a war hero because he was captured. I like people that weren’t captured.",
        "How stupid are the people of Iowa?",
        "Look at that face! Would anyone vote for that? Can you imagine that, the face of our next president?",
        "You know, it really doesn’t matter what they write as long as you’ve got a young and beautiful piece of ass.",
        "You could see there was blood coming out of her eyes, blood coming out of her whatever.",
        "The other thing with the terrorists is you have to take out their families, when you get these terrorists, you have to take out their families.",
        "We’re losing a lot of people because of the Internet. We have to see Bill Gates and a lot of different people who really understand what’s happening and maybe, in some ways, closing that Internet up in some ways.",
        "I identify more as a Democrat.",
        "I think Bush is probably the worst President in the history of the United States.",
        "I know Hillary and I think she’d make a great president or vice-president.",
        "Show me someone without an ego, and I'll show you a loser.",
        "I know the Chinese. I've made a lot of money with the Chinese. I understand the Chinese mind.",
        "JebBush has to like the Mexican Illegals because of his wife.",
        "This very expensive GLOBAL WARMING bullshit has got to stop. Our planet is freezing, record low temps,and our GW scientists are stuck in ice.",
        "I've always had a great relationship with the blacks."
    ];
    
    return quotes[getRandomInt(0, quotes.length)];
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function trumpIt(s) {
    var trumpit_phrases = [
        " and make it great again",
        " and build a wall",
        " and grab her by the pussy",
        ", a lot of people are saying",
        ", so sad.",
        ", China",
        " and you're pathetic"
    ];    
    
    return s + trumpit_phrases[getRandomInt(0, trumpit_phrases.length)];
}


module.exports = {
  isTrumped : isTrumped,
  getTrumpism: getTrumpism,
  trumpIt : trumpIt
};