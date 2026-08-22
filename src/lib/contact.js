import { CONTACT } from "@/constant/ContactConstant"
import { openLink } from "./common"

// open gmail
export const openGmail = () => {
    openLink(`mailto:${CONTACT.GMAIL}`)
}



// open tel
export const openTel = () => {
    openLink(`tel:${CONTACT.TEL}`)
}



// open linkedin
export const openLinkedin = () => {
    openLink(CONTACT.LINKEDIN)
}


// open github
export const openGithub = () => {
    openLink(CONTACT.GITHUB)
}



             