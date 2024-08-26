import React, { useEffect, useState,  useContext} from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'


const NavBar = () => {

  const [categories, setCategories] = useState([])
  
  useEffect(()=> {

  }, [])

  return (
    <div className='navbar'>
      <Link to={'/'}>
        <h1>Overall Store</h1>
      </Link>

      {categories?.map(e=>{
        return (
          <Link key={e} to={`/categoria/${e}`}>{e}</Link>
        )
      })

      }
        {<ul>
          <li>
            <Link to={'/categoria/calzado'}> Calzado </Link>
          </li>
          <li>
          <Link to={'/categoria/remeras'}> Remeras </Link>
          </li>
          <li>
          <Link to={'/categoria/camperas'}> Camperas </Link>
          </li>
        </ul>}

        <Link to='/cart'>
        <CartWidget />
      </Link>
    </div>
  )
}

export default NavBar