const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>

      <Content 
        part1={part1}
        part2={part2}
        part3={part3}
        exercises1={exercises1} 
        exercises2={exercises2} 
        exercises3={exercises3} 
      />
      
      <Total 
        exercises1={exercises1} 
        exercises2={exercises2} 
        exercises3={exercises3} 
      />
    </div>
  )
}

const Header = (props) => {  
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

// Exercise 1.2 – Independent Part & Content components 
const Content = (props) => {
  return (
    <div>
      <Part name={props.part1} exercises={props.exercises1} />
      <Part name={props.part2} exercises={props.exercises2} />
      <Part name={props.part3} exercises={props.exercises3} />
    </div>
  )
}

// Using Destructuring
const Part = ({ name, exercises }) => {
  return (
    <p>{name}, <i>{exercises} exercises</i></p>
  )
}

const Total = (props) => {
  const total = props.exercises1 + props.exercises2 + props.exercises3

  return (
    <footer>
      <i>Total exercises: {total}</i>
    </footer>
  )
}


export default App