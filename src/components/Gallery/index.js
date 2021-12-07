import React, { useState } from 'react';
import "./gallery.scss";
import Structure from '../../structure.json';

const Gallery = () => {
    const [gallery] = useState(Structure['gallery']);
    const {title, subTitle, galleryImages} = gallery;

    return(
        <div className="gallery">
            <div className="gallery__texts">
                <h1>{title}</h1>
                <h3>{subTitle}</h3>
            </div>
            <div className="gallery__images">
                {galleryImages.map((gallery) =>{
                    return ( <img src={gallery['path']} />);
                })}
            </div>
        </div>
    );
};

export default Gallery;