import React, { useState } from 'react';
import { CgAsterisk } from 'react-icons/cg';

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
    <section className='hero'>
      <div className='description'>
        <h1>Contact me</h1>
        <br />
        <form
          data-netlify="true"
          name="Lyrical-Master"
          method="POST"
          onSubmit={handleSubmit}
          className='contactMe-form'
        >
          <input type="hidden" name='form-name' value='Lyrical-Master' />
          <div>
            <label htmlFor="name">Name<CgAsterisk /></label>
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
            <label htmlFor="email">E-mail<CgAsterisk /></label>
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
              pattern='[0-9]{11}'
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="message">Message<CgAsterisk /></label>
            <textarea
              id='message'
              name='message'
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              cols="30"
              rows="10"
            />
          </div>
          <button type='submit'>Send</button>
        </form>
      </div>
      <iframe
        className='map'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.33664985907!2d31.217178984987942!3d30.05955628983808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1683285839015!5m2!1sen!2seg"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </section>
  );
}
