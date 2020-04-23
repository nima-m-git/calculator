const add = (...nums) => nums.reduce((tot, num) => tot + num);

const subtract = (...nums) => nums.reduce((tot, num) => tot - num);

const multiply = (...nums) => nums.reduce((tot, num) => tot * num);

const divide = (...nums) => nums.reduce((tot, num) => tot / num);

const operate = (operator, num1, num2) => operator(num1, num2);

let currentNum, num1, num2, operator;
const operation = document.querySelector('#operation');
const screen = document.querySelector('#screen');
const buttons = document.querySelectorAll('button');

const operators = document.getElementsByClassName('operators');


buttons.forEach((button) => {
    button.addEventListener('click', update);
});


function update() {
    if (this.parentElement.classList.contains('digits')) {
        screen.textContent += this.innerHTML;
        currentNum += this.textContent; // combine these?

    } else if (this.parentElement.classList.contains('operators')) {
        operator = this.value;
        (num1) ? num2 = currentNum : num1 = currentNum;
        currentNum = 0;
        screen.textContent += this.textContent;

    } else if (this.parentElement.classList.contains('operations')) {
        if (this.value == 'clear') {
            //clear(); //make clear fxn, clear screen and reset variables num/ops
        } else if (this.value == 'execute') {
            //execute(); //make fxn, operate, clear after x time?
        }   
    }
}    

