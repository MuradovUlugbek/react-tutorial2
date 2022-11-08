import React, {useState, useEffect} from 'react';

const Oddiy2=()=>{
    
    const[count, setCount]= useState(0)

    const [infosType, setInfosType]=useState('posts')

    /* useEffect(()=>{
        document.title= `Siz ${count} marta bosdingiz`
    }, []) */

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${infosType}`)
        .then(response => response.json())
        .then(json => console.log(json))
    }, [])

    return(
        <div>
            {/* <p>Siz {count} marta bosdingiz</p>
            <button onClick={()=>setCount(count + 1)}>Click</button> */}

            <button onClick={()=>setInfosType('users')}>Users</button>
            <button onClick={()=>setInfosType('comments')}>Comments</button>
            <button onClick={()=>setInfosType('todos')}>Todos</button>
        </div>
    )
}

export default Oddiy2