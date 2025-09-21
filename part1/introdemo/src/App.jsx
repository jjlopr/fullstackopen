const Hello = (props) => {

  console.log(props)
  return (
    <div> {/* 👈 This is the root element that wraps everything */}
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

// Component using Fragments
const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <>
      <h1>Greetings</h1>
      <Hello name='Maya' age={26 + 10} />
      <Hello name={name} age={age} />
      <Footer />
    </>
  )
}

export default App