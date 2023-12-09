const prompt=require("prompt-sync")();
function convert()
{
    let c=prompt("Enter the value in celsius : ");
    let f=((c*(9/5))+32);
    console.log("Fahrenheit : ",f)
}
convert();
