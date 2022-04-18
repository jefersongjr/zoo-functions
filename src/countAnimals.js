const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const createObject = (filter) => filter.map((specie) => ({
  name: specie.name,
  specieQuant: specie.residents.length,
}));

function countAnimals(animal = { specie: '', sex: '' }) {
  if (animal.specie !== '' && animal.sex !== '') {
    const specieSexFilter = species.filter((specie) => specie.residents[0].sex === animal.sex
    && specie.name === animal.specie);
    const animalSex = createObject(specieSexFilter);
    return animalSex[0];
  }
  if (animal.specie !== undefined) {
    const speciesFilter = species.filter((specie) => specie.name === animal.specie);
    const animalAllSex = createObject(speciesFilter);
    return animalAllSex[0].specieQuant;
  }
  const allAnimals = species.map((specie) => ({
    name: specie.name,
    specieQuant: specie.residents.length,
  }));
  const objectAnimals = allAnimals.reduce((obj, curr) => (
    { ...obj, [curr.name]: curr.specieQuant }), {});
  return objectAnimals;
}

console.log(countAnimals({ specie: 'elephants', sex: 'male' }));
module.exports = countAnimals;
