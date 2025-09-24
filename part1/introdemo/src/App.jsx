// Part 1.c – Refactor to small reusable components
import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)    
  const setToZero = () => setCounter(0)

  // Component display using props
  const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

  return (
    <div>
      <Display counter={counter}/>

      <button onClick={increaseByOne}>
        plus
      </button>
      <button onClick={setToZero}>
        zero
      </button>
    </div>
  )
}

export default App