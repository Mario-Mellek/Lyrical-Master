import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast, Flip } from 'react-toastify';
import axios from 'axios';

export default function Lyrics() {
  const location = useLocation();
  const navigate = useNavigate();
  const [lyrics, setLyrics] = useState('');
  const [isLoading, setIsLoading] = useState();
  const { songID, songImage } = location.state || {};
  const API_KEY = import.meta.env.VITE_API_KEY
  const API_URL = import.meta.env.VITE_LYRICS_API


  const toastSettings = {
    position: 'bottom-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark',
    transition: Flip,
  };

  const options = {
    method: 'GET',
    url: `${API_URL}`,
    params: { id: `${songID}` },
    headers: {
      'X-RapidAPI-Key': `${API_KEY}`,
      'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
    }
  };

  useEffect(() => {
    if (!location.state || !location.state.songID) {
      navigate('/search');
    }
  }, [location]);

  useEffect(() => {
    if (songID)
      lyricsRequest();
  }, [songID]);

  const lyricsRequest = async () => {
    try {
      setIsLoading(true);
      const response = await axios.request(options);
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
      toast.error('something went wrong', {
        ...toastSettings, onClose: () => {
          navigate('/search');
        }
      });
      throw new Error('Something went wrong\n' + error);
    }
  };

  return (
    <>
      <header>
        <NavBar loading={isLoading} />
      </header>
      <section>
        <div><img src={songImage} alt="song-image" /></div>
        <div>
          <p dangerouslySetInnerHTML={{ __html: lyrics }} />
        </div>
        <ToastContainer />
      </section>
    </>
  );
}
