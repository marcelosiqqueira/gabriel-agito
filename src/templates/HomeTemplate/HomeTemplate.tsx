import './HomeTemplate.css'
import Header from '../../components/UI/organisms/Header/Header'
import HomeMain from '../../components/UI/organisms/HomeMain/HomeMain'
import Events from '../../components/UI/organisms/Events/Events'
import About from '../../components/UI/organisms/About/About'

function HomeTemplate(props: any) {
  return (
    <div className='container'>
      <Header handleHeaderClick={props.handleHeaderClick} />
      <main>
        <HomeMain coverageEvents={props.coverageState.coverageEvents} />
        <Events 
          selectedButton={props.selectedButtonState.selectedButton}
          setSelectedButton={props.selectedButtonState.setSelectedButton}
          coverageEvents={props.coverageState.coverageEvents}
          scheduleEvents={props.scheduleState.scheduleEvents}
          selectedEventUrl={props.selectedEventUrlState.selectedEventUrl}
          setSelectedEventUrl={props.selectedEventUrlState.setSelectedEventUrl} 
        />
        <About />
      </main>
    </div>
  )
}

export default HomeTemplate
