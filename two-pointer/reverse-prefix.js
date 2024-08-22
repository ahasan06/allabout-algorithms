//2000. Reverse Prefix of Word
var reversePrefix = function (word, ch) {

    
   let index = word.indexOf(ch)
   if (index === -1) {
    return word
   }

   let left = 0;
   let right = index;
   let char = word.split('')
   
   while (left<right) {
    if (left<right) {
        let temp = word[left]
        char[left] = char[right]
        char[right] = temp

        left ++
        right --
    }
   }
   
   return char.join('')
   

};

const word = "abcd"
const ch = "z"
console.log(reversePrefix(word, ch));
