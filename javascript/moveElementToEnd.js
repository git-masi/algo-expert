function moveElementToEnd(array, elementToMove) {
  let lastUnmovedIndex = array.length - 1;

  for (let i = 0; i < lastUnmovedIndex; i++) {
    while (i < lastUnmovedIndex && array[lastUnmovedIndex] === elementToMove) lastUnmovedIndex--;
    if (array[i] === elementToMove) {
      swap(array, i, lastUnmovedIndex);
    }
  }

  return array;
}


function swap(array, index1, index2) {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

x = moveElementToEnd([2,1,2,2,2,3,4,2], 2);
console.log(x);