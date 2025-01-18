import React from 'react'
import { Header, Navbar, Location, Activity, Popular, Shared, Testimonials, News, Footer } from "./components"

const App = () => {
  return (
    <>
      <div className="title__container">
        <Navbar />
        <Header />
      </div>
      <div className='app__container'>
        <Location />
        <Activity />
        <Popular />
        <Shared />
        <Testimonials />
      </div>
      <News />
      <Footer/>
    </>
  )
}

export default App
