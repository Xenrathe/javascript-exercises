const palindromes = function (testStr) {
    testStr = testStr.toLowerCase();
    testStr = testStr.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    testStr = testStr.replace(/\s/g, '');

    for (let i = 0; i < testStr.length; i++){
        if (testStr.charAt(i) !== testStr.charAt(testStr.length - i - 1))
            return false;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
