import { useState, useEffect } from "react";
import HomeTemplate from "../templates/HomeTemplate/HomeTemplate";
import { DetailedEvent } from "../Interfaces/DetailedEvent";
import { EventType } from "../Interfaces/EventType";
import { getGreaterDate } from "../func/functions";
import { basePhotoUrl, apiUrl, apiMainFolderUrl } from "../const/const";

function Home() {
    const [selectedButton, setSelectedButton] = useState('coverages')
    const [selectedEventUrl, setSelectedEventUrl] = useState('')
    const [coverageEvents, setCoverageEvents] = useState<DetailedEvent[]>([])
    const [scheduleEvents, setScheduleEvents] = useState<DetailedEvent[]>([])

    useEffect(() => {
        getEvents()
    }, [])

    return (
        <HomeTemplate selectedButtonState={{ selectedButton, setSelectedButton }} coverageState={{ coverageEvents, setCoverageEvents }} scheduleState={{ scheduleEvents, setScheduleEvents }} selectedEventUrlState={{ selectedEventUrl, setSelectedEventUrl }} handleHeaderClick={handleHeaderClick} />
    )

    function handleHeaderClick(text: string) {
        setSelectedButton(text)
    }

    async function fetchData(url: string): Promise<any> {
        const res = await fetch(url)
        const data = await res.json()
        return data
    }

    async function getEvents(): Promise<void> {
        const data = await fetchData(apiUrl)
        const events: EventType[] = []
        data.forEach((element: EventType) => {
            events.push(element)
        });
        createDetailedEvent(events)
    }

    function createDetailedEvent(array: any) {
        const eventArray: DetailedEvent[] = []
        array.forEach((event: any) => {
            const stringArray = event.name.split('--')
            const detailedEvent: DetailedEvent = {
                id: event.id,
                date: stringArray[0],
                time: stringArray[1],
                name: stringArray[2],
                local: stringArray[3]
            }
            eventArray.push(detailedEvent)
        })
        getListEvents(eventArray)
    }

    function getListEvents(eventsArray: any) {
        let date = new Date()
        const coverageArray: DetailedEvent[] = []
        const scheduleArray: DetailedEvent[] = []
        eventsArray.forEach((event: DetailedEvent) => {
            if (getGreaterDate(date.toLocaleDateString('pt-BR'), event.date) === -1)
                coverageArray.push(event)
            else
                scheduleArray.push(event)
        });
        setCoverageEvents(coverageArray)
        setScheduleEvents(scheduleArray)

        //-->
        setSelectedEventUrl(coverageArray[0]?.id ? coverageArray[0]?.id : '')
        //-->
    }


}
export default Home;