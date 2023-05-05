import React, { useState } from 'react';
import { CgAsterisk } from 'react-icons/cg';

export default function ContactMe() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  /* global fetch */
  /* global alert */

  const messageSettings = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({ 'form-name': 'contact', name, email, phone, message }),
  };

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/', messageSettings)
      .then(() => {
        alert('Message Sent');
        setEmail(''); setMessage(''); setName(''); setPhone('');
      })
      .catch((error) => alert(error));
  };



  return (
    <section className='hero'>
      <div className='description'>
        <h1>Contact me</h1>
        <form
          data-netlift='true'
          name='contact'
          method='post'
          onSubmit={handleSubmit}
        >
          <input type="hidden" name='form-name' value='Contact' />
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
      {/* <img className='myImg' src={myImg} alt="My Image" /> */}
    </section>
  );
}
