export const findMostFrequentElement = (arr: unknown[]) => {
	const frequencyMap = {};

	arr.forEach(item => {
		//@ts-expect-error fix-later
		frequencyMap[item] = (frequencyMap[item] || 0) + 1;
	});

	return Object.keys(frequencyMap).reduce((a, b) => 
		//@ts-expect-error fix-later
		frequencyMap[a] > frequencyMap[b] ? a : b
	);
};