import IndexButton from "../../atoms/ListIndexButton/IndexButton"
import { useState } from "react"
import './IndexButtonList.css'

export default function IndexButtonList(props: any) {
    const [pages, setPages] = useState(Math.ceil(props.array.length / 7)) // Tamanho : 60  ----- 60 / 7 = 8.57  -> Math.ceil -> 9

    return (
        <>
            <IndexButton></IndexButton>
        </>
    )
}