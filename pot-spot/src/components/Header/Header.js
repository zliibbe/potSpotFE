import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = (props) => {
  let button = props.home ? <NavLink to='/home'><button className='header-button'>Home</button></NavLink> : <NavLink to='/statusboard'><button className='header-button'>Status Board</button></NavLink>;
  return (
    <header>
      <div>
        <h1 className='title'>Pot Spot</h1>
        <h2 className='title-location'>Denver, CO</h2>
      </div>
      {button}
    </header>
  )
}

export default Header