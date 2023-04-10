import './MainImageCarousel.css'
import { createPortal } from 'react-dom'
import ImageModal from '../ImageModal/ImageModal'
import { useState, useEffect } from 'react'
import IndexButton, { ButtonAction } from '../../atoms/ListIndexButton/IndexButton'
import { basePhotoUrl } from '../../../../const/const'
import { ImageInfo } from '../../../../Interfaces/ImageInfo'
import { fetchData } from '../../../../func/functions'
import { EventType } from '../../../../Interfaces/EventType'
import { PaginatedProps } from '../../molecules/IndexButtonList/IndexButtonList'
import React from 'react'

export default React.memo(function MainImageCarousel() {
    const imageError = 'src/assets/imageError.webp'
    const [showModal, setShowModal] = useState(false);
    const [imageArray, setImageArray] = useState<ImageInfo[]>([])
    const [carouselIndex, setCarouselIndex] = useState(0)

    useEffect(() => {
        getEvents()
    }, [])

    console.log('Carrossel renderizou')

    async function getEvents(): Promise<void> {
        const data = await fetchData<EventType[]>('principal')
        loadEventImages(data)
    }

    async function loadEventImages(data: EventType[]) {
        const eventsLis: ImageInfo[] = []

        for (const { id, name } of data) {
            eventsLis.push({
                id,
                url: basePhotoUrl + id,
                alt: `Imagem do evento - ${name.split("--")[2]}`,
            })
        }
        setImageArray(eventsLis)
    }

    function handleButtonClick({ index }: PaginatedProps) {
        if (!index) return
        setCarouselIndex(index)
    }

    function handleCloseModal() {
        showModal ? setShowModal(false) : setShowModal(true)
    }

    return (
        <div id="main-image-carousel">
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
})