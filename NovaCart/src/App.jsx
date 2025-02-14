import { useState } from 'react'
import './App.css'
import CardCarousel from './components/CardCarousel.jsx'
import Card from './components/Cards.jsx'
import Navbar from './components/Dashboard.jsx'
import ProductGrid from './components/CardCarousel.jsx'
import Testimonials from "./components/Testimonials.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Home from './components/Home.jsx'
import Footer from  './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <main>
   
       
       
       
      </main>
      <Home/>
      <ProductGrid />
    
      <Testimonials />
      <AboutUs />
      <Footer/>

    </> 
  )
}

export default App







