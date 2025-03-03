
const nextGreatestLetter = (letters, target) => {

    let left = 0
    let right = letters.length - 1

    while (left <= right) {
        const mid = parseInt((left + right) / 2);
        if (letters[mid] > target) {
            right = mid - 1
        }
        else {
            left = mid + 1
        }
    }
    return letters[left] ?? letters[0]



}


const letters = ["c", "f", "j"], target = "c"
const result = nextGreatestLetter(letters, target)
console.log(result);
