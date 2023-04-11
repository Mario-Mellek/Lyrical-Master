import React from 'react';
import NavBar from '../components/NavBar';
import Logo from '../utils/lm.png';

export default function AboutMe() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <section className='hero'>
        <div className='description'>
          <h1>Mario<span>Mellek</span></h1>
        </div>
        <img src={Logo} alt="logo image" />
      </section>
    </>
  );
}
