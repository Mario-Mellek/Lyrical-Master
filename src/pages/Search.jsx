import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Search.css';
import Logo from '../utils/lm.png';
import { IoMdMicrophone } from 'react-icons/io';


export default function Search() {
  const handlemic = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <header>
        <nav>
          <div className='logo'>
            <Link className='home-btn' to='/'><h1>Lyrical <span>Master</span></h1></Link>
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
          <form>
            <div className='text-cont'>
              <input type="text" name="song" id="song" placeholder='Search by artist or song name' />
              <button onClick={e => handlemic(e)} className='mic' title='press to speak'><IoMdMicrophone className='mic-icon' /></button>
            </div>
            <input className='form-btn' type="button" value="Search" />
          </form>
        </div>
        <img src={Logo} alt="logo image" />
      </section>

    </>
  );
}
