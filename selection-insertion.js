const arr = [6, 3, 5, 1, 9];
const arrSorted = [1, 3, 5, 6, 9];

selectionSort = function(_arr) {
  let result = [];
  for (let i = 0; i < _arr.length; i++) {
    let min = 0;
    for (let j = 0; j < _arr.length; j++) {
      if (_arr[j] && _arr[j] <= _arr[min]) {
        min = j;
      }
    }
    result.push(_arr[min]);
    _arr[min] = Infinity;
  }
  return result;
};

assert.deepEqual(selectionSort(arr), arrSorted);

insertionSort = function(_arr) {
  for (let i = 1; i < _arr.length; i++) {
    let current = _arr[i];
    let j = i - 1;
    while (j >= 0 && _arr[j] > current) {
      _arr[j + 1] = _arr[j];
      j = j - 1;
    }
    _arr[j + 1] = current;
  }
  return _arr;
};

const arr2 = [7, 5, 8, 3, 6, 4];
const arrSorted2 = [3, 4, 5, 6, 7, 8];

assert.deepEqual(insertionSort(arr2), arrSorted2);
