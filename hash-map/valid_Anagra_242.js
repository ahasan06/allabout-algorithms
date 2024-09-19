
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const hashSObj= {}
    const hashTObj= {}
    for (let i = 0; i < s.length; i++) {
        const word = s[i]
        if (hashSObj[word]!=null) {
            hashSObj[word]+=1
        }
        else{
            hashSObj[word] = 1
        }
    }

    for (let i = 0; i < t.length; i++) {
        const word = t[i]
        if (hashTObj[word]!=null) {
            hashTObj[word]+=1
        }
        else{
            hashTObj[word] = 1
        }
    }
    
    for (const key in hashSObj) {
        if (hashSObj[key] !== hashTObj[key]) {
            return false
        }
        
    }
    return true
    
};

const s = "anagram", t = "nagarama"
console.log(isAnagram(s,t));
