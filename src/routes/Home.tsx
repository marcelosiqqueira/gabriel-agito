import { useState } from "react";
import HomeTemplate from "../templates/HomeTemplate/HomeTemplate";

function Home() {
    const [selectedButton, setSelectedButton] = useState('coverages')

    function handleHeaderClick(text: string) {
        setSelectedButton(text)
    }

    return (
        <HomeTemplate selectedButtonState={{ selectedButton, setSelectedButton }} handleHeaderClick={handleHeaderClick} />
    )
}
export default Home;