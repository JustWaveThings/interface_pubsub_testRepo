const addTwoThings = function (first) {
	return function (second) {
		// here are both variables in scope
		return first + second;
	};
};

const add7 = addTwoThings(7);
const sayHello = addTwoThings('Hello, ');

console.log(add7(3)); // 10
console.log(sayHello('world!')); // Hello, world!

console.log(sayHello(add7(add7(28)))); // Hello, 42
