import React from 'react'
import Navbar from './Components/Navbar'
import Article from './Components/Article'
import Cohorts from './pages/Cohorts'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Article/>
      <Cohorts/>
      <Footer/>
    </div>
  )
}

export default App
