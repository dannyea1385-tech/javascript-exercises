const fibonacci = function(count) {
    // 1. Convertimos a número por si viene como string
    let n = Number(count);

    // 2. Si es menor que 0, retorna "OOPS"
    if (n < 0) return "OOPS";
    
    // 3. Casos base para 0 y 1
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;

    // 4. Ciclo para calcular la secuencia de Fibonacci
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let temp = b;
        b = a + b;
        a = temp;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
