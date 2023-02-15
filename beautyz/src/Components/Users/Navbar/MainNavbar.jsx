import React from 'react'
import Navbar from './Navbar'
import SubNavbar from './SubNavbar'
import { UpperNav } from './UpperNav'
const MainNavbar = () => {
  return (
    <div>
      <UpperNav/>
      <Navbar/>
      <SubNavbar/>
    </div>
  )
}

export default MainNavbar