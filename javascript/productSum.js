function productSum(arr) {
  return (function helper(arr, depth = 0){
    depth++;
    let total = 0;
    arr.forEach(el => {
      if (el.length > 0) {
        total += (helper(el, depth) * depth);
      } else {
        total += (el * depth);
      }
    });
    return total;
  })(arr)
}

// var x = productSum([1,2,[3],4,5]); // 18
// var x = productSum([[[[[5]]]]]); // 600
// var x = productSum([5,2,[7,-1],3,[6, [-13,8],4]]); // 12
var x = productSum([3,[6, [-13,8],4]]); // 12
console.log(x);


/*
=============================
Thoughts after implementation
=============================
For a problem like this it is important to have a clear understanding of the ouput before starting
This is essentially a math problem
My only hangup here was that I didn't really understand what the output should be before I started writing code
Specifically I missed a multiplication step on my first attempt

Take the example input:
[3,[6, [-13,8],4]

The actual math would look like this:
3 + 2 * (6 + 3 * (-13 + 8) + 4);

But my original code:
total += helper(el, depth);
Produced this result:
3 + 2 * 6 + 3 * (-13 + 8) + 2 * 4);

*/