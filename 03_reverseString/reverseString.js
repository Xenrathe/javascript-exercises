const reverseString = function(inputStr) {
    let outputStr = '';
    for (let i = inputStr.length; i > 0; i--){
        outputStr += inputStr[i-1];
    }

    return outputStr
};

// Do not edit below this line
module.exports = reverseString;
