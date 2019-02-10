import findBy from './findBy.js';

describe('TEST: find by', () =>{

	test('search to key name and value damage',() => {
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

	test('search to key type and attack',() => {
		const finder = findBy('type', 'attack');
		const results = [
			{name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями'},
			{name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием'},
			{name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса'},
		].filter(finder);

		let arrResults = [{
			name: 'заклинание',
			type: 'attack',
			description: 'Атака магическим заклинанием'
		}];

		expect(results).toEqual(arrResults);
	});


	test('forgot about everything and gave nothing', () => {
		const finder = findBy('', '');
		const results = [
			{name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями'},
			{name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием'},
			{name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса'},
		].filter(finder);

		expect(results).toEqual([]);
	});

});
