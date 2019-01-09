function triangleTypeDeterminer(side1, side2, side3) {
  //all the inputs should be number 
  if( typeof side1 !== "number" 
      || typeof side2 !== "number" 
        || typeof side3 !== "number"){
    return "Inputs are invalid"
  }
  if( side1 <= 0 || side2 <= 0 || side3 <= 0){
    return "non-zero positive values are expected"
  }
  // set will remove duplicate elemnts thus we can determine
  // type of triangle by the number of elements of the set
  var arrayOfSides = [side1, side2, side3]
  var setOfSides = new Set(arrayOfSides)
  var typeOfTriangle = "These values can't form a triangle";
  switch (setOfSides.size) {
    case 1:
      typeOfTriangle = "An equilateral triangle"
    break;
    case 2:
      if(canBeATriangle(arrayOfSides))
        typeOfTriangle = "An isosceles triangle"
      break;
    case 3:
      if(canBeATriangle(arrayOfSides))
        typeOfTriangle = "A scalene triangle" 
      break;  
    default:
      // this will never happen
      typeOfTriangle = "JS Engine is Broken :("
      break;
  }
  return typeOfTriangle
}

function canBeATriangle(triangleSidesArray){
  var canBe;
  //copying the array to avoid any side effect
  var triangleSidesArrayCopy = triangleSidesArray.slice()
  // there is no need to think about the best way of sorting because
  // there wouldn't be more than 3 elements 
  triangleSidesArrayCopy.sort();
  // mathematically if the biggest side of the triangle 
  // be bigger than sum of two other sides, those number
  // won't make a triangle

  // sorting will provide the knowledge of sides 
  var [small, medium, big] = triangleSidesArrayCopy;
  if( small === medium || medium === big){
    if(small === medium){
      canBe = big < 2 * medium
    }else{
      canBe = small < 2 * medium
    }
  }else{
    canBe = big < small + medium
  }
  return canBe
}

module.exports = triangleTypeDeterminer