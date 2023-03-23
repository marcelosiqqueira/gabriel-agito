import IndexButton from "../../atoms/ListIndexButton/IndexButton"
import { useState, useEffect } from "react"
import './IndexButtonList.css'
import { DetailedEvent } from "../../../../Interfaces/DetailedEvent";

export default function IndexButtonList(props: any) {
    const [totalPages, setTotalPages] = useState(1)
    

    useEffect(() => {
        if (props.events)
            setTotalPages(getTotalIndexPages());
    }, [props.events])

    function getTotalIndexPages(){
        const lastEvent: DetailedEvent = props.events[props.events.length - 1];
        if(lastEvent)  //NÃO SEI PQ MAS O LASTEVENT TA VINDO UNDEFINED NAS DUAS PRIMEIRAS RENDERIZAÇÕES, MESMO VERIFICANDO LÁ NO USEEFFECT
            return lastEvent.pageId;
        return 1;
    }

    function setIndexList(){
        const indexList = [];
        for(let i = 1; i < totalPages + 1; i++){ 
            indexList.push(
                <IndexButton
                    key={i}
                    id={i}
                    handleButtonClick={handleButtonClick}
                />
            )
        }
        return indexList;
    }

    function handleButtonClick(pageId: number){
        console.log('botão clicado:', pageId)
        props.setActualPage(pageId);
    }

    return (
        <div>
            {setIndexList()}
        </div>
    )
}