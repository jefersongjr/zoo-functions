const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal = { specie: '', sex: '' }) {
  /*todos os animais*/
  const allAnimals = species.map((specie) => ({
    name: specie.name,
    specieQuant: specie.residents.length,
  }));
  const objectAnimals = allAnimals.reduce((obj, curr) => (
    { ...obj, [curr.name]: curr.specieQuant }), {});
    /*animais com filtro de especie*/
  const speciesFilter = species.filter((specie) => specie.name === animal.specie);
  const animalAllSex = speciesFilter.map((specie) => ({
    name: specie.name,
    specieQuant: specie.residents.length,
  }));
  const specieSexFilter = speciesFilter.filter((specie) => specie.residents.sex === animal.sex);
 
  return animalAllSex[0];
}

console.log(countAnimals({ specie: 'penguins' }));
module.exports = countAnimals;
