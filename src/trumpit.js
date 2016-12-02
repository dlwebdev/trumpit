function isTrumped(s) {
    
    // Check if string contains the string "great again"
    if(s.toLowerCase().indexOf("great again") > -1) {
        return true;
    }
    
    // Check if string contains the string "build a wall"
    if(s.toLocaleLowerCase().indexOf("build a wall") > -1) {
        return true;
    }
   
    // return false if it does not match any of our cases
    return false;
}

module.exports = {
  isTrumped : isTrumped
};