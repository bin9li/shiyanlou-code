import React from 'react'
import ReactDOM from 'react-dom'
/* 
所有数据仍然耦合在App 组件中，
让该组件使用props 将必要的数据传递给每个组件。
  Header 负责显示课程的名称
，Content显示课程的章节及其练习的数量
，Total 显示练习的总数。


const Header = (props) => {
  return(
    <>
      <h1>{props.course}</h1> 
    </>
  )
  
}
const Content = (props) => {
  return(
    <>
      <p>
        {props.part} {props.exercises}
      </p>
    </>
  )
}
const Total = (props) => {
  return(
    <>
      <p>Number of exercises {props.sum}</p>
    </>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Header course={course} />
      <Content part={part1} exercises={exercises1} />
      <Content part={part2} exercises={exercises2} />
      <Content part={part3} exercises={exercises3} />
      <Total sum={exercises1+exercises2+exercises3} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
*/

const Header = (props) => {
  return(
    <>
      <h1>{props.course}</h1> 
    </>
  )
  
}
const Content = (props) => {
  return(
    <>
      <p>
        {props.parts[0].name} {props.parts[0].exercises}<br />
        {props.parts[1].name} {props.parts[1].exercises}<br />
        {props.parts[2].name} {props.parts[2].exercises}
      </p>
    </>
  )
}
const Total = (props) => {
  return(
    <>
      <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </>
  )
}
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

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))