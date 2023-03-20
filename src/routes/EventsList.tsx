import { useState, useEffect } from "react";
import { DetailedEvent } from "../Interfaces/DetailedEvent";
import CustomList from "../components/UI/organisms/CustomList/CustomList";
useState

function EventsList({ events, handleSelectEvent, listType }: any) {
    // const [localEvents, setLocalEvents] = useState<DetailedEvent[]>([])

    // useEffect(() => {
    //     getLocalEvents()
    // }, [listType, events])

    return (
        <>
            {getListType()}
        </>
    )

    // function getLocalEvents() {
    //     let date = new Date()
    //     const coverageArray: DetailedEvent[] = []
    //     const scheduleArray: DetailedEvent[] = []
    //     events.forEach((event: DetailedEvent) => {
    //         if (getGreaterDate(date.toLocaleDateString('pt-BR'), event.date) === -1)
    //             coverageArray.push(event)
    //         else
    //             scheduleArray.push(event)
    //     });
    //     if (listType === 'coverages') {
    //         setLocalEvents(coverageArray)
    //     }
    //     if (listType === 'schedule') {
    //         setLocalEvents(scheduleArray)
    //     }
    // }

    function getListType() {
        return (
            <CustomList events={events} handleSelectEvent={handleSelectEvent}></CustomList>
        )
    }

    // function getGreaterDate(date_0: string, date_1: string): number {
    //     const arrayDate_0 = date_0.split('/')
    //     const arrayDate_1 = date_1.split('/')
    //     if (arrayDate_0[2] > arrayDate_1[2])
    //         return -1
    //     if (arrayDate_0[2] < arrayDate_1[2])
    //         return 1
    //     if (arrayDate_0[1] > arrayDate_1[1])
    //         return -1
    //     if (arrayDate_0[1] < arrayDate_1[1])
    //         return 1
    //     if (arrayDate_0[0] > arrayDate_1[0])
    //         return -1
    //     if (arrayDate_0[0] < arrayDate_1[0])
    //         return 1
    //     return 0
    // }
}

export default EventsList;