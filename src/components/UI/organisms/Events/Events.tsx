import "./Events.css";
import ImageCarousel from "../ImageCarousel";
import CustomList from "../CustomList/CustomList";

function Events({
    setSelectedButton,
    coverageEvents,
    scheduleEvents,
    selectedEventUrl,
    setSelectedEventUrl,
    selectedButton
}: any) {

    function handleSelectEvent(url: string) {
        setSelectedEventUrl(url);
    }

    return (
        <section id="events">
            <div className="events-container">
                <div className="events-images">
                    <ImageCarousel
                        selectedEventUrl={selectedEventUrl}
                    ></ImageCarousel>
                </div>
                <div className="events-description">
                    <p>Mauris bibendum ipsum lorem, in vehicula leo interdum</p>
                </div>
            </div>
            {/* COMPONENT */}
            <div className="events-container2">
                <div className="header-buttons">
                    <button
                        className={`coverages-button ${selectedButton === "schedule" ? "unfocused" : ""}`}
                        onClick={() => setSelectedButton("coverages")}
                    >
                        Coberturas
                    </button>
                    <button
                        className={`schedule-button ${selectedButton === "coverages" ? "unfocused" : ""}`}
                        onClick={() => setSelectedButton("schedule")}
                    >
                        Agenda
                    </button>
                </div>

                <div className="events-list">
                    <CustomList
                        events={
                            selectedButton === "coverages"
                                ? coverageEvents
                                : scheduleEvents
                        }
                        listType={selectedButton}
                        handleSelectEvent={handleSelectEvent}
                    />
                </div>
                <div className="events-buttons">
                    <button className="footer-button" title="footer button">
                        <span className="button-description"></span>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Events;
