
import React from 'react'
import { Route, HashRouter as Router,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './Pages/Cart'
import Contact from './pages/Contact'
import AboutUs from './pages/AboutUs'
import Shop from './pages/Shop'
import Footer from './components/Footer'
import Headerp from './components/Headerp'

const App = () => {
  return (
    <div>
      <Router>
       <Headerp/>
      
      <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/cart' element={<Cart/>}/>
     <Route path='/shop' element={<Shop/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path='/about' element={<AboutUs/>}/>
      </Routes>
      <Footer/>
      </Router>

    </div>
  )
}

export default App
