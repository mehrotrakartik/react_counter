import React, {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Counter</h1>
            <h2 className='counter'>{count}</h2>
            <button className='btn' onClick={() => setCount(count + 1)}>Increment</button>
            <button className='btn'  onClick={() => setCount(0)}>Reset</button>            
            <button className='btn'  onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}

export default Counter
