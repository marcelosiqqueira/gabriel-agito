import './Events.css'
import { basePhotoUrl } from '../../../../const/const.js'
import { EventType } from '../../../../Interfaces/EventType';
import EventsList from '../../../../routes/EventsList';
import { useState, useEffect } from 'react';
import ImageCarousel from "../ImageCarousel";

function Events() {
  const [selectedEventUrl, setSelectedEventUrl] = useState('')
  const [events, setEvents] = useState<EventType[]>([])
  const [selectedButton, setSelectedButton] = useState('coverages')



  useEffect(() => {
    getEvents()
  }, [])

  async function fetchData(): Promise<any> {
    const res = await fetch('https://gabriel-agito-back.onrender.com/events')
    const data = await res.json()
    return data
  }

  async function getEvents() {
    const data = await fetchData()
    const events: EventType[] = []
    data.forEach((element: EventType) => {
      events.push(element)
    });
    setSelectedEventUrl(events[0].id ? events[0].id : 'error')
    setEvents(events)
  }

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
          <EventsList listType={selectedButton} handleSelectEvent={handleSelectEvent} events={events}></EventsList>
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