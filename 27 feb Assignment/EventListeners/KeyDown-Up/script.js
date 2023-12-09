let display = document.getElementById('display');

document.addEventListener('keydown',function(e){
    display.style.color = 'green';
    display.textContent = e.key + " is Keydown.";
});

document.addEventListener('keyup',function(e){
    display.style.color = 'red';
    display.textContent = e.key + " is Keyup."
});