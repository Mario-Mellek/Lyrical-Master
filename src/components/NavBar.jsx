import React from 'react';
import { Link } from 'react-router-dom';
import { BarLoader } from 'react-spinners';
import PropTypes from 'prop-types';

export default function NavBar({ loading }) {
  const isLoading = loading || false;
  NavBar.propTypes = {
    loading: PropTypes.bool,
  };
  return (
    <>
      <nav>
        <div className='logo'>
          <Link className='home-btn' to='/'><h1>Lyrical<span>Master</span></h1></Link>
        </div>
        <div className='nav-list'>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/search'>Search</Link></li>
            <li><Link to='/credits'>About Me</Link></li>
          </ul>
        </div>
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
