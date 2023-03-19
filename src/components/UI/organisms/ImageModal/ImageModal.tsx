import './ImageModal.css'
import ImageCarousel from '../ImageCarousel'

export default function ImageModal({ events, onClose, imageUrl }: any) {
    return (
        <div id='imageModal'>
            <img src={imageUrl} alt="image" />
            <button onClick={onClose}><span>Close</span></button>
            <button value="left" className="button-carousel-left" onClick={events}><span>Previous image</span></button>
            <button value="right" className="button-carousel-right" onClick={events}><span>Next image</span></button>
        </div>
    )
}