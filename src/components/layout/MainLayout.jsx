import Header from "./Header";
// import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import '@/styles/layout.css'

export default function MainLayout({activeMenu, children}) {
    return (
        <div>
            <Header activeItem={activeMenu}/>
            <main className="main">
                {children}
                <Outlet />
            </main>
            {/* <Footer /> */}
        </div>
    )
}