const search = (nums, target) => {
    function findMe(target, start, end) {
        if (start > end) {
            return -1; // If the segment becomes invalid
        }
        const midIndex = Math.floor((start + end) / 2);
        if (nums[midIndex] === target) {
            return midIndex; // Target found
        }
        if (nums[midIndex] > target) {
            return findMe(target, start, midIndex - 1); // Search in the left half
        }
        return findMe(target, midIndex + 1, end); // Search in the right half
    }

    return findMe(target, 0, nums.length - 1);
};


const nums = [1, 3, 5, 9, 12]
const target = 6
const foundSearch = search(nums, target)
console.log(foundSearch);