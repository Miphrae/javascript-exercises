const reverseString = function(inputString) {
    reversedString = ``;
    for (let i = inputString.length - 1; i >= 0; i--) {
        reversedString += inputString.at(i);
    }
    return reversedString;
};


// Do not edit below this line
module.exports = reverseString;
