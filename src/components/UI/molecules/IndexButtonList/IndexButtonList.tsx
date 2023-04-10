import IndexButton, {
    ButtonAction,
} from "../../atoms/ListIndexButton/IndexButton";
import "./IndexButtonList.css";
import { DetailedEvent } from "../../../../Interfaces/DetailedEvent";
import { DataEvents, SelectButtonKey } from "../../../../routes/Home";

interface IndexButtonListProps {
    events: DataEvents;
    buttonType: SelectButtonKey;
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
    buttonType,
    events
}: IndexButtonListProps) {    
    const generateIndex = (increment: number) => {
        const size = events[buttonType].totalPages;
        if (!size) return

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
    
    function handleButtonClick({ action, index }: PaginatedProps) {
        const total  = events[buttonType].totalPages
        if (!total) return;
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
                if (actualPage + 1 > total) return
                handleFunction(actualPage + 1)
                break;
            }
            case ButtonAction.PREV:{
                if (actualPage === 1) return
                handleFunction(actualPage - 1)
                break;
            }
            case ButtonAction.END:{
                handleFunction(total)
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
                label={`${generateIndex(actualPage <= (events[buttonType].totalPages) -2 ? 0 : 2)}`}
                index={generateIndex(actualPage <= (events[buttonType].totalPages) -2 ? 0 : 2)}
                action={ButtonAction.PAGE}
                isSelect={actualPage === generateIndex(actualPage <= (events[buttonType].totalPages) -2 ? 0 : 2)}
                onButtonClick={handleButtonClick}
            />
            
            <IndexButton
                label={`${generateIndex(1)}`}
                index={generateIndex(1)}
                action={ButtonAction.PAGE}
                isSelect={actualPage === generateIndex(1)}
                onButtonClick={handleButtonClick}
            />

            <IndexButton
                label={`${generateIndex(actualPage <= (events[buttonType].totalPages) -2 ? 2 : 0)}`}
                index={generateIndex(actualPage <= (events[buttonType].totalPages) -2 ? 2 : 0)}
                action={ButtonAction.PAGE}
                isSelect={actualPage === generateIndex(actualPage <= (events[buttonType].totalPages) -2 ? 2 : 0)}
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
