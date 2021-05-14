import { returnTen, findMax, totalSum } from './code-challenge-11';

test('it should return the last 10 characters of a string as an array', () => {
  expect(returnTen('hello world')).toStrictEqual(['e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']);
  expect(returnTen('world')).toStrictEqual(['w', 'o', 'r', 'l', 'd']);
});

test('return the largest number', () => {
  expect(findMax([[13, 24, 24, 2], [2, 5, 6], [2, 3]])).toStrictEqual(24);
});

test('return the sum of all numbers', () => {
  expect(totalSum([[13, 24, 24, 2], [2, 5, 6], [2, 3]])).toStrictEqual(81);
  expect(totalSum([])).toStrictEqual(0);
});