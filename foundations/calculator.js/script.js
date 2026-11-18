// 1. Funciones matemáticas básicas
const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const multiply = function(a, b) {
    return a * b;
};

const divide = function(a, b) {
    if (b === 0) {
        return "¡Error: ¿Intentas dividir por cero?! 🤖💥";
    }
    return a / b;
};

// 2. Variables para almacenar el estado de la calculadora
let firstNumber = "";
let operator = "";
let secondNumber = "";

// 3. Función operate que junta todo
const operate = function(op, num1, num2) {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    switch (op) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            return null;
    }
};

// --- LÓGICA DE LA INTERFAZ Y EVENTOS ---

const display = document.getElementById("display");
let currentInput = "0";

// Actualizar la pantalla
const updateDisplay = function() {
    display.textContent = currentInput;
};

// Manejar clics en los números
const numberButtons = document.querySelectorAll(".btn.number");
numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");
        if (currentInput === "0" || currentInput === "¡Error: ¿Intentas dividir por cero?! 🤖💥") {
            currentInput = value;
        } else {
            currentInput += value;
        }
        updateDisplay();
    });
});

// Manejar operadores (+, -, *, /)
const operatorButtons = document.querySelectorAll(".btn.operator");
operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        const action = button.getAttribute("data-action");
        
        if (firstNumber && operator && currentInput) {
            // Si ya hay una operación en curso, la calcula antes de seguir
            firstNumber = operate(operator, firstNumber, currentInput);
            currentInput = String(firstNumber);
            updateDisplay();
        } else {
            firstNumber = currentInput;
        }

        switch (action) {
            case "add": operator = "+"; break;
            case "subtract": operator = "-"; break;
            case "multiply": operator = "*"; break;
            case "divide": operator = "/"; break;
        }
        
        currentInput = "";
    });
});

// Botón de igual (=)
const equalsButton = document.getElementById("equals");
equalsButton.addEventListener("click", () => {
    if (!firstNumber || !operator) return;
    
    currentInput = String(operate(operator, firstNumber, currentInput));
    updateDisplay();
    
    // Reiniciamos para una nueva operación
    firstNumber = "";
    operator = "";
});

// Botón de limpiar (AC)
const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", () => {
    currentInput = "0";
    firstNumber = "";
    operator = "";
    updateDisplay();
});

// Botón de borrar (⌫)
const deleteButton = document.getElementById("delete");
deleteButton.addEventListener("click", () => {
    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
    } else {
        currentInput = "0";
    }
    updateDisplay();
});