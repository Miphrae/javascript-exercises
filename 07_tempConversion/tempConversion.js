const convertToCelsius = function() {
    let tempFahrenheit = arguments[0];
    let tempCelsius = ((tempFahrenheit-32)/1.8);
    tempCelsius = parseFloat(tempCelsius.toFixed(1));
    return tempCelsius;
};

const convertToFahrenheit = function() {
    let tempCelsius = arguments[0];
    let tempFahrenheit = ((tempCelsius*1.8)+32);
    tempFahrenheit = parseFloat(tempFahrenheit.toFixed(1));
    return tempFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
