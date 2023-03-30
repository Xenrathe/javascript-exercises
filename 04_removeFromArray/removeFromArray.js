const removeFromArray = function(inputArray, ...args) {
    let outputArray = inputArray.filter((item) => !args.includes(item));
    return outputArray
};

// Do not edit below this line
module.exports = removeFromArray;
