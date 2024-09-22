var intersect = function(nums1, nums2) {

    const hasNum1Obj = {}
    let arr= []

    for (let i = 0; i < nums1.length; i++) {
        const num = nums1[i];
        if (hasNum1Obj[num] != null) {
            hasNum1Obj[num] += 1;
        } else {
            hasNum1Obj[num] = 1;
        }
    }
    for (let i = 0; i < nums2.length; i++) {
        const num = nums2[i];
        if (hasNum1Obj[num]!=null && hasNum1Obj[num]>0) {
            arr.push(num)
            hasNum1Obj[num]-=1
        }
    }
    return arr
   
};

const nums1 = [1,2,2,1], nums2 = [2,2]
console.log(intersect(nums1,nums2));
