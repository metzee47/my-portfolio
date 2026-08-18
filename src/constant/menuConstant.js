import { contactLink, expertiseLink, homeLink, projectLink } from '@/routes/links'

// export const MENU = [
//     {
//         label: "Accueil",
//         href: homeLink,
//     },
//     {
//         label: "Projets",
//         href: projectLink
//     },
//     {
//         label: "Expertise",
//         href: expertiseLink
//     },
//     {
//         label: "Contact",
//         href: contactLink
//     }
// ]


// export const MENU_ITEMS = {
//     home: "Accueil",
//     projects: "Projets",
//     expertise: "Expertise",
//     contact: "Contact"
// }

export const MENU = [
    {
        label: "header_menu_home",
        href: homeLink,
    },
    {
        label: "header_menu_projects",
        href: projectLink
    },
    {
        label: "header_menu_expertise",
        href: expertiseLink
    },
    {
        label: "header_menu_contact",
        href: contactLink
    }
]

export const MENU_ITEMS = {
    home: "header_menu_home",
    projects: "header_menu_projects",
    expertise: "header_menu_expertise",
    contact: "header_menu_contact"
}
