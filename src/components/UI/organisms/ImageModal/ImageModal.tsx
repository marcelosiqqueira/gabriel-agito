import './ImageModal.css'

export default function ImageModal({ onClose, imageUrl }: any) {
    return (
        <div id='imageModal'>
            <img src={imageUrl} alt="image" />
            <button onClick={onClose}>Close</button>
        </div>
    )
}