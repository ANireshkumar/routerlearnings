// creating the nav bar 

import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
<>
<div className="navbar">
  <h1>My Website</h1>
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/Contact">Contact</Link></li>
    <li><Link to="/products">Products</Link></li>
    <li><Link to="/login">Login</Link></li>
  </ul>
</div>

</>
  )
}

export default Navbar