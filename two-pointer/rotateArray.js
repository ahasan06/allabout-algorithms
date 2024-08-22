var rotate = function (nums, k) {


    k = k % nums.length

    let left = 0
    let right = (nums.length - k) - 1

    function reverse(left, right) {
        while (left < right) {
            let temp = nums[left]
            nums[left] = nums[right]
            nums[right] = temp
            left++
            right--
        }
    }

    reverse(left, right)
    reverse(left = right + 1, right = nums.length - 1)
    reverse(left = 0, nums.length - 1)

    return nums

};


const nums = [-1], k = 4
console.log(rotate(nums, k));
