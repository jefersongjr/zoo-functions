const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const someManager = employees.some((manager1) => manager1.managers.includes(id));
  return someManager;
}
function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const managerRelated = employees.filter((person) => person.managers.includes(managerId));
  const arrayEmployees = managerRelated.map((employeesNames) =>
    `${employeesNames.firstName} ${employeesNames.lastName}`);
  return arrayEmployees;
}

console.log(getRelatedEmployees('fdb2543b-5662-46a7-badc-93d960fdc0a8'));

module.exports = { isManager, getRelatedEmployees };
