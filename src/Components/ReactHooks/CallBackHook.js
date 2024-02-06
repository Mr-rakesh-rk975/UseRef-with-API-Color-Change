// import React, { useState,  useEffect } from 'react';
// import { Controlled as ControlledEditor } from 'react-codemirror2';
// import 'codemirror/lib/codemirror.css';
// import 'codemirror/theme/material.css'; // You can choose a theme
// import 'codemirror/mode/javascript/javascript'; // You can choose a mode

// function CallBackHook() {
//   const defaultCode = `import React, { useState, useCallback } from 'react';
  
// function CallBackHook() {
//   const [count, setCount] = useState(0);
  
//   // Memoize the increment function using useCallback
//   const increment = useCallback(() => {
//     setCount(prevCount => prevCount + 1);
//   }, []);
  
//   return (
//     <>
//       <div>
//         <h2>Counter</h2>
//         <p>Count: {count}</p>
//         {/* Button to increment the count using the memoized increment function */}
//         <button onClick={increment}>Increment</button>
//       </div>
//     </>
//   );
// }

// export default CallBackHook;`;

//   const [code, setCode] = useState(defaultCode);
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     try {
//       // eslint-disable-next-line no-eval
//       eval(code);
//     } catch (error) {
//       console.error('Error evaluating code:', error);
//     }
//   }, [code]);

//   const handleChange = (editor, data, value) => {
//     setCode(value);
//   };

//   return (
//     <div className="container">
//       <div className="code-box">
//         <h3>Code</h3>
//         <ControlledEditor
//           value={code}
//           onBeforeChange={(editor, data, value) => setCode(value)}
//           options={{
//             lineWrapping: true,
//             lineNumbers: true,
//             theme: 'material', // Choose a theme
//             mode: 'javascript', // Choose a mode
//           }}
//           onChange={handleChange}
//         />
//       </div>
//       <div className="result-box">
//         <h3>Result</h3>
//         <div>
//           <h2>Counter</h2>
//           <p>Count: {count}</p>
//           {/* Button to increment the count using the memoized increment function */}
//           <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CallBackHook;
























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
      
      
      <div className="card-back">
          {/* Back content */}
          <h2>Back Content</h2>
          <p>This is the back side of the container.</p>
          <p>Explanation goes here...</p>
        </div>
        
      </div>
      </div>
    </>
  );
}

export default CallBackHook;



