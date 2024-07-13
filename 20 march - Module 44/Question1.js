function convertToNumber(value){
    return Number(value)
}
try {
    const output = convertToNumber(123);
    console.log(output)
}catch {
    console.log('Invalid number');
}