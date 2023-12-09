const prompt=require("prompt-sync")();
let name=prompt("Enter a name : ")
let n1=name.charAt(0)
let new_n1=name.charAt(0).toUpperCase()
let nn
(n1==new_n1 ? nn=new_n1:  nn=new_n1)
n_slice=name.slice(1,name.length+1)
let new_name=nn+n_slice
console.log("New : ",new_name)