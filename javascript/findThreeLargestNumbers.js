// Given an array of numbers write a function that returns a sorted array of the three largest numbers


// ===============
// Initial thoughts
// ===============
// It would be relatively straightforward to initialize three variables or an object or array with the first three values
// Then iterate over the array starting at index 3 and compare
// Return a sorted array with all three


// ==================
// Initial Pseudocode
// ==================
// Declare function findThreeLargestNumbers which accepts an array
//    largest = [init with first three elements]
//    loop through array
//      if arr[i] > any of the values in larget replace it with new value
//
//    return larget.sort()


function findThreeLargestNumbers(arr) {
  const largest = [arr[0], arr[1], arr[2]]

  for (let i = 3; i < arr.length; i++) {
    let smallest = Math.min(...largest);
    if (smallest < arr[i]) {
      largest[largest.indexOf(smallest)] = arr[i]
    }
  }

  return largest.sort((a,b) => a - b);
}

// const testArray = [1,2,3,4,5];
// const testArray = [10,20,3,10,5];
const testArray = [55,7,8];

// findThreeLargestNumbers(testArray)


// Using built in array methods
function findThreeLargestNumbers2(arr) {
  return arr.sort((a,b) => b - a).filter((val, i) => i < 3 ? val : null).sort((a,b) => a - b);
}

findThreeLargestNumbers2(testArray)