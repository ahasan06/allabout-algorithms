

var searchInsert = function (nums, target) {

    let left = 0;
    let right = nums.length - 1

    while (left <= right) {

        const midIndex = parseInt((left + right) / 2);
        if (nums[midIndex] === target) {
            return midIndex
        }
        if (nums[midIndex] > target) {
            right = midIndex - 1
        }
        else if (nums[midIndex] < target) {
            left = midIndex + 1
        }
    }

    return left;

};

const nums = [1, 3, 5, 6], target = 2
console.log(searchInsert(nums, target));


