/*

The question specifies that the array contains unique values, so no values are repeated
Because of this we can treat it like a set even though it is not explicitly the Set data structure

threeNumberSum(array, targetSum)
  sort the array from lowest to highest
  p1 = array.length - 1
  p2 = 0
  result = []

  loop while p1 > 1 // we know that we need three numbers so index 2 is the last index we can check giving us the numbers at indexes 1, 2, and 3
    possibleThirdValue = targetSum - (array[p1] + array[p2])
    if (array[p1] < possibleThirdValue && possibleThirdValue < array[p2]) {
      while (array[p2] <= possibleThirdValue) {
        p2++;
        if (array[p2] === possibleThirdValue) {
          result.push([array[p2], array[p1], possibleThirdValue]);
        }
      }
    } else {
      p1--;
      p2 = 0;
    }

  return result

*/

function threeNumberSum (array, targetSum) {
  array.sort((a,b) => a - b);
  const result = [];
  let possibleThirdValue = null;

  for (let i = array.length - 1; i > 1; i--) {
    for (let j = 0; j <= i - 2; j++) {
      let k = j + 1;
      possibleThirdValue = targetSum - (array[i] + array[j]);
      if (array[j] < possibleThirdValue && possibleThirdValue < array[i]) {
        while (array[k] <= possibleThirdValue) {
          if (array[k] === possibleThirdValue) result.push([array[j], array[k], array[i]]);
          k++;
        }
      }
    }
  }

  return result.sort((a,b) => a[0] - b[0]);
}

// x = threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0);
// x = threeNumberSum([1, 2, 3], 6);
// x = threeNumberSum([12, 3, 1, 2, -6, 5, 0, -8, -1, 6], 0);
console.log(x);

// I need to work on built in array methods