import './HomeMain.css'
import MainImageCarousel from '../MainImageCarousel/MainImageCarousel'

export default function HomeMain({ children }: any) {
  return (
    <section id='home'>
      <div className='home-description'>
        <h2>Nome do evento</h2>
        <div className='home-info'>
          <span>Data: </span>
          <span>??/??/??</span>
          <br />
          <span>Local: </span>
          <span>Local teste</span>
        </div>
      </div>
      <div className='home-images'>
        {children}
      </div>
    </section>
  )
}