import React from 'react'
import './footer.css'
import icon from '../../imges/rizvon.svg'
import telegram from '../../imges/Telegram.png'
import instagram from '../../imges/Instagram.svg'
import youtube from '../../imges/YouTube.svg'
import facebok from '../../imges/Facebook.svg'
import call from '../../imges/call.svg'
import mail from '../../imges/mail.svg'
import location_on from '../../imges/location_on.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer__icons'>
           <img src={icon} alt="" />
           <div>
           <div className='media__icons'>
            <img src={telegram} alt="" />
            <img src={instagram} alt="" />
            <img src={youtube} alt="" />
            <img src={facebok} alt="" />
           </div>
           </div>
        </div>
        <div className='footer__list'>
            <h4>
               Biz haqimizda
            </h4>
            <ul className='footer__list__menu'>
                <li>Menyu</li>
                <li>Biz haqimizda</li>
                <li>Bog’lanish</li>
            </ul>
        </div>
        <div>
        <div className='media'>
         <h3 className='media__title'>Biz bilan bog’lanish</h3>
         <div className='media__about'>
           <div className='media__about__phone'>
            <img src={call} alt="" />
            <p>+998 94 332 00 16</p>
           </div>
           <div className='media__about__phone'>
            <img src={mail} alt="" />
            <p>rizvon@gmail.com</p>
           </div>
           <div className='media__about__phone'>
            <img src={location_on} alt="" />
            <p>Toshkent shahri, Mirzo Ulug‘bek tumani, Shahriobod tumani</p>
           </div>
         </div>
       </div>
        </div>
    </div>
  )
}

export default Footer