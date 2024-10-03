
var countNegatives = function(grid) {
    
    let count = 0

    function binarySearch(row) {
       
        let left = 0
        let right = row.length - 1

        while (left<=right) {
            const mid = Math.floor((left+right)/2)
            if (row[mid]<0) {
                right = mid - 1
            }
            else{
                left = mid+1
            }
        }

         // The left index will now be the first negative number's index
        return row.length - left

        
    }

    grid.forEach(row => {
        count+= binarySearch(row)
    });
    return count
};

const grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
console.log(countNegatives(grid));

//https://www.canva.com/design/DAGSfAqFwjk/RbxDiTWSU1hhlaVqPShHcQ/edit?utm_content=DAGSfAqFwjk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton