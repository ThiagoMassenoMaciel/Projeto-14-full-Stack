import React from 'react'
import spotifyLogo from '../assets/logo/spotify-logo.svg'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='header'>
      <Link to="/">
        <img style={{width:'40px', height:'40px'}} src={spotifyLogo} alt="logo" />
      </Link>
      
      <Link  to="/" className='header__link'>
        <h1>Spotify</h1>
      </Link>
    </div>
  )
}

export default Header