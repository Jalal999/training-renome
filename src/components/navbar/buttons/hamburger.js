import React, { useState } from 'react';
import './hamburger.scss';
import Structure from '../../../structure.json';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import { GrFormSearch } from 'react-icons/gr';

const Hamburger = () => {
    const [menu] = useState(Structure['menu']);
    const [showMenu, setShowMenu] = useState(true);
    const [showSubMenu, setShowSubMenu] = useState(false);

    const controlMenu = () => {
        setShowMenu(!showMenu);
        setShowSubMenu(!showSubMenu);
    }

    return (
        <div className='hamburger__links'>
            <ul className={`hamburger__links__ul hamburger__links__ul${showMenu ? '--menu' : '--subMenu'}`}>
                {showMenu &&
                    menu.map((link, index) => {
                        if (link.title === "Search") {
                            return (
                                <li className='hamburger__links__ul__link hamburger__links__ul__link--search' key={index}>
                                    <input type="text" id="search" name="search" placeholder='Search...' />
                                    <GrFormSearch className='hamburger__links__ul__link__search' />
                                </li>
                            );
                        } else {
                            return (
                                <li className={`hamburger__links__ul__link hamburger__links__ul__link${link.isSubMenu ? '--isSubMenu' : ''}`} key={index}>
                                    <a href="#">{link.title}</a>
                                    {link.isSubMenu && <IoIosArrowForward className='hamburger__links__ul__link__arrow' onClick={() => controlMenu()} />}
                                </li>
                            );
                        }
                    })
                }

                {showSubMenu &&
                    <li className="hamburger__links__ul__link hamburger__links__ul__link--subMenuFirst">
                        <IoIosArrowBack className='hamburger__links__ul__link__arrow' onClick={() => controlMenu()} />
                        <a href="#" onClick={() => controlMenu()}>back</a>
                    </li>
                }
                {showSubMenu &&
                    menu[5].subMenu.map((link, index) => {
                        return (
                            <li className='hamburger__links__ul__link' key={index}><a href="#">{link.title}</a></li>
                        );
                    })
                }

            </ul>
        </div>
    );

};

export default Hamburger;

