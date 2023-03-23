import { useState, useEffect } from "react";
import { DetailedEvent } from "../Interfaces/DetailedEvent";
import CustomList from "../components/UI/organisms/CustomList/CustomList";

function EventsList({ events, handleSelectEvent, listType }: any) {

    return (
        <>
            {getListType()}
        </>
    )

    function getListType() {
        // console.log('eventsss:',events) ok, events chegando aqui
        return (
            <CustomList 
                events={events}
                listType={listType}
                handleSelectEvent={listType === 'coverages' ? handleSelectEvent : 'error'}
            />
        )
    }
}

export default EventsList;