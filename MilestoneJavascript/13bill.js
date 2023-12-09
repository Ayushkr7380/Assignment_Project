const bill=(costperdish,numberofpersons)=>{
    const totalcost = costperdish * numberofpersons;
    const billperperson = totalcost / numberofpersons;
    return{
        totalcost:totalcost,
        billperperson:billperperson
    };
}
const costperdish = 300;
const numberofpersons = 7; 
let cost=bill(costperdish , numberofpersons);
console.log(cost.totalcost);
console.log(cost.billperperson);