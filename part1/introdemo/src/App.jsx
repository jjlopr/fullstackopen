// Part 1.c – Back to declaring Display (props) comp
import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)  
  const setToZero = () => setCounter(0)

  const Display = (props) => {
  return (
    <div>{props.counter}</div>
    )
  }

  const Button = (props) => {
  return (
    <button onClick={props.onClick} disabled={props.disabled}>
      {props.text}
    </button>
    )
  }

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text='plus' />
      <Button onClick={setToZero} text='zero' disabled={counter === 0} />
      <Button onClick={decreaseByOne} text='minus' />
    </div>
  )
}


export default App