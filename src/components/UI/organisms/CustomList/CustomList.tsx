import ListItem from "../../molecules/ListItem/ListItem";

import IndexButtonList from "../../molecules/IndexButtonList/IndexButtonList";
import "./CustomList.css"
import { useState, useEffect } from "react";

export default function CustomList(props: any) {
    const [totalPages, setTotalPages] = useState(1)
    

    function setListItem(props: any) {
        const ListItemArray = []
        for (let i = 0; i < props.events.length; i++) {
            ListItemArray.push(
                <ListItem 
                    key={props.events[i]?.id} 
                    event={props.events[i]} 
                    url={props.events[i]?.id} 
                    handleSelectEvent={props.handleSelectEvent}
                ></ListItem> 
            )
        }
        return ListItemArray
    }

    return (
        <ul id="eventsList">
            {setListItem(props)}
            <li>
                <IndexButtonList 
                    events={props.events}
                    listType={props.listType}
                    // totalPages={totalPages}
                    // settotalPages={setTotalPages}
                    // actualPage={actualPage}
                    // setActualPage={setActualPage}
                />
            </li>
        </ul>
    )
}