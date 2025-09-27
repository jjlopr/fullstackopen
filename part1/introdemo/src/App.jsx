// Part 1.d – Simplify the functions avoiding variable assignation
import { useState } from 'react'

const App = () => {
	const [clicks, setClicks] = useState({
		left: 0, right: 0
	})
	
  // Assigning the object to a variable in the event handlers is not necessary
	// const handleLeftClick = () => {
	// 	const newClicks = {
	// 		...clicks,
	// 		left: clicks + 1
	// 	}
	// 	setClicks(newClicks)
	// }
	const handleLeftClick = () =>
  setClicks({ ...clicks, left: clicks.left + 1 })

  // Assigning the object to a variable in the event handlers is not necessary
	// const handleRightClick = () => {
	// 	const newClicks = {
	// 		...clicks,
	// 		right: clicks.right + 1
	// 	}
	// 	setClicks(newClicks)
	// }
  const handleRightClick = () =>
  setClicks({ ...clicks, right: clicks.right + 1 })
	
	return (
		<div>
			{clicks.left}
			<button onClick={handleLeftClick}>left</button>
			<button onClick={handleRightClick}>right</button>
	{clicks.right}
		</div>
	)
}


export default App