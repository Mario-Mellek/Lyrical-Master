import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Search.css';
import Logo from '../utils/lm.png';
import { IoMdMicrophone } from 'react-icons/io';
import 'regenerator-runtime/runtime';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


export default function Search() {

  const { transcript,
    // resetTranscript
  } = useSpeechRecognition();
  const [searchText, setSearchText] = useState('');

  const handlechange = (e) => {
    setSearchText(e.target.value);
  };


  useEffect(() => {
    setSearchText(transcript);
  }, [transcript]);

  const handlemic = (e) => {
    e.preventDefault();
    SpeechRecognition.startListening({
      continuous: false,
    });
  };
  return (
    <>
      <header>
        <nav>
          <div className='logo'>
            <Link className='home-btn' to='/'><h1>Lyrical
              <span>Master</span></h1></Link>
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
              <input onChange={e => handlechange(e)}
                value={searchText}
                type="text"
                name="song"
                id="song"
                placeholder='Search by artist or song name' />
              <button onClick={e => handlemic(e)}
                className='mic'
                title='press to speak'>
                <IoMdMicrophone className='mic-icon' />
              </button>
            </div>
            <input className='form-btn' type="button" value="Search" />
          </form>
        </div>
        <img src={Logo} alt="logo image" />
      </section>

    </>
  );
}
