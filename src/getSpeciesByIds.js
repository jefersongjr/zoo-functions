const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  const speciesId = species.filter((specie) => ids.includes(specie.id));
  return speciesId;
};

module.exports = getSpeciesByIds;
