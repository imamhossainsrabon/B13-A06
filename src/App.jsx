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

  
  return (
    <>

    <Navbar />
    <Banner />
    <Performance />

    <Products sendData={data} />

    <MeetTheTeam />
    <Pricing />
    <CallToAction />
    <Footer />


    </>
  )
}

export default App
