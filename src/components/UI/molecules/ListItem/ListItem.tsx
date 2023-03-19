import './ListItem.css'
import { DetailedEvent } from '../../../../Interfaces/DetailedEvent'
import { useState, useEffect } from 'react'

export default function ListItem(props: any) {
    const star = 'src/assets/star.svg'
    const clock = 'src/assets/clock.svg'
    const location = 'src/assets/location.svg'
    const [event, setEvent] = useState<DetailedEvent>()

    useEffect(() => {
        createDetailedEvent()
    }, [])

    function handleMouseClick() {
        props.handleSelectEvent(props.url)
    }

    function createDetailedEvent() {
        const stringArray = props.event.name.split('--')
        const detailedEvent: DetailedEvent = {
            date: stringArray[0],
            time: stringArray[1],
            name: stringArray[2],
            local: stringArray[3]
        }
        setEvent(detailedEvent)
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