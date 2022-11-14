import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {FaUser} from 'react-icons/fa'
import {AiFillCheckCircle} from 'react-icons/ai'
import {FaSuitcase} from 'react-icons/fa'
import {RiContactsBook2Fill} from 'react-icons/ri'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FaHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><AiFillCheckCircle /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><FaSuitcase /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiContactsBook2Fill /></a>
    </nav>
  )
}

export default Nav