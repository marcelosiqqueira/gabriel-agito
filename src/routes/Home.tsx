import { useState, useEffect } from "react";
import HomeTemplate from "../templates/HomeTemplate/HomeTemplate";
import { DetailedEvent } from "../Interfaces/DetailedEvent";
import { EventType } from "../Interfaces/EventType";
import { fetchData } from "../func/functions";
import HomeMain from "../components/UI/organisms/HomeMain/HomeMain";
import Events from "../components/UI/organisms/Events/Events";
import MainImageCarousel from "../components/UI/organisms/MainImageCarousel/MainImageCarousel";

export enum SelectButtonKey {
    COVERAGES = 'coverages',
    SCHEDULE = 'schedule'
}

export interface DataEvents {
    [SelectButtonKey.COVERAGES]: {
        totalPages: number;
        [key: number]: DetailedEvent[]
    },
    [SelectButtonKey.SCHEDULE]: {
        totalPages: number;
        [key: number]: DetailedEvent[]
    }
}

function Home() {
    const [selectedButton, setSelectedButton] = useState<SelectButtonKey>(SelectButtonKey.COVERAGES)
    const [selectedEventUrl, setSelectedEventUrl] = useState('')
    const [dataEvents, setCoverageEvents] = useState<DataEvents>({
        coverages: {
            totalPages: 0
        },
        schedule: {
            totalPages: 0
        }
    } as DataEvents)

    function handleSelectedEventUrl(url: string) {
        setSelectedEventUrl(url)
    }


    function handleSelectedButtonType(buttonType: SelectButtonKey) {
        setSelectedButton(buttonType)
    }

    async function getEvents(): Promise<void> {
        const data = await fetchData<EventType[]>('events')
        const events: EventType[] = []
        data.forEach((element: EventType) => {
            events.push(element)
        });
        createDetailedEvent(events)
    }

    function createDetailedEvent(array: EventType[]) {
        const eventArray: DetailedEvent[] = []
        array.forEach(({ id, name }: EventType) => {
            const stringArray = name.split('--')
            const detailedEvent: DetailedEvent = {
                id: id,
                date: new Date(stringArray[0].replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$2-$1-$3')),
                time: stringArray[1],
                name: stringArray[2],
                local: stringArray[3],
                pageId: 1,
            }
            eventArray.push(detailedEvent)
        })
        getListEvents(eventArray)
    }

    function getListEvents(eventsArray: DetailedEvent[]) {
        const currentDate = new Date()
        const currentDataEvents = {
            coverages: {
                totalPages: 0
            },
            schedule: {
                totalPages: 0
            }
        } as DataEvents;
        const elementsByPage = 7

        let coveragePageIndex = 1;
        let schedulePageIndex = 1;

        for (const { id, name, date, local, pageId, time } of eventsArray) {
            if (currentDate.getTime() > date.getTime()) {
                if (currentDataEvents[SelectButtonKey.COVERAGES][coveragePageIndex]?.length >= elementsByPage) {
                    coveragePageIndex++;
                    currentDataEvents[SelectButtonKey.COVERAGES].totalPages = coveragePageIndex
                }

                console.log('Quantidade de itens', currentDataEvents[SelectButtonKey.COVERAGES][coveragePageIndex]?.length ?? 0, 'Pagina', coveragePageIndex)

                if (Array.isArray(currentDataEvents[SelectButtonKey.COVERAGES][coveragePageIndex])) {
                    currentDataEvents[SelectButtonKey.COVERAGES][coveragePageIndex].push({ id, name, date, local, pageId, time });
                } else {
                    currentDataEvents[SelectButtonKey.COVERAGES][coveragePageIndex] = [{ id, name, date, local, pageId, time }]
                }

                continue;
            }

            if (currentDataEvents[SelectButtonKey.SCHEDULE][schedulePageIndex]?.length >= elementsByPage) {
                schedulePageIndex++;
                currentDataEvents[SelectButtonKey.SCHEDULE].totalPages = schedulePageIndex
            }

            if (Array.isArray(currentDataEvents[SelectButtonKey.SCHEDULE][schedulePageIndex])) {
                currentDataEvents[SelectButtonKey.SCHEDULE][schedulePageIndex].push({ id, name, date, local, pageId, time });
            } else {
                currentDataEvents[SelectButtonKey.SCHEDULE][schedulePageIndex] = [{ id, name, date, local, pageId, time }]
            }
        }

        setCoverageEvents(currentDataEvents)
        setSelectedEventUrl(currentDataEvents[SelectButtonKey.COVERAGES][1][0]?.id ?? 'error')
    }

    useEffect(() => {
        getEvents()
    }, [])

    return (
        <HomeTemplate handleHeaderClick={handleSelectedEventUrl}>
            <HomeMain >
                <MainImageCarousel eventsData={dataEvents} />
            </HomeMain>

            <Events
                selectedButton={selectedButton}
                handleSelectedEventUrl={handleSelectedEventUrl}
                handleSelectedButtonType={handleSelectedButtonType}
                dataEvents={dataEvents}
                selectedEventUrl={selectedEventUrl}
            />
        </HomeTemplate>
    )
}
export default Home;