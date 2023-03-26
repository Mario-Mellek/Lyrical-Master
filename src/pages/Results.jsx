import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast, Flip } from 'react-toastify';
import '../styles/Results.css';
import { useInView } from 'react-intersection-observer';
import NavBar from '../components/NavBar';


export default function Results() {
  const location = useLocation();
  const [searchResults, setSearchResults] = useState('');
  const { ref, inView } = useInView();
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState();
  const navigate = useNavigate();
  const { searchText } = location.state || {};
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = import.meta.env.VITE_SONG_API;

  useEffect(() => {
    if (!location.state || !location.state.searchText) {
      navigate('/search');
    }
  }, [location]);


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
    params: { q: `${searchText}`, per_page: '10', page: `${page}` },
    headers: {
      'X-RapidAPI-Key': `${API_KEY}`,
      'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
    }
  };

  const songRequest = async () => {
    try {
      setIsLoading(true);
      const response = await axios.request(options);
      setSearchResults((prev) => [...prev, ...response.data.hits]);
      setIsLoading(false);
      if (response.data.hits.length === 0)
        toast.error('No results found', {
          ...toastSettings, onClose: () => {
            navigate('/search');
          }
        });
    } catch (error) {
      toast.error('something went wrong', {
        ...toastSettings, onClose: () => {
          navigate('/search');
        }
      });
      throw new Error('Something went wrong\n' + error);
    }
  };

  useEffect(() => {
    if (searchText)
      songRequest();
  }, [searchText, page]);

  useEffect(() => {
    if (inView)
      setPage((prev) => prev + 1);
  }, [inView]);

  const handleClick = (songID, songImage) => {
    navigate('/lyrics', { state: { songID, songImage } });
  };

  return (
    <>
      <header>
        <NavBar loading={isLoading} />
      </header>
      <section className='search-con'>
        <h1>Results for {searchText}</h1>
        <div className='results'>
          {searchResults.length > 0 && Object.values(searchResults).map((song, index) => {
            return (
              <div className='cards'
                key={index}
                ref={index === searchResults.length - 1 ? ref : null}
                style={(song.result.song_art_image_url) ?
                  { backgroundImage: `url(${song.result.song_art_image_url})` }
                  :
                  { backgroundColor: 'black' }}
                onClick={() => handleClick(song.result.id, song.result.song_art_image_url)}>
                <p className='full-name'>{(song.result.full_title)}</p>
                <div className='song-info'>
                  <p>Artist: {(song.result.artist_names)}</p>
                  <p>Song: {(song.result.title)}</p>
                </div>
              </div>
            );
          })}
        </div>
        <ToastContainer />
      </section>
    </>
  );
}
