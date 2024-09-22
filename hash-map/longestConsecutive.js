var longestConsecutive = function(nums) {
    const hashObj ={}

    for (let i = 0; i < nums.length; i++) {
       const num = nums[i]
       if (hashObj[num]==null) {
        hashObj[num] =true
       }
    }
    
    console.log(hashObj);
    let length = Math.max(...nums)
    let minlength = Math.min(...nums)
    let max = 0
    let count = 0
    for (let i = minlength; i <=length+1; i++) {
    
        if (hashObj[i]!=null) {
            count++
        }

        else{
            if (max<count) {
                max = count
                count = 0
            }
            else{
                count = 0
            }
        }
        
    }
    
   return max
    
};

const  nums = [0,-1]
console.log(longestConsecutive(nums));
