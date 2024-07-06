let displayElement = document.getElementById('display');

function clearDisplay() {
    displayElement.textContent = '0';
}

function appendToDisplay(value) {
    if (displayElement.textContent === '0' && value !== '.') {
        displayElement.textContent = value;
    } else {
        displayElement.textContent += value;
    }
}

function calculate() {
    try {
        displayElement.textContent = eval(displayElement.textContent);
    } catch (error) {
        displayElement.textContent = 'Error';
    }
}
