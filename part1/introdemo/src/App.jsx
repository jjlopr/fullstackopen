// Part 1.d – Handling arrays and Reset button
import { useState } from 'react'

const App = () => {
	// const [clicks, setClicks] = useState({
	// 	left: 0, right: 0
	// })
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  // Every click is stored in a separate piece of state called allClicks that is initialized as an empty array []
  const [allClicks, setAll] = useState([])
	
	// const handleLeftClick = () =>
  // setClicks({ ...clicks, left: clicks.left + 1 })
  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)  
  }

  // const handleRightClick = () =>
  // setClicks({ ...clicks, right: clicks.right + 1 })
  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  // const handleReset = () =>
  // setClicks({left: 0, right: 0})
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