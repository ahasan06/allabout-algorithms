var lengthOfLongestSubstring = function(s) {

    let maxCount = 0;
    for (let i = 1; i < s.length; i++) {
       if (s[i-1]!==s[i]) {
        maxCount++
       }
       if (maxCount) {
        
       }
       
        
    }
    
};
const s = "abcabcbb"
console.log(lengthOfLongestSubstring(s));
