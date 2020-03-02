function maxSubsetSumNoAdjacent(arr) {
  if (arr.length <= 0) return 0;
  if (arr.length === 1) return arr[0];

  let maxSubset = [0, 0];

  for (let i = 0; i < arr.length; i++) {
    maxSubset.push(Math.max(maxSubset[i + 1], arr[i] + maxSubset[i]));
  }

  return maxSubset[maxSubset.length - 1];
}

maxSubsetSumNoAdjacent([10, 1, 5, 18, 2, 4]);