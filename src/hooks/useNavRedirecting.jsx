import { useNavigate } from "react-router-dom";
import { contactLink, expertiseLink, homeLink, projectLink } from '@/routes/links'

export const useNavRedirecting = () => {

    const navigate = useNavigate();

    // home 
    const gotoHome = () => navigate(homeLink)

    
    // contact 
    const gotoContact = () => navigate(contactLink)


    // project 
    const gotoProject = () => navigate(projectLink)

    // expertise 
    const gotoExpertise = () => navigate(expertiseLink)


    return {
        gotoContact, // contact
        gotoExpertise, // expertise 
        gotoHome, // home 
        gotoProject, // project 
    }
}