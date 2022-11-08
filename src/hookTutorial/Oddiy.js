import React, {useState} from 'react';

function Oddiy() {

    const [count, setCount]=useState(0)

    function increment() {
        setCount(count+1)
    }
    function decrement() {
        setCount(count-1)
    }
    function multiply() {
        setCount(count*2)
    }
    function degree() {
        setCount(count**2)
    }

    return(
        <div>
            <button onClick={increment}>+</button>
            <button onClick={multiply}>*</button>
          <span>{count}</span>  
          <button onClick={decrement}>-</button>
          <button onClick={degree}>^</button>
        </div>
    )
}

export default Oddiy;