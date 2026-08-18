import React from 'react'
import { MdClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineNightlight } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import '@/styles/layout.css'
import { useLang, useMenu, useTheme } from '@/context/AppContext';
import { MENU } from '@/constant/menuConstant';
import { Link } from 'react-router-dom';
import { useTranslate } from '@/hooks/useTranslation';

// const Header = ({activeItem}) => {

//     const {isDark, toggleTheme} = useTheme()
//     const {isMenuItemActive, toggleMenu, isMenuOpen, toggleOpenMenu} = useMenu()

//     return (
//         <header className={`header flex-center ${isMenuOpen ? 'open' : 'close'}`}>
//             <div className="logo-and-title flex-center">
//                 <h6 className="logo flex-center">
//                     MS
//                 </h6>
//                 <div className="title flex">
//                     <h6>Mouhamadou Sylla</h6>
//                     <p>Full Stack - Tech Lead</p>
//                 </div>
//             </div>

//             <nav className={`menu flex-center ${isMenuOpen ? 'open' : 'close'}`}>
//                 {
//                     isMenuOpen ?
//                     <MdClose className='menu-hamburger' onClick={toggleOpenMenu}/> :
//                     <RxHamburgerMenu className='menu-hamburger' onClick={toggleOpenMenu}/>
//                 }

//                 <div className={"menu-options flex-center"}>
//                     <ul className='nav-menu flex-center'>
//                         {
//                             MENU.map((item, index) => (
//                                 <li key={index} onClick={() => toggleMenu(item.label)}>
//                                     <Link 
//                                         to={`${item.href}`}
//                                         className={`${isMenuItemActive(activeItem, item.label) ? 'active' : ''}`}
//                                     >
//                                         {item.label}
//                                     </Link>
//                                 </li>
//                             ))
//                         }
              
//                     </ul>

//                     <div className="nav-options flex">
//                         <div className="lang flex-center">
//                             <span>FR</span>
//                             <span>/</span>
//                             <span>EN</span>
//                         </div>

//                         <div className="theme flex-center" onClick={toggleTheme}>
//                             {isDark ? <MdOutlineNightlight/> : <MdOutlineLightMode/>}
//                             <p>{isDark ? "Nuit" : "Jour"}</p>
//                         </div>
//                     </div>
//                 </div>

//             </nav>
//         </header>
//     )
// }

const Header = ({activeItem}) => {
    const {tm} = useTranslate()
    const {isDark, toggleTheme} = useTheme()
    const {isCurrentLangFR, isCurrentLangEN, toggleLang} = useLang()
    const {isMenuItemActive, toggleMenu, isMenuOpen, toggleOpenMenu} = useMenu()

    return (
        <header className={`header flex-center ${isMenuOpen ? 'open' : 'close'}`}>
            <div className="logo-and-title flex-center">
                <h6 className="logo flex-center">
                    {tm("header_logo_text")}
                </h6>
                <div className="title flex">
                    <h6>{tm("header_title_name")}</h6>
                    <p>{tm("header_title_role")}</p>
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
                                <li key={index} onClick={() => toggleMenu(item.label)}>
                                    <Link 
                                        to={`${item.href}`}
                                        className={`${isMenuItemActive(activeItem, item.label) ? 'active' : ''}`}
                                    >
                                        {tm(item.label)}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>

                    <div className="nav-options flex">
                        <div className="lang flex-center" onClick={toggleLang}>
                            <span 
                                style={
                                    {
                                        fontWeight: isCurrentLangFR ? "bold" : "normal",
                                        color: isCurrentLangFR ? "var(--head-text)" : "var(--p-text)"
                                    }
                                }
                            >
                                    {tm("header_lang_fr")}
                            </span>
                            <span>/</span>
                            <span 
                                style={
                                    {
                                        fontWeight: isCurrentLangEN ? "bold" : "normal",
                                        color: isCurrentLangEN ? "var(--head-text)" : "var(--p-text)"
                                    }
                                }
                            >
                                {tm("header_lang_en")}
                            </span>
                        </div>

                        <div className="theme flex-center" onClick={toggleTheme}>
                            {isDark ? <MdOutlineNightlight/> : <MdOutlineLightMode/>}
                            <p>{isDark ? tm("header_theme_night") : tm("header_theme_day")}</p>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}


export default Header