import "../styles/home.css"
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import React, { useState } from 'react';
import ImageCarousel from "./UI/organisms/ImageCarousel";

function Events() {
  const [currentOutlet, setOutlet] = useState('coverages');

  function handleCurrentOutlet(): void {
    if (currentOutlet === 'coverages')
      setOutlet('agenda');
    else
      setOutlet('coverages')
  }

  return (
    <section id='events'>
      <div className='events-container'>
        <div className="events-images">
          <ImageCarousel></ImageCarousel>
        </div>
        <div className="events-description">

        </div>
      </div>
      {/* COMPONENT */}
      <div className='events-container2'>

        <div className='header-buttons'>

          <Link state={currentOutlet} to={`/${currentOutlet}`}>
            <button className='coverages-button' onClick={() => handleCurrentOutlet()}>
              Coberturas
              <Link to={`/:${currentOutlet}`} />
            </button>
          </Link>

          <Link state={currentOutlet} to={`/${currentOutlet}`}>
            <button className='agenda-button' onClick={() => handleCurrentOutlet()}>
              Agenda
            </button>
          </Link>
        </div>

        <div className="events-list">
          <Outlet />
        </div>
        <div className="events-buttons">
          {/* COMPONENT */}
          <button className='footer-button'>
            <span className='button-description'></span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Events;