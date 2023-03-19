import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import ImageModal from "./ImageModal/ImageModal"
import { basePhotoUrl } from "../../../const/const"

export default function ImageCarousel(props: any) {
    const [carouselIndex, setCarouselIndex] = useState(0)
    const [imageArray, setImageArray] = useState<any>([])
    const [showModal, setShowModal] = useState(false);


    useEffect(() => {
        setCarouselIndex(0)
        props.selectedEventUrl ? loadEventImages(props.selectedEventUrl) : 'erro'
    }, [props.selectedEventUrl])

    function handleButtonClick(e: any) {
        if (e.target.value === 'left' && carouselIndex != 0)
            setCarouselIndex(carouselIndex - 1)

        if (e.target.value === 'right' && carouselIndex != imageArray.length - 1)
            setCarouselIndex(carouselIndex + 1)
    }

    function handleCloseModal() {
        showModal ? setShowModal(false) : setShowModal(true)
    }

    async function loadEventImages(event: any) {
        const data = await fetchData(props.selectedEventUrl)
        const array: any = []
        data.forEach((element: any) => {
            const image = new Image()
            image.src = (basePhotoUrl + element.id)
            array.unshift(image)
        });
        setImageArray(array)
    }

    async function fetchData(id: string): Promise<any> {
        const res = await fetch('https://gabriel-agito-back.onrender.com/events/' + id)
        const data = await res.json()
        return data
    }

    return (
        <div id="image-carousel">
            {showModal && createPortal(
                <ImageModal onClose={handleCloseModal} imageUrl={imageArray[carouselIndex]?.src} />,
                document.body
            )}
            <img src={imageArray[carouselIndex]?.src} alt="img" onClick={handleCloseModal} />
            <button value="left" className="button-carousel-left" onClick={e => handleButtonClick(e)}><span>Previous image</span></button>
            <button value="right" className="button-carousel-right" onClick={e => handleButtonClick(e)}><span>Next image</span></button>
        </div>
    )
}