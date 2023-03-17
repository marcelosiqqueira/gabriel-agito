import '../../../../styles/home.css'
import './Events.css'
import EventsList from '../../../../routes/EventsList';
import { useState, useEffect } from 'react';
import ImageCarousel from "../ImageCarousel";

function Events() {
  const [selectedEventUrl, setSelectedEventUrl] = useState('')
  const [selectedButton, setSelectedButton] = useState('coverages')

  function handleButton(event: any) {
    if (event.target.value === 'coverages') {
      document.getElementById('schedule')?.classList.add('unfocused')
      document.getElementById('coverages')?.classList.remove('unfocused')
      setSelectedButton('coverages')
    }
    if (event.target.value === 'schedule') {
      document.getElementById('coverages')?.classList.add('unfocused')
      document.getElementById('schedule')?.classList.remove('unfocused')
      setSelectedButton('schedule')
    }
  }

  function handleSelectEvent(url: string) {
    setSelectedEventUrl(url)
  }

  return (
    <section id='events'>
      <div className='events-container'>
        <div className="events-images">
          <ImageCarousel selectedEventUrl={selectedEventUrl}></ImageCarousel>
        </div>
        <div className="events-description">
          <p>Mauris bibendum ipsum lorem, in vehicula leo interdum</p>
        </div>
      </div>
      {/* COMPONENT */}
      <div className='events-container2'>
        <div className='header-buttons'>
          <button value='coverages' id='coverages' className='coverages-button' onClick={handleButton}>
            Coberturas
          </button>
          <button value='schedule' id='schedule' className='schedule-button unfocused' onClick={handleButton}>
            Agenda
          </button>
        </div>

        <div className="events-list">
          <EventsList listType={selectedButton} handleSelectEvent={handleSelectEvent}></EventsList>
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