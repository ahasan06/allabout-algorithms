var targetIndices = function (nums, target) {
    let start = 0
    let end = nums.length - 1
    let startIndex = -1
    let newArray =[]
    nums.sort((a, b) => a - b)
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)

        if (nums[mid] === target) {
            startIndex = mid
            end = mid - 1
        }
        else if (nums[mid] < target) {
            start = mid + 1
        }
        else {
            end = mid - 1
        }

    }

    console.log(startIndex);
    console.log(nums.length);
    

    for (let i = startIndex; i <=nums.length; i++) {
       if (nums[i]===target) {
         newArray.push(i)
       }
       else{
        return newArray
       }
    }
    
};

const nums = [1,2,5,2,3], target = 5
console.log(targetIndices(nums, target));
