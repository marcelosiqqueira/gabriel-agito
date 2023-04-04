import './Events.css'
import EventsList from '../../../../routes/EventsList';
import ImageCarousel from "../ImageCarousel";

function Events({ selectedButton, setSelectedButton, coverageEvents, scheduleEvents, selectedEventUrl, setSelectedEventUrl }: any) {

  applyButtonEffect()

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
        {/* <div className="events-buttons">
          <button className='footer-button' title='footer button'>
            <span className='button-description'></span>
          </button>
        </div> */}
      </div>
    </section>
  )
}

export default Events;