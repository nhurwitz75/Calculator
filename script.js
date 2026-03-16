const buttons = document.querySelectorAll('.buttons button');
const screen = document.getElementById('screen');
const clear = document.getElementById('Clear'); 

let cNumber = ""; 
let expression = ""; 

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const value = btn.dataset.value; 

    if (!isNaN(value) || value == ".") {
      cNumber += value;
      screen.textContent += value;
    } else if (['÷', 'x', '-', '+'].includes(value)) {
        expression += cNumber + value; 
        cNumber = ""; 
        screen.textContent += value; 
    } else if (value === "=") {
      expression += cNumber;
      const result = eval(expression.replace(/x/g, '*').replace(/÷/g, '/'));
      screen.textContent = expression + "=" + result; // ← show full equation
      expression = ""; 
      cNumber = "";   
    }
  })
})

function remove() {
  document.getElementById('screen').textContent = "";  
  cNumber = "";      
  expression = "";   
}