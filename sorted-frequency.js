function sortedFrequency(arr, val) {
const first = findFirst(arr, val);
if(first === -1) return first;
const last = findLast(arr, val, left=first);
return last-first +1;
}

function findFirst(arr, val, left=0, right=arr.length-1){
    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (arr[middle] < val) {
            left = middle + 1;
        } else if(arr[middle-1]===val || arr[middle] > val ){
            right = middle-1;
        }else {
            return middle;
        }
    }
    return -1;
}

function findLast(arr, val, left=0, right=arr.length-1){
    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if(arr[middle+1]===val){
            left = middle+1;
        }else if(arr[middle] > val){
            right = middle-1;
        }else{
            return middle;
        }
    }
}

module.exports = sortedFrequency