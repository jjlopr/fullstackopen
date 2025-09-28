// Part 1.d – Mutating in a new const total
import { useState } from 'react'

const App = () => {

  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)
	

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    console.log('Left antes:', left)      // <-- Coontrol en console L
    setLeft(left + 1)
    console.log('Left después:', left)    // <-- Coontrol en console L
    setTotal(left + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    console.log('Right antes:', right)    // <-- Coontrol en console R
    setRight(right + 1)
    console.log('Right antes:', right)    // <-- Coontrol en console R
    setTotal(left + right)

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