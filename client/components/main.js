import React from 'react'

const Main = (props) => {
  return (
    <div>
      {props.categories.map((item) => (
        <div>{item}</div>
      ))}
    </div>
  )
}

export default Main
