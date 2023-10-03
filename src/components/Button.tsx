import React from 'react'

const Button=({...props})=> {
  return (

    <button onClick={props.onClick}
    className="
    rounded-md
    bg-blue-500 
    px-3 py-1.5 mb-2
    text-sm 
    font-semibold 
    leading-6
    text-white
    shadow-sm
    hover:bg-blue-700
    focus-visible:outline
    focus-visible:outline-2
    focus-visible:outline-offset-2
    focus-visible:outline-blue-600">
      {props.text} 
    </button>
  )
}

export default Button