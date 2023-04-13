const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(numbers) {
  let total = 0;
	for (let i = 0; i < numbers.length; i++){
    total += numbers[i];
  }

  return total;
};

const multiply = function(numbers) {
  let total = 1;
	for (let i = 0; i < numbers.length; i++){
    total *= numbers[i];
  }

  return total;
};

const power = function(base, power) {
	return Math.pow(base, power);
};

const factorial = function(num) {
	let total = 1;
  for (;num > 0; num--){
    total *= num;
  }

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
