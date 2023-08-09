import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Container from '../../layout/Container'
import "./Home.css"
import AllMenu from '../../components/AllMenu'
import headerHero from '../../imges/headerHero.png'
import card from '../../imges/Frame.png'
import main from '../../imges/Group.png'
import location from '../../imges/location.png'
import ellipse from '../../imges/Ellipse.png'
import Boglanish from '../../components/Boglanish'
import Footer from '../../components/Footer'
const Home = () => {
  return (
    <>
      <NavBar />
      <Container>
      <div className='headerHero'>
        <div className='headerHero__about'>
              <p className='headerHero__about__link'>Ma'zzali va Halol taomlar</p>
               <h1 className='headerHero__about__title'>Jizzax shaxrida eng  ma'zzali va shirin taomlar barchasi Rizvon oilaviy Restaranida</h1>
               <p className='headerHero__about__text'>Rizvon oylaviy restarani sizlarni biz bilan birga Shakshlik yeyishga taklif qilamiz bizda hammasi Halol va mazzaliy siz bizni shashlikni yeganinggizda Boshqacha emoltsiya paydo bo`ladi hammasi bizda…</p>
               <button className='headerHero__about__btn'>Bog`lanish</button>
        </div>
        <div className='headerHero__img'>
           <img src={headerHero} alt="" />
        </div>
      </div>
      <div className='headerHero__bottom'>
          <div className='headerHero__bottom__cards'>
            <div className='headerHero__bottom__cards__img'>
              <img src={card} alt="" />
            </div>
             <div className='headerHero__bottom__cards__text'>
              <h3>Mazali taomlar</h3>
              <p>Rizvon oylaviy restarani sizlarni biz bilan birga Shakshlik yeyishga taklif qilamiz.</p>
             </div>
          </div>
          <div className='headerHero__bottom__cards'>
            <div className='headerHero__bottom__cards__img'>
              <img src={card} alt="" />
            </div>
             <div className='headerHero__bottom__cards__text'>
              <h3>Mazali taomlar</h3>
              <p>Rizvon oylaviy restarani sizlarni biz bilan birga Shakshlik yeyishga taklif qilamiz.</p>
             </div>
          </div>
          <div className='headerHero__bottom__cards'>
            <div className='headerHero__bottom__cards__img'>
              <img src={card} alt="" />
            </div>
             <div className='headerHero__bottom__cards__text'>
              <h3>Mazali taomlar</h3>
              <p>Rizvon oylaviy restarani sizlarni biz bilan birga Shakshlik yeyishga taklif qilamiz.</p>
             </div>
          </div>
      </div>
      <div className='main'>
        <div className='main__img'>
          <img src={main} alt="main" />
        </div>
        <div className='main__about'>
          <h3>Rizvon oilaviy Restarani</h3>
          <p>Rizvon oylaviy restarani sizlarni biz bilan birga Shakshlik yeyishga taklif qilamiz bizda hammasi Halol va mazzaliy siz bizni shashlikni yeganinggizda Boshqacha emoltsiya paydo bo’ladi hammasi bizda…  
             Rizvon oylaviy restarani sizlarni biz bilan birga Shakshlik yeyishga taklif qilamiz bizda hammasi Halol va mazzaliy siz bizni shashlikni yeganinggizda Boshqacha emoltsiya paydo bo’ladi hammasi bizda. Rizvon oylaviy restarani sizlarni biz bilan birga Shakshlik yeyishga taklif qilamiz 
          </p>
          <button>Batafsil ma'lumot</button>
        </div>
      </div>
      <AllMenu />
      <div>
        <h2 className='location'>Bizning ustunlik tomonlarimiz</h2>
        <div className='location__cards'>
          <div className='location__cards__card'>
             <img src={location} alt="location" />
             <h4>Qulay joylashuv</h4>
             <p>
              Rizvon oylaviy restarani sizl biz bilan birga Shakshlik yeyishga taklif qilamiz bizda hammasiRizvon oylaviy    restarani sizl biz bilan birga Shakshlik yeyishga taklif qilamiz bizda hammasi  
             </p>
          </div>
          <div className='location__cards__card'>
             <img src={location} alt="location" />
             <h4>Qulay joylashuv</h4>
             <p>
              Rizvon oylaviy restarani sizl biz bilan birga Shakshlik yeyishga taklif qilamiz bizda hammasiRizvon oylaviy    restarani sizl biz bilan birga Shakshlik yeyishga taklif qilamiz bizda hammasi  
             </p>
          </div>
          <div className='location__cards__card'>
             <img src={location} alt="location" />
             <h4>Qulay joylashuv</h4>
             <p>
              Rizvon oylaviy restarani sizl biz bilan birga Shakshlik yeyishga taklif qilamiz bizda hammasiRizvon oylaviy    restarani sizl biz bilan birga Shakshlik yeyishga taklif qilamiz bizda hammasi  
             </p>
          </div>
          <div className='location__cards__card'>
             <img src={location} alt="location" />
             <h4>Qulay joylashuv</h4>
             <p>
              Rizvon oylaviy restarani sizl biz bilan birga Shakshlik yeyishga taklif qilamiz bizda hammasiRizvon oylaviy    restarani sizl biz bilan birga Shakshlik yeyishga taklif qilamiz bizda hammasi  
             </p>
          </div>
        </div>
      </div>
      <h2 className='comments__title'>Mijozlarimiz biz haqimizda nima deydi</h2>
      <div className='comments'>
        <div className='comments__cards'>
           <div className='comments__about'>
              <div className='comments__about__img'>
                <img src={ellipse} alt="" />
              </div>
              <div className='comments__about__title'>
                <h4>Suyunov Elbek</h4>
                <p>Baxtli mijoz</p>
              </div>
            </div> 
            <div className='coment'>
               <p>Iloxim xamma iwlarizda rivoj szi muxliszman Rizvon . Szni 1chi Sardoraka bn vidyoyizdan kn 5 maxal namoz oqiwni organdm va oqiy bowladm . Olloxmni nazaridasz . Suygan bandasisz . inwaallox . Bowlagan iwlaringiz xayrli va barokatli bolsin
               </p>
            </div> 
          </div>
          <div className='comments__cards'>
           <div className='comments__about'>
              <div className='comments__about__img'>
                <img src={ellipse} alt="" />
              </div>
              <div className='comments__about__title'>
                <h4>Suyunov Elbek</h4>
                <p>Baxtli mijoz</p>
              </div>
            </div> 
            <div className='coment'>
               <p>Iloxim xamma iwlarizda rivoj szi muxliszman Rizvon . Szni 1chi Sardoraka bn vidyoyizdan kn 5 maxal namoz oqiwni organdm va oqiy bowladm . Olloxmni nazaridasz . Suygan bandasisz . inwaallox . Bowlagan iwlaringiz xayrli va barokatli bolsin
               </p>
            </div> 
          </div>
          <div className='comments__cards'>
           <div className='comments__about'>
              <div className='comments__about__img'>
                <img src={ellipse} alt="" />
              </div>
              <div className='comments__about__title'>
                <h4>Suyunov Elbek</h4>
                <p>Baxtli mijoz</p>
              </div>
            </div> 
            <div className='coment'>
               <p>Iloxim xamma iwlarizda rivoj szi muxliszman Rizvon . Szni 1chi Sardoraka bn vidyoyizdan kn 5 maxal namoz oqiwni organdm va oqiy bowladm . Olloxmni nazaridasz . Suygan bandasisz . inwaallox . Bowlagan iwlaringiz xayrli va barokatli bolsin
               </p>
            </div> 
          </div>
      </div>
         <Boglanish />
         
      </Container>
      <Footer />
    </>
  )
}

export default Home