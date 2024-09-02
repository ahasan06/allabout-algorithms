
// need to discuss more

var isPerfectSquare = function (num) {
  
    let start = 1
    let end = num

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        let square = mid * mid
        if (square === num) {
            return true
        }
        else if (square > num) {
            end = mid - 1
            console.log(end);
            
        }
        else{
            start = mid + 1
   
            
        }
    }
    return false
};


console.log(isPerfectSquare(49)); // true
