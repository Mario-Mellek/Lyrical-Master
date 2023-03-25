import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import '../styles/Home.css';
import Logo from '../utils/lm.png';

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
            Lyrical<span>Master</span> is a free service where you can find the lyrics for your favorite songs
          </p>
          <p>
            Start searching and sing along your favorite songs <span>NOW</span>.
          </p>
          <Link to='/search'><button>Search Lyrics</button></Link>
        </div>
        <img src={Logo} alt="logo image" />
      </section>
    </>
  );
}
