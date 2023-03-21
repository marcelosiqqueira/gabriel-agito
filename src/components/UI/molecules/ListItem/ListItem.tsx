import './ListItem.css'
import { DetailedEvent } from '../../../../Interfaces/DetailedEvent'
import { useState, useEffect } from 'react'

export default function ListItem(props: any) {
    const star = 'src/assets/star.svg'
    const clock = 'src/assets/clock.svg'
    const location = 'src/assets/location.svg'
    const [event, setEvent] = useState<DetailedEvent>()

    useEffect(() => {
        setEvent(props.event)
    }, [])

    function handleMouseClick() {
        if (props.handleSelectEvent != 'error')
            props.handleSelectEvent(props.url)
    }

    return (
        <li className="list-item" onClick={handleMouseClick}>
            <div>
                <img src={star} alt="star icon" />
                <span>{event?.name}</span>
            </div>

            <div>
                <div>
                    <img src={clock} alt="clock icon" />
                    <span>{event?.date}</span>
                </div>
                <div>
                    <img src={location} alt="location pin icon" />
                    <span>{event?.local}</span>
                </div>
            </div>
        </li>
    )
}