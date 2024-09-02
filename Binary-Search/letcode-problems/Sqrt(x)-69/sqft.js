var mySqrt = function (x) {
    if (x === 0) return 0;
    let start = 1
    let end = x
    let result=0;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        
        const squareRoot = mid * mid;
        
        if (squareRoot===x) {
            return mid
        }
        else if (squareRoot < x) {
            start = mid+1    
            result = mid
        }
        else{
            end = mid-1
        }

    }
    return result

};

const x = 10
console.log(mySqrt(x));
