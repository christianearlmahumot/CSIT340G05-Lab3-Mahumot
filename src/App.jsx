const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (
    <div>
      <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p>
    </div>
  )
}

const Total = (props) => {
  return <p>Number of units {props.total}</p>
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
  const part1 = 'IT332 Capstone and Research 1'
  const exercises1 = 3
  const part2 = 'CSIT335 Testing and Quality Assurance'
  const exercises2 = 3
  const part3 = 'IT386 Information Assurance and Security 2'
  const exercises3 = 3

  const studentName = 'Christian Earl V. Mahumot'
  const courseCode = 'CSIT340'
  const section = 'G01'

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />
      <Total total={exercises1 + exercises2 + exercises3} />
      <Footer name={studentName} courseCode={courseCode} section={section} />
    </div>
  )
}

export default App