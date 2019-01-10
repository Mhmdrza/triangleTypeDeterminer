function triangleTypeDeterminer(side1, side2, side3) {
  //default values
  var response = {
    isTriangle: false,
    description: "These values can't form a triangle"
  }

  //all the inputs should be number 
  if( typeof side1 !== "number" 
      || typeof side2 !== "number" 
        || typeof side3 !== "number"){
    response.description = "Inputs are invalid"
    return response
  }

  if( side1 <= 0 || side2 <= 0 || side3 <= 0){
    response.description = "non-zero positive values are expected"
    return response
  }

  var arrayOfSides = [side1, side2, side3]
  // set will remove duplicate elemnts thus we can determine
  // type of triangle by the number of elements of the set
  var setOfSides = new Set(arrayOfSides)
  switch (setOfSides.size) {
    case 1:
      successResponse("An equilateral triangle")
    break;
    case 2:
      if(canBeATriangle(arrayOfSides))
        successResponse("An isosceles triangle")
      break;
    case 3:
      if(canBeATriangle(arrayOfSides))
        successResponse("A scalene triangle")
      break;  
    default:
      break;
  }

  function successResponse ( typeOftriangle ) {
    response.description = typeOftriangle
    response.isTriangle = true
  }
  return response
}

function canBeATriangle(triangleSidesArray){
  //copying the array to avoid any side effect
  var triangleSidesArrayCopy = triangleSidesArray.slice()
  // there is no need to think about the best way of sorting because
  // there wouldn't be more than 3 elements 

  // ascending sort function for numbers 
  triangleSidesArrayCopy.sort((function(a, b){return a - b}));
  // mathematically if the biggest side of the triangle 
  // be bigger than sum of two other sides, those number
  // won't make a triangle

  // sorting will provide a valuable knowledge of sides 
  var [small, medium, big] = triangleSidesArrayCopy;
  return big < small + medium
}

module.exports = triangleTypeDeterminer