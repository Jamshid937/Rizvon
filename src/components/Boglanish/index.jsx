import React from 'react'
import './Boglanish.css'
import call from '../../imges/call.svg'
import mail from '../../imges/mail.svg'
import location_on from '../../imges/location_on.png'
import telegram from '../../imges/Telegram.png'
import instagram from '../../imges/Instagram.svg'
import youtube from '../../imges/YouTube.svg'
import facebok from '../../imges/Facebook.svg'

const Boglanish = () => {
  return (
    <div className='boglanish'>
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
           <div className='media__icons'>
            <img src={telegram} alt="" />
            <img src={instagram} alt="" />
            <img src={youtube} alt="" />
            <img src={facebok} alt="" />
           </div>
         </div>
       </div>
       <div className='map'>
       <iframe className='iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24404.25334886064!2d67.78642907431639!3d40.13043929999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b295e414424d05%3A0x611e514afb638e78!2sRIZVON%20Restaurant!5e0!3m2!1sru!2s!4v1691665023639!5m2!1sru!2s"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
       {/* <iframe  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d29584.588101787434!2d69.22919654670999!3d41.3143483716686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1srizvon%20milliy%20taomlar!5e0!3m2!1sru!2s!4v1691569866837!5m2!1sru!2s"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
       </div>
    </div>
  )
}

export default Boglanish