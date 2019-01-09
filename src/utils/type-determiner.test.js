var typeDeterminerTest = require('./type-determiner')

describe('type determiner functionality', () => {
  test('is defined', () => {
    expect(typeDeterminerTest).toBeDefined()
  })
  test('will return "invalid Input" if inputs be are less than three', () => {
    expect(typeDeterminerTest(2,3)).toBe("Inputs are invalid")
  })
  test('will return "invalid Input" when inputs are not numbers', () => {
    expect(typeDeterminerTest('2',3,4)).toBe("Inputs are invalid")
  })
  test('won\'t accept 0 as an input', () => {
    expect(typeDeterminerTest(0,3,4)).toBe("non-zero positive values are expected")
  })
  test('won\'t accept negative inputs', () => {
    expect(typeDeterminerTest(-1,3,4)).toBe("non-zero positive values are expected")
  })
  test('defines 3,3,3 as equilateral', () => {
    expect(typeDeterminerTest(3,3,3)).toBe("An equilateral triangle")
  })
  test('defines 5,3,4 as scalene', () => {
    expect(typeDeterminerTest(5,3,4)).toBe("A scalene triangle")
  })
  test('defines 3,3,4 as isosceles', () => {
    expect(typeDeterminerTest(3,3,4)).toBe("An isosceles triangle")
  })
  test('defines 4,3,4 as isosceles', () => {
    expect(typeDeterminerTest(4,3,4)).toBe("An isosceles triangle")
  })
  test('defines 2,2,4 as impossible', () => {
    expect(typeDeterminerTest(2,2,4)).toBe("These values can't form a triangle")
  })
  test('defines 1,70,4 as impossible', () => {
    expect(typeDeterminerTest(2,2,4)).toBe("These values can't form a triangle")
  })
})
