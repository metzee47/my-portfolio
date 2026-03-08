import { FaEnvelope, FaHamburger } from "react-icons/fa";
import IconizeIt from "./IconizeIt";
import { Link } from "react-router-dom";
import { CONTACT_EMAIL, CONTACT_NAME } from "../constants/contact";
import '../styles/layout.css'
import me from '../assets/me-1.jpg'
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

export default function Layout({ children, activeNav = 1, showProfile = true }) {
    const [openNavTabs, setOpenNavTabs] = useState(false)
    return (
        <div className="page">
            <div className="background-container" />
            <header className="page-header">
                <header>
                    <div className="header-logo">
                        <img src="/R.svg" alt="Logo" />
                    </div>
                    <nav className={`header-nav ${openNavTabs ? 'nav-tabs-open' : ''}`}>
                        <a href="#about" className={activeNav === 1 ? 'active' : ''}>A propos de moi</a>
                        <a href="#experience" className={activeNav === 2 ? 'active' : ''}>Experience</a>
                        <a href="#skills" className={activeNav === 3 ? 'active' : ''}>Competences</a>
                        <a href="#contact" className={activeNav === 3 ? 'active' : ''}>Contact</a>
                    </nav>
                    <div className="header-contact">
                        <a href={`mailto:${CONTACT_EMAIL}`}>
                            <IconizeIt>
                                <FaEnvelope />
                            </IconizeIt>
                            {CONTACT_EMAIL}

                        </a>
                    </div>
                    <div className="hamburger-menu">
                        <IconizeIt bgColor={'#243b55'} onClick={() => setOpenNavTabs(!openNavTabs)}>
                            <RxHamburgerMenu />
                        </IconizeIt>
                    </div>
                </header>

                {
                    showProfile && (
                        <div className="header-profile">
                            <div>
                                <div className="let-me-introduce-myself">
                                    <div className="hello-section">
                                        <h1>Bonjour !</h1>
                                        <h1>Je suis {CONTACT_NAME}</h1>
                                    </div>
                                    <p>Développeur web full-stack passionné par la création d'applications web et mobiles modernes et performantes.</p>

                                </div>

                                <div className="experience-part">
                                    <h1>02</h1>
                                    <div>
                                        <p>ANS</p>
                                        <p>D'EXPÉRIENCE</p>
                                    </div>
                                </div>
                            </div>
                            <div className="header-profile-img">
                                <img src={me} alt="" />
                            </div>

                        </div>
                    )
                }
            </header>
            <main className="page-content">
                {children}
            </main>

            <footer>
                <p>&copy; 2026 <strong>{CONTACT_NAME}</strong>. Tous droits réservés.</p>
            </footer>
        </div>
    )
}