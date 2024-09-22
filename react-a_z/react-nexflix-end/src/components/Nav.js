import React from 'react'

function Nav() {
  return (
    <nav>
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