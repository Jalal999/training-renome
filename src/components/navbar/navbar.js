import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { BiDotsVertical } from 'react-icons/bi'
import logo from '../../assets/images/Renome.svg';
import './navbar.scss';

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(true);
    const [showCart, setShowCart] = useState(true)


    return (
        <nav>
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
                <div className={`${showLinks ? 'nav__center__links__container' : 'nav__center__links__container nav__center__links__container--show'}`}>
                    <ul className='nav__center__links__container__ul'>
                        <li><a href="">home</a></li>
                        <li><a href="">shop</a></li>
                        <li><a href="">blog</a></li>
                        <li><a href="">contact</a></li>
                    </ul>
                </div>

                <div className={`${showCart ? 'nav__center__cart__container' : 'nav__center__cart__container nav__center__cart__container--show'}`}>
                    <ul className='nav__center__cart__container__ul'>
                        <li><a href="">$44.50</a></li>
                        <li><a href="">View Cart</a></li>
                        <li><a href="">Checkout</a></li>
                    </ul>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;