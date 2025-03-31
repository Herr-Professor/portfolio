import React from 'react'
import Skills from './components/Skills/Skills'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Articles from './components/Articles/Articles'
import Projects from './components/Projects/Projects'
import Work from './components/Work/Work'
import css from './styles/App.module.scss'
const App = () => {
  
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header/>
      <Hero/>
      <Skills/>
      <Work/>
      <Articles/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App
