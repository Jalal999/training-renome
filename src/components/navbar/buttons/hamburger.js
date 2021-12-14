import React, { useState } from 'react';
import './hamburger.scss';
import Structure from '../../../structure.json';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import { GrFormSearch } from 'react-icons/gr';

const Hamburger = ({ showLinks }) => {
    const [menu] = useState(Structure['menu']);
    const [showMenu, setShowMenu] = useState(showLinks);

    const [subMenu] = useState(Structure['menu'][5]);
    const [showSubMenu, setShowSubMenu] = useState(false);

    const controlMenu = () => {
        setShowMenu(!showMenu);
        setShowSubMenu(!showSubMenu);
    }

    return (
        <div className='hamburger__links'>
            <ul className={showMenu ? 'hamburger__links__ul hamburger__links__ul--menu' : 'hamburger__links__ul hamburger__links__ul--subMenu'}>
                {showMenu &&
                    menu.map((link) => {
                        if (link.title === "Search") {
                            return (
                                <li className='hamburger__links__ul__link hamburger__links__ul__link--search'>
                                    <input type="text" id="search" name="search" placeholder='Search...' />
                                    <GrFormSearch className='hamburger__links__ul__link__search' />
                                </li>
                            );
                        } else {
                            return (
                                <li className={link.isSubMenu ? "hamburger__links__ul__link hamburger__links__ul__link--isSubMenu" : "hamburger__links__ul__link"}>
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
                    menu[5].subMenu.map((link) => {
                        return (
                            <li className='hamburger__links__ul__link'><a href="#">{link.title}</a></li>
                        );
                    })
                }

            </ul>
        </div>
    );

};

export default Hamburger;

