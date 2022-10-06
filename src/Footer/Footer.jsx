import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import './Footer.css'

export const Footer = () => {
  return (
    <footer className='footer'>
      <ul className='footer__social'>
        <li ><a href="https://github.com/CamiloFernandez" target="_blank"><FaGithub className='footer__social-icon'/></a></li>
        <li ><a href="https://www.linkedin.com/in/camilo-fernandez-dev/" target="_blank"><FaLinkedin className='footer__social-icon'/></a></li>
      </ul>
    </footer>
  )
}
