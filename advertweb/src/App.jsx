import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Carousel from './Carousel'
import Footer from './Footer'
const App = () => {
  return (
    <div className='app'>
<Carousel/>
<Navbar/>
<Footer/>
    </div>
  )
}

export default App