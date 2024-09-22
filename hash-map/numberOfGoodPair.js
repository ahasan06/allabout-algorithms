
var numIdenticalPairs = function (nums) {
    const numIdenticalPairsObj = {}
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        if (numIdenticalPairsObj[num] != null) {
            numIdenticalPairsObj[num] += 1
        }
        else {
            numIdenticalPairsObj[num] = 1
        }
    }
    console.log(numIdenticalPairsObj);
    let totalGoodPair = 0
    for (const key in numIdenticalPairsObj) {

        let value = numIdenticalPairsObj[key]
        if (value > 1) {
            totalGoodPair += (value * (value - 1) / 2)
        }
    }
    return totalGoodPair
};


const nums =[1,2,3]
console.log(numIdenticalPairs(nums));

