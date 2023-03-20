import ListItem from "../../molecules/ListItem/ListItem";
import IndexButtonList from "../../molecules/IndexButtonList/IndexButtonList";
import "./CustomList.css"

export default function CustomList(props: any) {
    return (
        <ul id="eventsList">
            {setListItem(props)}
            <IndexButtonList events={props.events}></IndexButtonList>
        </ul>
    )

    function setListItem(props: any) {
        const ListItemArray = []
        for (let i = 0; i < props.events.length; i++) {
            ListItemArray.push(<ListItem key={props.events[i]?.id} event={props.events[i]} url={props.events[i]?.id} handleSelectEvent={props.handleSelectEvent}></ListItem>)
        }
        return ListItemArray
    }
}