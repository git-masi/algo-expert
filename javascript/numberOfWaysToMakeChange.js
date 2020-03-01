// ====
// IOEA
// ====
//
// Input:
//    an int representing target dollar amount
//    an array representing coin values
//
// Output:
//    an int representing the number of combinations of change possible for given inputs
//
// Edge cases:
//    targetAmount is zero
//    denoms is empty
//
// Assumptions:
//    targetAmount is positive int
//    denoms/coin values are all positive ints


function numberOfWaysToMakeChange(targetAmount, denoms) {
  const answerSet = new Set();

  function makeChange(amountRemaining, coinsUsed = []) {
    if (amountRemaining === 0) {
      answerSet.add(JSON.stringify(coinsUsed.sort()));
    }

    for (let coin of denoms) {
      if (amountRemaining - coin >= 0) {
        const tempArr = [...coinsUsed];
        tempArr.push(coin);
        makeChange(amountRemaining - coin, tempArr);
      }
    }
  }

  makeChange(targetAmount);

  return answerSet.size;
}















// ============================
// Dynamic Programming Solution
// ============================
//
// The intuition behind this problem is that we can compute the number of ways to make change
// for each value in the range from 0 - n
// using an array to store the number of ways to make change
// We can then reference those values for computing other values
//
// Say for example we have have this input
//    target: 6, coins: [5]
// We know that there are 0 ways to make change for a target value of 1 because 5 > 1
// So we can use that knowledge to compute the number of ways to make change for target: 6
// 6 - 5 = 1
// Given this we can reason that making change for target 6 using coin 5
// would be the same as saying 5 + the num ways to make change for target 1
// but num ways to make change for 1 = 0
// there are no other coins that can make change for 6
//
// With all that in mind we can reason that there are no ways to make change for 6 given only coin value 5

function numberOfWaysToMakeChange(n, denoms) {
  const waysToMakeChange = new Array(n + 1).fill(0);
  waysToMakeChange[0] = 1;

  for (let coin of denoms) {
    for (let i = 1; i < waysToMakeChange.length; i++) {
      if (coin <= i) {
        waysToMakeChange[i] += waysToMakeChange[i - coin];
      }
    }
  }

  return waysToMakeChange[n];
}