// main.test.js

import { calculateArea, mergeObjects, multiply, isEmpty, calculateCircleArea } from './main.js';

test('calculating the area of a rectangle with width 5 and height 4 results in 20', () => {
  expect(calculateArea(5, 4)).toBe(20);
});

test('merging two objects', () => {
  const obj1 = { one: 1 };
  const obj2 = { two: 2 };
  const merged = mergeObjects(obj1, obj2);
  expect(merged).toEqual({ one: 1, two: 2 });
});

test('the product of positive numbers is not negative', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(multiply(a, b)).not.toBeLessThan(0);
    }
  }
});

test('testing an empty string', () => {
  const str = '';
  expect(str).toBe('');
  expect(isEmpty(str)).toBe(true);
  expect(str).toBeDefined();
  expect(str).not.toBeUndefined();
  expect(str).not.toBeTruthy();
  expect(str).toBeFalsy();
});

test('testing an empty array', () => {
  const arr = [];
  expect(arr).toEqual([]);
  expect(isEmpty(arr)).toBe(true);
  expect(arr).toBeDefined();
  expect(arr).not.toBeUndefined();
  expect(arr).not.toBeTruthy();
  expect(arr).toBeFalsy();
});

test('calculating the area of a circle with radius 2', () => {
  const radius = 2;
  const area = calculateCircleArea(radius);

  expect(area).toBeGreaterThan(10);
  expect(area).toBeGreaterThanOrEqual(12);
  expect(area).toBeLessThan(13);
  expect(area).toBeLessThanOrEqual(12.57);

  expect(area).toBeCloseTo(12.566370614359172);
  expect(area).toEqual(expect.any(Number));
});
