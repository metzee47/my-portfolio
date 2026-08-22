import { useTranslate } from "@/hooks/useTranslation";
import { openGithub, openGmail, openLinkedin, openTel } from "@/lib/contact";
import "@/styles/layout.css"
import { BiLogoGmail } from "react-icons/bi";
import { IoIosCall } from "react-icons/io";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
    // translation hook
    const {tm} = useTranslate()


    return (
        <footer className="footer flex-center">
            <p>{tm('all_rights-reserved')}</p>
            <div className="social-links flex-center">
                <IconWrapper
                    icon={<IoLogoLinkedin />}
                    onClick={openLinkedin}
                />
                <IconWrapper
                    icon={<BiLogoGmail />}
                    onClick={openGmail}
                />
                <IconWrapper
                    icon={<IoIosCall />}
                    onClick={openTel}
                />
                <IconWrapper
                    icon={<IoLogoGithub />}
                    onClick={openGithub}
                />
            </div>
        </footer>
    )
}


export default Footer;


const IconWrapper = ({ icon, onClick }) => (
    <div className="icon-wrapper flex-center" onClick={onClick}>
        {icon}
    </div>
)