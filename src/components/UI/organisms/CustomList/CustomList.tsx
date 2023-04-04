import ListItem from "../../molecules/ListItem/ListItem";

import IndexButtonList from "../../molecules/IndexButtonList/IndexButtonList";
import "./CustomList.css"
import { useState, useEffect } from "react";

export default function CustomList(props: any) {
    const [totalPages, setTotalPages] = useState(1)
    const [actualPage, setActualPage] = useState(1);

    useEffect(() => {
        setListItem(props)
        // console.log('pagina atuallll', actualPage)
    }, [actualPage, props.listType])

    useEffect(() => {
        setActualPage(1);
    }, [props.listType])

    function setListItem(props: any) {
        const ListItemArray = []
        for (let i = 0; i < props.events.length; i++) {
            if (props.events[i].pageId === actualPage) {
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
        return ListItemArray
    }

    return (
        <div id="list-content">
            <ul id="eventsList">
                {setListItem(props)}
            </ul>
            <IndexButtonList 
            events={props.events}
            listType={props.listType}
            actualPage={actualPage}
            setActualPage={setActualPage}>
            </IndexButtonList>
        </div>
    )
}