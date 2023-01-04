import React from 'react'
import './Download.css'

import { VscGithubInverted } from 'react-icons/vsc'
import { FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'

const Download = () => {
  return (
    <section id='contact'>
      <div className='container contact'>
        <h2>Kontakt informasjon</h2>
        <p className='u-text-small u-text-light'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae veniam dolorum repellendus obcaecati minus voluptas neque dolore similique.
        </p>
          <div className='contact-icons'>
            <div className='contact-icon'>
            <VscGithubInverted size={30} color="#FFF"/> <p>Github</p>
            </div>
            <div className='contact-icon'>
              <FaLinkedinIn size={30} color="#FFF"/> <p>LinkedIn</p>
            </div>
            <div className='contact-icon'>
              <AiOutlineMail size={30} color="#FFF"/> <p>Mail</p>
            </div>
            <div className='contact-icon'>
              <AiFillFacebook size={30} color="#FFF"/> <p>Facebook</p>
            </div>
            </div>
          <div/>
        </div>
    </section>
  )
}

export default Download
