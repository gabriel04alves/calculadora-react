import React from 'react';
import ReactDOM from 'react-dom/client';
import Calculator from './main/Calculator';
import './assets/css/global.css'
import reportWebVitals from './reportWebVitals';
import Footer from './components/Footer';
import Header from './components/Header';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importe os estilos da AOS

AOS.init(); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='main'>
      <Header/>
      <div class='content'>
        <Calculator />
      </div>  
        <Footer />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
