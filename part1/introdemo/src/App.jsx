// Part 1.d – Rendering not working .push Method
import { useState } from 'react'

const App = () => {

  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  const [allClicks, setAll] = useState([])
	

  const handleLeftClick = () => {
    setAll(allClicks.push('L'))
    setLeft(left + 1)  
  }

  const handleRightClick = () => {
    setAll(allClicks.push('R'))
    setRight(right + 1)
  }

  const handleReset = () => {
    setAll([])      // Reset to empty array
    setRight(0)
    setLeft(0)
  }
	
	return (
		<div>
			{left}
			<button onClick={handleLeftClick}>left</button>
			<button onClick={handleRightClick}>right</button>
	    {right}
      {// <button onClick={handleReset} disabled={clicks.left === 0 && clicks.right === 0}>reset</button>
      }
      <button onClick={handleReset} disabled={left === 0 && right === 0}>reset</button>
      <p>{allClicks.join('-')}</p>
		</div>
	)
}


export default App