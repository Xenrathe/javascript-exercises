const sumAll = function(numOne, numTwo) {
    if (numOne < 0 || numTwo < 0)
        return 'ERROR'
    else if (typeof numOne != 'number' || typeof numTwo != 'number')
        return 'ERROR'
    else{
        let smallNum = numOne;
        let largeNum = numTwo;
        if (numOne > numTwo){
            smallNum = numTwo;
            largeNum = numOne;
        }

        let sum = 0;
        for (;smallNum <= largeNum; smallNum++){
            sum += smallNum;
        }

        return sum
    }
};

// Do not edit below this line
module.exports = sumAll;
