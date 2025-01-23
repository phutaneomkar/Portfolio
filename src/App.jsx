import React from 'react'
import './index.css'
import { Navbar } from './Components/Navbar/Navbar'
import { Hero } from './Components/Hero/Hero'
import { About } from './Components/About/About'
import { Work } from './Components/Work/Work'


export const App = () => {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <About/>
     <Work/>
    </div>
  )
}
