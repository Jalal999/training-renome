import React, { useState } from 'react';
import './carousel.scss';
import Structure from '../../structure.json';
import Image from '../../assets/img/carousel_img_1.png';
import SlideControl from './buttons/slideControl';

const Carousel = () => {
    const [slides, setSlides] = useState(Structure['carousel']);
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        if (index !== slides.length - 1){
            setIndex(index + 1);
        }
        else if (index === slides.length - 1){
            setIndex(0)
        }
    }

    const prevSlide = () => {
        if (index !== 0){
            setIndex(index - 1);
        }
        else if (index === 0){
            setIndex(slides.length-1);
        }
    }

    const { title, subTitle, altTag, path } = slides[index];

    return (
        <div className="carousel">
            <div className="carousel__container">
                <div className="carousel__container__child" key={title}>
                    <img src={path} alt={altTag} />
                    <div className="carousel__headings">
                        <h2 className="carousel__headings__title">{title}</h2>
                        <h4 className="carousel__headings__subtitle">{subTitle}</h4>
                    </div>
                </div>
            </div>

            <SlideControl navigateSlide={prevSlide} arrow={"left"}/>
            <SlideControl navigateSlide={nextSlide} arrow={"right"}/>
        </div>
    );
};

export default Carousel;