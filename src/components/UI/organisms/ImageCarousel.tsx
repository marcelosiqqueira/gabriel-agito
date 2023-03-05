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
        ///////////// Remover style inline da img
        <div id="image-carousel">
            <img src={testImages[carouselIndex]} style={{ width: '200px', border: '1px solid red' }} alt="" />
            <button value="left" className="button-carousel-left" onClick={e => handleButtonClick(e)}>Button Carousel</button>
            <button value="right" className="button-carousel-right" onClick={e => handleButtonClick(e)}>Button Carousel</button>
        </div>
    )
}