function moveElementToEnd(array, elementToMove) {
  let lastUnmovedIndex = array.length - 1;

  while (array[lastUnmovedIndex] === elementToMove) lastUnmovedIndex--;

  for (let i = 0; i < lastUnmovedIndex; i++) {
    if (array[i] === elementToMove) {
      swap(array, i, lastUnmovedIndex);
    }
    while (array[lastUnmovedIndex] === elementToMove) lastUnmovedIndex--;
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