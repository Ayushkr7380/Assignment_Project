const prompt=require("prompt-sync")();
let name = prompt("Enter the name : ")
let count=0
for (let i in name){

    if(name[i]=='A' || name[i]=='E' || name[i]=='I' || name[i]=='O' || name[i]=='U' || name[i]=='a' || name[i]=='e' || name[i]=='i' || name[i]=='o' || name[i]=='u' )
    {
        count=count+1
    }

}
console.log("The name ",name," conatins ",count," vowels.")