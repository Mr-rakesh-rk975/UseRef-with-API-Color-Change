import React, { useState, useEffect } from 'react';

function AllHooks() {

  const [count, setCount] = useState(0);

  // This useEffect runs after every render
  useEffect(() => {
    console.log("Component has been rendered");
  });

  // This useEffect runs only on mount
  useEffect(() => {
    console.log("Component has mounted");
  }, []);

  // This useEffect runs only when count changes
  useEffect(() => {
    console.log("Count has changed:", count);
  }, [count]);




  return (
    <>
      <div className='react-hooks-tables'>
        <h2>React Hooks</h2>
        <table>
          <thead>
            <tr>
              <th>Hook</th>
              <th>Purpose</th>
              <th>Example Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='hooks-heading'>useState</td>
              <td>Allows functional components to manage state</td>
              <td>const [count, setCount] = useState(0);</td>
            </tr>
            <tr>
              <td className='hooks-heading'>useEffect</td>
              <td>Performs side effects in functional components
                <p>useEffect is a hook in React that allows functional components to perform side effects. Side effects may include data fetching, subscriptions, or manually changing the DOM. The useEffect hook is similar to lifecycle methods in class components, such as componentDidMount, componentDidUpdate, and componentWillUnmount.
                  <ol type='1'>


                    Here's a breakdown of what useEffect does:

                    <li>Mounting: When a component mounts (renders for the first time), useEffect with an empty dependency array ([]) runs after the component has been rendered to the DOM. This is similar to componentDidMount in class components.</li>

                    <li>Updating: When a component updates (re-renders due to state or prop changes), useEffect runs again. However, if you pass a dependency array to useEffect, it will only run when the values in the dependency array change. This is similar to componentDidUpdate in class components.</li>

                    <li>Unmounting: When a component unmounts (is removed from the DOM), useEffect with a cleanup function runs. This cleanup function is returned from the useEffect hook and is used to clean up any resources created by the effect. This is similar to componentWillUnmount in class components.</li>

                  </ol>
                </p>
              </td>
              <td> <pre> <h2>Code:...</h2>{`import React, { useState, useEffect } from 'react';
             function MyComponent() {
                const [count, setCount] = useState(0);
            
                // This useEffect runs after every render
                useEffect(() => {
                    console.log("Component has been rendered");
                });
            
                // This useEffect runs only on mount
                useEffect(() => {
                    console.log("Component has mounted");
                }, []);
            
                // This useEffect runs only when count changes
                useEffect(() => {
                    console.log("Count has changed:", count);
                }, [count]);
            
                return (
                    <div>
                        <p>Count: {count}</p>
                        <button onClick={() => setCount(count + 1)}>Increment Count</button>
                    </div>
                );
            }
            
            `} <div>
                  <h2>Result:...</h2>
                  <p>Count: <b style={{ color: 'red', fontSize: '20px', fontWeight: 'bold' }}>{count}</b> </p>
                  <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <button onClick={() => setCount(0)}>Reset Count</button>
                </div></pre></td>
            </tr>
            <tr>
              <td className='hooks-heading'>useContext</td>
              <td>Provides access to the context without nesting</td>
              <td>const value = useContext(MyContext);</td>
            </tr>
            <tr>
              <td className='hooks-heading'>useReducer</td>
              <td>An alternative to useState for managing complex state</td>
              <td>const [state, dispatch] = useReducer(reducer, initialState);</td>
            </tr>
            <tr>
              <td className='hooks-heading'>useRef</td>
              <td>Allows functional components to hold mutable values</td>
              <td>const inputRef = useRef();</td>
            </tr>
            <tr>
              <td className='hooks-heading'>useCallback</td>
              <td>Memoizes functions, preventing unnecessary re-renders</td>
              <td>{`const memoizedCallback = useCallback(() => {...}, []);`}</td>
            </tr>
            <tr>
              <td className='hooks-heading'>useMemo</td>
              <td>Memoizes values, preventing unnecessary recalculations</td>
              <td>{`const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`}</td>
            </tr>
            <tr>
              <td className='hooks-heading'>useLayoutEffect</td>
              <td>Similar to useEffect, but runs synchronously after DOM is updated</td>
              <td>{`useLayoutEffect(() => { console.log('DOM updated'); }, []);`}</td>
            </tr>
            <tr>
              <td className='hooks-heading'>useImperativeHandle</td>
              <td>Allows child components to access parent component's imperative methods</td>
              <td>{`useImperativeHandle(ref, () => ({method1: () => {...}}));`}</td>
            </tr>
            <tr>
              <td className='hooks-heading'>useDebugValue</td>
              <td>Displays a label for custom hooks in React DevTools</td>
              <td>useDebugValue(value);</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AllHooks;
