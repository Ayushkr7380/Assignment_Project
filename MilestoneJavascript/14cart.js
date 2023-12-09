const arr=[
    {
        unitprice:400, quantity:3
    },
    
    {
        unitprice:100, quantity:2
    },
    
    {
        unitprice:80, quantity:6
    }
]
const total=(arr)=>
    arr.reduce(
        (total,item)=>
            total+(item.unitprice*item.quantity),0
        
    );

console.log(`Total cost is ${total(arr)}`);