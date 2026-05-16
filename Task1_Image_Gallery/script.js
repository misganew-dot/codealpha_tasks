// Get the display element
const display = document.getElementById('display');

// Append value to display
function appendValue(val) {
    display.value += val;
}

// Clear display
function clearDisplay() {
    display.value = '';
}

// Delete last character
function deleteChar() {
    display.value = display.value.slice(0, -1);
}

// Calculate the final result
function calculateResult() {
    try {
        if (display.value) {
            // Replace visual expression if needed, then evaluate
            display.value = eval(display.value);
        }
    } catch (error) {
        display.value = 'Error';
    }
}

// Advanced Scientific Functions
function lnCalc() { display.value = Math.log(parseFloat(display.value || 0)); }
function inverseCalc() { display.value = 1 / parseFloat(display.value || 1); }
function squareCalc() { display.value = Math.pow(parseFloat(display.value || 0), 2); }
function sqrtCalc() { display.value = Math.sqrt(parseFloat(display.value || 0)); }
function absCalc() { display.value = Math.abs(parseFloat(display.value || 0)); }
function logCalc() { display.value = Math.log10(parseFloat(display.value || 0)); }
function expCalc() { display.value = Math.exp(parseFloat(display.value || 0)); }

function sinCalc() { display.value = Math.sin(parseFloat(display.value || 0) * Math.PI / 180).toFixed(4); }
function cosCalc() { display.value = Math.cos(parseFloat(display.value || 0) * Math.PI / 180).toFixed(4); }
function tanCalc() { display.value = Math.tan(parseFloat(display.value || 0) * Math.PI / 180).toFixed(4); }

function radCalc() { display.value = (parseFloat(display.value || 0) * Math.PI / 180); }
function piCalc() { display.value = parseFloat(display.value || 1) * Math.PI; }
function eCalc() { display.value = parseFloat(display.value || 1) * Math.E; }

function factorialCalc() {
    let n = parseInt(display.value || 0);
    if (n < 0) return display.value = 'Error';
    let r = 1;
    for (let i = 2; i <= n; i++) r *= i;
    display.value = r;
}