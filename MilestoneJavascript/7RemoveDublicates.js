let cart=['iphone','laptop','pen','gun','ring','chocolate','chips','iphone','pen','box','box']
// let new_cart = new Array()

// function RD(cart){
//      let new_cart= cart.filter(
//         (item,index) => cart.indexOf(item) === index
//     );
//     console.log(new_cart)
// };

// console.log(RD(cart));

let new_cart=cart.filter(
    (value,index)=>{
        return cart.indexOf(value)===index
    }
)
console.log(new_cart)
