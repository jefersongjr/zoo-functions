const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employeeAnimal = employees.find((employee) => employee.id === id).responsibleFor;
  const findAnimal = species.find((animal) => employeeAnimal.includes(animal.id));
  const listAnimals = findAnimal.residents.sort((age1, age2) => age2.age - age1.age);
  const { name, sex, age } = listAnimals[0];
  return [name, sex, age];
}

console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = getOldestFromFirstSpecies;
