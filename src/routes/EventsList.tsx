import CustomList from "../components/UI/organisms/CustomList/CustomList";

function EventsList({ events, handleSelectEvent, listType }: any) {

    return (
        <>
            {getListType()}
        </>
    )

    function getListType() {
        return (
            <CustomList
                events={events}
                listType={listType}
                handleSelectEvent={listType === 'coverages' ? handleSelectEvent : 'error'}
            />
        )
    }
}

export default EventsList;