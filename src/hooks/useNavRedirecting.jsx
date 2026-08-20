import { useNavigate } from "react-router-dom";
import { contactLink, expertiseLink, homeLink, projectLink } from '@/routes/links'

export const useNavRedirecting = () => {

    // router init
    const router = useNavigate();


    // navigation helper
    const navigate = (link) => {
        router(link)

        // scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // home 
    const gotoHome = () => navigate(homeLink)

    
    // contact 
    const gotoContact = () => navigate(contactLink)


    // project 
    const gotoProject = () => navigate(projectLink)

    // expertise 
    const gotoExpertise = () => navigate(expertiseLink)


    // helper main
    const goto = (link) => navigate(link)


    return {
        goto, // main helper
        gotoContact, // contact
        gotoExpertise, // expertise 
        gotoHome, // home 
        gotoProject, // project 
    }
}