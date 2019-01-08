function triangleTypeDeterminer(side1, side2, side3) {
    //all the inputs should be number 
    if( isNaN(side1) || isNaN(side2) || isNaN(side3) ){
      return "Inputs are invalid"
    }
    // set will remove duplicate elemnts thus we can determine
    // type of triangle by the number of elements of the set
    const set = new Set([side1,side2,side3]);
    let typeOfTriangle;
    switch (set.size) {
      case 1:
        typeOfTriangle = "equilateral"
        break;
      case 2:
        typeOfTriangle = canBeATriangle(set) ? "isosceles" : "These values can't form a triangle"
        break;
      case 3:
        typeOfTriangle = canBeATriangle(set) ? "scalene" : "These values can't form a triangle"
        break;  
      default:
        // this will never happen
        typeOfTriangle = "JS Engine is Broken :("
        break;
    }
    return typeOfTriangle
  }


function canBeATriangle( triangleSidesSet ){
  let canBe;
  const arrayOfSides = [...triangleSidesSet]
  // there is no need to think about the best way of sorting because
  // there wouldn't be more than 3 elements 
  arrayOfSides.sort()
  // sorting will provide the knowledge of sides 

  //mathematically if the biggest side be bigger than sum of
  // two other sides, those number won't make a triangle
  switch (arrayOfSides.length) {
    case 2:
      const [smallerSides, biggerSide] = arrayOfSides
      canBe = biggerSide < (2 * smallerSides)
      break;
    case 3:
      const [smallestSide, middleSide, biggestSide] = arrayOfSides
      canBe = biggestSide < (smallestSide + middleSide)
      break;
  
    default:
      break;
  }
  return canBe
}

export default triangleTypeDeterminer