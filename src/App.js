import React from 'react'
import{Cta,Brand,Navbar} from './components';
import {Features,Header,Footer,Possibility,Blog,WhatGPT3} from './containers';
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar/>
        <Header/>
      </div>
        <Brand/>
        <Possibility/>
        <Features/>
        <WhatGPT3/>
        <Cta/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default App
