let delay = 12510;
let countdown = (delay/1000);

let countdownInterval = setInterval(() => {
    console.log(`Random Number in ${countdown.toFixed(1)} second`)
    countdown -= 1;      
},1000);

let randomNum = 0;
function randomNumber(){
    randomNum = Math.floor(Math.random() * 10000)
    console.log(`Random Number is ${randomNum}`)
}
setTimeout(()=>{
    clearInterval(countdownInterval)
    randomNumber()  
},(delay + 1000))
