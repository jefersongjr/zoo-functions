const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  if (ids.length === 1) {
    return species.filter((animal) => animal.id === ids[0]);
  }
}

module.exports = getSpeciesByIds;
