import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  let Navigate = useNavigate()
  let   gotoHome = () => {   
    Navigate('/')
   }

  let   gotoUsers = () => {   
    Navigate('/User')
   }

   let   gotoProfile = () => {   
    Navigate('/Profile', {state: {id: 1}})
   }
   


  return (
    <div className='flex'>  
    <button onClick={gotoHome}>Home</button>
    <button onClick={gotoUsers}>Users</button>
    <button onClick={gotoProfile}>Profile</button>   

    </div>
  )
}

export default Navbar