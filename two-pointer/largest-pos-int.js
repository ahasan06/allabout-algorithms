var findMaxK = function(nums) {

    let newArray = nums.sort((a,b)=>a-b)
    let start = 0;
    let end = nums.length-1;
    while (start<end) {
        const leftVal = nums[start];
        const rightVal = nums[end];

        if (leftVal===-rightVal) {
            return rightVal
        }
        else if(rightVal>-leftVal){
            end--
        }
        else{
            start++
        }
    }
    return -1
    
};
const nums = [-10,8,6,7,-2,-3]
console.log(findMaxK(nums));
