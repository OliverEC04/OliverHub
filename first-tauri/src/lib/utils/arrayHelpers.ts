export const shuffle = function<T>(array: T[]): T[] {
	const copyArray = array.slice();
	let currentIndex = copyArray.length;

	while (currentIndex !== 0) {
		let randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		[copyArray[currentIndex], copyArray[randomIndex]] = [
			copyArray[randomIndex], copyArray[currentIndex]
		];
	}

	return copyArray;
};
