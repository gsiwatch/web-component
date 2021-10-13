// util example
export function mergeSortedArrays(arrA, arrB) {
  let sortedArray = [];
  let i = 0;
  let j = 0;
  while (i < arrA.length && j < arrB.length) {
    if (arrA[i] < arrB[j]) {
      sortedArray.push(arrA[i]);
      i++;
    } else {
      sortedArray.push(arrB[j]);
      j++;
    }
  }

  while (i < arrA.length) {
    sortedArray.push(arrA[i]);
    i++;
  }

  while (j < arrB.length) {
    sortedArray.push(arrB[j]);
    j++;
  }

  return sortedArray;
}
