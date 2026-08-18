import { MdOutlineLaptopChromebook } from "react-icons/md";
import { HiOutlineDeviceMobile } from "react-icons/hi";

export const PROJECTS = [
    
    {
        title: "LCR",
        description: "Un projet à fort impact, auquel Mouhamadou Sylla a contribué dans une démarche de produit complet, de la conception à la mise en production.",
        skills: ["Figma", "React Native", "Expo", "Google Auth", "Apple Auth", "Push Notifications", "Node js", "Sequelize", "Postgres SQL", "API REST", , "AWS s3", "Socket io", "Production"],
        isPrimary: false,
        type: "Mobile app",
        platforms: ["Android", "IOS"],
        stats: "5000+",
        icon: HiOutlineDeviceMobile
    },
    {
        title: "LCR PRO (B2B)",
        description: "Un projet à fort impact, auquel Mouhamadou Sylla a contribué dans une démarche de produit complet, de la conception à la mise en production.",
        skills: ["Figma", "React Native", "Expo", "Google Auth", "Apple Auth", "Push Notifications", "Node js", "Sequelize", "Postgres SQL", "API REST", , "AWS s3", "Socket io", "Production"],
        isPrimary: true,
        type: "Mobile app",
        platforms: ["Android", "IOS"],
        stats: "100+",
        icon: HiOutlineDeviceMobile

    },
    {
        title: "Nexuroom",
        description: "Un produit orienté utilisateur qui illustre une capacité à livrer rapidement des applications fiables et prêtes à évoluer.",
        skills: ["Figma", "React", "Tailwind CSS", "Responsivity", "i18next", "Node.js", "Prisma", "Postgres SQL", "API REST", "AWS s3"],
        isPrimary: false,
        type: "Web app & web site",
        platforms: ["Web", "Mobile"],
        stats: "2000+",
        icon: MdOutlineLaptopChromebook,
    },
]