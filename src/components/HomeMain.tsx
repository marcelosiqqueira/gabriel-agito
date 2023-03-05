function HomeMain(){
    return(
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
            <img src="placeholder-image.jpg"/>
          </div>
        </section>
    )
}

export default HomeMain;