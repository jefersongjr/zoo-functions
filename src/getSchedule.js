const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const onlyName = (animal) => {
  const animals = species.find((name) => name.name === animal);
  const availabilityDay = animals.availability;
  return availabilityDay;
};

const createObj = (day, hour, exib) => ({
  [day]: {
    officeHour: hour,
    exhibition: exib,
  },
});

const dayExibition = (dayWeek) => {
  const days = Object.entries(hours);
  const y = days.filter((day) => day.includes(dayWeek));
  const { open, close } = y[0][1];
  const animalAvalaibity = species.filter((animal) => animal.availability.includes(dayWeek));
  const arrayAnimal = animalAvalaibity.map((animal1) => animal1.name);
  if (dayWeek === 'Monday') {
    return createObj(y[0][0], 'CLOSED', 'The zoo will be closed!');
  }
  return createObj(y[0][0], `Open from ${open}am until ${close}pm`, arrayAnimal);
};

const allDays = Object.keys(hours);

function getSchedule(scheduleTarget) {
  const filterAnimals = species.some((specie) => specie.name === scheduleTarget);
  const dayList = Object.keys(hours);
  const validateDays = dayList.some((day2) => day2 === scheduleTarget);
  if (filterAnimals) {
    return onlyName(scheduleTarget);
  }
  if (validateDays) {
    return dayExibition(scheduleTarget);
  }
  const allDaysFunc = allDays.map((x) => dayExibition(x));
  const [tuesday, wednesday, thursday, friday, saturday, sunday, monday] = allDaysFunc;
  const objDays1 = {
    ...tuesday, ...wednesday, ...thursday, ...friday, ...saturday, ...sunday, ...monday };
  return objDays1;
}

module.exports = getSchedule;
