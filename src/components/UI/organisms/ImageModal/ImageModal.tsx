import './ImageModal.css'

export default function ImageModal({ imageArray, onClose, imageUrl }: any) {

    return (
        <div id='imageModal'>
            <img src={imageUrl} alt="image" />
            <button onClick={onClose}><span>Close</span></button>
            <button value="left" className="button-carousel-left"><span>Previous image</span></button>
            <button value="right" className="button-carousel-right"><span>Next image</span></button>
        </div>
    )
}