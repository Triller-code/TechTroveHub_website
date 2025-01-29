import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardCarousel from './CardCarousel.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
    <CardCarousel/>

    </>
  )
}

export default App
