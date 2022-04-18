const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal = { specie: '', sex: '' }) {
  const animals = species.find((name) => name.name === animal.specie);
  const animalForSex = animals.residents.filter((obj, curr) => (
    { ...obj, curr: curr.sex }), {});
  const sexOfAnimal = animalForSex.filter((f) => f.sex === animal.sex);
  if (animal.specie !== undefined && animal.sex === undefined) {
    return animalForSex.length;
  } if (animal.specie !== undefined && animal.sex !== undefined) {
    return sexOfAnimal.length;
  }

}

console.log(countAnimals({ specie: 'elephants', sex: 'male' }));
