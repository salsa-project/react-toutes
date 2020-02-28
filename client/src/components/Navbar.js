import React, {useState, useEffect} from 'react'
import {Link, NavLink} from 'react-router-dom'

function Navbar(){

  return(
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/2">Blog</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  )
}

export default Navbar
