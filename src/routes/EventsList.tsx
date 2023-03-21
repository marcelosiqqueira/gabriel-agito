import { useState, useEffect } from "react";
import { DetailedEvent } from "../Interfaces/DetailedEvent";
import CustomList from "../components/UI/organisms/CustomList/CustomList";
useState

function EventsList({ events, handleSelectEvent, listType }: any) {

    return (
        <>
            {getListType()}
        </>
    )

    function getListType() {
        return (
            <CustomList events={events} handleSelectEvent={listType === 'coverages' ? handleSelectEvent : 'error'}></CustomList>
        )
    }
}

export default EventsList;