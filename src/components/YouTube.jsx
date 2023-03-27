import React from 'react';
import PropTypes from 'prop-types';

export default function YouTube({ videoURL }) {
  YouTube.propTypes = {
    videoURL: PropTypes.string,
  };
  return (
    videoURL && <div><a href={`${videoURL}`} rel="noreferrer" target={'_blank'}>YouTube Video</a></div>
  );
}
