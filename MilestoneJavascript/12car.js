const prompt=require("prompt-sync")();
car=()=>
{
    let day=prompt("Enter the Number of days : ");
    let ty=prompt("Enter the type(Economy/Midsize/Luxury) : ");
    if(ty==='Economy' || ty==='economy')
    {
        return 40000*day;
       
    }
    else if(ty==='Midsize' || ty==='midsize')
    {
        return 10000*day;
    }
    else if(ty==='Luxury' || ty==='luxury')
    {
        return 20000*day;
    }
}
let g=car();
console.log(g)