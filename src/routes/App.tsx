import { useState } from 'react'
import '../styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <header>
        <img src="" alt="logo" />
        <nav>
          <button id='buttonHome'>
            Inicio
          </button>

          <button id='buttonEvents'>
            Eventos
          </button>

          <button id='buttonCalendar'>
            Calendário
          </button>

          <button id='buttonAbout'>
            Sobre
          </button>
        </nav>
      </header>

      <main>
        {/* COMPONENT */}
        <section id='home'>
          <div className='home-description'>
            <h2>Nome do evento</h2>
            <div className='home-info'>
              <span>Data: </span>
              <span>??/??/??</span>
              <br/>
              <span>Local: </span>
              <span>Local teste</span>
            </div>        
          </div>
          <div className='home-images'>

          </div>
        </section>

        {/* COMPONENT */}
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

        <section id='about'>
          <img src="" alt="img-gabriel" />
          <div className='about-description'>
            <p>Gabriel 
              <span>
                descrição do gabriel
              </span>
            </p>
          </div>
          
          <ul>
            <li>
              <img src="/instagram.svg" alt="instagram logo"/>
            </li>
            <li>
              <img src="/whatsapp.svg" alt="instagram logo"/>
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}

export default App
