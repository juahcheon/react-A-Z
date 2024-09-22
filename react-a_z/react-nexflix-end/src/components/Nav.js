import React, { useState, useEffect } from 'react';
import './Nav.css'

function Nav() {

  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  
    return () => {
      window.removeEventListener('scroll', () => {});
    }
  }, []);
  

  return (
    <nav className={`nav ${show && 'nav__black'}`}>
      <img
        alt='Netflix logo'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Netflix_Logomark.png/640px-Netflix_Logomark.png'
        className='nav__logo'
        onClick={() => window.location.reload()}
      />
      <img
        alt='User logged'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Netflix-avatar.png/640px-Netflix-avatar.png'
        className='nav__avatar'
      />
    </nav>
  )
}

export default Nav;