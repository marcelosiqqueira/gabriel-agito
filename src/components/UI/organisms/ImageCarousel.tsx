import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import ImageModal from "./ImageModal/ImageModal"
import { basePhotoUrl, apiUrl } from "../../../const/const"

export default function ImageCarousel(props: any) {
    const imageError = 'src/assets/imageError.webp'
    const [carouselIndex, setCarouselIndex] = useState(0)
    const [imageArray, setImageArray] = useState<string[]>([])
    const [showModal, setShowModal] = useState(false);


    useEffect(() => {
        props.selectedEventUrl && loadEventImages(props.selectedEventUrl)
    }, [props.selectedEventUrl])

    function handleCloseModal() {
        showModal ? setShowModal(false) : setShowModal(true)
    }

    async function loadEventImages(event: any) {
        const data = await fetchData(props.selectedEventUrl)
        const array: string[] = []
        data.forEach((element: any) => {
            // const image = new Image()
            // image.src = (basePhotoUrl + element.id)
            // image.onclick = () => setShowModal(!showModal)
            // array.unshift(image)
            const url = (basePhotoUrl + element.id)
            array.unshift(url)
        });
        setImageArray(array)
        setCarouselIndex(0)
    }

    async function fetchData(id: string): Promise<any> {
        const res = await fetch(apiUrl + id)
        const data = await res.json()
        return data
    }

    return (
        <div id="image-carousel">
            {showModal && createPortal(
                <ImageModal
                    carouselState={{ carouselIndex, setCarouselIndex }}
                    imageArray={imageArray}
                    onClose={handleCloseModal}
                    setShowModal={setShowModal}
                />,
                document.body
            )}
            <img src={imageArray[carouselIndex] ?? 'error'} alt="img" onClick={() => setShowModal(!showModal)} />
            <button className="button-carousel-left" onClick={() => carouselIndex > 0 && setCarouselIndex(carouselIndex - 1)}><span>Previous image</span></button>
            <button className="button-carousel-right" onClick={() => carouselIndex < (imageArray.length - 1) && setCarouselIndex(carouselIndex + 1)}><span>Next image</span></button>
        </div>
    )
}