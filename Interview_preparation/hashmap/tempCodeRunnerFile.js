function lengthOfLongestSubstring(s) {
    let hash = {}; 
    let left = 0; 
    let maxLength = 0; 

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

      
        if (hash[char] !== undefined ) {


            left = hash[char] + 1; 
        }

        hash[char] = right; 
        maxLength = Math.max(maxLength, right - left + 1); 
    }

    return maxLength;
}

const result = lengthOfLongestSubstring('dvdf');
console.log(result); 
