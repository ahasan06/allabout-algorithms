let solution = function(isBadVersion) {
    return function(n) {
        let start = 1;
        let end = n;

        while (start < end) {
            let mid = Math.floor((start + end) / 2);
            
            // Check if mid is a bad version
            if (isBadVersion(mid)) {
                // If mid is bad, then the first bad version is either mid or before mid
                end = mid;
            } else {
                // If mid is not bad, then the first bad version is after mid
                start = mid + 1;
            }
        }
        
        // At the end of the loop, start should be the first bad version
        return start;
    };
}

// Example usage:
const isBadVersion = function(version) {
    const badVersion = 4;  // Let's say version 4 is the first bad version
    return version >= badVersion;
};

const findFirstBadVersion = solution(isBadVersion);
console.log(findFirstBadVersion(20));  // Output should be 4
