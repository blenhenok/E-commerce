import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

const Navbar = () => {
    const [menu,setmenu] = useState("shop");
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt='' />
            <p>SHOPPER</p>
        </div>
        <ul className="nav-menu">
            <li onClick={() =>{setmenu("shop")}}> Shop {menu === "shop" ? <hr/> : <></>} </li>
            <li onClick={() =>{setmenu("womens")}}>Women {menu === "womens" ? <hr/> : <></>}</li>
            <li onClick={() =>{setmenu("mens")}}>Men {menu === "mens" ? <hr/> : <></>}</li>
            <li onClick={() =>{setmenu("kids")}}>Kids {menu === "kids" ? <hr/> : <></>}</li>
        </ul>
        <div className="nav-login-cart">
            <button>Login</button>
            <img src={cart_icon} alt='' />
            <p className='nav-cart-count'>0</p>
        </div>
    </div>
  )
}

export default Navbar