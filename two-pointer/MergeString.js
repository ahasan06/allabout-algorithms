//1768. Merge Strings Alternately

var mergeAlternately = function (word1, word2) {

    let str = "";
    let maxLength = Math.max(word1.length, word2.length);

    for (let i = 0; i < maxLength; i++) {
        
        if (i<word1.length) {
            str+=word1[i]
        }
        if (i<word2.length) {
            str+=word2[i]
        }
      
    }


    return str

};

const word1 = "cd"
const word2 = "abcd"

console.log(mergeAlternately(word1, word2));
