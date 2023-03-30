const convertToCelsius = function(inputFahrenheit) {
  let unroundedVal = (inputFahrenheit - 32) * 5 / 9;
  return Math.round(unroundedVal * 10) / 10
};

const convertToFahrenheit = function(inputCelsius) {
  let unroundedVal = inputCelsius * 9 / 5 + 32;
  return Math.round(unroundedVal * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
