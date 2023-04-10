import './ListItem.css'
import { DetailedEvent } from '../../../../Interfaces/DetailedEvent'

interface ListItem {
    event: DetailedEvent
    url: string
    handleSelectEvent(url: string): void
}

export default function ListItem({ event, url, handleSelectEvent }: ListItem) {
    const star = 'src/assets/star.svg';
    const clock = 'src/assets/clock.svg';
    const location = 'src/assets/location.svg';

    function handleMouseClick() {
        handleSelectEvent(url);
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
                    <span>{event?.date.toLocaleDateString('pt-BR')}</span>
                </div>
                <div>
                    <img src={location} alt="location pin icon" />
                    <span>{event?.local}</span>
                </div>
            </div>
        </li>
    )
}