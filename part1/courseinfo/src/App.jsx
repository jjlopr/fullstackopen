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

  // Exercise 1.4 Changing pointers to parts Array
  return (
    <div>
      <Header course={course}/>

      <Content 
        part1={parts[0].name}
        part2={parts[1].name}
        part3={parts[2].name}
        exercises1={parts[0].exercises} 
        exercises2={parts[1].exercises} 
        exercises3={parts[2].exercises} 
      />
      
      <Total 
        exercises1={parts[0].exercises} 
        exercises2={parts[1].exercises} 
        exercises3={parts[2].exercises} 
      />
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
      <Part namex={props.part1} exercisex={props.exercises1} />
      <Part namex={props.part2} exercisex={props.exercises2} />
      <Part namex={props.part3} exercisex={props.exercises3} />
    </div>
  )
}

const Part = ({ namex, exercisex }) => {
  return (
    <p>{namex}, <i>{exercisex} exercises</i></p>
  )
}

const Total = (props) => {
  const total = props.exercises1 + props.exercises2 + props.exercises3
  console.log(props)
  
  return (
    <footer>
      <i>Total exercises: {total}</i>
    </footer>
  )
}


export default App