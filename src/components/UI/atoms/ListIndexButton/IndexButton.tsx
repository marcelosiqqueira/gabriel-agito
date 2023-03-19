import { useState } from "react"
import './IndexButton.css'

export default function IndexButton(props: any) {
    return (
        <button>
            {props.value}
        </button>
    )
}