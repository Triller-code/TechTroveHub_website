import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Styles.css'
import CardCarousel from './CardCarousel.jsx'
import Dashboard from './Dashboard.jsx'
import Products from './Products.jsx'
import RelatedProducts from './Related.jsx'
import AboutUs from './AboutUs.jsx'
import Footer from './footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Dashboard/> 
     <CardCarousel/>
     <Products/>
     <RelatedProducts/>
     <AboutUs/>
     <Footer/>
    
    </>
  )
}

export default App
