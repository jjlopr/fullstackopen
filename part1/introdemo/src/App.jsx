// Part 1.c – Destructuring Display and Button components
import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)  
  const setToZero = () => setCounter(0)

  // The function contains only the return statement
  // So we can use the compact form of arrow functions
  // const Display = (props) => {
  // return (
  //   <div>{props.counter}</div>
  //   )
  // }
  const Display =({counter}) => <div>{counter}</div>

  // We can simplify the Button as well
  // const Button = (props) => {
  // return (
  //   <button onClick={props.onClick} disabled={props.disabled}>
  //     {props.text}
  //   </button>
  //   )
  // }
  const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

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