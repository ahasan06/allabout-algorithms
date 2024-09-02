


var peakIndexInMountainArray = function (arr) {

    if (arr.length==1) {
        return 0
    }
    let left = 0;
    let right = arr.length - 1

    while (left < right) {
        let mid = Math.floor((left + right) / 2)

        if (arr[mid] < arr[mid+1]) {
            left = mid + 1
        }
        else {
            right = mid
        }
    }
 
    return arr[right-1]
};

const arr = [1]
console.log(peakIndexInMountainArray(arr));
