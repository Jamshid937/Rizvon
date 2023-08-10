import React from 'react'
import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar/NavBar'
import './About.css'
import ellipse from '../../imges/Ellipse.png'
import Container from '../../layout/Container'
const About = () => {
  return (
    <>
  <NavBar></NavBar>
    <Container>
    
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
      </Container>
    <Footer></Footer>
    </>
    

  )
}

export default About