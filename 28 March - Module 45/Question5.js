function greet(name){
    return new Promise((resolve)=>{
        const greeting = `Hello , ${name}!!`
        resolve(greeting);
    });
}

greet('Ayush').then((message)=>{
    console.log(message);
})