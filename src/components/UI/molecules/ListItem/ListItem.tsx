import './ListItem.css'

export default function ListItem() {
    const star = 'src/assets/star.svg'
    const clock = 'src/assets/clock.svg'
    return (
        <li className="list-item">
            <div>
                <img src={star} alt="star image" />
                <span>Orci varius natoque penatibus et magnis</span>
            </div>

            <div>
                <img src={clock} alt="clock image" />
                <span>11 fev 2020</span>
            </div>
        </li>
    )
}