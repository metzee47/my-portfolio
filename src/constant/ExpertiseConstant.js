import { HiDesktopComputer } from "react-icons/hi";
import { GiWhiteBook } from "react-icons/gi";
import { MdPhoneAndroid } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import { PiStudentFill } from "react-icons/pi";
import { FaCode } from "react-icons/fa6";
import { BsPcDisplayHorizontal } from "react-icons/bs";

export const SKILLS = [
    {
        name: "Frontend pixel-perfect",
        description: "React.js, interfaces responsives et traduction fidèle de maquettes Figma.",
        stacks: [
            "React.js", "Tailwind CSS"
        ],
        icon: HiDesktopComputer,
        isPrimary: true,
    },
    {
        name: "Backend & API",
        description: "Node.js, Django etc.. et API REST structurées selon une architecture MVC.",
        stacks: [
            "Node.js", "Django", "Laravel", "Spring Boot"
        ],
        icon: GiWhiteBook,
        isPrimary: false,
    },
    {
        name: "Mobile natif",
        description: "Applications mobiles fluides avec React Native, pensées pour les usages réels.",
        stacks: [
            "React Native"
        ],
        icon: MdPhoneAndroid,
        isPrimary: false,
    },
    {

        name: "Intégrations sensibles",
        description: "JWT, Google & Apple Auth, Stripe et temps réel avec Socket.io.",
        stacks: [
            "JWT", "Google & Apple Auth", "Stripe", "Socket.io"
        ],
        icon: RiSecurePaymentFill,
        isPrimary: true,
    }
]



export const EXPERIENCES = [
    {
        type: "EXPERIENCE",
        icon: BsPcDisplayHorizontal,
        title: "Développeur Full Stack - Tech Lead",
        description: "Définition d’architectures techniques, accompagnement d’une équipe de huit stagiaires, code reviews et pair programming pour faire progresser la qualité collective.",
        skills: "ARCHITECTURE · QUALITÉ · TRANSMISSION",
        isPrimary: false

    },
    {
        type: "STAGE",
        icon: FaCode,
        title: "Frontend Developer · VNB-IT",
        description: "Développement d’interfaces responsives et travail frontend spécialisé, au service d’expériences cohérentes et prêtes pour la production.",
        skills: "REACT · RESPONSIVE · TAILWIND CSS",
        isPrimary: true

    },
    {
        type: "STAGE",
        icon: FaCode,
        title: "UI Designer · Fadesol",
        description: "Une pratique du design d’interface qui nourrit une capacité à livrer des intégrations précises et fidèles aux intentions de conception.",
        skills: "UI/UX · FIGMA · PRÉCISION",
        isPrimary: true

    },
    
    {
        type: "FORMATION",
        icon: PiStudentFill,
        title: "Formation en informatique",
        description: "Un socle académique complété par une pratique continue du développement web et mobile, du design d’interface et de l’architecture applicative.",
        skills: "APPRENTISSAGE CONTINU",
        isPrimary: false

    }
]