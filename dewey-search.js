
const library = [
  { author: 'Cowlishaw, Mike', dewey: '005.133', title: 'The REXX Language' },
  { author: 'Sams', dewey: '005.133', title: 'Teach Yourself C++ In 21 Days' },
  { author: 'Stroustrup., Bjarne', dewey: '005.133', title: 'The C++ Programming Language' },
  { author: 'Crockford, Douglas', dewey: '005.2762', title: 'JavaScript: The Good Parts' },
  { author: 'Flanagan, David', dewey: '005.2762', title: 'JavaScript: The Definitive Guide' },
  { author: 'Schmidt, Meinhard', dewey: '005.44684', title: 'Windows Vista for Dummies' },
  { author: 'Zondervan', dewey: '220.52081', title: 'NIV Study Bible' },
  { author:'Humphries, Russell, Dr.', dewey: '231.7652', title: 'Starlight and Time' },
  { author: 'Jane, Frederick Thomas', dewey: '623.82509051', title: 'Jane\'s Fighting Ships' },
  { author: 'Norris, Chuck', dewey: '796.8092', title: 'The Official Chuck Norris Fact Book' }
];

function search(arr, title) {
  for(const book of library) {
    if(book.title.toLowerCase() === title) {
      return book;
    }
  }
}

function fastSearch(dewey, title) {
  const index = binarySearch(library, dewey);
  let startIndex = index;
  let stopIndex = index;
  const filteredBooks = [];
  filteredBooks.push(library[index]);
  // while loop: if startIndex and stopIndex don't change then break
  // if prevElement at startIndex-1 exists, check to see if it matches target dewey
  //     if it exists and is a match, push to filteredBooks and decrement startIndex
  // if nextElement at stopIndex+1 exists, check to see if it matches target dewey
  //     if it exists and is a match, push to filteredBooks increment stopIndex
  // after checking both, if no books were added then break the loop
  while(true) {
    let startLength = filteredBooks.length;
    console.log('startIndex', startIndex, 'stopIndex', stopIndex, 'beginning search index', index);
    if(startIndex-1 >= 0) {
      const prevBook = library[startIndex-1];
      if(prevBook.dewey === dewey) {
        filteredBooks.push(prevBook);
        startIndex--;
      }
    }

    if(stopIndex+1 < library.length) {
      const nextBook = library[startIndex+1];
      if(nextBook.dewey === dewey) {
        filteredBooks.push(nextBook);
        stopIndex++;
      }
    }

    if(filteredBooks.length === startLength) {
      break;
    }
  }

  // search(filteredBooks, 
  return filteredBooks;
}

function binarySearch(arr, searchValue, start = 0, stop = arr.length - 1) {
  let middle = Math.ceil((start + stop) / 2);
  if(start > stop) {
    return -1;
  }
  const currentDewey = arr[middle].dewey;
  if (searchValue===currentDewey){
    return middle;
  } else if ( searchValue < currentDewey ) {
    return binarySearch(arr, searchValue, start, middle-1);
  } else if ( searchValue > currentDewey ) {
    return binarySearch(arr, searchValue, middle+1, stop);
  } else {
    return -1;
  }
}

console.log(fastSearch('005.133'));