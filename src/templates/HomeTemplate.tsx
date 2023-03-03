import '../styles/home.css'
import Header from '../components/Header'
import HomeMain from '../components/HomeMain'
import Events from '../components/Events'
import About from '../components/About'

function HomeTemplate() {
  return (
    <div className='container'>
      <Header/>
      <main>
        <HomeMain/>
        <Events/>
        <About/>
      </main>
    </div>
  )
}

export default HomeTemplate
