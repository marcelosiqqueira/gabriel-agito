import { useState } from "react"
import './IndexButton.css'

export default function IndexButton({ id, handleButtonClick}: any) {
    return (
        <button className="index-button" onClick={() => handleButtonClick(id)}>
            {id}
        </button>
    )
}