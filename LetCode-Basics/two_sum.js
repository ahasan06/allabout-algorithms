
// var twoSum = function (nums, target) {
//     let sum;
//     for (let i = 0; i < nums.length; i++) {

//         for (let j = i + 1; j < nums.length; j++) {

//             sum = nums[i] + nums[j]
//             if (sum===target) {
//                 return ([i,j])
//             }

//         }

//     }
//     return null;
// };

// const nums = [3,2,4]
// const target = 6
// console.log(twoSum(nums, target));

//hasmap problem
var twoSum = function (nums, target) {
    let map = new Map()

    
    for (let i = 0; i < nums.length; i++) {
        const comp = target - nums[i]
        if (map.has(comp)) {
            return [map.get(comp),i]
        }
        map.set(nums[i],i)
        
    }
    return []
};

const nums = [3,2,4]
const target = 6
console.log(twoSum(nums, target));
