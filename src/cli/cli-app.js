var inquirer = require('inquirer')
var triangleTypeDeterminer = require('../utils/type-determiner')
var validate = function(value) {
  var valid = !isNaN(parseFloat(value));
  return valid || 'Please enter a number';
}

console.log('\nTriangle Type Determiner application\n');

let questions = [
  {
    type: 'input',
    name: 'side1',
    message: 'Enter the value of first Side of triangle',
    validate: validate,
    filter: Number
  },
  {
    type: 'input',
    name: 'side2',
    message: 'Enter the value of second Side of triangle',
    validate: validate,
    filter: Number
  },
  {
    type: 'input',
    name: 'side3',
    message: 'Enter the value of third Side of triangle',
    validate: validate,
    filter: Number
  }
];

inquirer.prompt(questions).then(answers => {
  var response = triangleTypeDeterminer(...Object.values(answers))
  console.log('\n',response.description,'\n');
});