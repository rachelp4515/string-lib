const str = require('../src/index');

test('capitalize', () => {
  const result = str.capitalize('hello world');
  expect(result).toBe('Hello world');
});

test('allCaps', () => {
  const result = str.allCaps('hello world');
  expect(result).toBe('HELLO WORLD');
});

test('capitalizeWords', () => {
  const result = str.capitalizeWords('do all the things');
  expect(result).toBe('Do All The Things');
});

test('removeExtraSpaces', () => {
  const result = str.removeExtraSpaces('   Hello    world!   ');
  expect(result).toBe('Hello world!');
});

test('kebabCase', () => {
  const result = str.kebabCase(' Hello world ', '-');
  expect(result).toBe('hello-world');
});

test('snakeCasee', () => {
  const result = str.snakeCase(' what the heck ');
  expect(result).toBe('what_the_heck');
});

test('camelCase', () => {
  const result = str.camelCase('   Hello world   ');
  expect(result).toBe('helloWorld');
});

test('shift', () => {
  const result = str.shift('Hello World', 1);
  expect(result).toBe('ello WorldH');
});

test('makeHashTag', () => {
  const result = str.makeHashTag('Amazing bongo drums for sale');
  expect(result).toEqual(['#amazing', '#bongo', '#drums', '#for', '#sale']);
});

test('isEmpty', () => {
  const result = str.isEmpty('    ');
  expect(result).toEqual(true);
});