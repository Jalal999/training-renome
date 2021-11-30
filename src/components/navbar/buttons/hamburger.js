import React from 'react';
import './hamburger.scss';

const Hamburger = () => {
    
    return (
        <div className='hamburger__links'>
            <ul className='hamburger__links__ul'>
                <li><a href="">home</a></li>
                <li><a href="">shop</a></li>
                <li><a href="">blog</a></li>
                <li><a href="">contact</a></li>
            </ul>
        </div>
    );

};

export default Hamburger;

