import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <div className='logo'>
        <Link className='home-btn' to='/'><h1>Lyrical<span>Master</span></h1></Link>
      </div>
      <div className='nav-list'>
        <ul>
          <li>lorem</li>
          <li>ipsum</li>
          <li>dolor</li>
        </ul>
      </div>
    </nav>
  );
}
