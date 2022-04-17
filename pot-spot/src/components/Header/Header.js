import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = (props) => {
  let button = props.home ? <Link to='/home'><h3 className='header-button'>Home</h3></Link> : <Link to='/statusboard'><h3 className='header-button'>Status Board</h3></Link>;
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
