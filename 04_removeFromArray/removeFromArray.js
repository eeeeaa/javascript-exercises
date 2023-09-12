const removeFromArray = function(array, ...args) {
    for(i = 1;i < arguments.length; i++){
        let index = array.indexOf(arguments[i]);
        if(index >= 0){
           array.splice(index, 1); 
        }
        
    }
    return array;
    //Another Solution
    // var removeFromArray = function(array, ...args) {
    //   return array.filter(val => !args.includes(val))
    // }
};

// Do not edit below this line
module.exports = removeFromArray;
