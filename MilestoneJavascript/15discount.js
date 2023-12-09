const prompt=require("prompt-sync")();
const original=prompt("Enter the original price : ");
const discount=prompt("Enter the discount price : ");
const arr=(original,discount)=>{
    const dis=original-discount;
    const dis_per=(dis/original)*100;
    return dis_per.toFixed(2);
};
const d=arr(original,discount);
console.log(`Discount percent is ${d}%`);