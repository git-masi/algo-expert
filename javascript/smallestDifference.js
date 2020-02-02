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

/*

============================
Thoughts post-implementation
============================
There are a few things I don't like about my first solution
First I think it is a little hard to read and understand what is happening in the code
Especially at the end with sortedBySmallestDifference
it is hard to keep track of what is an array and what is an object

I also think that we're essentially working with O(n^2) time and I just get the feeling that,
even without looking at other possible solutions, this should run slightly faster

I had written some notes in my notebook about a potential solution using pointers
But in the end this seemed like the easier solution to implement so I chose to do this the first time around

I definitely think it is worth revisiting this and three number sum in the future after I have had some time
to digest other solutions

*/