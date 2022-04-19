const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const allAnimals = species.map((specie) => ({
      name: specie.name,
      specieQuant: specie.residents.length,
    }));
    const objectAnimals = allAnimals.reduce((obj, curr) => (
      { ...obj, [curr.name]: curr.specieQuant }), {});
    return objectAnimals;
  }
  const animals = species.filter((name) => name.name === animal.specie);
  const animalForSex = animals[0].residents;
  const sexOfAnimal = animalForSex.filter((f) => f.sex === animal.sex);
  if (animal.specie !== undefined && animal.sex === undefined) {
    return animalForSex.length;
  }
  return sexOfAnimal.length;
}

console.log(countAnimals());

module.exports = countAnimals;
