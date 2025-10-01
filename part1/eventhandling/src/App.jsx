import { useState } from 'react'

const App = () => {
  const [value, setValue] = useState(10)

  const handleClick = () => {
    console.log('--- Clicked ---')        // Control in console
    setValue(0)
  }

  return (
    <div>
      {value}
      <button 
        onClick={handleClick}
        disabled={value === 0}
      >reset</button>
    </div>
  )
}


export default App

