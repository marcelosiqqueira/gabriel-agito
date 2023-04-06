import "./Events.css";
import ImageCarousel from "../ImageCarousel";
import CustomList from "../CustomList/CustomList";
import { DataEvents, SelectButtonKey } from "../../../../routes/Home";

interface EventsProps {
    dataEvents: DataEvents;
    selectedEventUrl: string;
    selectedButton: SelectButtonKey;
    handleSelectedEventUrl(buttonType: SelectButtonKey): void;
}

function Events({
    dataEvents,
    selectedEventUrl,
    handleSelectedEventUrl,
    selectedButton
}: EventsProps) {

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
                        onClick={() => handleSelectedEventUrl(SelectButtonKey.COVERAGES)}
                    >
                        Coberturas
                    </button>
                    <button
                        className={`schedule-button ${selectedButton === "coverages" ? "unfocused" : ""}`}
                        onClick={() => handleSelectedEventUrl(SelectButtonKey.SCHEDULE)}
                    >
                        Agenda
                    </button>
                </div>

                <div className="events-list">
                    <CustomList
                        events={dataEvents}
                        buttonType={selectedButton}
                        handleSelectEvent={handleSelectedEventUrl}
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
