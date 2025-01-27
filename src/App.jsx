import React from 'react'
import './index.css'
import { Navbar } from './Components/Navbar/Navbar'
import { Hero } from './Components/Hero/Hero'
import { Work } from './Components/Work/Work'
import Footer from './Components/Footer/Footer'
// import { About } from './Components/About/About'
import Experience from './Components/Education/education'
import Contact from './Components/Contact/contact'



export const App = () => {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <Work/>
     {/* <About/> */}
      <Experience/> 
     <Contact/>
    <Footer/>

    </div>
  )
}
