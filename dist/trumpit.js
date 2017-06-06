"use strict";

function isTrumped(s) {

    // Phrases that would cause a string to be Trumped
    const phrases = ["great again", "build a wall"];

    // Take the string passed in and check if any of the phrases are a substring of it
    for (let i = 0; i < phrases.length; i++) {
        // check string passed in against phrase at this position in array. If is a substring it will return true
        if (s.toLowerCase().indexOf(phrases[i]) > -1) return true;
    }

    // return false if it does not match any of our cases
    return false;
}

function getTrumpMeme() {

    // Some famous quotes from trump
    const urlMemes = ["http://cbsnews1.cbsistatic.com/hub/i/r/2017/02/10/3ebc5ba8-a46c-4bc3-82a2-d060a0445724/crop/455x459+0+0/resize/620x465/64360f0876156abd6bcf80fe487663a6/screen-shot-2017-02-10-at-1-56-56-pm.png", "https://s-media-cache-ak0.pinimg.com/736x/77/78/f9/7778f98f880dc66187dc768c6462905e.jpg", "http://static.yourtango.com/cdn/farfuture/mhbzSeXQ9nre0kfKsGLITfztsRO6CmHl1ykJgqh0370/mtime:1487457954/sites/default/files/styles/body_image_default/public/image_list/Trump2.jpg?itok=Nt2QeAR9", "https://fthmb.tqn.com/PtihhjpsYcpDyHo9MN8kebyB4wk=/768x0/filters:no_upscale()/about/trump-supporters-stupid-56b6de965f9b5829f835018e.jpg", "http://clarek.com/wp-content/uploads/2017/02/trump_future-350x258.jpg", "http://i.dailymail.co.uk/i/pix/2016/11/09/13/3A32B6D300000578-3919318-image-m-122_1478699423002.jpg", "https://pbs.twimg.com/media/B-961B_U4AAb6bq.jpg", "https://fthmb.tqn.com/U7C70MMl3cpM_EzGXCXKDiK0RgU=/768x0/filters:no_upscale()/about/trump-duct-tape-569ff3dc3df78cafda9f4331.jpg", "https://fthmb.tqn.com/QnemIz-ael8zBFKJyOaN-f649iQ=/768x0/filters:no_upscale()/about/trump-national-embarrassment-57aec1c23df78cd39cec06dd.jpg", "https://lovelace-media.imgix.net/uploads/752/551c5460-f761-0132-450e-0a2ca390b447.jpg", "https://s-media-cache-ak0.pinimg.com/736x/50/8a/3a/508a3ac6816b0055a8294d03a97c008c--anti-trump-meme-donald-o'connor.jpg", "https://cdn.meme.am/cache/instances/folder636/500x/72619636/trump-pied-piper-hes-like-the-pied-piper-but-for-morons.jpg", "http://cdn.ebaumsworld.com/mediaFiles/picture/77662/84957309.jpg", "http://buzzlamp.com/wp-content/uploads/2015/12/things-that-look-like-donald-trump-meme-6.jpg", "https://s-media-cache-ak0.pinimg.com/236x/c0/ea/ac/c0eaacb362338174cec3fe023e949e77.jpg"];

    // return random quote from the array
    return urlMemes[getRandomInt(0, urlMemes.length)];
}

function getTrumpism() {

    // Some famous quotes from trump
    const quotes = ["There’s nobody bigger or better at the military than I am.", "If Ivanka weren’t my daughter, perhaps I’d be dating her.", "I would build a great wall, and nobody builds walls better than me. Believe me.", "They're rapists. And some, I assume, are good people.", "If Hillary Clinton can't satisfy her husband what makes her think she can satisfy America?", "I would bring back waterboarding and I'd bring back a hell of a lot worse than waterboarding.", "I have no intention of ever running for president.", "John McCain is not a war hero. He’s a war hero because he was captured. I like people that weren’t captured.", "How stupid are the people of Iowa?", "I have a great relationship with the blacks", "Look at that face! Would anyone vote for that? Can you imagine that, the face of our next president?", "You know, it really doesn’t matter what they write as long as you’ve got a young and beautiful piece of ass.", "You could see there was blood coming out of her eyes, blood coming out of her whatever.", "The other thing with the terrorists is you have to take out their families, when you get these terrorists, you have to take out their families.", "We’re losing a lot of people because of the Internet. We have to see Bill Gates and a lot of different people who really understand what’s happening and maybe, in some ways, closing that Internet up in some ways.", "I identify more as a Democrat.", "I think Bush is probably the worst President in the history of the United States.", "I know Hillary and I think she’d make a great president or vice-president.", "Show me someone without an ego, and I'll show you a loser.", "I know the Chinese. I've made a lot of money with the Chinese. I understand the Chinese mind.", "JebBush has to like the Mexican Illegals because of his wife.", "This very expensive GLOBAL WARMING bullshit has got to stop. Our planet is freezing, record low temps,and our GW scientists are stuck in ice.", "I've always had a great relationship with the blacks."];

    // return random quote from the array
    return quotes[getRandomInt(0, quotes.length)];
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function trumpIt(s) {

    // Phrases we can append to end of string passed in
    const trumpit_phrases = [" and make it great again", " and build a wall", " . A lot of people are saying..", " and grab her by the pussy", ", a lot of people are saying", ", so sad.", ", Chinnnnaaaa", " and you're pathetic", ", and you're a loser."];

    // return random string appended to string passed in
    return s + trumpit_phrases[getRandomInt(0, trumpit_phrases.length)];
}

module.exports = {
    isTrumped: isTrumped,
    getTrumpism: getTrumpism,
    trumpIt: trumpIt,
    getTrumpMeme: getTrumpMeme
};