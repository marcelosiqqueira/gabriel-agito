import { useEffect, useState } from "react";
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
    const [imageTeste, setImageTeste] = useState<string | undefined>();

    useEffect(() => {
        props.selectedEventUrl
            ? loadEventImages(props.selectedEventUrl)
            : "erro";
    }, [props.selectedEventUrl]);

    function handleButtonClick(e: any) {
        if (e.target.value === "left" && carouselIndex != 0)
            setCarouselIndex(carouselIndex - 1);

        if (
            e.target.value === "right" &&
            carouselIndex != imageArray.length - 1
        )
            setCarouselIndex(carouselIndex + 1);
    }

    function handleCloseModal() {
        showModal ? setShowModal(false) : setShowModal(true);
    }

    async function loadEventImages(event: any) {
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
                            onClose={handleCloseModal}
                        />,
                        document.body
                    )}
                <img
                    src={imageArray[carouselIndex]?.url ?? imageError}
                    alt={imageArray[carouselIndex]?.alt}
                    onClick={handleCloseModal}
                />
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
