const removeFromArray = function() {
    const inputArray = arguments[0];
    const removeElements = [];
    for (let i = 1; i < arguments.length; i++) {
        removeElements.push(arguments[i]);
    }
    for (let i = 0; i < removeElements.length; i++) {
        for (let j = inputArray.length - 1; j >= 0; j--) {
            if (inputArray[j] === removeElements[i]) {
                inputArray.splice(j,1);
            }
        }
    }
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
