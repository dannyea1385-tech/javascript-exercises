const palindromes = function (string) {
    // 1. Pasamos todo a minúsculas y filtramos solo letras y números
    const processedString = string
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");

    // 2. Invertimos la cadena procesada
    const reversedString = processedString
        .split("")
        .reverse()
        .join("");

    // 3. Comparamos si son iguales
    return processedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;