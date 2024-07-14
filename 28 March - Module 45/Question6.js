async function fetchData(){
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
    const data  = response.data;
    console.log(data); 
}

fetchData();