// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

// SIMPLE USEREDUCER EXAMPLE
// const countReducer = (state, newState) => newState

// function Counter({initialCount = 0, step = 1}) {
//   const [count, setCount] = React.useReducer(countReducer, initialCount)
//   const increment = () => setCount(count + step)
//   return <button onClick={increment}>{count}</button>
// }

// EXAMPLE OF USEREDUCER WITH DIFFERENT ACTION PASSED
// const countReducer = (count, change) => count + change

// function Counter({initialCount = 0, step = 1}) {
//   const [count, changeCount] = React.useReducer(countReducer, initialCount)
//   const increment = () => changeCount(step)
//   return <button onClick={increment}>{count}</button>
// }

// EXAMPLE OF USEREDUCER WITH OBJECT PASSED
// const countReducer = (state, action) => ({...state, ...action})

// function Counter({initialCount = 0, step = 1}) {
//   const [state, setState] = React.useReducer(countReducer, {
//     count: initialCount,
//   })
//   const {count} = state
//   const increment = () => setState({count: count + step})
//   return <button onClick={increment}>{count}</button>
// }

// EXAMPLE OF USEREDUCER AND SETSTATE WITH AN OBJECT OR FUNCTION
// const countReducer = (state, action) => ({
//   ...state,
//   ...(typeof action === 'function' ? action(state) : action),
// })

// function Counter({initialCount = 0, step = 1}) {
//   const [state, setState] = React.useReducer(countReducer, {
//     count: initialCount,
//   })
//   const {count} = state
//   const increment = () =>
//     setState(currentState => ({count: currentState.count + step}))
//   return <button onClick={increment}>{count}</button>
// }

// EXAMPLE OF CONVENTIONAL SWITCH STATEMENT
const countReducer = (state, action) => {
  const {type, payload} = action
  switch (type) {
    case 'INCREMENT': {
      return {
        ...state,
        count: state.count + payload,
      }
    }
    default: {
      throw new Error(`Unsupported action type: ${type}`)
    }
  }
}

function Counter({initialCount = 0, step = 2}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT', payload: step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
