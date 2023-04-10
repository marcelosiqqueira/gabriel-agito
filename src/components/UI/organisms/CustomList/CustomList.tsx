import ListItem from "../../molecules/ListItem/ListItem";

import IndexButtonList from "../../molecules/IndexButtonList/IndexButtonList";
import "./CustomList.css"
import { useState, useEffect } from "react";
import { DetailedEvent } from "../../../../Interfaces/DetailedEvent";
import { DataEvents, SelectButtonKey } from "../../../../routes/Home";

interface CustomListProps {
    buttonType: SelectButtonKey;
    events: DataEvents
    handleSelectEvent(url: string): void
}

export default function CustomList({ events, buttonType, handleSelectEvent }: CustomListProps) {
    const [actualPage, setActualPage] = useState(1);

    useEffect(() => {
        setActualPage(1);
    }, [buttonType])

    function handleActualPage(page: number) {
        setActualPage(page);
    }

    return (

        <div id="list-content">
            <ul id="eventsList">
                {
                    events[buttonType][actualPage]
                        ?.map((event) => (
                            <ListItem
                                key={event?.id}
                                event={event}
                                url={event?.id}
                                handleSelectEvent={handleSelectEvent}
                            />
                        ))
                }
            </ul>
            <IndexButtonList
                events={events}
                buttonType={buttonType}
                actualPage={actualPage}
                handleFunction={handleActualPage}
            />
        </div>
    )
}