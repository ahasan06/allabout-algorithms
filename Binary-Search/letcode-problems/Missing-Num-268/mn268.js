var missingNumber = (nums) => {
    nums.sort((a, b) => a - b);
    //[0,1,3]
    function searchMissing(start, end) {
        if (start >= end) {
            // 0>=3 ?--> false ----------->(1st itteration)
            // 2>=3 ?--> false ----------->(2nd itteration)
            // 2>=2 ?--> true  ----------->(3rd itteration)
            return start // return 2 execute
        }
        midIndex = Math.floor((start + end) / 2)
        //midIndex = 3/2 = 1 ----------->(1st itteration)
        //midIndex = 5/2 = 2  ----------->(2nd itteration)
        if (nums[midIndex] > midIndex) {
            //nums[1]=1 > 1? -->false ----------->(1st itteration)
            //nums[2]= 3 > 2? -->true ----------->(2nd itteration)
            return searchMissing(start, midIndex)
            //(start = 2,(end=midIndex) = 2) ----------->(2nd itteration) execute
        }
        else {
            return searchMissing(midIndex + 1, end)
            //((start= midIndex+1) = 2, end = 3) ----------->(1st itteration)
        }

    }
    return searchMissing(0, nums.length)
};

console.log(missingNumber([3, 0, 1])); // Output: 2
