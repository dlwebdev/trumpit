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

module.exports = {
  isTrumped : isTrumped
};