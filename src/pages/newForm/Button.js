import React from 'react'

const Button = ({color, text, onClick, isDisabled}) => {
  return (
    <button className={`btn btn-${color}`} onClick={onClick} disabled={isDisabled}>{text}</button>
  )
}

export default Button