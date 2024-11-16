
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Whishlist from './pages/Whishlist'
import Cart from './pages/Cart'
import View from './pages/View'
import Pnf from './pages/Pnf'
import Footer from './Components/Footer'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/wishlist' element={<Whishlist/>} />
        <Route path='/cart' element={<Cart/>} />
        {/* dynamic routing :  id will be changed based on the pdt*/}
        <Route path='/:id/view' element={<View/>} />
        <Route path='/*' element={<Pnf/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
