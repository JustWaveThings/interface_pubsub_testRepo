/* eslint-disable no-underscore-dangle */
import './style.css';

import Collection from './extending_collections';

/* const tobyDictionary = Collection("Toby's Dictionary");

tobyDictionary.add({
	term: 'Cabbage',
	definition:
		"n. A familiar kitchen-garden vegetable about as large and wise as a man's head.",
});
tobyDictionary.add({
	term: 'Cat',
	definition:
		'n. A soft, indestructible automaton provided by nature to be kicked when things go wrong in the domestic circle.',
});
tobyDictionary.add({
	term: 'Famous',
	definition: 'adj. Conspicuously miserable.',
});
tobyDictionary.add({
	term: 'History',
	definition:
		'n. An account mostly false, of events mostly unimportant, which are brought about by rulers mostly knaves, and soldiers mostly fools.',
});
tobyDictionary.add({
	term: 'Resident',
	definition: 'adj. Unable to leave.',
}); */

const test = Collection();

test.add({ test: 'test', animal: 'cougar' });
test.add({ test: 'test', animal: 'lion' });

test.subscribe('add', (item) => {
	console.log('ITEM ---', item);
});

// note that ^ did not print to console.

console.log(test.stuff); // now lists the two objects in an array -- both have the collection id. I'd want to figure out how to give them their own secondary id.

console.log(test.thing); // still undefined  - just not reachable
console.log(test.title); // Default Collection

console.log(test._id); // lists id
console.log(test.observers); // object with array of 'add' and the function

console.log(test.observers.title); // undefined

console.log(test.observers.add); // just the add function

console.log(test.observers.add[0]); // Literally just the add function printed out
