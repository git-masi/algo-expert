// function minNumberOfCoinsForChange(target, denoms) {
//   let amount = Array(target + 1).fill(Infinity);
//   amount[0] = 0;

//   for (let coin of denoms) {
//     for (let i = 0; i < amount.length; i++) {
//       if (coin > i) continue;

//       let temp = i - coin;

//       if (amount[i] > 1 + amount[temp]) amount[i] = 1 + amount[temp];
//     }
//   }

//   const numCoinsForTarget = amount.pop();

//   return numCoinsForTarget === Infinity ? -1 : numCoinsForTarget;
// }


// ======================
// POST SOLUTION THOUGHTS
// ======================
//
// One improvement we can make to readability is to remove this line:
//    if (coin > i) continue;
// and replace it with the conditional we really care about
//    if (coin <= i) {
//      ...
//    }
//
// We can also remove the redundant use of 1 + amount[temp]
// or any placeholder variable for that value
// by using Math.min
// This causes us to reassign amount[i] every time, but it makes the code more compact and obvious

function minNumberOfCoinsForChange(target, denoms) {
  let amount = Array(target + 1).fill(Infinity);
  amount[0] = 0;

  for (let coin of denoms) {
    for (let i = 0; i < amount.length; i++) {
      if (coin <= i) {
        amount[i] = Math.min(amount[i], 1 + amount[i - coin]);
      }
    }
  }

  const numCoinsForTarget = amount.pop();

  return numCoinsForTarget === Infinity ? -1 : numCoinsForTarget;
}

minNumberOfCoinsForChange(6, [1, 2, 4]);