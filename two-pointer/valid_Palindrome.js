// 125. Valid Palindrome

var isPalindrome = function(s) {
    let char =s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    console.log(char);
    
    let left = 0 ,right = char.length -1,isPalindrome =true
    while (left<right) {
        if (char[left] !== char[right]) {
            return false; 
        }
        left++;
        right--;
    }
    return isPalindrome
    
};

const  s = "ab _ a"
console.log(isPalindrome(s));
