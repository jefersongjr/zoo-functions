const data = require('../data/zoo_data');
const { employees, species } = require('../data/zoo_data');

function getEmployeesCoverage(employee) {
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
}

console.log(getEmployeesCoverage({ name: 'Sharonda' }));

module.exports = getEmployeesCoverage;
