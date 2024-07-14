async function getCombined(){
    const [ d1 , d2 ] = await Promise.all([
        fetch(`https://jsonplaceholder.typicode.com/todos/1`).then((response)=>response.json),
        fetch(`https://jsonplaceholder.typicode.com/posts/1`).then((response)=>response.json),
    ])

    const combineData = {
        todos : d1,
        post : d2
    };

    return combineData;
}

getCombined().then((data)=>console.log(data))