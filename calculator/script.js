let displayValue = '0';

function updateDisplay() {
  document.getElementById('display').textContent = displayValue;
}

function Display(value) {
  if (displayValue === '0' && value !== '.') {
    displayValue = value;
  } else {
    displayValue += value;
  }
  updateDisplay();
}

function clearDisplay() {
  displayValue = '0';
  updateDisplay();
}

function calculate() {
  try
  {
    displayValue = eval(displayValue);
    updateDisplay();
  } 
  catch(error) 
  {
    displayValue = 'Error';
    updateDisplay();
  }
}

function del() {
  displayValue=displayValue.slice(0,-1);
  updateDisplay;
}