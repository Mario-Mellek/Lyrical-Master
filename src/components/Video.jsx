import React from 'react';

export default function Video() {
  return (
    <div>
      <video id="background-video" autoPlay loop muted>
        <source src="https://assets.codepen.io/6093409/river.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
