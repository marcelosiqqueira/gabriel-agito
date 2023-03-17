import ListItem from "../../molecules/ListItem/ListItem";
import "./CustomList.css"

export default function CustomList(props: any) {
    return (
        <ul id="eventsList">
            <ListItem url={'a'} handleSelectEvent={props.handleSelectEvent}></ListItem>
            <ListItem url={'b'} handleSelectEvent={props.handleSelectEvent}></ListItem>
            <ListItem url={'c'} handleSelectEvent={props.handleSelectEvent}></ListItem>
            <ListItem url={'d'} handleSelectEvent={props.handleSelectEvent}></ListItem>
            <ListItem url={'e'} handleSelectEvent={props.handleSelectEvent}></ListItem>
            <ListItem url={'f'} handleSelectEvent={props.handleSelectEvent}></ListItem>
            <ListItem url={'g'} handleSelectEvent={props.handleSelectEvent}></ListItem>
        </ul>
    )
}