const binSearch = (arr, toSearch) => {

    function foundSearch(toSearch, start, end) {
        if (start > end) {
            return -1
        }
        
        mid = Math.floor((start+end)/2)
        if (arr[mid]===toSearch) {
            return mid
        }
        if (arr[mid]>toSearch) {
            return foundSearch (toSearch,start,mid-1)
        }
        else{
            return foundSearch (toSearch,mid+1,end)
        }
    }
    return foundSearch(toSearch, 0, arr.length - 1)
}

const arr = [1, 2, 3, 4, 5];
const toSearch = 6;
console.log(binSearch(arr, toSearch));
