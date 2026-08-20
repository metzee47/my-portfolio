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
import emailjs from "@emailjs/browser"
import { BiLoaderCircle } from "react-icons/bi"
import "@/styles/contact.css"
import { MENU_ITEMS } from "@/constant/menuConstant";
import { useTranslate } from "@/hooks/useTranslation";
import { openLink } from "@/lib/projects";
import { contactFormValidator } from "@/validators/contact";
import { useState } from "react";

const pkey = import.meta.env.VITE_EMAIL_PUBLIC_KEY
const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID
const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID


export default function Contact() {

    //translation hook
    const { tc } = useTranslate()

    //states
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        subject: '',
    })
    const [hasSent, setHasSent] = useState({})
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)

    // update formData
    const updateData = e => setFormData(data => ({ ...data, [e.target.name]: e.target.value }))

    // send email
    const sendEmail = (e) => {

        e.preventDefault()
        setErrors({})
        setHasSent({})

        // validate formData
        const { errors, isValid } = contactFormValidator(formData.email, formData.name, formData.subject, formData.message)

        setErrors(errors)

        if (isValid) {

            setLoading(true)

            emailjs.send(
                serviceId,
                templateId,
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: formData.subject
                },
                pkey
            ).then(
                () => {
                    setHasSent({ state: 'yes' })
                    setFormData({
                        name: '',
                        email: '',
                        message: '',
                        subject: '',
                    })
                }
                ,
                () => setHasSent({ state: 'no' })

            ).catch(() => setHasSent({ state: 'no' })
            ).finally(() => setLoading(false))

        }

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
                            icon={<IoLocationSharp />}
                            title={tc("contact_location_title")}
                            descript={CONTACT.LOCATION}
                        />
                        <ContactLinkItem
                            icon={<BiLogoGmail />}
                            title={tc("contact_gmail_title")}
                            descript={CONTACT.GMAIL}
                            onClick={() => openLink(`mailto:${CONTACT.GMAIL}`)}
                        />
                        <ContactLinkItem
                            icon={<IoIosCall />}
                            title={tc("contact_tel_title")}
                            descript={CONTACT.TEL}
                            onClick={() => openLink(`tel:${CONTACT.TEL}`)}
                        />
                        <ContactLinkItem
                            icon={<IoLogoLinkedin />}
                            title={tc("contact_linkedin_title")}
                            descript={CONTACT.LINKEDIN}
                            onClick={() => openLink(CONTACT.LINKEDIN)}
                        />
                        <ContactLinkItem
                            icon={<IoLogoGithub />}
                            title={tc("contact_github_title")}
                            descript={CONTACT.GITHUB}
                            onClick={() => openLink(CONTACT.GITHUB)}
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
                        <BsSend className={"text-primary"} />
                    </div>
                    <form action="">
                        <div className="flex">
                            <InputForm
                                label={tc("contact_form_name_label")}
                                placeholder={tc("contact_form_name_placeholder")}
                                value={formData.name}
                                error={errors.name}
                                name="name"
                                onChange={updateData}
                            />
                            <InputForm
                                label={tc("contact_form_email_label")}
                                placeholder={tc("contact_form_email_placeholder")}
                                value={formData.email}
                                name="email"
                                onChange={updateData}
                                error={errors.email}

                            />
                        </div>
                        <InputForm
                            label={tc("contact_form_subject_label")}
                            placeholder={tc("contact_form_subject_placeholder")}
                            value={formData.subject}
                            name="subject"
                            onChange={updateData}
                            error={errors.subject}
                        />

                        <TextareaForm
                            label={tc("contact_form_message_label")}
                            placeholder={tc("contact_form_message_placeholder")}
                            name="message"
                            value={formData.message}
                            onChange={updateData}
                            error={errors.message}
                        />

                        <PrimaryButton
                            onClick={sendEmail}
                        >
                            {
                                loading ?
                                    <BiLoaderCircle /> :
                                    tc("contact_form_btn")
                            }
                        </PrimaryButton>
                        {
                            hasSent.state === 'yes' && (
                                <p className="success">{tc("contact_form_success")}</p>
                            )
                        }
                        {
                            hasSent.state === 'no' && (
                                <p className="error">{tc("contact_form_error")}</p>
                            )
                        }
                        {/* <p>{tc("contact_form_note")}</p> */}
                    </form>
                </section>
            </div>
        </MainLayout>
    )
}


const ContactLinkItem = ({ icon, title, descript, onClick }) => (
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


const InputForm = ({ label, name, placeholder, value, onChange, error }) => {

    //translation hook
    const { tc } = useTranslate()
    return (
        <div className="input-form">
            <label>{label}</label>
            <input
                type="text"
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {
                error &&
                <p className="error">{tc(error)}</p>
            }
        </div>
    )
}

const TextareaForm = ({ label, name, placeholder, value, onChange, error }) => {

    //translation hook
    const { tc } = useTranslate()

    return (
        <div className="textarea-form">
            <label>{label}</label>
            <textarea
                name={name}
                placeholder={placeholder}
                value={value} onChange={onChange}
            />
            {
                error &&
                <p className="error">{tc(error)}</p>
            }
        </div>
    )

} 