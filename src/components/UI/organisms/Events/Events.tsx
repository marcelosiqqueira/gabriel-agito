import '../../../../styles/home.css'
import { Outlet, Link } from "react-router-dom";
import ImageCarousel from "../ImageCarousel";

function Events() {

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

          <Link to={''}>
            <button className='coverages-button' >
              Coberturas
            </button>
          </Link>

          <Link to={'/schedule'}>
            <button className='schedule-button' >
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