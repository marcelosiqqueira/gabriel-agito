import './Header.css'
import { SelectButtonKey } from '../../../../routes/Home'

type HeaderProps = {
    handleHeaderClick: (arg0: SelectButtonKey) => void
}

export default function Header({ handleHeaderClick }: HeaderProps): JSX.Element {

    function handleScrollElement(e: any) {
        switch (e.target.value) {
            case 'inicio':
                document.getElementById('home')?.scrollIntoView(true)
                break
            case 'eventos':
                handleHeaderClick(SelectButtonKey.COVERAGES)
                document.getElementById('events')?.scrollIntoView(true)
                break
            case 'calendario':
                handleHeaderClick(SelectButtonKey.SCHEDULE)
                document.getElementById('events')?.scrollIntoView(true)
                break
            case 'sobre':
                document.getElementById('about')?.scrollIntoView(true)
                break
        }
    }

    return (
        <header>
            <img src="" alt="logo" />
            <nav>
                <button value='inicio' onClick={e => handleScrollElement(e)} id='buttonHome'>
                    Início
                </button>

                <button value='eventos' onClick={e => handleScrollElement(e)} id='buttonEvents'>
                    Eventos
                </button>

                <button value='calendario' onClick={e => handleScrollElement(e)} id='buttonCalendar'>
                    Calendário
                </button>

                <button value='sobre' onClick={e => handleScrollElement(e)} id='buttonAbout'>
                    Sobre
                </button>
            </nav>
        </header>
    )
}
