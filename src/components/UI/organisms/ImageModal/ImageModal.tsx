import { ImageInfo } from '../../../../Interfaces/ImageInfo'
import './ImageModal.css'
import { useRef } from 'react'

interface ImageModalProps {
    imageArray: ImageInfo[];
    carouselIndex: number
    onClose(): void
    handleButtonClick: (e: React.MouseEvent) => void
}

export default function ImageModal({ imageArray, carouselIndex, onClose, handleButtonClick }: ImageModalProps) {
    const divRef = useRef<any>(null)

    return (
        <div id='imageModal' ref={divRef} tabIndex={1} aria-modal={true} onLoad={() => divRef.current?.focus()}>
            <img src={imageArray[carouselIndex]?.url} alt={imageArray[carouselIndex]?.alt} tabIndex={0} />
            <button onClick={onClose}><span>Close</span></button>
            <button value="left" className="button-carousel-left" onClick={(e) => handleButtonClick(e)}><span>Previous image</span></button>
            <button value="right" className="button-carousel-right" onClick={(e) => handleButtonClick(e)}><span>Next image</span></button>
        </div>
    )
} 