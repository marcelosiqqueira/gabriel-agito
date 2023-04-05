import ListItem from "../../molecules/ListItem/ListItem";

import IndexButtonList from "../../molecules/IndexButtonList/IndexButtonList";
import "./CustomList.css"
import { useState, useEffect } from "react";
import { DetailedEvent } from "../../../../Interfaces/DetailedEvent";

interface CustomListProps {
    listType: string;
    events: DetailedEvent[]
    handleSelectEvent(url: string): void
}

export default function CustomList({ events, listType, handleSelectEvent }: CustomListProps) {
    const [actualPage, setActualPage] = useState(1);

    useEffect(() => {
        setActualPage(1);
    },[listType])

    function handleActualPage(page: number) {
        setActualPage(page);
    }

    return (
        <ul id="eventsList">
            {
                events
                    .filter(event => event.pageId === actualPage)
                    .map((event) => (
                        <ListItem 
                            key={event?.id} 
                            event={event} 
                            url={event?.id} 
                            handleSelectEvent={handleSelectEvent}
                        /> 
                ))
            }
            <li>
                <IndexButtonList 
                    events={events}
                    listType={listType}
                    actualPage={actualPage}
                    handleFunction={handleActualPage}
                />
            </li>
        </ul>
    )
}