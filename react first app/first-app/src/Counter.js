import React, { useState } from 'react';
import './Counter.css'; 
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className='Container'>
      <h1>Counter App</h1>

      <div>
        <span className='Count'>{count}</span>
      </div>

      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
