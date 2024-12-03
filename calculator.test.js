// Import der zu testenden Funktionen
const { add, subtract, divide } = require('./calculator');

// Tests für die Funktion add
describe('add', () => {
  test('should return the sum of two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('should return the sum of a positive and a negative number', () => {
    expect(add(10, -5)).toBe(5);
  });
});

// Tests für die Funktion subtract
describe('subtract', () => {
  test('should return the result of subtracting two numbers', () => {
    expect(subtract(10, 5)).toBe(5);
  });

  test('should return a negative result if the second number is larger', () => {
    expect(subtract(3, 5)).toBe(-2);
  });
});

// Tests für die Funktion divide
describe('divide', () => {
  test('should return the result of dividing two numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('should return the result of dividing with negative numbers', () => {
    expect(divide(-10, 2)).toBe(-5);
  });
});