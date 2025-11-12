const display = document.getElementById('display');
const basic = document.getElementById('basic');
const scientific = document.getElementById('scientific');
const toggleBtn = document.getElementById('toggleMode');
let isScientific = false;

// Toggle Mode
toggleBtn.addEventListener('click', () => {
  isScientific = !isScientific;
  if (isScientific) {
    scientific.classList.remove('hidden');
    toggleBtn.textContent = 'Basic';
  } else {
    scientific.classList.add('hidden');
    toggleBtn.textContent = 'Scientific';
  }
});

// Basic Buttons
document.querySelectorAll('#basic .btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const value = btn.textContent;
    if (value === 'C') display.value = '';
    else if (value === '=') {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = 'Error';
      }
    } else {
      display.value += value;
    }
  });
});

// Scientific Functions
document.querySelectorAll('#scientific .func').forEach(btn => {
  btn.addEventListener('click', () => {
    const func = btn.textContent;
    let val = parseFloat(display.value);
    if (isNaN(val)) val = 0;

    switch (func) {
      case 'sin': display.value = Math.sin(val).toFixed(5); break;
      case 'cos': display.value = Math.cos(val).toFixed(5); break;
      case 'tan': display.value = Math.tan(val).toFixed(5); break;
      case 'log': display.value = Math.log10(val).toFixed(5); break;
      case '√': display.value = Math.sqrt(val).toFixed(5); break;
      case 'x²': display.value = Math.pow(val, 2); break;
      case 'π': display.value += Math.PI; break;
      case 'e': display.value += Math.E; break;
    }
  });
});
