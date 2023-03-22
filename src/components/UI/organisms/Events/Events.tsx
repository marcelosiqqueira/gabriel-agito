import './Events.css'
import { basePhotoUrl, apiUrl } from '../../../../const/const.js'
import { getGreaterDate } from '../../../../func/functions';
import { EventType } from '../../../../Interfaces/EventType';
import { DetailedEvent } from '../../../../Interfaces/DetailedEvent';
import EventsList from '../../../../routes/EventsList';
import { useState, useEffect } from 'react';
import ImageCarousel from "../ImageCarousel";

function Events({ selectedButton, setSelectedButton, coverageEvents, scheduleEvents, selectedEventUrl, setSelectedEventUrl }: any) {
  useEffect(() => {
    applyButtonEffect()
  }, [selectedButton])

  function applyButtonEffect() {
    if (selectedButton === 'coverages') {
      document.getElementById('schedule')?.classList.add('unfocused')
      document.getElementById('coverages')?.classList.remove('unfocused')
    }
    if (selectedButton === 'schedule') {
      document.getElementById('coverages')?.classList.add('unfocused')
      document.getElementById('schedule')?.classList.remove('unfocused')
    }
  }

  function handleSelectEvent(url: string) { // -> ListItem 
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
          <button value='coverages' id='coverages' className='coverages-button' onClick={() => setSelectedButton('coverages')}>
            Coberturas
          </button>
          <button value='schedule' id='schedule' className='schedule-button unfocused' onClick={() => setSelectedButton('schedule')}>
            Agenda
          </button>
        </div>

        <div className="events-list">
          <EventsList 
            listType={selectedButton}
            handleSelectEvent={handleSelectEvent}
            events={selectedButton === 'coverages' ? coverageEvents : scheduleEvents}
          />
        </div>
        <div className="events-buttons">
          {/* COMPONENT */}
          <button className='footer-button' title='footer button'>
            <span className='button-description'></span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Events;