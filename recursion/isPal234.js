// var isPalindrome = function(head, start, end) {
//     if (start >= end) {
//         return true;
//     }
//     if (head[start] !== head[end]) {
//         return false;
//     }
//     return isPalindrome(head, start + 1, end - 1);
// };


// const head = [1,2,2,1]
// console.log(isPalindrome(head,start=0,end=head.length-1));


var isPalindrome = function (head) {
    let start = 0
    let end = head.length - 1
    while (start <= end) {
        if (head[start] !== head[end]) {
            return false
        }
        else {
            start++
            end--
        }
    }
    return true
};


const head = [1, 2]
console.log(isPalindrome(head));
