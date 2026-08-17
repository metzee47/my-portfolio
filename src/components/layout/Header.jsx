import React from 'react'
import { MdClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineNightlight } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import '@/styles/layout.css'
import { useMenu, useTheme } from '@/context/AppContext';
import { MENU } from '@/constant/menuConstant';

const Header = () => {

    const {isDark, toggleTheme} = useTheme()
    const {isMenuItemActive, toggleMenu, isMenuOpen, toggleOpenMenu} = useMenu()

    return (
        <header className={`header flex-center ${isMenuOpen ? 'open' : 'close'}`}>
            <div className="logo-and-title flex-center">
                <h6 className="logo flex-center">
                    MS
                </h6>
                <div className="title flex">
                    <h6>Mouhamadou Sylla</h6>
                    <p>Full Stack - Tech Lead</p>
                </div>
            </div>

            <nav className={`menu flex-center ${isMenuOpen ? 'open' : 'close'}`}>
                {
                    isMenuOpen ?
                    <MdClose className='menu-hamburger' onClick={toggleOpenMenu}/> :
                    <RxHamburgerMenu className='menu-hamburger' onClick={toggleOpenMenu}/>
                }

                <div className={"menu-options flex-center"}>
                    <ul className='nav-menu flex-center'>
                        {
                            MENU.map((item, index) => (
                                <li key={index}>
                                    <a 
                                        href={`${item.href}`}
                                        className={`${isMenuItemActive(item.label) ? 'active' : ''}`}
                                        onClick={() => toggleMenu(item.label)}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))
                        }
              
                    </ul>

                    <div className="nav-options flex">
                        <div className="lang flex-center">
                            <span>FR</span>
                            <span>/</span>
                            <span>EN</span>
                        </div>

                        <div className="theme flex-center" onClick={toggleTheme}>
                            {isDark ? <MdOutlineNightlight/> : <MdOutlineLightMode/>}
                            <p>{isDark ? "Nuit" : "Jour"}</p>
                        </div>
                    </div>
                </div>

            </nav>
        </header>
    )
}

export default Header