import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import ImageModal from "./ImageModal/ImageModal";
import { basePhotoUrl } from "../../../const/const";
import { fetchData } from "../../../func/functions";
import { EventType } from "../../../Interfaces/EventType";
import { ImageInfo } from "../../../Interfaces/ImageInfo";

export default function ImageCarousel(props: any) {
    const imageError = "src/assets/imageError.webp";
    const [carouselIndex, setCarouselIndex] = useState(0);
    const [imageArray, setImageArray] = useState<ImageInfo[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(1)

    const firstImage = useRef<HTMLImageElement>(null)
    const secondImage = useRef<HTMLImageElement>(null)

    useEffect(() => {
        props.selectedEventUrl
            ? loadEventImages()
            : "erro";
    }, [props.selectedEventUrl]);

    function handleButtonClick(e: React.MouseEvent) {
        console.log('oi')
        if ((e.target as HTMLInputElement)?.value === "left" && carouselIndex != 0) {
            setCarouselIndex(carouselIndex - 1);
            if (selectedImage === 1) {
                firstImage.current?.toggleAttribute('hidden')
                secondImage.current?.toggleAttribute('hidden')
                setSelectedImage(2)
            }
            else {
                firstImage.current?.toggleAttribute('hidden')
                secondImage.current?.toggleAttribute('hidden')
                setSelectedImage(1)
            }
        }

        if ((e.target as HTMLInputElement)?.value === "right" && carouselIndex != imageArray.length - 1) {
            setCarouselIndex(carouselIndex + 1);
            if (selectedImage === 1) {
                firstImage.current?.toggleAttribute('hidden')
                secondImage.current?.toggleAttribute('hidden')
                setSelectedImage(2)
            }
            else {
                firstImage.current?.toggleAttribute('hidden')
                secondImage.current?.toggleAttribute('hidden')
                setSelectedImage(1)
            }
        }
    }

    function handleCloseModal() {
        showModal ? setShowModal(false) : setShowModal(true);
    }

    async function downloadImage() {
        // fetch('https://drive.google.com/uc?export=view&id=1BVJSF0xiYXomgPritroziz9e2jY57V4I',
        //     { mode: 'cors' })
        //     .then(response => response.blob())
        //     .then(blob => {
        //         console.log(blob);
        //     });
    }

    async function loadEventImages() {
        const data = await fetchData<EventType[]>(`events/${props.selectedEventUrl}`);
        const array: ImageInfo[] = [];
        data.forEach(({ id, name }) => {
            array.unshift({
                id,
                url: basePhotoUrl + id,
                alt: `Imagem do evento - ${name.split("--")[2]}`,
            });
        });
        setImageArray(array);
        setCarouselIndex(0);
    }

    return (
        <>
            <div id="image-carousel">
                {showModal &&
                    createPortal(
                        <ImageModal
                            imageArray={imageArray}
                            carouselIndex={carouselIndex}
                            onClose={handleCloseModal}
                            handleButtonClick={handleButtonClick}
                        />,
                        document.body
                    )}
                {/* <img
                    src={imageArray[carouselIndex]?.url ?? imageError}
                    alt={imageArray[carouselIndex]?.alt}
                    onClick={handleCloseModal}
                /> */}
                <>
                    <img src={imageArray[carouselIndex]?.url ? selectedImage === 1 ? imageArray[carouselIndex]?.url : imageArray[carouselIndex + 1]?.url : imageError} alt={selectedImage === 1 ? imageArray[carouselIndex]?.url : imageArray[carouselIndex + 1]?.alt} ref={firstImage} onClick={handleCloseModal} />
                    <img src={imageArray[carouselIndex]?.url ? selectedImage === 2 ? imageArray[carouselIndex]?.url : imageArray[carouselIndex + 1]?.url : imageError} alt={selectedImage === 2 ? imageArray[carouselIndex]?.url : imageArray[carouselIndex + 1]?.alt} hidden ref={secondImage} onClick={handleCloseModal} />
                </>
                <button
                    value="left"
                    className="button-carousel-left"
                    onClick={(e) => handleButtonClick(e)}
                >
                    <span>Previous image</span>
                </button>
                <button
                    value="right"
                    className="button-carousel-right"
                    onClick={(e) => handleButtonClick(e)}
                >
                    <span>Next image</span>
                </button>
            </div>
        </>
    );
}
