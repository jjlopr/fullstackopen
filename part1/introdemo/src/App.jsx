// Part 1.d – Removed console control for debug
import { useState } from 'react'

const App = () => {

  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)
	

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1              // Avoid asynchronously update
    setLeft(updatedLeft)
    setTotal(updatedLeft + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = right + 1            // Avoid asynchronously update
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
      <p>{allClicks.join('-')}</p>
      <p>Total {total}</p>
		</div>
	)
}


export default App