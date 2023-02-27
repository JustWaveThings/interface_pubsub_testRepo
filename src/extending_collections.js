/* eslint-disable no-prototype-builtins */
/* eslint-disable no-underscore-dangle */
import { v4 as uuidv4 } from 'uuid';

const Collection = (title = 'Default Collection', _id = uuidv4()) => {
	let stuff = [];
	const observers = {};

	const add = (item) => {
		const thing = Object.freeze({ _id, data: item });
		stuff = [...stuff, thing];
		observers.add?.forEach((observerFunc) =>
			// pass as arguments - wrapped item, collection as pure data
			observerFunc(thing, { _id, title, collection: [...stuff] })
		);
		return thing;
	};
	const remove = (id) => {
		stuff = stuff.filter((thing) => thing._id !== id);
	};

	const findById = (id) => stuff.find((thing) => thing._id === id);
	const find = (func) => stuff.filter(({ data }) => func(data));
	const findAll = () => [...stuff];
	const update = (id, updateFunc) => {
		stuff = stuff.map((thing) =>
			thing._id === id
				? Object.freeze({ _id, data: updateFunc(thing.data) })
				: thing
		);
		return findById(id);
	};

	const subscribe = (action, observerFunction) => {
		if (!observers.hasOwnProperty(action)) {
			observers[action] = [];
		}
		observers[action].push(observerFunction);
	};

	const unsubscribe = (action, observerFunction) => {
		observers[action] = observers[action].filter(
			(func) => func !== observerFunction
		);
	};

	return {
		get _id() {
			return _id;
		},
		get title() {
			return title;
		},
		add,
		remove,
		find,
		findAll,
		update,
		subscribe,
		unsubscribe,
	};
};

export default Collection;
