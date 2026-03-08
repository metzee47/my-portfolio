import { FaEnvelope } from "react-icons/fa6"
import IconizeIt from "../components/IconizeIt"
import { CONTACT_ADDRESS, CONTACT_EMAIL, CONTACT_PHONE, GITHUB_PROFILE, LINKEDIN_PROFILE, SOCIAL_LINKS } from "../constants/contact"
import '../styles/contact.css'
import { useState } from "react"
import emailjs from "@emailjs/browser"
import { BiLoaderCircle } from "react-icons/bi"
import { contactFormValidator } from "../validators/contact"

const pkey = import.meta.env.VITE_EMAIL_PUBLIC_KEY
const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID
const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID

export default function Contact() {

    // open social links
    const handleLinkClick = link => window.open(link)

    const [data, setData] = useState({
        name: '',
        email: '',
        message: '',
        subject: '',
    })
    const [hasSent, setHasSent] = useState({})
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)

    // update data
    const updateData = e => setData(data => ({ ...data, [e.target.name]: e.target.value }))

    // send email
    const sendEmail = (e) => {

        e.preventDefault()

        // validate data
        const { errors, isValid } = contactFormValidator(data.email, data.name, data.subject, data.message)

        setErrors(errors)

        if (isValid) {

            setLoading(true)

            emailjs.send(
                serviceId,
                templateId,
                {
                    name: data.name,
                    email: data.email,
                    message: data.message,
                    subject: data.subject
                },
                pkey
            ).then(
                () => {
                    setHasSent({ state: 'yes' })
                    setData({
                        name: '',
                        email: '',
                        message: '',
                        subject: '',
                    })
                }
                ,
                () => setHasSent({ state: 'no' })

            ).finally(() => setLoading(false))

        }

    };

    return (
        <div className="contact-container" id="contact">
            <h3>Me contacter</h3>
            <p>Vous pouvez me contacter via les réseaux sociaux ou par email.</p>
            <p>Je me ferai un plaisir de vous repondre dans les plus brefs delais.</p>

            <div className="contact-wrapper">
                <div className="contact-form">
                    <InputLabel
                        name="name"
                        label="Nom"
                        value={data.name}
                        onChange={updateData}
                        placeholder="Marc Guiu"
                        error={errors.name}
                    />
                    <InputLabel
                        name="subject"
                        label="Sujet"
                        value={data.subject}
                        onChange={updateData}
                        placeholder="Objet"
                        error={errors.subject}
                    />
                    <InputLabel
                        name="email"
                        label="Email"
                        value={data.email}
                        onChange={updateData}
                        placeholder="john.doe@gmail.com"
                        error={errors.email}

                    />
                    <TextareaLabel
                        name="message"
                        label="Message"
                        value={data.message}
                        onChange={updateData}
                        placeholder="Message"
                        error={errors.message}

                    />

                    <button className="contact-btn" onClick={sendEmail}>
                        {loading ? <BiLoaderCircle /> : "Envoyer"}
                    </button>

                    {
                        hasSent.state === 'yes' &&
                        <p className="sent-success">Merci de nous avoir contacte, nous vous repondrons dans les meilleurs delais.</p>
                    }
                    {
                        hasSent.state === 'no' &&
                        <p className="sent-failed">Une erreur est survenue lors de l'envoi du mail, veuillez cliquez sur l'enveloppe d'a cote pour nous contacter.</p>
                    }
                </div>

                <div className="contact-infos">
                    <div className="contact-infos-item">
                        <h6>Mon adresse</h6>
                        <p>{CONTACT_ADDRESS}</p>
                    </div>
                    <div className="contact-infos-item">
                        <h6>Mes coordonnées</h6>
                        <p>{CONTACT_EMAIL}</p>
                        <p>{CONTACT_PHONE}</p>
                    </div>

                    <div className="social-links-wrapper">
                        <IconizeIt description={'linkedin'} onClick={() => handleLinkClick(LINKEDIN_PROFILE)}>
                            <i className={SOCIAL_LINKS.linkedin} />
                        </IconizeIt>
                        <IconizeIt description={'github'} onClick={() => handleLinkClick(GITHUB_PROFILE)}>
                            <i className={SOCIAL_LINKS.github} />
                        </IconizeIt>
                        <IconizeIt description={'gmail'}>
                            <a href={`mailto:${CONTACT_EMAIL}`}>
                                <FaEnvelope />
                            </a>
                        </IconizeIt>
                    </div>
                </div>

            </div>

        </div>
    )
}


const InputLabel = ({ name, label, value, onChange, error, ...props }) => {
    return (
        <div className="input-label">
            <label htmlFor={name}>{label}</label>
            <input type="text" name={name} value={value} onChange={onChange} {...props} />
            {error && <p className="error-field">{error}</p>}
        </div>
    )
}

const TextareaLabel = ({ name, label, value, onChange, error, ...props }) => {
    return (
        <div className="input-label">
            <label htmlFor={name}>{label}</label>
            <textarea
                minLength={10}
                name={name}
                value={value}
                onChange={onChange}
                {...props}
            />
            <p className="error-field">{error}</p>
        </div>
    )
}