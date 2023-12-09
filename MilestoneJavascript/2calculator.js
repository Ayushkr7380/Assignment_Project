const prompt=require("prompt-sync")();
let op=prompt("Enter the operator (+,-,*,/): ")
let n1=parseInt(prompt("Enter the First Number : "))
let n2=parseInt(prompt("Enter the Second Number : "))
switch(op){
    case '+' :
        var res=n1+n2
        console.log("Result : ",res)
        break;
    case '-':
        var res=n1-n2
        console.log("Result : ",res)
        break;
    case '*':
        var res=n1*n2
        console.log("Result : ",res)
        break;
    case '/':
        var res=n1/n2
        console.log("Result : ",res)
        break;
    default:
        console.log("Invalid Operator.")
}

