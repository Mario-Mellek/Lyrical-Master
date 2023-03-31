import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast, Flip } from 'react-toastify';
import axios from 'axios';
import '../styles/Lyrics.css';
import { FaWindowClose } from 'react-icons/fa';
import YouTube from '../components/YouTube';
import SoundCloud from '../components/SoundCloud';

export default function Lyrics() {
  const location = useLocation();
  const navigate = useNavigate();
  const [lyrics, setLyrics] = useState('');
  const [isLoading, setIsLoading] = useState();
  const [showInfo, setShowInfo] = useState(false);
  const [info, setInfo] = useState('');
  const { songID, songImage, songFullTitle } = location.state || {};
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = import.meta.env.VITE_LYRICS_API;
  const API_URL_INFO = import.meta.env.VITE_INFO_API;
  const [description, setDescription] = useState('');

  const toastSettings = {
    position: 'bottom-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark',
    transition: Flip,
  };

  const songLyrics = {
    method: 'GET',
    url: `${API_URL}`,
    params: { id: `${songID}` },
    headers: {
      'X-RapidAPI-Key': `${API_KEY}`,
      'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
    }
  };

  const songInfo = {
    method: 'GET',
    url: `${API_URL_INFO}`,
    params: { id: `${songID}` },
    headers: {
      'X-RapidAPI-Key': `${API_KEY}`,
      'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
    }
  };

  const toggleInfo = () => {
    setShowInfo((prev) => !prev);
    if (!showInfo && description === '<h2>No Description found</h2>') {
      toast.error('No Description found', {
        ...toastSettings, onClose: () => {
          setShowInfo(false);
        }
      });
    }
  };

  useEffect(() => {
    if (!location.state || !location.state.songID) {
      navigate('/search');
    }
  }, [location]);

  useEffect(() => {
    if (songID) {
      lyricsRequest();
      infoRequest();
    }
  }, [songID]);

  const lyricsRequest = async () => {
    try {
      setIsLoading(true);
      const response = await axios.request(songLyrics);
      setLyrics(response.data.lyrics.lyrics.body.html);
      setIsLoading(false);
      if (!response.data.lyrics.lyrics.body.html) {
        toast.error('No results found', {
          ...toastSettings, onClose: () => {
            navigate('/search');
          }
        });
      }
    } catch (error) {
      toast.error(error.response.data.message.split(', ')[0], {
        ...toastSettings, autoClose: 5000, onClose: () => {
          navigate('/search');
        }
      });
      throw new Error('Something went wrong\n' + error);
    }
  };
  const infoRequest = async () => {
    try {
      const response = await axios.request(songInfo);
      setInfo(response.data.song);
      response.data.song.description.html === '<p>?</p>' ?
        setDescription('<h2>No Description found</h2>')
        :
        setDescription(response.data.song.description.html);
    } catch (error) {
      throw new Error('Something went wrong\n' + error);
    }
  };

  return (
    <>
      <header>
        <NavBar loading={isLoading} />
      </header>
      <section className='lyrics-con'>
        <div className={`infoWrapper ${showInfo ? null : 'hidden'}`}>
          <div className={`info-Container ${showInfo ? null : 'hidden'}`}>
            <FaWindowClose className='close' onClick={() => setShowInfo(false)} />
            <h1>{songFullTitle}</h1>
            <p dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        </div>
        <div className='song-image'>
          <div className='songInfo'>
            <h2>{songFullTitle}</h2>
            <YouTube videoURL={info.youtube_url} />
            <div className='media-wrapper'>
              <SoundCloud soundURL={info.soundcloud_url} />
              {description && <button onClick={toggleInfo}>More about {songFullTitle}</button>}</div>
          </div>
          <img src={songImage} alt="song-image" />
        </div>
        <div className='lyrics-wrapper'>
          <div className='song-lyrics'>
            <p dangerouslySetInnerHTML={{ __html: lyrics }} />
          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  );
}
