const mergeSort = (arr) => {
  // YOUR CODE HERE

  //return empty or single item array
  if (arr.length <= 1) {
    return arr;
  }
  //find middle of array
  const middle = Math.floor(arr.length/2)
  //divide array into left(arr1) and right(arr2) side
  const arr1 = arr.slice(0,middle);
  const arr2 = arr.slice(middle);
//combine arrays
  return merge(
    mergeSort(arr1), mergeSort(arr2)
  );
}


// HELPER FUNCTION: merge two sorted arrays
const merge = (arr1, arr2) => {
  var result = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] <= arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }

  return result.concat(arr1, arr2);
}

module.exports = mergeSort;
