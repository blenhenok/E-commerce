import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import LoginSignup from './pages/LoginSignup';
import Cart from './pages/Cart'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/womens' element={<ShopCategory category="womens"/>}/>
        <Route path='/mens' element={<ShopCategory category="mens"/>}/>
        <Route path='/kids' element={<ShopCategory category="kids"/>}/>
        <Route path='/product' element={<product/>}>
          <Route path=':productId' element={<product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
    </BrowserRouter>
  )
}
