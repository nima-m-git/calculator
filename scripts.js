function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    if (b==0) {
        brokeSystem();
        return 'nyet';
    } else {
        return (a / b);
    }
}

function operate(operator, num1, num2) {
    return window[operator](num1, num2);
};


let currentNum =0, num1=0, num2=0, operator;
const operation = document.querySelector('#operation');
const screen = document.querySelector('#screen');
const buttons = document.querySelectorAll('button');
const header = document.querySelector('header');


buttons.forEach((button) => {
    button.addEventListener('click', update);
});


function update() {
    if (this.classList.contains('digits')) {
        screen.textContent += this.innerHTML;
        currentNum += this.textContent; 

    } else if (this.classList.contains('operators')) {
        updateNums();
        operator = this.value;
        screen.textContent += this.textContent;
        
    } else if (this.classList.contains('operations')) {
        
        if (this.value == 'clear') {
            clear();
        } else if (this.value == 'execute') {
            updateNums();
            execute(); 
        }
    }
}    

function execute() {
    if (num1 && num2 && operator) {
        let result = operate(operator, num1, num2).toFixed(5).replace(/0+$/, "");
        screen.textContent = result;
        num1 = result;
        num2 = 0;
    }
}

function clear() {
    currentNum = 0;
    num1 = 0;
    num2 = 0;
    operator = '';
    screen.textContent = '';
};

function updateNums() {
    if (!(num1)) {
        num1 = currentNum;
     } else {
        num2 = currentNum;
     }
    currentNum = 0;
}

function brokeSystem() {
    error = document.createElement('h2');
    error.textContent = 'You broke the system';
    error.style.color = 'red';
    error.style.textAlign = 'center';
    error.style.fontSize = '50px';
    header.appendChild(error);
}