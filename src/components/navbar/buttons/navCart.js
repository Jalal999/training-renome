import React from 'react';
import './navCart.scss';

const NavCart = () => {

    return (
        <div className='nav__cart'>
            <ul className='nav__cart__ul'>
                <li><a href="">$44.50</a></li>
                <li><a href="">View Cart</a></li>
                <li><a href="">Checkout</a></li>
            </ul>
        </div>
    );
};

export default NavCart;

