const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const animalNE = species.filter((animal) => animal.location === 'NE');
const filterNE = animalNE.map((specie) => specie.name);
const animalNW = species.filter((animal) => animal.location === 'NW');
const filterNW = animalNW.map((specie) => specie.name);
const animalSE = species.filter((animal) => animal.location === 'SE');
const filterSE = animalSE.map((specie) => specie.name);
const animalSW = species.filter((animal) => animal.location === 'SW');
const filterSW = animalSW.map((specie) => specie.name);

const undefinedRequest = (options) => ({
  NE: filterNE,
  NW: filterNW,
  SE: filterSE,
  SW: filterSW,
});

function getAnimalMap(options) {
  return undefinedRequest(options);
}
console.log(getAnimalMap());
module.exports = getAnimalMap;
