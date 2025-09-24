import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  // Increase counter and Reset counter button
  return (
    <div>
      <div>{counter}</div>

    <button onClick={() => setCounter(counter + 1)}>
      plus
    </button>
    <button onClick={() => setCounter(0)}>         zero      </button>    
    </div>
  )
}

export default App