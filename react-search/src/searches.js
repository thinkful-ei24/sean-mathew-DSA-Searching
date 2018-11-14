
export function linearSearch(arr, searchValue) {
  console.log(arr);
  console.log(searchValue);
  for(let i=0; i<arr.length; i++) {
    const element = arr[i];
    if(element === searchValue) {
      return i+1;
    }
  }
}

export function binarySearch(arr, searchValue, start = 0, stop = arr.length - 1, count=0) {
  let middle = Math.ceil((start + stop) / 2);
  count++;
  if (searchValue===arr[middle]){
    //normal return would be returning searchvalue's index
    return count;
  } else if ( searchValue < arr[middle] ) {
    return binarySearch(arr, searchValue, start, middle-1, count);//TODO check ++count
  } else if ( searchValue > arr[middle] ) {
    return binarySearch(arr, searchValue, middle+1, stop, count); //TODO check count++
  } else {
    return -1;
  }
}