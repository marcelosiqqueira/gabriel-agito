import IndexButton from "../../atoms/ListIndexButton/IndexButton"
import React from 'react';
import { useState, useEffect} from "react"
import './IndexButtonList.css'
import { DetailedEvent } from "../../../../Interfaces/DetailedEvent";

export default function IndexButtonList(props: any) {
    const [totalPages, setTotalPages] = useState(1)
    const [indexList, setIndexList] = useState<JSX.Element[]>([]);

    useEffect(() => {
        setButtonsIndexList();
    },[indexList])
    
    useEffect(() => {
        if (props.events)
            setTotalPages(getTotalIndexPages());
    }, [props.events, props.listType])

    function getTotalIndexPages(){
        const lastEvent: DetailedEvent = props.events[props.events.length - 1];
        if(lastEvent)  //NÃO SEI PQ MAS O LASTEVENT TA VINDO UNDEFINED NAS DUAS PRIMEIRAS RENDERIZAÇÕES, MESMO VERIFICANDO LÁ NO USEEFFECT
            return lastEvent.pageId;
        return 1;
    }

    function setButtonsIndexList(){
        const indexList = [];

        indexList.push(<IndexButton key={1} id={1} symbol={'number'} handleButtonClick={handleButtonClick} />)
        indexList.push(<IndexButton key={1} id={2} symbol={'number'} handleButtonClick={handleButtonClick} />)
        indexList.push(<IndexButton key={1} id={3} symbol={'number'} handleButtonClick={handleButtonClick} />)

        if(props.actualPage === 1){
            // indexList.map((i) => (){

            // })
        }

        if(props.actualPage === getTotalIndexPages)
        {
            console.log('entreiii')
            // indexList[props.actualPage] = React.cloneElement(indexList[props.actualPage], { id: props.actualPage });
        }
        
        setIndexList(indexList)
        // return indexList;
    }

    function handleButtonClick(pageId: number, symbol: string){
        console.log('botão clicado:', pageId)
        if(symbol === 'number')
            props.setActualPage(pageId);

        if(symbol === '>')
        {
            if( props.actualPage  <  getTotalIndexPages() )
            {
                props.setActualPage(props.actualPage + 1) //nao sei pq entra aqui independentemente
            }                
        }

        if(symbol === '|>')
        {
            props.setActualPage(getTotalIndexPages())
        }

        if(symbol === '<')
        {
            if( props.actualPage > 1 )
            {
                props.setActualPage(props.actualPage - 1) //nao sei pq entra aqui independentemente
            }       
        }

        if(symbol === '<|')
        {
            props.setActualPage(1)
        }
    }

    return (
        <div id="index-button-list">
            <IndexButton key={-1} id={'<|'} symbol={'<|'} handleButtonClick={handleButtonClick} />
            <IndexButton key={-2} id={'<'} symbol={'<'} handleButtonClick={handleButtonClick} />
            {indexList}
            <IndexButton key={-3} id={'>'} symbol={'>'} handleButtonClick={handleButtonClick} />
            <IndexButton key={-4} id={'|>'} symbol={'|>'} handleButtonClick={handleButtonClick} />
        </div>
    )
}