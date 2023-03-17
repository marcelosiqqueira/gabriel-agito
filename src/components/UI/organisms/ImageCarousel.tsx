import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import ImageModal from "./ImageModal/ImageModal"

export default function ImageCarousel() {
    const testImages = ['https://source.unsplash.com/random?sig=1', 'https://source.unsplash.com/random?sig=2', 'https://source.unsplash.com/random?sig=3', 'https://source.unsplash.com/random?sig=4', 'https://source.unsplash.com/random?sig=5', 'https://source.unsplash.com/random?sig=6']
    const [carouselIndex, setCarouselIndex] = useState(0)
    const [showModal, setShowModal] = useState(false);

    function handleButtonClick(e: any) {
        if (e.target.value === 'left')
            setCarouselIndex(carouselIndex - 1)

        if (e.target.value === 'right')
            setCarouselIndex(carouselIndex + 1)
    }

    function handleCloseModal() {
        showModal ? setShowModal(false) : setShowModal(true)
        console.log('oi')
    }

    return (
        <div id="image-carousel">
            {showModal && createPortal(
                <ImageModal onClose={handleCloseModal} imageUrl={testImages[carouselIndex]} />,
                document.body
            )}
            <img src={testImages[carouselIndex]} alt="img" onClick={handleCloseModal} />
            <button value="left" className="button-carousel-left" onClick={e => handleButtonClick(e)}><span>Previous image</span></button>
            <button value="right" className="button-carousel-right" onClick={e => handleButtonClick(e)}><span>Next image</span></button>
        </div>
    )
}