import React from 'react'
import './Header.css'
import Button from '../UI/button/Button'
import "../UI/button/Button.css"

import { TbBrandPython } from 'react-icons/tb';
import { AiOutlineConsoleSql } from 'react-icons/ai';
import { TbBrandHtml5 } from 'react-icons/tb';
import { TbBrandCss3 } from 'react-icons/tb';
import { BsMouse } from 'react-icons/bs';


const Header = () => {
  return (
    <section id='header'>
        <div className='container header'>
          <div className='header-left'>
            <h1>
              <span>Trym Sandven</span>
              <span>Python og webutiklar</span>
              <span>Med spesialisering i maskinlæring</span>
            </h1>
            <p className='u-text-small u-text-light'>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
            <div className='header-cta'>
            <Button text={"Get Started"} btnClass={"btn-dark"} href={"#"}/>
            <Button text={"How it works"} btnClass={"btn-orange"} href={"#"}/>
            </div>
          </div>
          <div className='header-right'>
                <TbBrandPython color='#FFF' size={100}/>
                <AiOutlineConsoleSql color='#FFF' size={100}/>
                <TbBrandHtml5 color='#FFF' size={100}/>
                <TbBrandCss3 color='#FFF' size={100}/>
              </div>
            </div>
            <div className='floating-icon'>
              <a href='#features'>
                <BsMouse color='#FFF' size={25} className='mouse'/>
              </a>
            </div>
    </section>
  )
}

export default Header
