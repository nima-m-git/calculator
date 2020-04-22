const add = (...nums) => nums.reduce((tot, num) => tot + num);

const subtract = (...nums) => nums.reduce((tot, num) => tot - num);

const multiply = (...nums) => nums.reduce((tot, num) => tot * num);

const divide = (...nums) => nums.reduce((tot, num) => tot / num);

const operate = (operator, num1, num2) => operator(num1, num2);



const operation = document.querySelector('#operation');
const screen = document.querySelector('#screen');
let display = screen.textContent;
const buttons = document.querySelectorAll('button');



const operators = document.getElementsByClassName('operators');


//document.addEventListener('click', updateDisplay);

function updateDisplay(value) {
    screen.textContent += value;
} 

