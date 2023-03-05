function Header() {

    function handleScrollElement(e: any) {
        // document.getElementById('')
        switch (e.target.value) {
            case 'inicio':
                document.getElementById('home')?.scrollIntoView(true)
                break
            case 'eventos':
                document.getElementById('events')?.scrollIntoView(true)
                break
            case 'calendario':
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
    )
}

export default Header;