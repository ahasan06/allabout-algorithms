
var nextGreatestLetter = function (letters, target) {
    let left = 0;
    let right = letters.length - 1

    console.log(letters);
    
    while (left <= right) {
        const midIndex = parseInt((left + right) / 2);
        
        if (letters[midIndex] > target) {
            right = midIndex - 1;
        } else {
            left = midIndex + 1;
        }
    }
    return letters[left] ?? letters[0];

};
const letters = ["x","x","y","z"], target = "z"
console.log(nextGreatestLetter(letters, target));
