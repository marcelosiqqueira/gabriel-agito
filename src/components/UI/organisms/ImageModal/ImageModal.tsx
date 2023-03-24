import './ImageModal.css'
import { useEffect, useRef } from 'react'

export default function ImageModal({ carouselState: { carouselIndex, setCarouselIndex }, imageArray, onClose, setShowModal }: any) {

    var focusableEls = document.body.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');

    const divRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        divRef.current?.focus()
    }, [ImageModal])

    console.log('imageModal renderizou')

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
        <div id='imageModal' ref={divRef} tabIndex={1} onKeyDown={handleKeyboardInput} aria-modal={true}>
            <img src={imageArray[carouselIndex]?.src} alt="image" tabIndex={0} />
            <button onClick={onClose}><span>Close</span></button>
            <button value="left" className="button-carousel-left" onClick={() => (carouselIndex > 0) && setCarouselIndex(carouselIndex - 1)}><span>Previous image</span></button>
            <button value="right" className="button-carousel-right" onClick={() => (carouselIndex < imageArray.length - 1) && setCarouselIndex(carouselIndex + 1)}><span>Next image</span></button>
        </div>
    )
}