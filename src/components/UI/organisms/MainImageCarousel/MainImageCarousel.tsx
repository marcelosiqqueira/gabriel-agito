import './MainImageCarousel.css'
import { createPortal } from 'react-dom'
import ImageModal from '../ImageModal/ImageModal'
import { useState, useEffect } from 'react'
import IndexButton from '../../atoms/ListIndexButton/IndexButton'
import { basePhotoUrl, apiMainFolderUrl } from '../../../../const/const'

export default function MainImageCarousel({ coverageEvents }: any) {
    const imageError = 'src/assets/imageError.webp'
    const [showModal, setShowModal] = useState(false);
    const [imageArray, setImageArray] = useState<any>([])
    const [carouselIndex, setCarouselIndex] = useState(0)

    useEffect(() => {
        loadEventImages()
    }, [])

    async function loadEventImages() {
        const data = await fetchData()
        const array: any = []
        data.forEach((element: any) => {
            const image = new Image()
            image.src = (basePhotoUrl + element.id)
            array.unshift(image)
        });
        setImageArray(array)
    }

    async function fetchData(): Promise<any> {
        const res = await fetch(apiMainFolderUrl)
        const data = await res.json()
        return data
    }

    function handleButtonClick(id: number) {
        setCarouselIndex(id)
    }

    function handleCloseModal() {
        showModal ? setShowModal(false) : setShowModal(true)
    }

    return (
        <div id="image-carousel">
            {showModal && createPortal(
                <ImageModal imageArray={imageArray} onClose={handleCloseModal} imageUrl={imageArray[carouselIndex]?.src} />,
                document.body
            )}
            <img src={imageArray[carouselIndex]?.src ? imageArray[carouselIndex]?.src : imageError} alt="img" onClick={handleCloseModal} />
            <div id='home-index-buttons'>
                <IndexButton value='♦' id={0} handleButtonClick={handleButtonClick}></IndexButton>
                <IndexButton value='♦' id={1} handleButtonClick={handleButtonClick}></IndexButton>
                <IndexButton value='♦' id={2} handleButtonClick={handleButtonClick}></IndexButton>
                <IndexButton value='♦' id={3} handleButtonClick={handleButtonClick}></IndexButton>
                <IndexButton value='♦' id={4} handleButtonClick={handleButtonClick}></IndexButton>
            </div>
        </div>
    )
}