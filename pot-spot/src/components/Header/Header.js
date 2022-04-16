import React from 'react';
import { Link } from 'react-router-dom';
const Header = (props) => {
  let button = props.home ? <Link to='/home'><button className='home-button'>Home</button></Link> : '' ;
    return (
        <header>
          <h1 className='title'>Pot Spot</h1>
          <h2 className='title'>Denver, CO</h2>
          {button}
        </header>
    )
}

export default Header
