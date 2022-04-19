const data = require('../data/zoo_data');

const entrant2s = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

function countEntrants(entrants) {
  const childs = entrants.filter((ages) => ages.age < 18);
  const adults = entrants.filter((ages) => ages.age >= 18 && ages.age < 50);
  const seniors = entrants.filter((ages) => ages.age >= 50);
  const objectAges = { childs, adults, seniors };
  const allAges = Object.keys(objectAges);
  const ageValues = Object.values(objectAges);
  return ({
    [allAges[0]]: ageValues[0].length,
    [allAges[2]]: ageValues[1].length,
    [allAges[1]]: ageValues[2].length,
  });
}

function calculateEntry(entrants) {
  // seu código aqui
}

console.log(countEntrants(entrant2s));
module.exports = { calculateEntry, countEntrants };
