import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { BiDotsVertical } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import logo from '../../assets/img/Renome.svg';
import Hamburger from './buttons/Hamburger';
import NavCart from './buttons/NavCart';
import './navbar.scss';


const Navbar = () => {
    const [showHamburger, setShowHamburger] = useState(false);
    const [showCart, setShowCart] = useState(false);

    const toggleCart = () => {
        setShowHamburger(false);
        setShowCart(!showCart);
    }

    const toggleHamburger = () => {
        setShowCart(false);
        setShowHamburger(!showHamburger);
    }

    return (
        <div className='nav__center'>
            <div className='nav__center__header'>
                <img src={logo} className='nav__center__header__logo' alt='logo' />
                <div className='nav__center__header__icons'>
                    <button className='nav__center__header__icons__toggle nav__center__header__icons__toggle--cart' onClick={()=>toggleCart()}>
                        <FaShoppingCart />
                    </button>
                    <span className='nav__center__header__icons__toggle'>2</span>
                    <BiDotsVertical className='nav__center__header__icons__toggle'/>
                    <button className='nav__center__header__icons__toggle nav__center__header__icons__toggle--hamburger' onClick={()=>toggleHamburger()}>
                        {!showHamburger && <FaBars />}
                        {showHamburger && <AiOutlineClose />}
                    </button>
                </div>

            </div>
                
            {showHamburger && <Hamburger />}
            
            {showCart && <NavCart />}

        </div>
    );
};

export default Navbar;