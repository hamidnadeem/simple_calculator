// Function to add numbersto the display
function addToDisplay(char) {
    var display = document.getElementById('display');
    display.value += char;
}

// Function to clear the display
function clearDisplay() {
    var display = document.getElementById('display');
    display.value = '';
}

// Function to evaluate the expresion
function calculate() {
    var display = document.getElementById('display');
    var expression = display.value;

    try {
        var result = eval(expression); // Using eval to evaluate the expression
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}
