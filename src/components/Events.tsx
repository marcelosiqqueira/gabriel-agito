function Events(){
    return(
        <section id='events'>
          <div className='events-container'>
            <div className="events-images">

            </div>
            <div className="events-description">

            </div>
          </div>

          {/* COMPONENT */}
          <div className='events-container2'>
            
            <div className='header-buttons'>
              {/* COMPONENT */}
              <button className='coverage-button'>Coberturas</button>
              {/* COMPONENT */}
              <button className='agenda-button'>Agenda</button>
            </div>
            {/* COMPONENT */}
            <div className="events-list">
              <div>Components...</div>
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