import React from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Team from './components/Team'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Services />
        <Team />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
