const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  // Exercise 1.4 Sending the entire parts Array as a single prop
  // Instead of breaking it down into individual properties
  return (
    <div>
      <Header course={course} />

      <Content parts={parts} />
      
      <Total parts={parts} />
    </div>
  )
}

const Header = (props) => {  
  console.log(props)
  
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  console.log(props)
  
  return (
    <div>
      <Part namex={props.parts[0].name} exercisex={props.parts[0].exercises} />
      <Part namex={props.parts[1].name} exercisex={props.parts[1].exercises} />
      <Part namex={props.parts[2].name} exercisex={props.parts[2].exercises} />
    </div>
  )
}

const Part = ({ namex, exercisex }) => {
  return (
    <p>{namex}, <i>{exercisex} exercises</i></p>
  )
}

const Total = (props) => {
  const total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
  console.log(props)
  
  return (
    <footer>
      <i>Total exercises: {total}</i>
    </footer>
  )
}


export default App