import './ImageModal.css'
import { useRef } from 'react'

export default function ImageModal({ carouselState: { carouselIndex, setCarouselIndex }, imageArray, onClose, setShowModal }: any) {
    const divRef = useRef<any>(null)

    function handleKeyboardInput(event: any) {
        if (event.key === 'ArrowLeft')
            (carouselIndex > 0) && setCarouselIndex(carouselIndex - 1)
        if (event.key === 'ArrowRight')
            (carouselIndex < imageArray.length - 1) && setCarouselIndex(carouselIndex + 1)
        if (event.key === 'Escape')
            setShowModal(false)
        event.preventDefault()
    }

    return (
        <div id='imageModal' ref={divRef} tabIndex={1} onKeyDown={handleKeyboardInput} aria-modal={true} onLoad={() => divRef.current?.focus()}>
            <img src={imageArray[carouselIndex]?.src} alt="image" tabIndex={0} />
            <button onClick={onClose}><span>Close</span></button>
            <button value="left" className="button-carousel-left" onClick={() => (carouselIndex > 0) && setCarouselIndex(carouselIndex - 1)}><span>Previous image</span></button>
            <button value="right" className="button-carousel-right" onClick={() => (carouselIndex < imageArray.length - 1) && setCarouselIndex(carouselIndex + 1)}><span>Next image</span></button>
        </div>
    )
}