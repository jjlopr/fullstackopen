const Hello = (props) => {

  console.log(props)
  return (
    <div> {/* 👈 This is the root element that wrapps everything */}
      <p>

        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

// Agregar footer
const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
    </div>
  )
}

// Component with an array of components
const App = () => {
  return [
    <h1>Greetings</h1>,
    <Hello name='Maya' age={26 + 10} />,
    <Footer />
  ]
}

export default App