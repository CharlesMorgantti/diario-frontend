import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Rotas from './rotas'
import '../views/custom.css'
import Navbar from '../components/navbar'
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'toastr/build/toastr.css';
import 'toastr/build/toastr.min.js';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <Navbar/>
    <ToastContainer />
     <Rotas/>
    </>
  );
}

export default App;
