// //28. Find the Index of the First Occurrence in a String
// var strStr = function (haystack, needle) {

//     if (needle.length === 0) return 0;
//     for (let i = 0; i <= haystack.length - needle.length; i++) {
    
//         if (haystack.substring(i,i+needle.length) === needle) {
//             return i
//         }
//     }
//     return -1

// };

// const haystack = "a", needle = "a"
// console.log(strStr(haystack, needle));


// Define a function to convert a number to its word equivalent

function numberToWords(number) {
    const numWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    for (let i = 0; i < number.length; i++) {
        const element = array[i];
        
    }
    return words;
  }
  
  const result = numberToWords(213);
  console.log(result); 
  