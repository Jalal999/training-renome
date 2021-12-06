import React, { useState } from 'react';
import "./about.scss";
import Structure from '../../structure.json';
import aboutImage1 from '../../assets/img/about_img_1.png';
import aboutImage2 from '../../assets/img/about_img_2.png';


const About = () => {
    const [about] = useState(Structure['about']);

    return (
        <div className="about">
            <div className="about__images">
                <img src={aboutImage2} alt="" className="about__images__one" />
                <img src={aboutImage1} alt="" className="about__images__two" />
            </div>
            
            <div className="about__texts">
                <h1 className="about__texts__title">{about.title}</h1>
                <h3 className="about__texts__subTitle">{about.subTitle}</h3>
                <p className="about__texts__paragraph">{about.text}</p>
            </div>
        </div>
    );
};

export default About;