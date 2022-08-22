// Binary Search is a much faster way to search, but only problem with it is that it only work for sorted data.
// Binary Search follows the divide and conquer approach for searching.
// In binary search we reduce the array to half beacuse we know which direction to search, as we have sorted array.
// Best case: O(1) // elements finds at the middle of the array.
// Average case: O(log n) // elements finds somewhere in the array.
// Worst case: O(log n) // elements finds at the extreme left or right of the array.

// Implementation of Binary Search Algorithm

function binarySearch(array, target) {
  let s = 0;
  let e = array.length - 1;

  while (s <= e) {
    let mid = Math.floor((s + e) / 2);
    if (array[mid] === target) {
      return mid;
    }
    if (target < array[mid]) {
      e = mid - 1;
    } else {
      s = mid + 1;
    }
  }
  return -1;
}

console.log(binarySearch([-5, 3, 6, 8, 12, 17, 28], 12));
