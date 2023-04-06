import { ImageInfo } from '../../../../Interfaces/ImageInfo'
import './ImageModal.css'
import { useRef } from 'react'

interface ImageModalProps {
    imageArray: ImageInfo[];
    onClose(): void
}

export default function ImageModal({ imageArray, onClose }: ImageModalProps) {
    const divRef = useRef<any>(null)

    return (
        <div id='imageModal' ref={divRef} tabIndex={1} aria-modal={true} onLoad={() => divRef.current?.focus()}>
            <img src={imageArray[0]?.url} alt={imageArray[0]?.alt} tabIndex={0} />
            <button onClick={onClose}><span>Close</span></button>
            <button value="left" className="button-carousel-left"><span>Previous image</span></button>
            <button value="right" className="button-carousel-right"><span>Next image</span></button>
        </div>
    )
}