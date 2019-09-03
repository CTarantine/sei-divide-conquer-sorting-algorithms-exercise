const quickSort = (arr) => {
  // YOUR CODE HERE
  if (arr.length <= 1) {
    return arr
  }
  else {
    let arr1 = [];
    let arr2 = [];
    let sorted = [];
    let pivot = arr.pop();
    let length = arr.length;
    for (let i = 0; i < length;) {
      if (arr[i] <= pivot) {
        arr1.push(arr[i])
      }
      else {
        arr2.push(arr[i])
      }
    }
    return sorted.concat(quickSort(arr1), pivot, quickSort(arr2))
  }

}

module.exports = quickSort;