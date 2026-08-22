import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import '@/styles/layout.css'
import { useMenu } from "@/context/AppContext";
import { useEffect, useState } from "react";

export default function MainLayout({activeMenu, children}) {

    const {isMenuOpen} = useMenu()
    const [visible, setVisible] = useState(false);

    // animation
    useEffect(() => {
        setVisible(true);
    }, []);
    

    return (
        <div className="main-layout">
            <Header activeItem={activeMenu}/>
            <main className={`main ${isMenuOpen ? 'open' : 'false'} fade-in ${visible ? "visible" : ""}`}>
                {children}
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}