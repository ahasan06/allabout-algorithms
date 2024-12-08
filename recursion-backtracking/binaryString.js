function quicksort(arr, depth = 0) {
    const indent = " ".repeat(depth * 2);
    
    // Log the start of each recursive call with current array and depth level
    console.log(`${indent}quicksort called with: [${arr.join(", ")}]`);
    
    // Base case: arrays with 0 or 1 element are already sorted
    if (arr.length <= 1) {
        console.log(`${indent}Base case reached with array: [${arr.join(", ")}]`);
        return arr;
    }

    // Choose the leftmost element as the pivot
    const pivot = arr[0];
    console.log(`${indent}Pivot chosen: ${pivot}`);

    const left = [];
    const right = [];

    // Partition the array into left (less than pivot) and right (greater or equal to pivot)
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
            console.log(`${indent}  ${arr[i]} < ${pivot} (pivot) -> push to left`);
        } else {
            right.push(arr[i]);
            console.log(`${indent}  ${arr[i]} >= ${pivot} (pivot) -> push to right`);
        }
    }

    // Log partitions before recursive calls
    console.log(`${indent}Left partition: [${left.join(", ")}]`);
    console.log(`${indent}Right partition: [${right.join(", ")}]`);

    // Recursively sort left and right partitions
    const sortedLeft = quicksort(left, depth + 1);
    const sortedRight = quicksort(right, depth + 1);

    // Concatenate sorted parts and pivot for the current level's result
    const result = [...sortedLeft, pivot, ...sortedRight];
    console.log(`${indent}Backtracking: Concatenated result: [${result.join(", ")}]`);

    return result;
}

// Example usage
const arr = [3, 6, 8, 10, 1, 2, 1];
console.log("Sorted array:", quicksort(arr));
