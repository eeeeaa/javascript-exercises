/**
 * 
 * @param {string} text 
 */
const palindromes = function (text) {
    let filteredChars = ["!"," ",".",","];
    let originalText = 
    text.split('')
        .filter((char => !filteredChars.includes(char)))
        .join('')
        .toLowerCase();
    let reversedText = 
    text.split('')
        .filter((char => !filteredChars.includes(char)))
        .reverse()
        .join('')
        .toLowerCase();

    return reversedText === originalText;

    /*  Another way

        const processedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
        return processedString.split("").reverse().join("") == processedString;
    */
};

// Do not edit below this line
module.exports = palindromes;
