import React from 'react'
import RefHook from './RefHook'
import CallBackHook from './CallBackHook'
import ReducerHook from './ReducerHook'
import MemoHook from './MemoHook'
import AllHooks from './AllHooks'



export default function Hooks() {
  return (
    <>
    <div className='react-hooks-outer'>
    <div className='hook-wrapper'> 
      <h1>Hooks</h1>
      <AllHooks/>
      </div>
        <div className='hook-wrapper'> 
    <h1>useRef Hook</h1>
      <RefHook/>
      </div>
      <div className='hook-wrapper'> 
      <h1>useCallback Hook</h1>
      <CallBackHook/>
      </div>
      <div className='hook-wrapper'> 
      <h1 id='useReducer'>useReducer Hook</h1>
      <ReducerHook/>
      </div>
      <div className='hook-wrapper'> 
      <h1>useMemo Hook</h1>
      <MemoHook/>
      </div>
    </div>
    
    </>
  )
}
