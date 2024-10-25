const sumAll = function() {
    if (!Number.isInteger(arguments[0]) || !Number.isInteger(arguments[1]) || arguments[1] < 0 || arguments[0] < 0) {
        return `ERROR`;
    }
 
    let smallNumber = Math.min(...arguments);
    let bigNumber = Math.max(...arguments);
    let sum = 0;

    for (let i = smallNumber; i <= bigNumber; i++) {
        sum += i;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
