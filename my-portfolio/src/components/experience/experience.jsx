import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience_container'>
        <div className='experience_frontend'>
          <h3>Frontend Development</h3>
          <div className="experience_container">
            <article className='experience_details'>
              <BsFillPatchCheckFill />
              <h4>HTML</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill />
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill />
              <h4>JavaScript</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill />
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
            </article>
          </div>
        </div>
        <div className='experience_backend'>
          <h3>Backend Development</h3>
          <div className="experience_container">
            <article className='experience_details'>
              <BsFillPatchCheckFill />
              <h4>Node JS</h4>
              <small className='text-light'>Basic</small>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill />
              <h4>MongoDB</h4>
              <small className='text-light'>Basic</small>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill />
              <h4>MySQL</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill />
              <h4>Python</h4>
              <small className='text-light'>Intermediate</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience