function isTrumped(s) {
    if(s.toLowerCase().indexOf("great again") > -1) {
        // if the string contains the substring "great again" return true
        return true;
    }
   
    // return false if it does not match any of our cases
    return false;
}

module.exports = {
  isTrumped : isTrumped
};