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
    // const [pageIdCoverage, setPageIdCoverage] = useState(1);
    // const [pageIdSchedule, setPageIdSchedule] = useState(1);

    useEffect(() => {
        getEvents()
    }, [])

    return (
        <HomeTemplate 
            selectedButtonState={{ selectedButton, setSelectedButton }}
            coverageState={{ coverageEvents, setCoverageEvents }}
            scheduleState={{ scheduleEvents, setScheduleEvents }}
            selectedEventUrlState={{ selectedEventUrl, setSelectedEventUrl }}
            handleHeaderClick={handleHeaderClick} 
        />
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
                local: stringArray[3],
                pageId: 1,
            }
            eventArray.push(detailedEvent)
        })
        getListEvents(eventArray)
    }

    function getListEvents(eventsArray: any) {
        let date = new Date()
        const coverageArray: DetailedEvent[] = []
        const scheduleArray: DetailedEvent[] = []
        let countCoverage = 0;
        let countSchedule = 0;

        let pageIdCoverage =  1;
        let pageIdSchedule =  1;
        eventsArray.forEach((event: DetailedEvent) => {
            if (getGreaterDate(date.toLocaleDateString('pt-BR'), event.date) === -1)
            {
                if(countCoverage == 7){
                    pageIdCoverage++;    
                    countCoverage = 0;
                }
                event.pageId = pageIdCoverage;
                coverageArray.push(event)
                countCoverage++;
            }else{
                if(countSchedule == 7){
                    pageIdSchedule++;
                    countSchedule = 0;
                }
                event.pageId = pageIdSchedule;
                scheduleArray.push(event)
                countSchedule++;
            }      
        });

        setCoverageEvents(coverageArray)
        console.log(scheduleArray)
        setScheduleEvents(scheduleArray)

        //-->
        setSelectedEventUrl(coverageArray[0]?.id ?? 'error')
        //-->
    }

}
export default Home;