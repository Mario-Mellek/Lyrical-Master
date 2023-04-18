import React from 'react';
import NavBar from '../components/NavBar';
import myImg from '../utils/myImage.jpg';
import '../styles/AboutMe.css';

export default function AboutMe() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <section className='hero'>
        <div className='description'>
          <h1>Mario<span>Mellek</span></h1>
          <p>
            Law graduate with a passion for developing functional, responsive, and user-friendly web applications.
            <br /> <br />
            Skilled in HTML, CSS, JavaScript, Git, React.js, Bootstrap, Tailwindcss, PostgreSQL, MongoDB, node.js, express.js and AWS.
            <br /><br />
            Taught full-stack web development to aspiring coders for a short period of time.
          </p>
          <p>
            Currently studying software engineering at ALX to further enhance my programming skills.
          </p>
        </div>
        <img src={myImg} alt="logo image" />
      </section>
    </>
  );
}
