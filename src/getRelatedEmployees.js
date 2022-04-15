const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const managersList = employees.filter((manager) => manager.id === id);
  const someManager = managersList.some((manager1) => manager1.managers.length > 0);
  return someManager;
}
function getRelatedEmployees(managerId) {
}

module.exports = { isManager, getRelatedEmployees };
