// Linear Search is very basic algorithm, it uses brute force technique for searching.
// Linear Search is also called Sequential Search. Linear Search Algorithm does not need a sorted array.
// We have to go through all the elements of the array to find the required results.
// The runtime complexity of linear search is O(n), where n is the number of elements in array.
// Best case: O(1) // elements finds at the first position of the array.
// Average case: O(n) // elements finds at the mid of the array.
// Worst case: O(n) // elements finds at the end of the array.

// Implementation of Linear Search Algorithm

function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([-5, 3, 6, 8, 2, 7, 17], 17));
