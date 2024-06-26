import { useState } from 'react'
import './Counter.css'
function Counter(){
    const [count,setCount] = useState(0)
    const addValue = ()=>{
        setCount(count + 1)
    }
    const removeValue = ()=>{
        setCount(count - 1)
    }
    const resetValue = ()=>{
        setCount(0)
    }
    return (
        <div id="counter">
            <div id="display">
                <h1 id='countdisplay'>{count}</h1>
            </div>
            <div id="buttons">
                <button onClick={removeValue}>Decrement</button>
                <button onClick={addValue}>Increment</button>
            </div>
            <button id='resetbutton' onClick={resetValue}>Reset</button>
        </div>
    )
}
export default Counter