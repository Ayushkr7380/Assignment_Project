let ar=[1,2,14,5,7,16,9,12,18,24,6,15,21]
for(let i in ar)
{
    if(ar[i]%3===0 && ar[i]%2!==0)
    {
        console.log(ar[i]); 
        continue;       
    }
    
}