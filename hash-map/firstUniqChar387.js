
var firstUniqChar = function (s) {
    const hashObj = {}
    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        if (hashObj[char] != null) {
            hashObj[char] += 1
        }
        else {
            hashObj[char] = 1
        }
    }
    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        if (hashObj[char] == 1) {
            return i
        }
    }
    return -1
};

const s = "aabb"
console.log(firstUniqChar(s));
