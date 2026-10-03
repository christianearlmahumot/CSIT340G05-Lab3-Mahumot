const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p className="part">
      {props.part.name} <span>{props.part.exercises}</span>
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
  return <p className="total">Number of units {total}</p>
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
  const course = {
    name: 'CSIT340 Industry Elective 1',
    parts: [
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
  }

  const studentName = 'Christian Earl V. Mahumot'
  const courseCode = 'CSIT340'
  const section = 'G01'

  return (
    <div className="course">
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <Footer name={studentName} courseCode={courseCode} section={section} />
    </div>
  )
}

export default App