const prompt=require("prompt-sync")();
let c1=prompt("Enter First Color : ")
let c2=prompt("Enter Second Color : ")
switch(true)
{
    case (c1=="red" && c2=="blue")||(c1=="blue" && c2=="red"):
        console.log("Purple.")
        break;
    case (c1=="yellow" && c2=="red")||(c1=="red" && c2=="yellow"):
        console.log("Orange.")
        break;
    case (c1=="blue" && c2=="yellow")||(c1=="yellow" && c2=="blue"):
        console.log("Green.")
        break;
    default:
        console.log("Invalid Color.")

}