let input = 'ayush'
let rev = '';

setTimeout(()=>{
    for(let i = input.length -1 ; i>=0 ; i--)
        {
            rev = rev + input[i];
        }
        console.log('Output : ',rev)
},2000)
