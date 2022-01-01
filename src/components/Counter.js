import React, {useState, useEffect} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const [name,setName] = useState('');

    useEffect(() =>{
        console.log("Use effect called")
        document.title = 'Current Count is ' + count
    },[count])

    return (
        <div>
            <h1>Counter</h1>
            <h2 className='counter'>{count}</h2>
            <input type="text" value = {name} onChange={(e) => setName(e.target.value)}></input>
            <button className='btn' onClick={() => setCount(count + 1)}>Increment</button>
            <button className='btn'  onClick={() => setCount(0)}>Reset</button>            
            <button className='btn'  onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}

export default Counter
