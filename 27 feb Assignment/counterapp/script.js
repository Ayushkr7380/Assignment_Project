let number = 0;

let display = document.getElementById('display');
let decrement = document.getElementById('decrement');
let increment = document.getElementById('increase');
let resetbtn = document.getElementById('resetbtn');

//increase
function increase(){
    number = number + 1;

    display1();
}
//decrease
function decrease(){
    number = number - 1;

    display1();
}

function reset1(){
    number = 0;
     display1();
}

function display1(){
    display.textContent = number;
}

decrement.addEventListener('click',decrease);
increment.addEventListener('click',increase);
resetbtn.addEventListener('click',reset1);

