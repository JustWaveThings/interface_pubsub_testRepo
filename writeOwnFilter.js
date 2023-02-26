Array.prototype.writeOwnFilter = function (aFilterFunction) {
	let output = [];
	for (let i = 0; i < this.length; i += 1) {
		const currElement = this[i];
		const index = i;
		const array = this;
		if (aFilterFunction(currElement, index, array)) {
			output.push(this[i]);
		}
	}
	return output;
};

theArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let answer = theArray.writeOwnFilter((_, index) => index % 2 === 0);

console.log(answer);
