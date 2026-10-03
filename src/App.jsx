const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  const total =
    props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
  return <p>Number of units {total}</p>
}

const Footer = (props) => {
  return (
    <footer>
      <p>
        {props.name} - {props.courseCode} - {props.section}
      </p>
    </footer>
  )
}

const App = () => {
  const course = 'CSIT340 Industry Elective 1'
  const parts = [
    {
      name: 'IT332 Capstone and Research 1',
      exercises: 3
    },
    {
      name: 'CSIT335 Testing and Quality Assurance',
      exercises: 3
    },
    {
      name: 'IT386 Information Assurance and Security 2',
      exercises: 3
    }
  ]

  const studentName = 'Christian Earl V. Mahumot'
  const courseCode = 'CSIT340'
  const section = 'G01'

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
      <Footer name={studentName} courseCode={courseCode} section={section} />
    </div>
  )
}

export default App