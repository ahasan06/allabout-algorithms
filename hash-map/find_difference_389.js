var findTheDifference = function(s, t) {
    const hashObj = {}
    for (let i = 0; i < s.length; i++) {
        const word = s[i]
        if (hashObj[word]!=null) {
            hashObj[word]+=1
        }
        else{
            hashObj[word]= 1
        }
        
    }
    console.log(hashObj);

    for (let i = 0; i < t.length; i++) {
        const char = t[i]
        if (hashObj[char]!=null && hashObj[char]>0) {
            hashObj[char]-=1
        }
        else{
            return char
        }
    }
    return ''
};

const s = "aaabb", t = "abbbac"
console.log(findTheDifference(s,t));
