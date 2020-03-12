function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let p1 = 0;
  let p2 = 0;
  let sortedArr = [];

  while (p1 < left.length && p2 < right.length) {
    if (left[p1] < right[p2]) {
      sortedArr.push(left[p1]);
      p1++;
    } else {
      sortedArr.push(right[p2]);
      p2++;
    }
  }

  while (left[p1] !== undefined) {
    sortedArr.push(left[p1]);
    p1++;
  };

  while (right[p2] !== undefined) {
    sortedArr.push(right[p2]);
    p2++;
  }

  return sortedArr;
}