var typeDeterminerTest = require('./type-determiner')

describe('type determiner functionality', () => {
  test('is defined', () => {
    expect(typeDeterminerTest).toBeDefined()
  })
  test('will return "invalid Input" if inputs be are less than three', () => {
    let result = typeDeterminerTest(2,3);
    expect(result.isTriangle).toBeFalsy()
    expect(result.description).toBe("Inputs are invalid")
  })
  test('will return "invalid Input" when inputs are not numbers', () => {
    let result = typeDeterminerTest('2',3,4)
    expect(result.isTriangle).toBeFalsy()
    expect(result.description).toBe("Inputs are invalid")
  })
  test('won\'t accept 0 as an input', () => {
    let result = typeDeterminerTest(0,3,4)
    expect(result.isTriangle).toBeFalsy()
    expect(result.description).toBe("non-zero positive values are expected")
  })
  test('won\'t accept negative inputs', () => {
    let result = typeDeterminerTest(-1,3,4)
    expect(result.isTriangle).toBeFalsy()
    expect(result.description).toBe("non-zero positive values are expected")
  })
  test('defines 3,3,3 as equilateral', () => {
    let result = typeDeterminerTest(3,3,3)
    expect(result.isTriangle).toBeTruthy()
    expect(result.description).toBe("An equilateral triangle")
  })
  test('defines 5,3,4 as scalene', () => {
    let result = typeDeterminerTest(5,3,4)
    expect(result.isTriangle).toBeTruthy()
    expect(result.description).toBe("A scalene triangle")
  })
  test('defines 3,3,4 as isosceles', () => {
    let result = typeDeterminerTest(3,3,4)
    expect(result.isTriangle).toBeTruthy()
    expect(result.description).toBe("An isosceles triangle")
  })
  test('defines 4,3,4 as isosceles', () => {
    let result = typeDeterminerTest(4,3,4)
    expect(result.isTriangle).toBeTruthy()
    expect(result.description).toBe("An isosceles triangle")
  })
  test('defines 2,2,4 as impossible', () => {
    let result = typeDeterminerTest(2,2,4)
    expect(result.isTriangle).toBeFalsy()
    expect(result.description).toBe("These values can't form a triangle")
  })
  test('defines 1,70,11 as impossible', () => {
    let result = typeDeterminerTest(1,70,11)
    expect(result.isTriangle).toBeFalsy()
    expect(result.description).toBe("These values can't form a triangle")
  })
})
