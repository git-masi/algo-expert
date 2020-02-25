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