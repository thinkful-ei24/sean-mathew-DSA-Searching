
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

export function binarySearch(arr, searchValue) {

}