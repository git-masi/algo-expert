function minNumberOfCoinsForChange(target, denoms) {
  let amount = Array(target + 1).fill(Infinity);
  amount[0] = 0;

  for (let coin of denoms) {
    for (let i = 0; i < amount.length; i++) {
      if (coin > i) continue;

      let temp = i - coin;

      if (amount[i] > 1 + amount[temp]) amount[i] = 1 + amount[temp];
    }
  }

  const numCoinsForTarget = amount.pop();

  return numCoinsForTarget === Infinity ? -1 : numCoinsForTarget;
}

minNumberOfCoinsForChange(6, [1, 2, 4]);