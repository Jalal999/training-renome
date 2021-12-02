import React from 'react';
import './SlideControl.scss';


const SlideControl = ({navigateSlide, arrowDirection, Icon}) => {
    return (
        <div className="carousel__navigation">
            <button className="carousel__navigation__btn" onClick={navigateSlide}>
                <Icon className={`carousel__navigation__btn__arrow carousel__navigation__btn__arrow--${arrowDirection}`} />
            </button>
        </div>
    );
};

export default SlideControl;