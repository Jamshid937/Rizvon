import React from 'react'

import { Link } from 'react-router-dom'
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBars,faXmark,faCode } from '@fortawesome/free-solid-svg-icons'

import logo from '../../imges/rizvon.svg'
import Container from '../../layout/Container'
function NavBar() {
    const [click, setClick] = React.useState(false);
    const [navBar, setNavBar] = React.useState(false)
    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);




    return (
     
      <div className={navBar ? 'navbar active' : 'navbar'} id='home' >
       <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
        <nav className="navbar" onClick={e => e.stopPropagation()}>
          <div className="nav-container">

              <Link to='/'><img src={logo} alt="" /></Link>
            <ul className={click ? "nav-menu active" : "nav-menu" }>
              <li className="nav-item">
                <Link
                  exact
                  to='/boglanish'
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Bog’lanish
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  exact
                  to='/about'
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Biz haqimizda
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  exact
                  to='/menu'
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Menyu
                </Link>
              </li>
              <li className="nav-item">
                <select className='nav-item_select'>
                  <option value="o`zbekcha" className='nav-item_select__option'>O`zbek</option>
                  <option value="English">English</option>
                  <option value="English">Русский</option>
                </select>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
          </div>
        </nav>
      </ div>
      
    );
  }

export default NavBar