import React from 'react'
import { NavLink } from "react-router-dom"
import "./Header.css"

const Header = () => {

    return (
        <header>
          <h1 className='title'>Pot Spot</h1>
          <h2 className='title'>Denver, CO</h2>
          <NavLink to={'/statusBoard'} ><button>Status Board</button></NavLink>
          <NavLink to={'/'} ><button>Home</button></NavLink>
        </header>
    )
}

export default Header