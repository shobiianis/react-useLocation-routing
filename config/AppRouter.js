import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Navbar from '../component/Navbar'
import Home from '../screen/Home'
import Profile from '../screen/Profile'
import User from '../screen/User'



function AppRouter() {
  return (
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/User" element={<User />} />
   </Routes>
  
  </BrowserRouter>    
  )
}

export default AppRouter