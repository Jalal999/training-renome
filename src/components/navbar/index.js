import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { BiDotsVertical } from 'react-icons/bi'
import logo from '../../assets/img/Renome.svg';
import Hamburger from './buttons/Hamburger';
import NavCart from './buttons/NavCart';
import './navbar.scss';


const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const [showCart, setShowCart] = useState(false)


    return (
        <div className='nav__center'>

            <div className='nav__center__header'>
                <img src={logo} className='nav__center__header__logo' alt='logo' />
                <div className='nav__center__header__icons'>
                    <button className='nav__center__header__icons__toggle nav__center__header__icons__toggle--cart' onClick={()=>setShowCart(!showCart)}>
                        <FaShoppingCart />
                    </button>
                    <span className='nav__center__header__icons__toggle'>2</span>
                    <BiDotsVertical className='nav__center__header__icons__toggle'/>
                    <button className='nav__center__header__icons__toggle nav__center__header__icons__toggle--hamburger' onClick={()=>setShowLinks(!showLinks)}>
                        <FaBars />
                    </button>
                </div>

            </div>
                
            {showLinks && <Hamburger />}

            {showCart && <NavCart />}

        </div>
    );
};

export default Navbar;