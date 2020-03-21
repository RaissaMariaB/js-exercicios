const { fibonacci, isFibonnaci } = require('../src');

const expectedArray = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377];

describe('fibonacci', () => {
	it('Deve retornar um array, como uma instância de um objeto', () => {
		const result = fibonacci();

		expect(result).toBeInstanceOf(Object);
		expect(result).toEqual(expectedArray);
	});
});

describe('isFibonacci', () => {
	it('Deve retornar verdadeiro quando um número fornecido pertence a sequência de fibonacci', () => {
		const result = isFibonnaci(5);
		expect(result).toBeTruthy();
	});

	it('Deve retornar false quando um número fornecido não pertence a sequência de fibonacci', () => {
		const result = isFibonnaci(4);
		expect(result).toBeFalsy();
	});
});
