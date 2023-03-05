function About(){
    return(
        <section id='about'>
          <div>
            <img src="placeholder-profile.jpg" alt="img-gabriel" />
            <div className='about-description'>
              <p><span>Gabriel</span>
                  descrição do gabriel
              </p>
            </div>
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
    )
}

export default About;