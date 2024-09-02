var isPerfectSquare = function (num) {
    if (num === 1) {
        return true
    }
    let start = 1
    let end = num

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        let square = mid * mid
        console.log(square);
        if (square === mid) {
            return true
        }
        else if (square > num) {
            end = mid - 1
        }
        return false
    }

};
const num = 9
console.log(isPerfectSquare(num));
