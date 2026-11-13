const repeatString = function(word, times) {
    if (times < 0) return "ERROR";
    
    let stringецца = ""; // O una variable simple como 'string'
    let stringResultante = "";
    
    for (let i = 0; i < times; i++) {
        stringResultante += word;
    }
    
    return stringResultante;
};

// Do not edit below this line
module.exports = repeatString;
