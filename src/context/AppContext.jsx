import { MENU_ITEMS } from "@/constant/menuConstant";
import { createContext, useContext, useEffect, useState } from "react";


// context creation
const MenuContext = createContext();
const ThemeContext = createContext();
const LangContext = createContext();


// context definition
export const useMenu = () => useContext(MenuContext);
export const useTheme = () => useContext(ThemeContext);
export const useLang = () => useContext(LangContext);

// provider definition
const HTML = document.documentElement;

export default function AppProvider({ children }) {

    const [lang, setLang] = useState("en");
    const [activeMenu, setActiveMenu] = useState(MENU_ITEMS.home);
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [theme, setTheme] = useState('dark');


    // theme handling
    // toggle theme
    function toggleTheme() {
        const newTheme = theme === "dark" ? "light" : "dark"
        HTML.setAttribute(
            "data-theme",
            newTheme
        );
        setTheme(newTheme);
    }

    // theme values
    const themeValues = {
        theme,
        toggleTheme,
        isDark: theme === 'dark',
        isLight: theme === 'light'
    }

    // get html data-theme
    useEffect(() => {
        const currentTheme = HTML.getAttribute('data-theme');
        if (currentTheme) {
            setTheme(currentTheme);
        } else {
            HTML.setAttribute('data-theme', theme);
        }
    }, []);



    // lang handling
    // TODO




    // menu handling
    const toggleMenu = (item) => {
        setActiveMenu(item);
    }

    // toggle item activity
    const isMenuItemActive = (currentActive, item) => {
        return currentActive === item
    }

    // toggle menu collapsing
    const toggleOpenMenu = () => {
        const newState = isMenuOpen ? false : true
        setIsMenuOpen(newState)
    }

    const menuValues = { activeMenu, toggleMenu, isMenuItemActive, isMenuOpen, toggleOpenMenu }

    return (
        <LangContext.Provider>
            <ThemeContext.Provider value={themeValues}>
                <MenuContext.Provider value={menuValues}>
                    {children}
                </MenuContext.Provider>
            </ThemeContext.Provider>
        </LangContext.Provider>
    )
}

