import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css';
import Boglanish from './components/Boglanish';
import Container from './layout/Container';
import About from './Pages/About';
import Call from './Pages/Boglanish';
import Home from './Pages/Home';
import Menu from "./Pages/Menu";



const App = () => {
  return (
    <>
      
      <Router>
       <Routes>
        <Route path='/'element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/menu" element={<Menu />}/>
        <Route path="/boglanish" element={<Call />}/>
       </Routes>
     </Router>
      
    </>
  )
}

export default App
