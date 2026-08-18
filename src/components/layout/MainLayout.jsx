import Header from "./Header";
// import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import '@/styles/layout.css'
import { useMenu } from "@/context/AppContext";

export default function MainLayout({activeMenu, children}) {

    const {isMenuOpen} = useMenu()
    

    return (
        <div className="main-layout">
            <Header activeItem={activeMenu}/>
            <main className={`main ${isMenuOpen ? 'open' : 'false'}`}>
                {children}
                <Outlet />
            </main>
            {/* <Footer /> */}
        </div>
    )
}