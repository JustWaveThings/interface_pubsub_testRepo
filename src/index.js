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

console.log(test.stuff); // now lists the two objects
console.log(test.thing); // undefined
console.log(test.title); // Default Collection

console.log(test._id); // lists id
