import './HomeTemplate.css'
import Header from '../../components/UI/organisms/Header/Header'
import About from '../../components/UI/organisms/About/About'
import { ReactNode } from 'react'

interface HomeTemplate {
  children: ReactNode
  handleHeaderClick: any
}

function HomeTemplate({ children, handleHeaderClick }: HomeTemplate) {
  return (
    <div className='container'>
      <Header handleHeaderClick={handleHeaderClick} />
      <main>
        {children}
        <About />
      </main>
    </div>
  )
}

export default HomeTemplate
