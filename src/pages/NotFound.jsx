import React from 'react';
import Logo from '../utils/lm.png';
import { Link } from 'react-router-dom';
import { MdOutlineWarningAmber } from 'react-icons/md';
import NavBar from '../components/NavBar';


export default function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <section className='hero'>
        <div className='description'>
          <h1>Lyrical<span>Master</span></h1>
          <p>
            This is an incorrect route, Check your url or go<span><Link to='/'>Home.</Link></span>
          </p>
          <MdOutlineWarningAmber className="warning-icon" />
        </div>
        <img src={Logo} alt="logo image" />
      </section>
    </>
  );
}
