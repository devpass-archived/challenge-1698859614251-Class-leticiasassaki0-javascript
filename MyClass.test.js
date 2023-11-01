const MyClass = require('./MyClass');

test('Get value from MyClass instance', () => {

  const myObj = new MyClass();

  expect(myObj.getValue()).toBe('Hello World');

});