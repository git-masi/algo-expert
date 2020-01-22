/*

Write a function that takes in a **sorted** array and a target integer
Use binary search to look for the target integer in the array
If it exists return the index of the integer
If it does not exist return -1


================
Initial thoughts
================
Binary search involves selecting the mid point in the array checking if the target is greater than or less than that value
This process is repeated continuously on half of the array up to the mid point if the target is smaller or starting from the mid point to the end if the target is larger until there is only one element left in the array, at which point we return the index or -1
If done recursively the important peice is to track the index through successive recursive calls


==================
Initial pseudocode
==================
INPUT
   A SORTED array, a target integer
OUTPUT
   The index of the target integer in the array if it exists else -1

Write a function called binarySearch that accepts a sorted array and a target value (int in this case)
  Write a recursive helper function that accepts a sorted array and an int representing the current index, default is 0
    base case: if array.length is 1 return the currentIndex if the target equals the value arr[0] or if not return -1
    find the mid point of the array using Math.floor(arr.length / 2)
    if arr[mid] < targetval
      helper(arr[0...mid], currentIndex)
    else
      helper(mid...end), currentIndex += midIndex
*/


function binarySearch(arr, targetVal) {
  return (function helper(arr, currIdex = 0) {
    if (arr.length === 1) return arr[0] === targetVal ? currIdex : -1;
    const midIdx = Math.floor(arr.length / 2);
    if (arr[midIdx] <= targetVal) {
      return helper(arr.slice(midIdx, arr.length), currIdex + midIdx)
    } else {
      return helper(arr.slice(0, midIdx), currIdex);
    }
  })(arr)
}

var x = binarySearch([1,2,3,4,5], 5);
// console.log(x);

/*

I need to review slice, splice in JS

I tried using this if statement to call the recursive function
if (arr[midIdx] < targetVal) {
  helper(arr.slice(0, midIdx + 1), currIdex);
} else {
  helper(arr.slice(midIdx, arr.length), currIdex + midIdx)
}
But it became obvious that this was going to keep calling the function and never reach the base case
Not only that but because we already check if the midIdx val is < or > we don't need to include that value
This may be a premature optomization though, I suppose we could check if the value is equal to arr[midIdex + currIdex] or something like that to exit early

Another problem with that block is that I switched around the helper calls so the wrong sub array was passed in each time

Still another problem was that I needed to use <= when checking values else if the target was the last value it wouldn't create the correct sub array

These problems were very easy to debug and I even figured out some of them without running the code for the first time
But ideally I would be able to solve a problem like this the first time

*/