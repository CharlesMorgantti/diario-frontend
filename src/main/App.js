import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Rotas from './rotas'
import '../views/custom.css'
import Navbar from '../components/navbar'
import NavbarSide from '../components/navbarSide';

function App() {
  return (
    <>
    <Navbar/>
    <div className="flexbox-container">
    <div>
    <NavbarSide/></div>
    <div>
     <Rotas/></div>
    
 
  </div>
    </>
  );
}

export default App;
