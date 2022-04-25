const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const person = employees.find((names) => names.firstName === employeeName
   || names.lastName === employeeName);
  return person;
}

console.log(getEmployeeByName('Emery'));
module.exports = getEmployeeByName;
