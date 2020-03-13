// function mergeSort(arr) {
//   if (arr.length <= 1) return arr;

//   const mid = Math.floor(arr.length / 2);
//   const left = mergeSort(arr.slice(0, mid));
//   const right = mergeSort(arr.slice(mid));

//   return merge(left, right);
// }

// function merge(left, right) {
//   let p1 = 0;
//   let p2 = 0;
//   let sortedArr = [];

//   while (p1 < left.length && p2 < right.length) {
//     if (left[p1] < right[p2]) {
//       sortedArr.push(left[p1]);
//       p1++;
//     } else {
//       sortedArr.push(right[p2]);
//       p2++;
//     }
//   }

//   while (left[p1] !== undefined) {
//     sortedArr.push(left[p1]);
//     p1++;
//   };

//   while (right[p2] !== undefined) {
//     sortedArr.push(right[p2]);
//     p2++;
//   }

//   return sortedArr;
// }


function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const auxArr = [...arr];
  mergeSortHelper(arr, 0, arr.length - 1, auxArr);
  return arr;
}

function mergeSortHelper(mainArr, start, end, auxArr) {
  if (start === end) return;
  const mid = Math.floor((start + end) / 2);
  mergeSortHelper(auxArr, start, mid, mainArr);
  mergeSortHelper(auxArr, mid + 1, end, mainArr);
  doMerge(mainArr, start, mid, end, auxArr);
}

function doMerge(mainArr, start, mid, end, auxArr) {
  let k = start;
  let i = start;
  let j = mid + 1;

  while (i <= mid && j <= end) {
    if (auxArr[i] < auxArr[j]) {
      mainArr[k] = auxArr[i];
      i++;
    } else {
      mainArr[k] = auxArr[j];
      j++;
    }
    k++;
  }

  while (i <= mid) {
    mainArr[k] = auxArr[i];
    i++;
    k++;
  }

  while (j <= end) {
    mainArr[k] = auxArr[j];
    j++;
    k++;
  }
}