/* eslint-disable no-prototype-builtins */
/* eslint-disable no-underscore-dangle */
import { v4 as uuidv4 } from 'uuid';

const Collection = (title = 'Default Collection', _id = uuidv4()) => {
	let stuff = [];
	const observers = {};

	const add = (item) => {
		const thing = { _id, data: item };
		stuff = [...stuff, thing];
		observers.add?.forEach((observerFunc) =>
			// pass as arguments - wrapped item, collection as pure data
			observerFunc(thing, { _id, title, collection: [...stuff] })
		);
		console.log(thing);
		return thing;
	};

	const subscribe = (action, observerFunction) => {
		if (!observers.hasOwnProperty(action)) {
			observers[action] = [];
		}
		observers[action].push(observerFunction);
		console.log('holy cow you subscribed');
	};

	return {
		get _id() {
			return _id;
		},
		get title() {
			return title;
		},
		add,
		subscribe,
	};
};

export default Collection;
