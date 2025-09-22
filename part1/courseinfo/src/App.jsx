const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  // Exercise 1.5 Change the course and its parts into a single JavaScript object
  // Fix everything that breaks
  return (
    <div>
      <Header course={course} />
      
      <Content parts={course.parts} />
      
      <Total parts={course.parts} />
    </div>
  )
}

const Header = (props) => {  
  console.log(props)
  
  return (
    <>
      <h1>{props.course.name}</h1>
    </>
  )
}

const Content = (props) => {
  console.log(props)
  // No need to pass course.parts as props calls "parts" = course.parts scope
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