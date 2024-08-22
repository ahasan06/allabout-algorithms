// 557	
// Reverse Words in a String III

var reverseWords = function(s) {
   return s.split(' ').map(word => {
        let chars = word.split('');
        let left = 0;
        let right = word.length - 1

        while (left<right) {
            let temp = chars[left]
            chars[left] = chars[right]
            chars[right] = temp
            left++
            right--
        }

        return chars.join('')
    }).join(' ')
};

const s = "Let's take LeetCode contest"
console.log(reverseWords(s));
