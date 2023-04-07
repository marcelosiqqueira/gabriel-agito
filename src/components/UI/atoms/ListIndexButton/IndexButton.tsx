import { PaginatedProps } from "../../molecules/IndexButtonList/IndexButtonList";
import "./IndexButton.css";

export enum ButtonAction {
    START  = 'start',
    NEXT = 'next',
    PREV = 'prev',
    END = 'end',
    PAGE = 'page'
}

interface IndexButtonProps {
    label: string;
    action: ButtonAction;
    index?: number;
    isSelect?: boolean
    onButtonClick(props: PaginatedProps): void;
}

export default function IndexButton({ label, onButtonClick, action, index, isSelect = false }: IndexButtonProps) {
    function handleButtonClick() {
        onButtonClick({ action, index });
    }

    return (
        <button className="index-button" data-select={isSelect} onClick={handleButtonClick}>
            {label}
        </button>
    );
}
