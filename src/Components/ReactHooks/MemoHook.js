import React, { useMemo, useState } from 'react';


function ExpensiveCalculation({ value }) {
    // Memoize the result of the expensive calculation using useMemo
    const result = useMemo(() => {
      return value * 2;
    }, [value]); // Recalculate only when the value changes
  
    return <p>Result: {result}</p>;
  }
  

    
 


function MemoHook() {
    const [count, setCount] = useState(0);
  
    return (
        <>
      <div>
        <h2>App</h2>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        {/* Render the ExpensiveCalculation component */}
        <ExpensiveCalculation value={count} />
      </div>


      
      </>
    );
  }
  

export default MemoHook