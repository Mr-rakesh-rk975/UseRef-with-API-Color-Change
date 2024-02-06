
import React, { useState, useCallback } from 'react';


function CallBackHook() {
  const [count, setCount] = useState(0);

  // Memoize the increment function using useCallback
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <>
      <div className="container">
      <div className="card">
        
        <div className="card-front">
        <div className="code-box">
          <h3>Code</h3>
          <pre>{`import React, { useState, useCallback } from 'react';
          
function CallBackHook() {
  const [count, setCount] = useState(0);
  
  // Memoize the increment function using useCallback
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);
  
  return (
    <>
      <div>
        <h2>Counter</h2>
        <p>Count: {count}</p>
        {/* Button to increment the count using the memoized increment function */}
        <button onClick={increment}>Increment</button>
      </div>
    </>
  );
}

export default CallBackHook;
`}</pre>
        </div>
        <div className="result-box">
          <h3>Result</h3>
          <div>
            <h2>Counter</h2>
            <p>Count: {count}</p>
            {/* Button to increment the count using the memoized increment function */}
            <button onClick={increment}>Increment</button>
          </div>
        </div>
      </div>
      
      
      {/* <div className="card-back">
          <h2>Back Content</h2>
          <p>This is the back side of the container.</p>
          <p>Explanation goes here...</p>
        </div> */}
        
      </div>
      </div>
    </>
  );
}

export default CallBackHook;



