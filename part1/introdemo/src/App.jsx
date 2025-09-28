// Part 1.d – Conditional rendering (History comp if/else)
import { useState } from 'react'

const App = () => {

  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)
  
  // Make the rendering of the clicking history is handled by a new History comp
  const History = (props) => {
    if (props.allClicks.length === 0) {
      return (
        <div>
          Press 'left' or 'right' button to start
        </div>
      )
    }
    return (
      <div>
        Button press history: {props.allClicks.join('-')}
      </div>
    )
  }

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = right + 1
    setRight(updatedRight)
    setTotal(left + updatedRight)
  }

  const handleReset = () => {
    setAll([])      // Reset to empty array
    setRight(0)
    setLeft(0)
    setTotal(0)
  }
	
	return (
		<div>
			{left}
			<button onClick={handleLeftClick}>left</button>
			<button onClick={handleRightClick}>right</button>
	    {right}
      <button onClick={handleReset} disabled={left === 0 && right === 0}>reset</button>
      <br></br><br></br>
      <History allClicks={allClicks} />
      <p>Total {total}</p>
		</div>
	)
}


export default App