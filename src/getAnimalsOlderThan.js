const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animals = species.filter((name) => name.name === animal);
  const animalAge = animals.every((specie) => specie.residents[0].age > age);
  return animalAge;
}

console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;
