import IndexButton from "../../atoms/ListIndexButton/IndexButton"
import { useState, useEffect } from "react"
import './IndexButtonList.css'
import { DetailedEvent } from "../../../../Interfaces/DetailedEvent";

interface IndexButtonListProps {
    events: any;
    listType: any;
    actualPage: number;
    handleFunction(page: number): void
}

export default function IndexButtonList({ handleFunction,actualPage,events,listType }: IndexButtonListProps) {
    const [totalPages, setTotalPages] = useState(1)
    const [indexList, setIndexList] = useState<JSX.Element[]>([]);

    useEffect(() => {
        setButtonsIndexList();
    },[indexList])
    
    useEffect(() => {
        if (events)
            setTotalPages(getTotalIndexPages());
    }, [events, listType])

    function getTotalIndexPages(){
        const lastEvent: DetailedEvent = events[events.length - 1];
        if(lastEvent)  //NÃO SEI PQ MAS O LASTEVENT TA VINDO UNDEFINED NAS DUAS PRIMEIRAS RENDERIZAÇÕES, MESMO VERIFICANDO LÁ NO USEEFFECT
            return lastEvent.pageId;
        return 1;
    }

    function setButtonsIndexList(){
        const indexList = [];
        indexList.push(<IndexButton key={1} id={1} symbol={'number'} handleButtonClick={handleButtonClick} />)
        indexList.push(<IndexButton key={1} id={2} symbol={'number'} handleButtonClick={handleButtonClick} />)
        indexList.push(<IndexButton key={1} id={3} symbol={'number'} handleButtonClick={handleButtonClick} />)
        setIndexList(indexList)
        // return indexList;
    }

    function handleButtonClick(pageId: number, symbol: string){
        console.log('botão clicado:', pageId)
        if(symbol === 'number')
            handleFunction(pageId);

        if(symbol === '>')
        {
            if( actualPage  <  getTotalIndexPages() )
            {
                handleFunction(actualPage + 1) //nao sei pq entra aqui independentemente
            }                
        }

        if(symbol === '|>')
        {
            handleFunction(getTotalIndexPages())
        }

        if(symbol === '<')
        {
            if( actualPage > 1 )
            {
                handleFunction(actualPage - 1) //nao sei pq entra aqui independentemente
            }       
        }

        if(symbol === '<|')
        {
            handleFunction(1)
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