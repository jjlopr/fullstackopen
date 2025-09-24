import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)
  setTimeout(    () => setCounter(counter + 1),    1000  )

  // You can debug the app by logging the values of the component's variables to the console
  console.log('mostrando...', counter)

  return (
    <div>{counter}</div>
  )
}

export default App