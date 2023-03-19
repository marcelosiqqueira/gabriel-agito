import './ListItem.css'

export default function ListItem(props: any) {
    const star = 'src/assets/star.svg'
    const clock = 'src/assets/clock.svg'
    const location = 'src/assets/location.svg'

    function handleMouseClick() {
        props.handleSelectEvent(props.url)
    }

    return (
        <li className="list-item" onClick={handleMouseClick}>
            <div>
                <img src={star} alt="star icon" />
                <span>Orci varius natoque penatibus et magnis</span>
            </div>

            <div>
                <div>
                    <img src={clock} alt="clock icon" />
                    <span>11 fev 2020</span>
                </div>
                <div>
                    <img src={location} alt="location pin icon" />
                    <span>Uberaba</span>
                </div>
            </div>
        </li>
    )
}