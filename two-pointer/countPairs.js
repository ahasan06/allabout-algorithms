//2824
var countPairs = function(nums, target) {

    nums.sort((a,b)=>(a-b))
    let countPair = 0;
    let firstInd = 0
    let lastInd = nums.length - 1

    while (firstInd < lastInd) {
        let sum = nums [firstInd] + nums [lastInd]
        
        if (sum < target) {
            countPair = countPair + (lastInd - firstInd)
            firstInd ++
        }
        else{
            lastInd -- 
        }
        
    }
    
    return countPair

    
};

const array = [-6,2,5,-2,-7,-1,3];
const target = -2
console.log(countPairs(array,target));
