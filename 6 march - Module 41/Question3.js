const items = [
    {name:'shirt',price_usd:2000},
    {name:'pant',price_usd:1000},
    {name:'phone',price_usd:22000},
    {name:'camera',price_usd:55000},
    {name:'jacket',price_usd:3500},
]

//Exchange rate is 1 USD = 80 INR
const INR = items.map((ele)=>{
    return {name : ele.name , price_INR : ((ele.price_usd) * 80)}
})
console.log(INR)