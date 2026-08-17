import Header from "./Header";
// import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import '@/styles/layout.css'

export default function MainLayout() {
    return (
        <div>
            <Header />
            <main className="main">
                <Outlet />
            </main>
            {/* <Footer /> */}
        </div>
    )
}