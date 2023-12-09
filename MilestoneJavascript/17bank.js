const prompt=require("prompt-sync")();
const customer={
    name:"Ayush",
    balance:300
};
function deposit(amount)
{
    if(amount>=0)
    {
        customer.balance = customer.balance + amount;
        console.log(`Deposited amount is ${amount}`);
        console.log(`New Balance is ${customer.balance}`);
    }
    else{
        console.log("Invalid Deposit Amount.");
    }
}
function width(amount)
{
    if(amount<=customer.balance && amount>=0)
    {
        customer.balance = customer.balance - amount;
        console.log(`Credited amount is ${amount}`);
        console.log(`New Balance is ${customer.balance}`);
    }
    else{
        console.log("Invalid credit amount.");
    }
}
console.log(`Initial balance is ${customer.balance}`);
let d = parseInt(prompt("Enter the deposit amount : "));
let w = parseInt(prompt("Enter the widthrawl amount : "));
deposit(d);
width(w);
