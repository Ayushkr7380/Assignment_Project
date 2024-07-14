function manipulateString(inputString , callback){
    const capital = inputString.toUpperCase();

    callback(capital);
}

function logString(string){
    console.log(`The manipulated String is : ${string}`);
}

manipulateString('ayush kumar',logString)