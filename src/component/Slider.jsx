import React from 'react';
import './Slider.jsx'; // styling file
import App from '../App.jsx';

function Slider() {
  return (
    <div className='slider bg-warning'>
      <div className="overlay">
        <div className="slider-content text-center text-white">
          <h1 className="welcome-text">
            Welcome to <span className="brand">SwiftBank</span>
          </h1>
         <p>Fast. Secure. Modern. Your trusted digital banking Web Application.</p>
          <button className="btn btn-outline-light mt-3">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Slider;