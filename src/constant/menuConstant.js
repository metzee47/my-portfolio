import { contactLink, expertiseLink, homeLink, projectLink } from '@/routes/links'

export const MENU = [
    {
        label: "Accueil",
        href: homeLink,
    },
    {
        label: "Projets",
        href: projectLink
    },
    {
        label: "Expertise",
        href: expertiseLink
    },
    {
        label: "Contact",
        href: contactLink
    }
]


export const MENU_ITEMS = {
    home: "Accueil",
    projects: "Projets",
    expertise: "Expertise",
    contact: "Contact"
}