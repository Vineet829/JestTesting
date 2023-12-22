import capitalize from "./capitalize";('./index.js');


test('capitalize', () => {
  expect(capitalize('test')).toBe('Test');
});

test('capitalize', () => {
  expect(capitalize('Test')).toBe('Test');
});

test('capitalize', () => {
  expect(capitalize('TEST')).toBe('TEST');
});

test('"three word test" should become "Three word test"', () => {
  expect(capitalize('three word test')).toBe('Three word test');
});

test('"12@#abcd@#34" should become "12@#Abcd@#34"', () => {
  expect(capitalize('12@#abcd@#34')).toBe('12@#Abcd@#34');
});

test('"12@#Abcd@#34" should become "12@#Abcd@#34"', () => {
  expect(capitalize('12@#Abcd@#34')).toBe('12@#Abcd@#34');
});

test('"1234" should become "no valid characters"', () => {
  expect(capitalize('1234')).toBe('no valid characters');
});


test('"@#$" should become "no valid characters"', () => {
  expect(capitalize('@#$')).toBe('no valid characters');
});

