const data = require('../data/zoo_data');
const { employees, species } = require('../data/zoo_data');

const byName = (employee) => {
  const person = employees.find((names) => names.firstName === employee.name
  || names.lastName === employee.name);
  const animals = species.filter((specie) => person.responsibleFor.includes(specie.id));
  const location = animals.reduce((acc, curr) => ([...acc, curr.location]), []);
  const animalName = animals.reduce((acc, curr) => ([...acc, curr.name]), []);
  return {
    id: person.id,
    fullName: `${person.firstName} ${person.lastName}`,
    species: animalName,
    locations: location,
  };
};

const byId = (employee) => {
  const idPerson = employees.find((personId) => personId.id === employee.id);
  const animals = species.filter((specie) => idPerson.responsibleFor.includes(specie.id));
  const location = animals.reduce((acc, curr) => ([...acc, curr.location]), []);
  const animalName = animals.reduce((acc, curr) => ([...acc, curr.name]), []);
  return {
    id: idPerson.id,
    fullName: `${idPerson.firstName} ${idPerson.lastName}`,
    species: animalName,
    locations: location,
  };
};

function getEmployeesCoverage(employee = {}) {
  if (Object.keys(employee).length === 0) {
    const allPersons = employees.filter((allPerson) => allPerson);
    return allPersons;
  }
  if (employee.id !== undefined) {
    return byId(employee);
  }
  return byName(employee);
}

console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
