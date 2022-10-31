import React from 'react'

const Multiplication = ({initialValue}) => {
  return (
    <div>
        <h1>Multiplication</h1>
        <span>{initialValue ?? 0}</span>
    </div>
  )
}

export default Multiplication