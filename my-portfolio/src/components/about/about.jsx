import React from 'react'
import './about.css'
import ME from '../../assets/me1.png'
import {AiFillCheckCircle} from 'react-icons/ai'
import {FaSuitcase} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <AiFillCheckCircle className='about_icon'/>
              <h5>Experience</h5>
            </article>

            <article className='about_card'>
              <FaSuitcase className='about_icon'/>
              <h5>Portfolio</h5>
            </article>
          </div>

          <p>
            Hello! My name is Scott Bui and I was born 
            and raised in Philadelphia, PA. After receiving 
            my Bachelor's in Computing and Security Technology from 
            Drexel University back in 2019, I have been 
            on a journey to find my passion in life. I have worked in IT Support,
            resold coveted and rare sneakers, and tested my luck with 
            opening Pokémon and Sports cards, but nothing really peaked my interest
            until late 2021, when I started to learn and get more involved 
            with Web3 and NFTs. This series of events lit a fire under my 
            butt and motivated me to learn more about web development and 
            to pursue a career in this field.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Chat!</a>
        </div>
      </div>
    </section>
  )
}

export default About