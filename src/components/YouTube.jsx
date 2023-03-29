import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import '../styles/YouTube.css';

export default function YouTube({ videoURL }) {
  const [video, setVideo] = useState('');
  const [songID, setSongID] = useState('');
  const VITE_G_API_KEY = import.meta.env.VITE_G_API_KEY;
  const VITE_VID_URL = import.meta.env.VITE_VID_URL;

  YouTube.propTypes = {
    videoURL: PropTypes.string,
  };

  const getID = (url) => {
    if (url) {
      const id = url.split('v=')[1];
      setSongID(id);
    }
  };

  const songVideo = {
    method: 'GET',
    url: `${VITE_VID_URL}`,
    params: {
      part: 'player',
      id: `${songID}`,
      key: `${VITE_G_API_KEY}`
    }
  };

  const videoRequest = async () => {
    try {
      const response = await axios.request(songVideo);
      setVideo(response.data.items[0].player.embedHtml);
    } catch (error) {
      throw new Error('Something went wrong\n' + error);
    }
  };

  useEffect(() => {
    getID(videoURL);
  }, [videoURL]);

  useEffect(() => {
    if (songID)
      videoRequest();
  }, [songID]);

  return (
    <>
      {video ? <div className='video' dangerouslySetInnerHTML={{ __html: video }} /> : <h2>Loading</h2>}
    </>
  );
}
