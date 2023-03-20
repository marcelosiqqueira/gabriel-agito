import './Events.css'
import { basePhotoUrl, apiUrl } from '../../../../const/const.js'
import { EventType } from '../../../../Interfaces/EventType';
import { DetailedEvent } from '../../../../Interfaces/DetailedEvent';
import EventsList from '../../../../routes/EventsList';
import { useState, useEffect } from 'react';
import ImageCarousel from "../ImageCarousel";

function Events({ selectedButton, setSelectedButton }: any) {
  const [selectedEventUrl, setSelectedEventUrl] = useState('')
  const [events, setEvents] = useState<DetailedEvent[]>([])
  const [coverageEvents, setCoverageEvents] = useState<DetailedEvent[]>([])
  const [scheduleEvents, setScheduleEvents] = useState<DetailedEvent[]>([])

  useEffect(() => {
    getEvents()
  }, [])

  useEffect(() => {
    getListEvents()
  }, [events, selectedButton])

  useEffect(() => {
    selectedButton === 'coverages' ? setSelectedEventUrl(coverageEvents[0]?.id ? coverageEvents[0]?.id : '') : setSelectedEventUrl(scheduleEvents[0]?.id ? scheduleEvents[0]?.id : '')
  }, [selectedButton, coverageEvents, scheduleEvents])

  useEffect(() => {
    applyButtonEffect()
  }, [selectedButton])

  async function fetchData(): Promise<any> {
    const res = await fetch(apiUrl)
    const data = await res.json()
    return data
  }

  async function getEvents(): Promise<void> {
    const data = await fetchData()
    const events: EventType[] = []
    data.forEach((element: EventType) => {
      events.push(element)
    });
    createDetailedEvent(events)
  }

  function getListEvents() {
    let date = new Date()
    const coverageArray: DetailedEvent[] = []
    const scheduleArray: DetailedEvent[] = []
    events.forEach((event: DetailedEvent) => {
      if (getGreaterDate(date.toLocaleDateString('pt-BR'), event.date) === -1)
        coverageArray.push(event)
      else
        scheduleArray.push(event)
    });
    setCoverageEvents(coverageArray)
    setScheduleEvents(scheduleArray)
  }

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

  function createDetailedEvent(array: any) {
    const eventArray: DetailedEvent[] = []
    array.forEach((event: any) => {
      const stringArray = event.name.split('--')
      const detailedEvent: DetailedEvent = {
        id: event.id,
        date: stringArray[0],
        time: stringArray[1],
        name: stringArray[2],
        local: stringArray[3]
      }
      eventArray.push(detailedEvent)
    })
    setEvents(eventArray)
  }

  function handleSelectEvent(url: string) {
    setSelectedEventUrl(url)
  }

  function getGreaterDate(date_0: string, date_1: string): number {
    const arrayDate_0 = date_0.split('/')
    const arrayDate_1 = date_1.split('/')
    if (arrayDate_0[2] > arrayDate_1[2])
      return -1
    if (arrayDate_0[2] < arrayDate_1[2])
      return 1
    if (arrayDate_0[1] > arrayDate_1[1])
      return -1
    if (arrayDate_0[1] < arrayDate_1[1])
      return 1
    if (arrayDate_0[0] > arrayDate_1[0])
      return -1
    if (arrayDate_0[0] < arrayDate_1[0])
      return 1
    return 0
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
          <EventsList listType={selectedButton} handleSelectEvent={handleSelectEvent} events={selectedButton === 'coverages' ? coverageEvents : scheduleEvents}></EventsList>
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