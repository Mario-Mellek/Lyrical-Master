import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Search.css';
import Logo from '../utils/lm.png';
import { IoMdMicrophone } from 'react-icons/io';
import 'regenerator-runtime/runtime';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Search() {

  const { transcript } = useSpeechRecognition();
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();
  const toastSettings = {
    position: 'bottom-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark',
    transition: Flip
  };

  useEffect(() => {
    setSearchText(transcript);
  }, [transcript]);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleMic = (e) => {
    e.preventDefault();
    SpeechRecognition.startListening({
      continuous: false,
    });
  };

  const handleValidation = () => {
    if (searchText.length == 0)
      return false;
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation())
      navigate('/results', { state: { searchText } });
    else
      toast.error('No input detected !', toastSettings);
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
          <form onSubmit={e => handleSubmit(e)}>
            <div className='text-cont'>
              <input onChange={e => handleChange(e)}
                value={searchText}
                type="text"
                name="song"
                id="song"
                placeholder='Search by artist or song name' />
              <button onClick={e => handleMic(e)}
                className='mic'
                title='press to speak'>
                <IoMdMicrophone className='mic-icon' />
              </button>
            </div>
            <input className='form-btn' type="submit" value="Search" />
          </form>
        </div>
        <img src={Logo} alt="logo image" />
        <ToastContainer />
      </section>
    </>
  );
}
