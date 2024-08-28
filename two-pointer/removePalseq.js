// 1332. Remove Palindromic Subsequences

var removePalindromeSub = function(s) {
    let left = 0 , right = s.length -1 ,isPalindrome = true
    while (left<right) {
        s[left]!==s[right] ? isPalindrome = false : left++ , right--
    }
    return s.length ===0 ? 0 : isPalindrome?  1 : 2
};

const s = "baabbbbbbbbbbbb"
console.log(removePalindromeSub(s));
