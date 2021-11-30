import React, { useState } from 'react';
import './carousel.scss';
import Structure from '../../structure.json';
import dfs from '../../assets/img/carousel_img_1.png';
// import Font, { Text } from 'react-font';
import { BsArrowLeftSquare } from 'react-icons/bs';
import { BsArrowRightSquare } from 'react-icons/bs';

const Carousel = () => {
    const [slides, setSlides] = useState(Structure['carousel']);
    const [index, setIndex] = useState(0);
    
    return (
        <div className="carousel">
            <div className="carousel__container">
                {slides.map( (slide, slideIndex) => {
                    const { title, subTitle, altTag, path } = slide;
                    
                    return (
                        <div className="carousel__container__child">
                            <img src={path} alt={altTag} />
                            <div className="carousel__headings">
                                <h2 className="carousel__headings--title">{title}</h2>
                                <h4 className="carousel__headings--subtitle">{subTitle}</h4>
                            </div>
                        </div>
                    )
                })}
                
            </div>
            <div className="carousel__button">
                <button className="carousel__button--btn"><BsArrowLeftSquare className="carousel__button--arrow"/></button>
                <button className="carousel__button--btn"><BsArrowRightSquare className="carousel__button--arrow"/></button>
            </div>
        </div>
    
    );
};

export default Carousel;