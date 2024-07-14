const person = {
    firstName : 'Ayush',
    lastName : 'Kumar',
    age : '22'
}
function ageInDays(object , callback){
    const fullName  = `${object.firstName} ${object.lastName}`
    const ageInDays = (object.age * 365);

    callback(fullName,ageInDays)
}

function callback(fullName, age){
    console.log(`The person's full
name is ${fullName} and their age in days is ${age}.`);
}

ageInDays(person,callback)