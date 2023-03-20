import { useState } from "react"
import './IndexButton.css'

export default function IndexButton({ handleButtonClick, value, id }: any) {
    return (
        <button className="index-button" onClick={() => handleButtonClick(id)}>
            {value}
        </button>
    )
}