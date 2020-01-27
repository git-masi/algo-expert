function smallestDifference(arrayOne, arrayTwo) {
	const result = [];
  const traversedValues = {};

	for (let arrayOneValue of arrayOne) {
		if (!traversedValues[arrayOneValue]) {
			traversedValues[arrayOneValue] = {arrayTwoValue: null, smallestDifference: Infinity}
		}
	}

	for (let arrayTwoValue of arrayTwo) {
		if (traversedValues[arrayTwoValue]) return [arrayTwoValue, arrayTwoValue];
		for (let key in traversedValues) {
			if (Math.abs(key - arrayTwoValue) < traversedValues[key].smallestDifference) {
				traversedValues[key].arrayTwoValue = arrayTwoValue;
				traversedValues[key].smallestDifference = Math.abs(key - arrayTwoValue)
			}
		}
	}

	const sortedBySmallestDifference = Object.entries(traversedValues).sort((a,b) => a[1].smallestDifference - b[1].smallestDifference)
  result.push(sortedBySmallestDifference[0][0] * 1);
  result.push(sortedBySmallestDifference[0][1].arrayTwoValue);
	return result;
}

// const x = smallestDifference([1,2,25,8,-1], [4,44,444,-44,-444]);
// console.log(x);