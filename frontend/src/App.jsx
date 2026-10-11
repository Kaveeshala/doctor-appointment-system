import React from 'react'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className = 'mx-4 sm:mx-[10%]'>
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/about' element = {<About />} />
        <Route path = '/contact' element = {<Contact />} />
        <Route path = '/login' element = {<Login />} />
        <Route path = '/my-profile' element = {<MyProfile />} />
        <Route path = '/my-appointments' element = {<MyAppointments />} />
        <Route path = '/doctors' element = {<Doctors />} />
      </Routes>
    </div>
  )
}

export default App