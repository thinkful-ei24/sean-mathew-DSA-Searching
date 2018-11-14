
export function linearSearch(arr, searchValue) {
  for(let i=0; i<arr.length; i++) {
    const element = arr[i];
    if(element === searchValue) {
      return i+1;
    }
  }
}

export function binarySearch(arr, searchValue, start=0, stop=arr.length-1) {
  console.log(arr.sort());
  return binarySearchAlgo(arr.sort(), searchValue, start, stop, 0)
}
 
function binarySearchAlgo(arr, searchValue, start = 0, stop = arr.length - 1, count=0) {

  let middle = Math.ceil((start + stop) / 2);
  console.log('middle', middle, 'value', arr[middle], 'count', count);
  count++;
  if (searchValue===arr[middle]){
    //normal return would be returning searchvalue's index
    return count;
  } else if ( searchValue < arr[middle] ) {
    return binarySearchAlgo(arr, searchValue, start, middle-1, count);//TODO check ++count
  } else if ( searchValue > arr[middle] ) {
    return binarySearchAlgo(arr, searchValue, middle+1, stop, count); //TODO check count++
  } else {
    return -1;
  }
}