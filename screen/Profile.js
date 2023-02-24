import React from 'react'
import {useLocation} from 'react-router-dom'
function Profile() {
    let Location=useLocation();
  return (

    <div><p>hello this is profile page and this is passed data==> {Location.state.id}</p></div>
  ) 
}

export default Profile