// Part 1.d – Code simplifyed and Reset button added
import { useState } from 'react'

const App = () => {
	const [clicks, setClicks] = useState({
		left: 0, right: 0
	})
	
	const handleLeftClick = () =>
  setClicks({ ...clicks, left: clicks.left + 1 })

  const handleRightClick = () =>
  setClicks({ ...clicks, right: clicks.right + 1 })

  const handleReset = () =>
  setClicks({left: 0, right: 0})
	
	return (
		<div>
			{clicks.left}
			<button onClick={handleLeftClick}>left</button>
			<button onClick={handleRightClick}>right</button>
	    {clicks.right}
      <button onClick={handleReset} disabled={clicks.left === 0 && clicks.right === 0}>reset</button>
		</div>
	)
}


export default App