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
    onButtonClick(props: PaginatedProps | number): void;
}

export default function IndexButton({ label, onButtonClick, action, index }: IndexButtonProps) {
    function handleButtonClick() {
        onButtonClick({ action, index });
    }

    return (
        <button className="index-button" onClick={handleButtonClick}>
            {label}
        </button>
    );
}
