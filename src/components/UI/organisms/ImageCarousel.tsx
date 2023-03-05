import { useState, useEffect } from "react"

export default function ImageCarousel() {
    const testImages = ['https://unsplash.com/pt-br/fotografias/DbJQfU2jsZA', 'https://unsplash.com/pt-br/fotografias/6kajEqr84iY', 'https://unsplash.com/pt-br/fotografias/Wh4C4FQU_ks',
        'https://unsplash.com/pt-br/fotografias/eqJwTXMeWxw', 'https://unsplash.com/pt-br/fotografias/EhJQ1z96ypk']

    function setCarouselImages(number: number): any {
        const imgList: any = []
        for (let i = 0; i < number; i++) {
            imgList.push(<img src='https://source.unsplash.com/random' alt="image" style={{ width: '200px', border: '1px solid red' }} />)
        }
        return (imgList)
    }

    function handleButtonClick() {

    }
    return (
        <div id="image-carousel">
            <img src="" alt="" />
            <button className="button-carousel-left" onClick={e => handleButtonClick}></button>
            <button className="button-carousel-right" onClick={e => handleButtonClick}></button>
        </div>
    )
}