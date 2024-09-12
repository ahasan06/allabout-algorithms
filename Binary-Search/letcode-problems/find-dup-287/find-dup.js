function findDuplicate(nums) {
    let low = 1;
    let high = nums.length - 1; // since nums contains n+1 elements, where numbers range from 1 to n
    
    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        let count = 0;

        // Count how many numbers are less than or equal to mid
        for (let num of nums) {
            if (num <= mid) count++;
        }

        // Debug: Print the current low, mid, high, and count values
        console.log("Low:", low, "Mid:", mid, "High:", high, "Count:", count);

        // If count is greater than mid, the duplicate is in the lower half
        if (count > mid) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }

    // The value of low (or high) will be the duplicate number
    console.log("Duplicate number found:", low);
    return low;
}

// Example usage:
console.log(findDuplicate([1, 3, 4, 2, 2])); // Output: 2

