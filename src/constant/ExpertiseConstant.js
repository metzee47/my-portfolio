import { HiDesktopComputer } from "react-icons/hi";
import { GiWhiteBook } from "react-icons/gi";
import { MdPhoneAndroid } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import { PiStudentFill } from "react-icons/pi";
import { FaCode } from "react-icons/fa6";
import { BsPcDisplayHorizontal } from "react-icons/bs";


export const SKILLS = [
    {
        name: "skill_frontend_name",
        description: "skill_frontend_description",
        // stacks: ["skill_frontend_stacks"],
        stacks: [
            "React.js", "Tailwind CSS"
        ],
        icon: HiDesktopComputer,
        isPrimary: true,
    },
    {
        name: "skill_backend_name",
        description: "skill_backend_description",
        // stacks: ["skill_backend_stacks"],
        stacks: [
            "Node.js", "Django", "Laravel", "Spring Boot"
        ],
        icon: GiWhiteBook,
        isPrimary: false,
    },
    {
        name: "skill_mobile_name",
        description: "skill_mobile_description",
        // stacks: ["skill_mobile_stacks"],
        stacks: [
            "React Native"
        ],
        icon: MdPhoneAndroid,
        isPrimary: false,
    },
    {
        name: "skill_integrations_name",
        description: "skill_integrations_description",
        stacks: [
            "JWT", "Google & Apple Auth", "Stripe", "Socket.io"
        ],
        // stacks: ["skill_integrations_stacks"],
        icon: RiSecurePaymentFill,
        isPrimary: true,
    }
]

export const EXPERIENCES = [
    {
        type: "EXPERIENCE",
        icon: BsPcDisplayHorizontal,
        title: "experience_fullstack_title",
        description: "experience_fullstack_description",
        skills: "experience_fullstack_skills",
        isPrimary: false
    },
    {
        type: "STAGE",
        icon: FaCode,
        title: "experience_stage_vnb_title",
        description: "experience_stage_vnb_description",
        skills: "experience_stage_vnb_skills",
        isPrimary: true
    },
    {
        type: "STAGE",
        icon: FaCode,
        title: "experience_stage_fadesol_title",
        description: "experience_stage_fadesol_description",
        skills: "experience_stage_fadesol_skills",
        isPrimary: true
    },
    {
        type: "FORMATION",
        icon: PiStudentFill,
        title: "experience_formation_title",
        description: "experience_formation_description",
        skills: "experience_formation_skills",
        isPrimary: false
    }
]
