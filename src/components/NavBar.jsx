import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BarLoader } from 'react-spinners';
import PropTypes from 'prop-types';
import '../styles/NavBar.css';

export default function NavBar({ loading }) {
  const [viewNav, setViewNav] = useState(false);
  const isLoading = loading || false;
  NavBar.propTypes = {
    loading: PropTypes.bool,
  };

  const toggle = () => {
    setViewNav((prev) => !prev);
  };
  return (
    <>
      <nav>
        <div className='logo'>
          <Link className='home-btn' to='/'><h1>Lyrical<span>Master</span></h1></Link>
        </div>
        <div className={`nav-list ${viewNav ? 'expand' : ''}`}>
          <ul>
            <li><NavLink activeclassname="active" to='/'>Home</NavLink></li>
            <li><NavLink activeclassname="active" to='/search'>Search</NavLink></li>
            <li><NavLink activeclassname="active" to='/credits'>About Me</NavLink></li>
          </ul>
        </div>
        <button onClick={toggle} className='nav-toggle'>Menu</button>
      </nav>
      <BarLoader
        color={'rgb(224, 0, 0)'}
        loading={isLoading}
        cssOverride={
          {
            margin: '0 auto',
            width: '90vw',
            background: 'transparent',
            borderBottomLeftRadius: '1rem',
            borderBottomRightRadius: '1rem'
          }
        }
        aria-label="Loading Spinner"
        data-testid="loader"
        speedMultiplier={1}
      />
    </>
  );
}
