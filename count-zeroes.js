function countZeroes(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        if (arr[middleIdx] === 1) {
            leftIdx = middleIdx + 1;
        } else if(arr[middleIdx-1]===0){
            rightIdx = middleIdx-1;
        }else {
            return arr.length - middleIdx;
        }
    }
    return 0;
}

module.exports = countZeroes