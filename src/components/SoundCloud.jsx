import React from 'react';
import PropTypes from 'prop-types';
import { ImSoundcloud } from 'react-icons/im';
import '../styles/SoundCloud.css';



export default function SoundCloud({ soundURL }) {


  SoundCloud.propTypes = {
    soundURL: PropTypes.string,
  };

  return (
    soundURL && <div className='SoundCloud-container'>
      <a href={soundURL} rel="noreferrer" target='_blank'>
        <button title='Listen on SoundCloud'>
          <ImSoundcloud className='soundClound-icon' />
        </button>
      </a>
    </div>
  );
}
