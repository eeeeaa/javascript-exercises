const sumAll = function(numOne, numTwo) {
    let sum = 0;
    if(numOne < 0 || numTwo < 0 || !Number.isInteger(numOne) || !Number.isInteger(numTwo)){
        return "ERROR";
    }
    if(numOne > numTwo){
        for(i = numTwo; i <= numOne; i++){
            sum += i;
        }
    } else {
        for(i = numOne; i <= numTwo; i++){
            sum += i;
        }
    }
    return sum;
    
// An alternative way to swap the values of min and max like above is to use the array destructuring syntax.
// Here's an optional article on it: https://www.freecodecamp.org/news/array-destructuring-in-es6-30e398f21d10/
// if (min > max) [min, max] = [max, min];

};

// Do not edit below this line
module.exports = sumAll;
