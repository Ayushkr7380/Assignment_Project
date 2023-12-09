const prompt=require("prompt-sync")();
let password="35441001@Ayush"
let check_password=prompt("Enter the password : ")
if(check_password==password)
{
    console.log("passowrd matched,Password authorized.")
}
else
{
    console.log("Password didn't match.")
}
