var minimumAverage = function(nums) {

    nums.sort((a,b)=>(a-b))
    let left = 0;
    let right = nums.length - 1
    let minAvg = nums[right];

    while (left < right) {
        avg = (nums[left] + nums[right]) / 2
        if (avg<minAvg) {
            minAvg = avg
        }
        left++
        right--

    }
    return minAvg
    
    
};
const array = [7,8,3,4,15,13,4,1]
console.log(minimumAverage(array));
