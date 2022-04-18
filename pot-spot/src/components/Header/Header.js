import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = (props) => {
  let button = props.home ? <Link to='/home'><button className='header-button'>Home</button></Link> : <Link to='/statusboard'><button className='header-button'>Status Board</button></Link>;
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
