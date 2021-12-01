import React from 'react';
import './slideControl.scss';
import { BsArrowLeftSquare } from 'react-icons/bs';
import { BsArrowRightSquare } from 'react-icons/bs';

const SlideControl = ({navigateSlide, arrow}) => {
    return (
        <div className="carousel__navigation">
            <button className="carousel__navigation__btn" onClick={navigateSlide}>
                {arrow === "left" &&
                    <BsArrowLeftSquare className="carousel__navigation__btn__arrow carousel__navigation__btn__arrow--left"/>
                }
                {arrow === "right" &&
                    <BsArrowRightSquare className="carousel__navigation__btn__arrow carousel__navigation__btn__arrow--right"/>
                }   
            </button>
        </div>
    );
};

export default SlideControl;