

// const quickSort = (arr) => {

//     if (arr.length <= 1) {
//         return arr;
//     }
//     const pivot = arr[0];
//     const left = [];
//     const right = [];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < pivot) {
//             left.push(arr[i]);
//         } else {
//             right.push(arr[i]);
//         }
//     }

//     const sortedLeft = quickSort(left);
//     const sortedRight = quickSort(right);

//     const combined = [...sortedLeft, pivot, ...sortedRight];
//     return combined;
// };

// const arr = [7, 20, 3, 1, 4, 21, -4, 5, 9, 21, 0];
// console.log("Final sorted array:", quickSort(arr));








// const quickSort = (arr) => {
//     console.log(`Calling quickSort on: ${arr}`);  // Debug statement to track function calls
    
//     if (arr.length <= 1) {
//         console.log(`Returning single-element or empty array: ${arr}`);  // Debug for base case
//         return arr;
//     }

//     const pivot = arr[0];
//     const left = [];
//     const right = [];

//     console.log(`Pivot chosen: ${pivot}`);  // Debug to see the pivot

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < pivot) {
//             left.push(arr[i]);
//         } else {
//             right.push(arr[i]);
//         }
//     }

//     console.log(`Left partition for pivot ${pivot}: ${left}`);  // Debug for left partition
//     console.log(`Right partition for pivot ${pivot}: ${right}`);  // Debug for right partition

//     const sortedLeft = quickSort(left);
//     const sortedRight = quickSort(right);

//     const combined = [...sortedLeft, pivot, ...sortedRight];
//     console.log(`Combined result with pivot ${pivot}: ${combined}`);  // Debug to see combined result

//     return combined;
// };

// const arr = [7, 20, 3, 1, 4, 21, -4, 5, 9, 21, 0];
// console.log("Final sorted array:", quickSort(arr));


