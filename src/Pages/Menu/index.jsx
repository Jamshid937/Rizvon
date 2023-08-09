import React from 'react'
import AllMenu from '../../components/AllMenu'
import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar/NavBar'
import Container from '../../layout/Container'

const Menu = () => {
  return (
    <Container>
      <NavBar></NavBar>
      <AllMenu></AllMenu>
      <Footer></Footer>
    </Container>
    
  )
}

export default Menu