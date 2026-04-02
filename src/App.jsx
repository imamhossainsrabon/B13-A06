
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import MeetTheTeam from './components/MeetTheTeam'
import Navbar from './components/Navbar'
import Performance from './components/Performance'
import Pricing from './components/Pricing'
import Products from './components/Products'



const loadData = async ()=> {
  const res = await fetch("/Data.json")
  return res.json()
}

const data = loadData()

function App() {

  const [cart, setCart] = useState([])
  return (
    <>

    <Navbar cart={cart} />
    <Banner />
    <Performance />

    <Products cart={cart} setCart={setCart} sendData={data} />

    <MeetTheTeam />
    <Pricing />
    <CallToAction />
    <Footer />


    </>
  )
}

export default App
