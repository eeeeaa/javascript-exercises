const reverseString = function(text) {
    let reversed = "";
    for(i = text.length - 1; i >= 0; i--){
        reversed += text.charAt(i);
    }
    return reversed;
    //or string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
