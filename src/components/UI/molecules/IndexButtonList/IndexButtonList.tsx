import IndexButton from "../../atoms/ListIndexButton/IndexButton"
import { useState, useEffect } from "react"
import './IndexButtonList.css'
import { DetailedEvent } from "../../../../Interfaces/DetailedEvent";

export default function IndexButtonList(props: any) {
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        setTotalPages(getTotalIndexPages());
    }, [props.events])

    function getTotalIndexPages(){
        const lastEvent: DetailedEvent = props.events[props.events.length - 1];
        if(lastEvent)
            return lastEvent.pageId;
        else
            return 1;
    }

    function setIndexList(){
        const indexList = [];
        for(let i = 0; i < totalPages; i++){
            indexList.push(
                <IndexButton>
                    key={i}
                    id={i}
                    handleButtonClick={handleButtonClick}
                </IndexButton>
            )
        }
        return indexList;
    }

    function handleButtonClick(pageId: number){
        console.log('botão clicado:', pageId)
    }

    return (
        <div id="index-button-list">
            {setIndexList()}
        </div>
    )


    // useEffect(() => {
    //     checkRange(range, actualPage)
    // }, [actualPage])

    // useEffect(() => { // Potential loop
    //     changeRangeDiff(range)
    // }, [range])

    // useEffect(() => {
    //     setTotalPages(Math.ceil(props?.events.length / 7))
    // }, [props.events])


    // function setIndexButton() {
    //     const array = []
    //     if (range.min > 1) {
    //         array.push(
    //             <IndexButton key={Math.random()} id={(range.min - 1) === 1 ? 1 : 'return'} value={(range.min - 1) === 1 ? 1 : '..'} handleButtonClick={handleButtonClick}></IndexButton>
    //         )
    //     }
    //     for (let i = range.min; i <= range.max; i++) {
    //         array.push(
    //             <IndexButton key={i} value={i} id={i} handleButtonClick={handleButtonClick}></IndexButton>)
    //     }
    //     if (range.max < totalPages) {
    //         array.push(
    //             <IndexButton key={Math.random()} id={(range.max + 1) === totalPages ? totalPages : 'next'} value={(range.max + 1) === totalPages ? totalPages : '..'} handleButtonClick={handleButtonClick}></IndexButton>
    //         )
    //     }
    //     return array
    // }

    // function handleButtonClick(id: number | string) {
    //     if (typeof id != 'number') {
    //         if (id === 'next')
    //             setActualPage((range.max + 2) < totalPages ? (range.max + 2) : (range.max + 1) < totalPages ? (range.max + 1) : range.max)
    //         if (id === 'return')
    //             setActualPage(actualPage - 1)
    //     }
    //     else {
    //         setActualPage(id)
    //     }
    // }

    // function checkRange(range: any, number: number) {
    //     if (number > range.max)
    //         if (number + 1 < totalPages) {
    //             setRange({ min: number - 3, max: number + 1 })
    //         }

    //     if (number < range.min)
    //         if (number > 1 && (number - 1) > 1) {
    //             setRange({ min: number - 1, max: number + 3 })
    //         }

    //     if (number === range.min) {
    //         if (range.min > 1 && (range.min - 1) > 1) {
    //             setRange({ min: range.min - 1, max: range.max - 1 })
    //         }
    //     }
    //     if (number === range.max)
    //         if (range.max < totalPages && (range.max + 1) < totalPages) {
    //             setRange({ min: range.min + 1, max: range.max + 1 })
    //         }
    // }

    // function changeRangeDiff(range: any) {
    //     if ((range.min > 1) && (range.max - range.min != 4)) {
    //         setRange({ min: range.min + 1, max: range.max })
    //     } else if ((range.min < 1) && (range.max - range.min === 4))
    //         setRange({ min: range.min - 1, max: range.max })
    // }
}