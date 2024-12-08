function findSum(arr, n) { 
    if (n <= 0) {
        return 0;
    }
    return arr[n-1] + findSum(arr, n-1); 
} 
  
  
let arr = [1, 2, 3, 4, 5]; 
let n = arr.length; 
console.log(findSum(arr, n)); 