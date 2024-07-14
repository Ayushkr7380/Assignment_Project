function doubleArray(arr,callback){
    const number = arr.map((ele)=>{
        return callback(ele)
    });
    return number; 
};

function callback(num){
    return num * 2;
}

const list = [1,2,3];

console.log(doubleArray(list,callback))