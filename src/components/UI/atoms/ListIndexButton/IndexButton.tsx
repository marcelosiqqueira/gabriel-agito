import './IndexButton.css'

export default function IndexButton(props: any) {
    return (
        <button className="index-button" onClick={() => props.handleButtonClick(props.id, props.symbol)}>
            {props.id}
        </button>
    )
}