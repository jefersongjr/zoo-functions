const data = require('../data/zoo_data');
const { prices } = require('../data/zoo_data');

const entrant2s = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Núbia Souza', age: 50 },
];

function countEntrants(entrants = {}) {
  if (Object.keys(entrants).length === 0) {
    return 0;
  }
  const objEntrants = entrants.filter((a) => a.age);
  const child = objEntrants.filter((ages) => ages.age < 18);
  const adult = objEntrants.filter((ages) => ages.age >= 18 && ages.age < 50);
  const senior = objEntrants.filter((ages) => ages.age >= 50);
  const objectAges = { child, adult, senior };
  const allAges = Object.keys(objectAges);
  const ageValues = Object.values(objectAges);
  return ({
    [allAges[0]]: ageValues[0].length,
    [allAges[1]]: ageValues[1].length,
    [allAges[2]]: ageValues[2].length,
  });
}

function calculateEntry(entrants) {
  if (countEntrants(entrants) === 0) {
    return 0;
  }
  const entrantsObject = countEntrants(entrants);
  const childrens = entrantsObject.child * prices.child;
  const adults = entrantsObject.adult * prices.adult;
  const senior = entrantsObject.senior * prices.senior;
  const total = childrens + adults + senior;
  return total;
}

console.log(calculateEntry(entrant2s));
module.exports = { calculateEntry, countEntrants };
