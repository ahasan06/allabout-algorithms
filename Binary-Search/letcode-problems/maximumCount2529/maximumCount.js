var maximumCount = function (nums) {
    let n = nums.length;

    // Helper function to find the first positive index
    const findFirstPositiveIndex = () => {
        let left = 0;
        let right = n - 1;
        let firstPositiveIndex = n; // if no positive number is found

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] > 0) {
                firstPositiveIndex = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return firstPositiveIndex;
    };

    // Helper function to find the last negative index
    const findLastNegativeIndex = () => {
        let left = 0;
        let right = n - 1;
        let lastNegativeIndex = -1; // if no negative number is found

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] < 0) {
                lastNegativeIndex = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return lastNegativeIndex;
    };

    const firstPositiveIndex = findFirstPositiveIndex();
    const lastNegativeIndex = findLastNegativeIndex();

    // Counting positives and negatives
    let posCount = n - firstPositiveIndex; // number of positives
    let negCount = lastNegativeIndex + 1;  // number of negatives

    return Math.max(posCount, negCount);
};

const nums = [-8, -6, -5, 0, 0, 0, 1, 2];
console.log(maximumCount(nums));
