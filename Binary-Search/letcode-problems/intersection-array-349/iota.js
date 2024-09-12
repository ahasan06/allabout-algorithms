//349. Intersection of Two Arrays

var intersection = function(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    let i = 0;
    let j = 0;
    let result = new Set() ;
    while (i<nums1.length && j<nums2.length) {
        if (nums1[i]===nums2[j]) {
            result.add(nums1[i])
            i++
            j++
        }

        else if (nums1[i] < nums2[j]) {
            i++
        }
        else{
            j++
        }
       
    }
    
    return [...result]

 
};

const nums1 = [4,9,5] ,nums2 = [9,4,9,8,4]
console.log(intersection(nums1,nums2));
