function findRotationCount(arr) {
  let left = 0;
  let right = arr.length-1;
  if(arr[0] < arr[right]) return 0;
  while(left<=right){
      let middle = Math.floor((left+right)/2);
      if(arr[middle] >= arr[0] || arr[middle] >= arr[middle-1]){
          left = middle + 1;
      } else{
          return middle;
      }
  }
}

module.exports = findRotationCount