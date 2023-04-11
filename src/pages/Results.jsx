import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast, Flip } from 'react-toastify';
import '../styles/Results.css';
import { useInView } from 'react-intersection-observer';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';



export default function Results() {
  const location = useLocation();
  const [searchResults, setSearchResults] = useState('');
  const { ref, inView } = useInView();
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState();
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');
  const [newSearchText, setNewSearchText] = useState('');
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = import.meta.env.VITE_SONG_API;

  useEffect(() => {
    if (!location.state || !location.state.searchText) {
      navigate('/search');
    } else
      setSearchText(location.state.searchText);
  }, [location]);


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
      console.log(response);
      setIsLoading(false);
      if (!response.data.hits.length && !searchResults.length) {
        toast.error('No results found', {
          ...toastSettings, onClose: () => {
            navigate('/search');
          }
        });
      } else if (!response.data.hits.length && searchResults.length)
        toast.error('End of search results', toastSettings);
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
    if (searchText) {
      setNewSearchText(searchText);
      songRequest();
    }
  }, [searchText, page]);

  useEffect(() => {
    if (inView)
      setPage((prev) => prev + 1);
  }, [inView]);

  const handleClick = (songID, songImage, songFullTitle) => {
    navigate('/lyrics', { state: { songID, songImage, songFullTitle } });
  };

  const handleSearchChange = (e) => {
    setNewSearchText(e.target.value);
  };

  const newSearchSubmit = (e) => {
    e.preventDefault();
    if (searchText !== newSearchText) {
      setSearchResults('');
      setSearchText(newSearchText);
    }
    else {
      toast.warn(`Already viewing ${searchText}`, toastSettings);
    }
  };

  return (
    <>
      <header>
        <NavBar loading={isLoading} />
      </header>
      <section className='search-con'>
        <h1>Results for {searchText}</h1>
        <SearchBar
          newSearchText={newSearchText}
          handleSearchChange={handleSearchChange}
          newSearchSubmit={newSearchSubmit}
        />
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
                onClick={() => handleClick(
                  song.result.id,
                  song.result.song_art_image_url,
                  song.result.full_title)}>
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
