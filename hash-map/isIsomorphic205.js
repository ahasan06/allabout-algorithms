

var isIsomorphic = function (s, t) {
    if (s.length != t.length) {
        return false
    }

    const mapST = {};  // Map for s -> t
    const mapTS = {};  // Map for t -> s

    let res = true
    for (let i = 0; i < s.length; i++) {

        const charS = s[i]
        const charT = t[i]
        if (mapST[charS] != null && mapST[charS] != charT) {
            return false
        }
        if (mapTS[charT] != null && mapTS[charT] != charS) {
            return false
        }

        mapST[charS] = charT
        mapTS[charT] = charS


    }

    return true
        
};

const s = "egg", t = "add"
console.log(isIsomorphic(s, t));
