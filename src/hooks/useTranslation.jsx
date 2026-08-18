import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"

export const useTranslate = () => {

    // home 
    const {t: th} = useTranslation('home')

    // contact 
    const {t: tc} = useTranslation('contact')

    // project 
    const {t: tp} = useTranslation('project')

    // expertise
    const {t: te} = useTranslation('expertise')

    // main layout
    const {t: tm} = useTranslation('layout')


    return {
        tc, // contact
        te, // expertise 
        th, // home 
        tm, // main layout 
        tp, // project 
    }
}