const leapYears = function(yearInput) {
    if (yearInput%4 === 0 && (yearInput%100 !== 0 || yearInput%400 === 0))
        return true

    return false
};

// Do not edit below this line
module.exports = leapYears;
