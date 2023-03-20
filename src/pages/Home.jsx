import React from 'react';
import '../styles/Home.css';
import Logo from '../utils/lm.png';

export default function Home() {
  return (
    <>
      <header>
        <nav>
          <div className='logo'>
            <h1>Lyrical <span>Master</span></h1>
          </div>
          <div className='nav-list'>
            <ul>
              <li>Lorem</li>
              <li>ipsum</li>
              <li>dolor</li>
            </ul>
          </div>
        </nav>
      </header>
      <section className='hero'>
        <div className='description'>
          <h1>Lyrical<span>Master</span></h1>
          <p>
            Lyrical<span>Master</span> is a free service where you can find the lyrics for your favorite songs
          </p>
          <p>
            Start searching and sing along your favorite songs <span>NOW</span>.
          </p>
          <button>Search Lyrics</button>
        </div>
        <img src={Logo} alt="logo image" />
      </section>
    </>
  );
}
