import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import shop from './pages/shop'
import shopCategory from './pages/shopCategory'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<shop/>}/>
        <Route path='/womens' element={<shopCategory category="womens"/>}/>
        <Route path='/mens' element={<shopCategory category="mens"/>}/>
        <Route path='/kids' element={<shopCategory category="kids"/>}/>
        <Route path='/product' element={<product/>}>
          <Route path=':productId' element={<product/>}/>
        </Route>
        <Route path='/cart' element={<cart/>}/>
        <Route path='/login' element={<loginSignup/>}/>
      </Routes>
    </BrowserRouter>
  )
}
