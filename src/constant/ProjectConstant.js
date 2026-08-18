import { MdOutlineLaptopChromebook } from "react-icons/md";
import { HiOutlineDeviceMobile } from "react-icons/hi";

export const PROJECTS = [
    {
        title: "project_lcr_title",
        description: "project_lcr_description",
        skills: ["Figma", "React Native", "Expo", "Google Auth", "Apple Auth", "Push Notifications", "Node js", "Sequelize", "Postgres SQL", "API REST", , "AWS s3", "Socket io", "Production"],
        isPrimary: false,
        type: "project_lcr_type",
        platforms: ["Android", "IOS"],
        // platforms: ["project_lcr_platforms"],
        stats: "project_lcr_stats",
        icon: HiOutlineDeviceMobile
    },
    {
        title: "project_lcrpro_title",
        description: "project_lcrpro_description",
        skills: ["Figma", "React Native", "Expo", "Google Auth", "Apple Auth", "Push Notifications", "Node js", "Sequelize", "Postgres SQL", "API REST", , "AWS s3", "Socket io", "Production"],
        isPrimary: true,
        type: "project_lcrpro_type",
        // platforms: ["project_lcrpro_platforms"],
        platforms: ["Android", "IOS"],
        stats: "project_lcrpro_stats",
        icon: HiOutlineDeviceMobile
    },
    {
        title: "project_nexuroom_title",
        description: "project_nexuroom_description",
        skills: ["Figma", "React", "Tailwind CSS", "Responsivity", "i18next", "Node.js", "Prisma", "Postgres SQL", "API REST", "AWS s3"],
        isPrimary: false,
        type: "project_nexuroom_type",
        platforms: ["Web", "Mobile"],
        // platforms: ["project_nexuroom_platforms"],
        stats: "project_nexuroom_stats",
        icon: MdOutlineLaptopChromebook,
    },
]
