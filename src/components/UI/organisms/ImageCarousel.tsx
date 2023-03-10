import { useState } from "react"

export default function ImageCarousel() {
    const testImages = ['https://source.unsplash.com/random', 'https://source.unsplash.com/random', 'https://source.unsplash.com/random', 'https://source.unsplash.com/random', 'https://source.unsplash.com/random', 'https://source.unsplash.com/random']
    const [carouselIndex, setCarouselIndex] = useState(0)

    function handleButtonClick(e: any) {
        if (e.target.value === 'left')
            setCarouselIndex(carouselIndex - 1)

        if (e.target.value === 'right')
            setCarouselIndex(carouselIndex + 1)
    }

    return (
        <div id="image-carousel">
            <img src={testImages[carouselIndex]} alt="" />
            <button value="left" className="button-carousel-left" onClick={e => handleButtonClick(e)}><span>Previous image</span></button>
            <button value="right" className="button-carousel-right" onClick={e => handleButtonClick(e)}><span>Next image</span></button>
        </div>
    )
}