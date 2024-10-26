const leapYears = function() {
    let year = arguments[0];
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            return ((year % 400 == 0) ? true : false );
        }
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
