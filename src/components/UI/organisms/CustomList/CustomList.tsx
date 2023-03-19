import ListItem from "../../molecules/ListItem/ListItem";
import { basePhotoUrl } from "../../../../const/const";
import "./CustomList.css"

export default function CustomList(props: any) {
    return (
        <ul id="eventsList">
            {setListItem(props)}
        </ul>
    )

    function setListItem(props: any) {
        const ListItemArray = []
        for (let i = 0; i < props.events.length; i++) {
            ListItemArray.push(<ListItem key={props.events[i].id} url={props.events[i].id} handleSelectEvent={props.handleSelectEvent}></ListItem>)
        }
        // console.log(ListItemArray)
        return ListItemArray
    }
}