import { useState } from 'react'

const App = () => {
  const [value, setValue] = useState(10)

  return (
    <div>
      {value}
      <button 
        onClick={() => setValue(0)}
        disabled={value === 0}
      >reset</button>
    </div>
  )
}


export default App



// DO NOT DO THIS !

// <button onClick={setValue(0)}>button</button>

