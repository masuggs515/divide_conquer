function findRotatedIndex(arr, val) {
    let left = 0;
    let right = arr.length - 1;
    // finding right array for splitting
    if (val < arr[0]) {
        while (left <= right) {
            let middle = Math.floor((left + right) / 2)
            if (arr[middle] === val) {
                return middle;
            }else if (arr[middle] >= arr[0] || arr[middle] < val) {
                left = middle + 1;
            } else if (arr[middle] > val) {
                right = middle - 1;
            } 
        }
        return -1;
    } else {
        while (left <= right) {
            let middle = Math.floor((left + right) / 2)
            if (arr[middle] === val) {
                return middle;
            } else if (arr[middle] <= arr[arr.length - 1] || arr[middle] > val) {
                right = middle - 1;
            } else if (arr[middle] < val) {
                left = middle + 1;
            }
        }
        return -1;
    }
}

module.exports = findRotatedIndex
