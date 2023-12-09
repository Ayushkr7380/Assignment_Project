marks=[105,11,98,9,110]
for (let i in marks)
{
    (marks[0]<marks[i] ? marks[0]=marks[i]:null)
}
console.log("Highest Marks : ",marks[0])