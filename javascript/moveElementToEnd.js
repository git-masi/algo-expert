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


/*

============================
Thoughts post-implementation
============================
Before solving this problem I had a bit of a lightbulb moment when I saw the example in the question
Specifically I saw that in this test case
moveElementToEnd([2,1,2,2,2,3,4,2], 2)
The last value in the array could be equal to the input value we're checking against
and that had to be accounted for in my code
I already more or less knew that I was going to be using pointers and swapping values
But that test case gave me a little insight into the problem

The important take away from this is that sometimes I need to think more about test cases before solving problems
I have known for a while now that understanding the inputs before attempting to solve the problem
is extremely important for avoiding bugs
But as I go along I also pick up some more nuanced ideas about what exactly the data looks like
and what the possible edge cases are

For this problem I might think about:
- what if the array is empty?
- what if all the values are the same?
- what if we start the array with the value we're looking for?
- what if we end the array with the value we're looking for?

These types of questions would be good to consider in the future

*/