import React from 'react'

function Button (props) {
 
  return (
    <button
      onClick={props.onClick}
      className={props.classes}     
    >
      {props.children}
    </button>
  )
}

export default Button