import React, { useState } from 'react';
import { CgAsterisk } from 'react-icons/cg';
import '../styles/ContactMe.css';
import { TbMessages } from 'react-icons/tb';

export default function ContactMe() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  /* global fetch */
  /* global alert */

  //TODO: style map and contactMe-form

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'Lyrical-Master', name, email, phone, message }),
    })
      .then(() => {
        alert('Message Sent');
        setEmail(''); setMessage(''); setName(''); setPhone('');
      })
      .catch((error) => alert(error));
  }

  return (
    <section className='hero contactMe-section'>
      <div className='description'>
        <h1>Contact me<span> <TbMessages /></span></h1>
        <br /><br />
        <form
          data-netlify="true"
          name="Lyrical-Master"
          method="POST"
          onSubmit={handleSubmit}
          className='contactMe-form'
        >
          <input type="hidden" name='form-name' value='Lyrical-Master' />
          <div>
            <label htmlFor="name">Name<CgAsterisk className='asterisk' /></label>
            <input
              id='name'
              name='name'
              type="text"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">E-mail<CgAsterisk className='asterisk' /></label>
            <input
              id='email'
              name='email'
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="number">Phone number</label>
            <input
              id='number'
              name='number'
              type='tel'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="message">Message<CgAsterisk className='asterisk' /></label>
            <textarea
              id='message'
              name='message'
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              cols="25"
              rows="5"
            />
          </div>
          <button className='contactForm-btn' type='submit'>Send</button>
        </form>
      </div>
      <iframe
        className='map'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17273.01998483662!2d31.326682109539824!3d30.122550356459897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145815963961a195%3A0x7cdcd1f2d3971c77!2sAin%20Shams%2C%20Cairo%20Governorate!5e1!3m2!1sen!2seg!4v1683298220619!5m2!1sen!2seg"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </section>
  );
}
