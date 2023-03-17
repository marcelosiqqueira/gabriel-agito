import CustomList from "../components/UI/organisms/CustomList/CustomList";

function EventsList(props: any) {

    function getListType() {
        if (props.listType === 'coverages')
            return (
                <CustomList handleSelectEvent={props.handleSelectEvent}></CustomList>
            )
        if (props.listType === 'schedule')
            return (
                <>
                    Agenda clicada
                    <CustomList handleSelectEvent={props.handleSelectEvent}></CustomList>
                </>
            )
    }

    return (
        <>
            {getListType()}
        </>
    )
}

export default EventsList;