import './HomeMain.css'

export default function HomeMain({ children }: any) {
  return (
    <section id='home'>
      <div className='home-description'>
        
        <div className='home-info'>
          <h2>Nome do evento</h2>
          {/* <span>Data: </span> */}
          {/* <span>??/??/??</span> */}
          <br />
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quas maiores, asperiores dolorem earum reprehenderit optio commodi iste repellat illum nulla et assumenda. Harum eius omnis ad quam itaque consectetur?</span>
          {/* <span>Local teste</span> */}
        </div>
      </div>
      <div className='home-images'>
        {children}
      </div>
    </section>
  )
}
