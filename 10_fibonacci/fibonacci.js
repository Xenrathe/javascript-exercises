const fibonacci = function(indexNum) {
    indexNum = Number(indexNum);
    if (indexNum < 0)
        return "OOPS";

    fibSeq = [1, 1];

    for (let i = 2; i < indexNum; i++){
        fibSeq.push(fibSeq[i-1] + fibSeq[i-2]);
    }
    
    return fibSeq[indexNum-1];  
};

// Do not edit below this line
module.exports = fibonacci;
