import { Card } from "@/components/Card";
import MainLayout from "@/components/layout/MainLayout";
import { MixedText } from "@/components/MixedText";
import { BiLogoGmail } from "react-icons/bi";
import { IoIosCall } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { CONTACT } from "@/constant/ContactConstant";
import { PrimaryButton } from "@/components/Button";
import { BsSend } from "react-icons/bs";
import "@/styles/contact.css"
import { MENU_ITEMS } from "@/constant/menuConstant";
import { useTranslate } from "@/hooks/useTranslation";


// export default function Contact () {

//     // ----------------------- contact click handling start

//     const handleGmailClick = () => {
//         window.open(`mailto:${CONTACT.GMAIL}`, '_blank');
//     };

//     const handleTelClick = () => {
//         window.open(`tel:${CONTACT.TEL}`, '_blank');
//     };

//     const handleLinkedinClick = () => {
//         window.open(CONTACT.LINKEDIN, '_blank');
//     };

//     const handleGithubClick = () => {
//         window.open(CONTACT.GITHUB, '_blank');
//     };

//     // contact click handling end --------------------


    

//     return (
//         <MainLayout
//             activeMenu={MENU_ITEMS.contact}
        
//         >

//             <div className="contact flex-center">

//                 {/* left-part */}
//                 <section className="left-part flex">
//                     <span className={"text-secondary"}>ME CONTACTER</span>
//                     <MixedText
//                         firstPart={'Une '}
//                         coloredPart={'idée'}
//                         lastPart={' à rendre concrète ?'}

//                     />
//                     <p>Parlons de votre prochain produit web ou mobile : architecture, interface, intégrations et livraison production.</p>


//                     <div className="contact-item-wrapper">
//                         <ContactLinkItem
//                             icon={<BiLogoGmail/>}
//                             title={'GMAIL'}
//                             descript={CONTACT.GMAIL}
//                             onClick={handleGmailClick}
//                         />
//                         <ContactLinkItem
//                             icon={<IoIosCall/>}
//                             title={"TEL"}
//                             descript={CONTACT.TEL}
//                             onClick={handleTelClick}
//                         />
//                         <ContactLinkItem
//                             icon={<IoLogoLinkedin/>}
//                             title={'LINKEDIN'}
//                             descript={CONTACT.LINKEDIN}
//                             onClick={handleLinkedinClick}
//                         />
//                         <ContactLinkItem
//                             icon={<IoLogoGithub/>}
//                             title={'GITHUB'}
//                             descript={CONTACT.GITHUB}
//                             onClick={handleGithubClick}
//                         />
//                         <ContactLinkItem
//                             icon={<IoLocationSharp/>}
//                             title={'LOCATION'}
//                             descript={CONTACT.LOCATION}
//                             // onClick={}
//                         />
//                     </div>
//                 </section>

//                 {/* form part */}
//                 <section className="right-part">
//                     <div className="flex-center">
//                         <div className="text-side">
//                             <span className={"text-primary"}>NOUVEL ECHANGE</span>
//                             <h5>Décrivez votre besoin</h5>
//                         </div>
//                         <BsSend className={"text-primary"}/>
//                     </div>
//                     <form action="">
//                         <div className="flex">
//                             <InputForm label="Name" placeholder="Your name" />
//                             <InputForm label="Email" placeholder="vous@entreprise.com" />
//                         </div>
//                         <InputForm label="Subject" placeholder="Application mobile, interface web, integration" />

//                         <TextareaForm label="Message" placeholder="Context, enjeux, echeance" />

//                         <PrimaryButton>Envoyer le message</PrimaryButton>
//                         <p>L'envoi du message est en cours de developpement, je vous invite a me contacter via les moyens de communications fournis dans la partie "Mes contacts" en cliquant dessus.</p>
//                     </form>
//                 </section>
//             </div>




//         </MainLayout>
//     )
// }

export default function Contact () {

    const {tc} = useTranslate()

    const handleGmailClick = () => {
        window.open(`mailto:${CONTACT.GMAIL}`, '_blank');
    };

    const handleTelClick = () => {
        window.open(`tel:${CONTACT.TEL}`, '_blank');
    };

    const handleLinkedinClick = () => {
        window.open(CONTACT.LINKEDIN, '_blank');
    };

    const handleGithubClick = () => {
        window.open(CONTACT.GITHUB, '_blank');
    };

    return (
        <MainLayout
            activeMenu={MENU_ITEMS.contact}
        >
            <div className="contact flex-center">

                {/* left-part */}
                <section className="left-part flex">
                    <span className={"text-secondary"}>{tc("contact_section_title")}</span>
                    <MixedText
                        firstPart={tc("contact_mixed_first")}
                        coloredPart={tc("contact_mixed_colored")}
                        lastPart={tc("contact_mixed_last")}
                    />
                    <p>{tc("contact_intro_paragraph")}</p>

                    <div className="contact-item-wrapper">
                        <ContactLinkItem
                            icon={<BiLogoGmail/>}
                            title={tc("contact_gmail_title")}
                            descript={CONTACT.GMAIL}
                            onClick={handleGmailClick}
                        />
                        <ContactLinkItem
                            icon={<IoIosCall/>}
                            title={tc("contact_tel_title")}
                            descript={CONTACT.TEL}
                            onClick={handleTelClick}
                        />
                        <ContactLinkItem
                            icon={<IoLogoLinkedin/>}
                            title={tc("contact_linkedin_title")}
                            descript={CONTACT.LINKEDIN}
                            onClick={handleLinkedinClick}
                        />
                        <ContactLinkItem
                            icon={<IoLogoGithub/>}
                            title={tc("contact_github_title")}
                            descript={CONTACT.GITHUB}
                            onClick={handleGithubClick}
                        />
                        <ContactLinkItem
                            icon={<IoLocationSharp/>}
                            title={tc("contact_location_title")}
                            descript={CONTACT.LOCATION}
                        />
                    </div>
                </section>

                {/* form part */}
                <section className="right-part">
                    <div className="flex-center">
                        <div className="text-side">
                            <span className={"text-primary"}>{tc("contact_form_title")}</span>
                            <h5>{tc("contact_form_subtitle")}</h5>
                        </div>
                        <BsSend className={"text-primary"}/>
                    </div>
                    <form action="">
                        <div className="flex">
                            <InputForm label={tc("contact_form_name_label")} placeholder={tc("contact_form_name_placeholder")} />
                            <InputForm label={tc("contact_form_email_label")} placeholder={tc("contact_form_email_placeholder")} />
                        </div>
                        <InputForm label={tc("contact_form_subject_label")} placeholder={tc("contact_form_subject_placeholder")} />

                        <TextareaForm label={tc("contact_form_message_label")} placeholder={tc("contact_form_message_placeholder")} />

                        <PrimaryButton>{tc("contact_form_btn")}</PrimaryButton>
                        <p>{tc("contact_form_note")}</p>
                    </form>
                </section>
            </div>
        </MainLayout>
    )
}


const ContactLinkItem = ({icon, title, descript, onClick}) => (
    <Card 
        onClick={onClick}
        className="contact-link-item flex-center" primaryAnimation={false}
    >
        <div className="icon-side flex-center">
            {icon}
        </div>
        <div className="text-side">
            <span>{title}</span>
            <h6>{descript}</h6>
        </div>
    </Card>
)


const InputForm = ({label, placeholder}) => (
    <div className="input-form">
        <label>{label}</label>
        <input type="text" placeholder={placeholder} />
    </div>
)

const TextareaForm = ({label, placeholder}) => (
    <div className="textarea-form">
        <label>{label}</label>
        <textarea placeholder={placeholder} />
    </div>
)