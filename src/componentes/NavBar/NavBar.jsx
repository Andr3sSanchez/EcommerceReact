import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navbar'>
      <Link to={'/'}>
        <h1>Overall Store</h1>
      </Link>
        <ul>
          <li>
            <Link to={'/categoria/calzado'}> Calzado </Link>
          </li>
          <li>
          <Link to={'/categoria/remeras'}> Remeras </Link>
          </li>
          <li>
          <Link to={'/categoria/camperas'}> Camperas </Link>
          </li>
        </ul>
        <CartWidget />
    </div>
  )
}

export default NavBar