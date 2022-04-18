const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal = { specie: '', sex: '' }) {
  const animals = species.filter((name) => name.name === animal.specie);
  const animalForSex = animals[0].residents;
  const sexOfAnimal = animalForSex.filter((f) => f.sex === animal.sex);
  if (animal.specie !== '' && animal.sex === undefined) {
    return animalForSex.length;
  }
  if (animal.specie !== '' && animal.sex !== '') {
    return sexOfAnimal.length;
  }
}

console.log(countAnimals({ specie: 'elephants', sex: 'male' }));
