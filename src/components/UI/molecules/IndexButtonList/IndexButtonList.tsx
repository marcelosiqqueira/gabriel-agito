import IndexButton from "../../atoms/ListIndexButton/IndexButton"
import { useState } from "react"
import './IndexButtonList.css'

export default function IndexButtonList(props: any) {
    const [totalPages, setTotalPages] = useState(Math.ceil(props.array.length / 7)) // Tamanho : 60  ----- 60 / 7 = 8.57  -> Math.ceil -> 9
    const [actualPage, setActualPage] = useState(1)

    return (
        <>
            {setIndexButton()}
        </>
    )

    function setIndexButton() {
        const array = []
        for (let i = 0; i < totalPages || i < 7; i++) {
            array.push(
                <IndexButton value={i} ></IndexButton>
            )
        }
        return array
    }
}