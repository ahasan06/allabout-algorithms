
// const binarySearchItterative = (array,target) =>{

//     low = 0 ;
//     high = array.length - 1

//     while (low<=high) {
//       const mid = Math.floor((low+high) / 2)

//       if (array[mid] === target) {
//         return mid
//       }
//       else if (array[mid] < target) {
//         low = mid + 1
//       }
//       else if (array[mid] > target) {
//         high = mid - 1
//       }
//     }
//     return -1

// }

// const array = [3, 6, 8, 12, 14, 18, 25, 30, 36, 40];
// const target = 25
// console.log(binarySearchItterative(array,target));


/*
const binarySearchItterative = (array,target) =>{

    low = 0 ;
    high = array.length - 1 // 9

    while (low<=high) {
        // 0 <= 9 ? conditin true loop excute

      const mid = Math.floor((low + high) / 2)
         // mid  = (0 + 9 / 2) => 4

      if (array[mid] === target) {
        //(array[4] === 25 ) // 14 !== 25  false condition not execute check next condition
        return mid
      }
      else if (array[mid] < target) {
            //(array[4] < 25)  14 < 25 ? yes condition true excute the programme
        low = mid + 1
// set  low =  4 + 1 => 5
    //  low = 5
      }
      else { 
        high = mid - 1
      }
    }
    return -1

}

const array = [3, 6, 8, 12, 14, 18, 25, 30, 36, 40];
const target = 25
console.log(binarySearchItterative(array,target));

*/



