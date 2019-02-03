import findBy from "./findBy.js";

test("array the search and result function findBy",() => {
	const finder = findBy('name', 'урон');
	const results = [
		{name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями'},
		{name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием'},
		{name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса'},
	].filter(finder);

	let arrResults = [{
		name: 'урон',
		type: 'help',
		description: 'Страница описания элемента интерфейса'
	}];

	expect(results).toEqual(arrResults);
});
