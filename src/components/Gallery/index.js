import React, { useState } from 'react';
import "./gallery.scss";
import Structure from '../../structure.json';

const Gallery = () => {
    const [gallery] = useState(Structure['gallery']);

    return(
        <div className="gallery">
            <div className="gallery__texts">
                <h1>{gallery.title}</h1>
                <h3>{gallery.subTitle}</h3>
            </div>
            
            <div className="gallery__images">
                {gallery.galleryImages.map((gallery, index) => {
                    return ( <img src={gallery['path']} key ={index} /> );
                })}
            </div>
        </div>
    );
};

export default Gallery;