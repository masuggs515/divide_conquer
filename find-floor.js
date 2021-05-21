function findFloor(arr, val) {
    if(val < arr[0]) return -1;
    if( val > arr[arr.length-1]) return arr[arr.length-1];
    let left = 0;
    let right = arr.length-1;
    while (left<=right){
        let middle = Math.floor((right+left)/2);
        if(arr[middle]> val){
            right = middle-1;
        }else if (arr[middle] < val && arr[middle+1] < val){
            left = middle +1;
        }else if(arr[middle] <= val && arr[middle+1] > val){
            return arr[middle];
        }
    }
}

module.exports = findFloor