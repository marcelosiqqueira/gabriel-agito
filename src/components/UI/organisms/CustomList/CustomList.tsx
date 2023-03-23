import ListItem from "../../molecules/ListItem/ListItem";

import IndexButtonList from "../../molecules/IndexButtonList/IndexButtonList";
import "./CustomList.css"
import { useState, useEffect } from "react";

export default function CustomList(props: any) {
    const [totalPages, setTotalPages] = useState(1)
    const [actualPage, setActualPage] = useState(1);

    useEffect(() => {
        setListItem(props)
    },[actualPage])

    useEffect(() => {
        setActualPage(1);
    },[props.listType])

    function setListItem(props: any) {
        const ListItemArray = []
        for (let i = 0; i < props.events.length; i++) {
            if(props.events[i].pageId === actualPage){
                ListItemArray.push(
                    <ListItem 
                        key={props.events[i]?.id} 
                        event={props.events[i]} 
                        url={props.events[i]?.id} 
                        handleSelectEvent={props.handleSelectEvent}
                    ></ListItem> 
                )
            }
        }
        // console.log('novo events:', props.events) ok, events chegando aqui
        return ListItemArray
    }

    return (
        <ul id="eventsList">
            {setListItem(props)}
            <li>
                <IndexButtonList 
                    events={props.events}
                    listType={props.listType}
                    actualPage={actualPage}
                    setActualPage={setActualPage}
                />
            </li>
        </ul>
    )
}