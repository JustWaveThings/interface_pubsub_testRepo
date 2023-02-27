import Collection from './extending_collections';

const tobyDictionary = Collection("Toby's Dictionary");

export const logInUpperCase = ({ data: item }) =>
	console.log(`**${item.term.toUpperCase()}**: ${item.definition}*`);

tobyDictionary.subscribe('add', logInUpperCase);

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
});

export default tobyDictionary;
