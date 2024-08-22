const search = (nums, target) => {
    function findMe(target, start, end) {
        if (start > end) {
            return -1; 
        }
        const midIndex = Math.floor((start + end) / 2);
        if (nums[midIndex] === target) {
            return midIndex; 
        }
        if (nums[midIndex] > target) {
            return findMe(target, start, midIndex - 1);
        }
        return findMe(target, midIndex + 1, end); 
    }

    return findMe(target, 0, nums.length - 1);
};


const nums = [10, 15, 25, 35, 45,55,65,75,80,92]
const target = 75
const foundSearch = search(nums, target)
console.log(foundSearch);