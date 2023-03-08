import '../../styles/home.css'
import Header from '../../components/UI/organisms/Header/Header'
import HomeMain from '../../components/UI/organisms/HomeMain/HomeMain'
import Events from '../../components/UI/organisms/Events/Events'
import About from '../../components/UI/organisms/About/About'

function HomeTemplate() {
  return (
    <div className='container'>
      <Header />
      <main>
        <HomeMain />
        <Events />
        <About />
      </main>
    </div>
  )
}

export default HomeTemplate
