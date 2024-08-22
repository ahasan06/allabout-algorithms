
// using convert to string bit slower

// var isPalindrome = function (x) {
//     let res =x.toString().split('').reverse().join('')
//     if (parseInt(res)===x) {
//         return true
//     }
//     else {
//         return false
//     }
   
// };



//without converting it to string bit faster 

var isPalindrome = function (x) {
    let res = 0;
    let number = x
    while (x > 0) {
        rightMost = x % 10;
        res = res * 10 + rightMost
        x = Math.floor(x / 10)
    }
    if (res===number) {
        return true
    }else{
        return false
    }


 };

console.log(isPalindrome(121));
