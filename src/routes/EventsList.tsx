import CustomList from "../components/UI/organisms/CustomList/CustomList";

function EventsList(props: any) {

    return (
        <>
            {getListType()}
        </>
    )

    function getListType() {
        if (props.listType === 'coverages')
            return (
                <CustomList events={props.events} handleSelectEvent={props.handleSelectEvent}></CustomList>
            )
        if (props.listType === 'schedule')
            return (
                <>
                    Agenda clicada
                    <CustomList events={props.events} handleSelectEvent={props.handleSelectEvent}></CustomList>
                </>
            )
    }
}

export default EventsList;