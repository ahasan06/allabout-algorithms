//	2108 Find First Palindromic String in the Array


var firstPalindrome = function (words) {

    for (const word of words) {
        let left = 0;
        let right = word.length - 1
        let isPalindrome = true

        while (left < right) {
            if (word[left] !== word[right]) {
                isPalindrome = false
                break
            }
            left++
            right--
        }

        if (isPalindrome) {
            return word
        }

    }
    return ""
};

let words = ["notapalindrome","racecar"]
console.log(firstPalindrome(words));
