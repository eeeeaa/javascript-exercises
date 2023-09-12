const leapYears = function(year) {
    //Leap year conditions:
    //divisible by 4, not divisible by 100
    //divisible by 400
    //divisible by 400 AND divisible by 100

    if(year % 400 === 0){
        return true;
    }

    if(year % 4 === 0){
        if(year % 100 === 0){
            return false;
        }
        return true;
    }

    return false;
};

// Do not edit below this line
module.exports = leapYears;
