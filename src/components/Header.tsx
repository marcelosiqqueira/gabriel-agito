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
                <button value='inicio' id='buttonHome' onClick={e => handleScrollElement(e)}>
                    Inicio
                </button>

                <button value='eventos' id='buttonEvents' onClick={e => handleScrollElement(e)}>
                    Eventos
                </button>

                <button value='calendario' id='buttonCalendar' onClick={e => handleScrollElement(e)}>
                    Calendário
                </button>

                <button value='sobre' id='buttonAbout' onClick={e => handleScrollElement(e)}>
                    Sobre
                </button>
            </nav>
        </header>
    )
}

export default Header;