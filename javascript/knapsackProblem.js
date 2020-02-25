// ====
// IOEA
// ====
// Input:
//     array of arrays representing values/items
//         each inner array has two ints
//         first int is the item value
//         second int is item weight
//     int representing max capacity for knapsack
// Output:
//     array with two elements
//        int representing max value for knapsack of given capacity
//        array of items used to get max value
// Edge Cases:
//     capacity < 1
//     "empty" items e.g. the first item in this array [[], [1,4]]
//     all items have weight higher than knapsack capacity
//     empty array of items
// Assumptions:
//    All values are positive integer values
//    capacity > 0
//    no empty or malformed items e.g. [1] or [Infinity, 2]
//    only one combination will maximize the value
//    cannot split items (0/1 knapsack)
//    cannot use an item more than once
//
//
// ================
// PRE-SOLUTION
// PSEUDOCODE IDEAS
// ================
//
// func(items, capacity) where items is array of arrays and capacity is a target int
//    init a 2d array called values
//        number of arrays = items.length
//        each array within has length = capacity + 1
//        the array values[0] has 0 at every index
//
//    loop through each array in the 2d array
//    start looping at 1 because the 0th array is set to all 0s and acts as a base case
//      update the value if item value + values[i - 1][j - item weight] > values[i - 1][j]
//
//    loop through the values array starting from the end
//    keep track of capacity
//        if value at index = capacity > value of array above at index = capacity
//            add item to list of items used
//            subtrack item weight from capacity
//
//    return an array where the first element is the max value and the second element is an array of items used to get that value

function knapsackProblem(items, capacity) {
  const values = [];
  for (let i = 0; i < items.length + 1; i++) {
    const row = Array.from(Array(capacity + 1).fill(0));
    values.push(row);
  }

  // for (let i = 0; i < items.length; i++) values.push([]);
  // for (let arr of values) for (let i = 0; i < capacity + 1; i++) arr.push(0);

  for (let i = 1; i < values.length; i++) {
    for (let j = 0; j < values[i].length; j++) {
      const itemVal = items[i - 1][0];
      const itemWeight = items[i - 1][1];

      if (itemWeight <= j) {
        values[i][j] = Math.max(itemVal + values[i - 1][j - itemWeight], values[i - 1][j]);
      } else {
        values[i][j] = values[i - 1][j];
      }
    }
  }

  const maxValue = [...values[values.length - 1]].pop();
  const itemsInKnapsack = [];
  let i = values.length - 1;

  while (i > 0) {
    let j = capacity;
    if (values[i][j] > values[i - 1][j]) {
      itemsInKnapsack.push(i - 1);
      capacity -= items[i - 1][1];
      i--;
    } else {
      i--;
    }
  }

  return [maxValue, itemsInKnapsack];
}