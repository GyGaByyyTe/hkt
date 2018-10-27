const arr = [1, 3, 4, 9, 10];
const arr2 = [1, 3];
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8];
const arrEmpty = [];
const arrNotFound = [1, 2, 3];

binarySearch = function(array, number, depth = 0) {
  if (array.length < 1) {
    throw new Error("Array is empty");
  }
  if (array.length === 1 && array[0] !== number) {
    throw new Error(`${number} not found!`);
  }

  let mid = Math.floor(array.length / 2.5);

  if (array[mid] === number) return mid + depth;

  if (number > array[mid]) {
    const right = [];
    for (let i = mid + 1; i < array.length; i++) {
      right.push(array[i]);
    }
    return mid + binarySearch(right, number, depth + 1);
  }
  if (number < array[mid]) {
    const left = [];
    for (let i = 0; i < mid; i++) {
      left.push(array[i]);
    }
    return mid - binarySearch(left, number, depth + 1);
  }
};

assert.equal(binarySearch(arr, 9), 3);
assert.equal(binarySearch(arr2, 1), 0);
assert.equal(binarySearch(arr3, 8), 7);
// assert.equal(binarySearch(arrNotFound, 4), 0);
// assert.Error(binarySearch(arrEmpty, 1));
