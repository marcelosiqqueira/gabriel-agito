import IndexButton, {
    ButtonAction,
} from "../../atoms/ListIndexButton/IndexButton";
import "./IndexButtonList.css";
import { DetailedEvent } from "../../../../Interfaces/DetailedEvent";

interface IndexButtonListProps {
    events: any;
    listType: any;
    actualPage: number;
    handleFunction(page: number): void;
}

export interface PaginatedProps {
    index?: number;
    action: ButtonAction;
}

export default function IndexButtonList({
    handleFunction,
    actualPage,
    events
}: IndexButtonListProps) {
    const generateIndex = (increment: number) => {
        const size = getTotalIndexPages();

        if (actualPage <= size - 2) {
            return actualPage + increment;
        }

        if (actualPage === size - 1) {
            return actualPage - increment + 1
        }

        if (actualPage === size) {
            return actualPage - increment
        }
    }

    function getTotalIndexPages() {
        const lastEvent: DetailedEvent = events[events.length - 1];
        if (lastEvent)
            return lastEvent.pageId;
        return 1;
    }
    
    function handleButtonClick({ action, index }: PaginatedProps) {
        if (action === ButtonAction.PAGE && index) {
            handleFunction(index);
            return
        }
        switch (action) {
            case ButtonAction.START:{
                handleFunction(1)
                break;
            }
            case ButtonAction.NEXT:{
                if (actualPage + 1 > getTotalIndexPages()) return
                handleFunction(actualPage + 1)
                break;
            }
            case ButtonAction.PREV:{
                if (actualPage === 1) return
                handleFunction(actualPage - 1)
                break;
            }
            case ButtonAction.END:{
                handleFunction(getTotalIndexPages())
                break;
            }
            default:{
                break;
            }
        }
    }

    return (
        <div id="index-button-list">
            <IndexButton
                label={"<|"}
                action={ButtonAction.START}
                onButtonClick={handleButtonClick}
            />
            <IndexButton
                label={"<"}
                action={ButtonAction.PREV}
                onButtonClick={handleButtonClick}
            />
            <IndexButton
                label={`${generateIndex(actualPage <= getTotalIndexPages() -2 ? 0 : 2)}`}
                index={generateIndex(actualPage <= getTotalIndexPages() -2 ? 0 : 2)}
                action={ButtonAction.PAGE}
                onButtonClick={handleButtonClick}
            />
            
            <IndexButton
                label={`${generateIndex(1)}`}
                index={generateIndex(1)}
                action={ButtonAction.PAGE}
                onButtonClick={handleButtonClick}
            />

            <IndexButton
                label={`${generateIndex(actualPage <= getTotalIndexPages() -2 ? 2 : 0)}`}
                index={generateIndex(actualPage <= getTotalIndexPages() -2 ? 2 : 0)}
                action={ButtonAction.PAGE}
                onButtonClick={handleButtonClick}
            />
            <IndexButton
                label={">"}
                action={ButtonAction.NEXT}
                onButtonClick={handleButtonClick}
            />
            <IndexButton
                label={"|>"}
                action={ButtonAction.END}
                onButtonClick={handleButtonClick}
            />
        </div>
    );
}
