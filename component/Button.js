import React from 'react'
import { useNavigate } from 'react-router-dom'
function Button(prop) {

    let Navigate=useNavigate();

  return (
   <button className='button' onClick={()=>{
      Navigate(prop.path ,{state:{ names : prop.stat}})
   }} >{prop.label}</button>
  )
}

export default Button