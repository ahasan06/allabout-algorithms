var flipAndInvertImage = function(image) {
   for (const array of image) {
    
    let left = 0;
    let right = array.length - 1

    while (left<right) {
        let temp =  array[left]
        array[left] = array[right]
        array[right] = temp

        array[left] = 1 - array[left]
        array[right] = 1 - array [right]

        left++
        right--
    }

    // if the element is odd [0,1,0] here loop terminate but 1 is still same that is why
    if (left==right) {
        array[left] = 1 - array[left]
    }
    
    
   }
    return image
};
image = [[1,1,0],[1,0,1],[0,0,0]]
console.log(flipAndInvertImage(image));
