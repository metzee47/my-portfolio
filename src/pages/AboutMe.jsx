import { FaArrowRight } from "react-icons/fa6";
import IconizeIt from "../components/IconizeIt";
import { HOW_CAN_I_HELP, LAST_PROJECT_LIST, PROJECT_LIST } from "../constants/about";
import '../styles/about.css'
import mobileAppImg from '../assets/mobile-app.jpg'
import webappImg from '../assets/webapp.jpg'
import websiteImg from '../assets/website.jpg'

export default function AboutMe() {


    return (
        <>
        
            <div className="projects-stats" id="about">
                <div className="list-container">
                    {
                        PROJECT_LIST.map((project, index) => (
                            <ProjectCountItem
                                // key={project.label}
                                {...project}
                                
                            />
                        ))
                    }
                </div>

                <div className="how-i-can-help-you">
                    <h4>En quoi puis je vous aider ? </h4>
                    <p>{HOW_CAN_I_HELP}</p>
                </div>

            </div>

            <div className="my-latest-projects">
                <h3>Mes derniers projets</h3>

                <div className="last-projects-list">
                    {
                        LAST_PROJECT_LIST.map((project) => (
                            <LastProjectItem
                                // key={project.appName}
                                {...project}
                                imgSrc={project.key === 1 ? mobileAppImg : project.key === 2 ? webappImg : websiteImg}
                               
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

const ProjectCountItem = ({ label, value, icon, iconBg, iconDescription }) => (
    <div className="project-count-item">
        <IconizeIt bgColor={iconBg} description={iconDescription}>
            {icon}
        </IconizeIt>
        <div className="description">
            <h6>{label}</h6>
            <p>{value} projets</p>
        </div>
    </div>
)

const LastProjectItem = ({ type, appName, imgSrc, androidLink, iosLink, appLink, bgColor }) => {

    const onProjectClick = () => {
        window.open(androidLink || iosLink || appLink, '_blank');
    }
    return (
        <div className="last-project-item" style={{background: bgColor}}>
            <h4>{type}</h4>
            <p>{appName}</p>
            <div className="img-container">
                <img src={imgSrc} alt={appName} />
            </div>
            <div className="icon-container">
                <IconizeIt onClick={onProjectClick} bgColor={'#fff'}>
                    <FaArrowRight />
                </IconizeIt>
            </div>
        </div>
    )

}