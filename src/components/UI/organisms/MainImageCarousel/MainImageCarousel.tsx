import './MainImageCarousel.css'
import { createPortal } from 'react-dom'
import ImageModal from '../ImageModal/ImageModal'
import { useState, useEffect } from 'react'
import IndexButton, { ButtonAction } from '../../atoms/ListIndexButton/IndexButton'
import { basePhotoUrl } from '../../../../const/const'
import { DataEvents, SelectButtonKey } from '../../../../routes/Home'
import { ImageInfo } from '../../../../Interfaces/ImageInfo'
import { DetailedEvent } from '../../../../Interfaces/DetailedEvent'

interface MainImageCarousel {
    coverageEvents:  DataEvents
}

export default function MainImageCarousel({ coverageEvents }: MainImageCarousel) {
    const imageError = 'src/assets/imageError.webp'
    const [showModal, setShowModal] = useState(false);
    const [imageArray, setImageArray] = useState<ImageInfo[]>([])
    const [carouselIndex, setCarouselIndex] = useState(0)

    useEffect(() => {
        loadEventImages()
    }, [coverageEvents])

    async function loadEventImages() {
        const eventsLis: ImageInfo[] = []

        for (const [, detailedEvents] of Object.entries(coverageEvents[SelectButtonKey.SCHEDULE])) {
            eventsLis.push(...(detailedEvents as DetailedEvent[])?.map(({ id, name }) => ({ 
                id,
                url:basePhotoUrl + id,
                alt: `Imagem do evento - ${name.split('--')[2]}` 
            })))
        }

        for (const [, detailedEvents] of Object.entries(coverageEvents[SelectButtonKey.COVERAGES])) {
            eventsLis.push(...(detailedEvents as DetailedEvent[])?.map(({ id, name }) => ({ 
                id,
                url:basePhotoUrl + id,
                alt: `Imagem do evento - ${name.split('--')[2]}` 
            })))
        }

        setImageArray(eventsLis)
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
                <ImageModal imageArray={imageArray} onClose={handleCloseModal} />,
                document.body
            )}
            <img src={imageArray[carouselIndex]?.url ? imageArray[carouselIndex]?.url : imageError} alt="img" onClick={handleCloseModal} />
            <div id='home-index-buttons'>
                <IndexButton label='♦' index={0} action={ButtonAction.PAGE} onButtonClick={handleButtonClick}></IndexButton>
                <IndexButton label='♦' index={1} action={ButtonAction.PAGE} onButtonClick={handleButtonClick}></IndexButton>
                <IndexButton label='♦' index={2} action={ButtonAction.PAGE} onButtonClick={handleButtonClick}></IndexButton>
                <IndexButton label='♦' index={3} action={ButtonAction.PAGE} onButtonClick={handleButtonClick}></IndexButton>
                <IndexButton label='♦' index={4} action={ButtonAction.PAGE} onButtonClick={handleButtonClick}></IndexButton>
            </div>
        </div>
    )
}