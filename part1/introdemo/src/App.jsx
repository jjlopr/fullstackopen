// Part 1.d – Inside vs Outside App Scope
import { useState } from 'react'

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 

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

const Button = ({onClick, texto, disabled}) => <button onClick={onClick} disabled={disabled}>{texto}</button>

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)
  
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
    setAll([])      // ← Needs access to setAll
    setRight(0)     // ← Needs access to setRight
    setLeft(0)      // ← Needs access to setLeft
    setTotal(0)     // ← Needs access to setTotal
  }
	
	return (
		<div>
			{left}
      <Button onClick={handleLeftClick} texto="Left"/>
      <Button onClick={handleRightClick} texto="Right"/>
      {right}
      <Button onClick={handleReset} disabled={left === 0 && right === 0} texto="Reset" />
      <br></br><br></br>
      <History allClicks={allClicks} />
      <p>Total {total}</p>
		</div>
	)
}


export default App