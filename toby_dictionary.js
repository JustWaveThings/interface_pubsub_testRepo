import Collection from './extending_collections';

const logInUpperCase = (item) =>
	console.log(`**${item.term.toUpperCase()}**: ${item.definition}*`);

tobyDictionary.subscribe('add', logInUpperCase());

const tobyDictionary = Collection("Toby's Devils Dictionary");
myDictionary.add({
	term: 'Cabbage',
	definition:
		"n. A familiar kitchen-garden vegetable about as large and wise as a man's head.",
});
myDictionary.add({
	term: 'Cat',
	definition:
		'n. A soft, indestructible automaton provided by nature to be kicked when things go wrong in the domestic circle.',
});
myDictionary.add({
	term: 'Famous',
	definition: 'adj. Conspicuously miserable.',
});
myDictionary.add({
	term: 'History',
	definition:
		'n. An account mostly false, of events mostly unimportant, which are brought about by rulers mostly knaves, and soldiers mostly fools.',
});
myDictionary.add({
	term: 'Resident',
	definition: 'adj. Unable to leave.',
});
