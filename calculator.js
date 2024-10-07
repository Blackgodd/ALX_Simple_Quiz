// Function to get the values of the two input fields
function getValues() {
    const number1 = parseFloat(document.getElementById("number1").value);
    const number2 = parseFloat(document.getElementById("number2").value);
    return { number1, number2 };
}

// Function to update the result in the DOM
function updateResult(result) {
    document.getElementById("calculation-result").textContent = result;
}

// Arithmetic functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2 === 0) {
        return "Error: Cannot divide by 0";
    }
    return number1 / number2;
}

// Add event listeners for each button

// Addition
document.getElementById("add").addEventListener("click", function() {
    const { number1, number2 } = getValues();
    if (!isNaN(number1) && !isNaN(number2)) {
        updateResult(add(number1, number2));
    } else {
        updateResult("Error: Invalid input");
    }
});

// Subtraction
document.getElementById("subtract").addEventListener("click", function() {
    const { number1, number2 } = getValues();
    if (!isNaN(number1) && !isNaN(number2)) {
        updateResult(subtract(number1, number2));
    } else {
        updateResult("Error: Invalid input");
    }
});

// Multiplication
document.getElementById("multiply").addEventListener("click", function() {
    const { number1, number2 } = getValues();
    if (!isNaN(number1) && !isNaN(number2)) {
        updateResult(multiply(number1, number2));
    } else {
        updateResult("Error: Invalid input");
    }
});

// Division
document.getElementById("divide").addEventListener("click", function() {
    const { number1, number2 } = getValues();
    if (!isNaN(number1) && !isNaN(number2)) {
        updateResult(divide(number1, number2));
    } else {
        updateResult("Error: Invalid input");
    }
});
