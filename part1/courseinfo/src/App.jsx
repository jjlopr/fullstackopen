const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>

      <Content 
        part1={part1.name}
        part2={part2.name}
        part3={part3.name}
        exercises1={part1.exercises} 
        exercises2={part2.exercises} 
        exercises3={part3.exercises} 
      />
      
      {/* <Total 
        exercises1={exercises1} 
        exercises2={exercises2} 
        exercises3={exercises3} 
      /> */}
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

// Exercise 1.2 – Independent Part & Content components 
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

// Using Destructuring
const Part = ({ namex, exercisex }) => {
  return (
    <p>{namex}, <i>{exercisex} exercises</i></p>
  )
}

// const Total = (props) => {
//   const total = props.exercises1 + props.exercises2 + props.exercises3
//   console.log(props)
  
//   return (
//     <footer>
//       <i>Total exercises: {total}</i>
//     </footer>
//   )
// }


export default App