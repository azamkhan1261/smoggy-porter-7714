import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Carousel from './Carousel'
import ScrollButton from './ScrollButton'

function HomePage() {
  return (
    <div >
        {/* <Navbar/> */}
        <Carousel/>
        <Footer/>
        <ScrollButton/>
    </div>
  )
}

export default HomePage