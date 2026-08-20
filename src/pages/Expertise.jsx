import { PrimaryButton, SecondaryButton } from "@/components/Button";
import { Card } from "@/components/Card";
import MainLayout from "@/components/layout/MainLayout";
import { MixedText } from "@/components/MixedText";
import { EXPERIENCES, SKILLS } from "@/constant/ExpertiseConstant";
import "@/styles/expertise.css"
import { LuUsersRound } from "react-icons/lu";
import { FaCheck } from "react-icons/fa6";
import { IoChatbubbleOutline } from "react-icons/io5";
import { MENU_ITEMS } from "@/constant/menuConstant";
import { useTranslate } from "@/hooks/useTranslation";
import { useNavRedirecting } from "@/hooks/useNavRedirecting";


export default function Expertise () {
    // translation hook
    const {te} = useTranslate()

    // redirection hook
    const {gotoContact} = useNavRedirecting()

    // scroll to expertise-journey section
    const scrollToExpertiseJourney = () => {
        document.getElementById("expertise-journey").scrollIntoView({ behavior: "smooth" })
    }

    return (
        <MainLayout
            activeMenu={MENU_ITEMS.expertise}
        >

            {/* skills */}
            <section className="skills flex-center">

                <div className="text-part flex">
                    <span className="text-secondary">{te("skills_section_title")}</span>
                    <MixedText
                        firstPart={te("skills_mixed_first")}
                        coloredPart={te("skills_mixed_colored")}
                        lastPart={te("skills_mixed_last")}
                    />
                    <p>{te("skills_intro_paragraph")}</p>
                    <SecondaryButton
                        onClick={scrollToExpertiseJourney}
                    >
                        {te("skills_btn_secondary")}
                    </SecondaryButton>
                </div>

                <div className="cards-wrapper">
                    {
                        SKILLS.map((item, index) => (
                            <SkillCardItem key={index} item={item} />
                        ))
                    }
                </div>
            </section>

            <Card className="tech-lead-skills flex">
                <div className="text-part">
                    <span className="text-primary">{te("tech_lead_title")}</span>
                    <p>{te("tech_lead_paragraph")}</p>
                </div>

                <div className="skills-wrapper">
                    <div className="skill-card-item">
                        <LuUsersRound/>
                        <h6>{te("tech_lead_encadrement_title")}</h6>
                        <p>{te("tech_lead_encadrement_description")}</p>
                    </div>
                    <div className="skill-card-item">
                        <FaCheck/>
                        <h6>{te("tech_lead_reviews_title")}</h6>
                        <p>{te("tech_lead_reviews_description")}</p>
                    </div>
                    <div className="skill-card-item">
                        <IoChatbubbleOutline/>
                        <h6>{te("tech_lead_pair_title")}</h6>
                        <p>{te("tech_lead_pair_description")}</p>
                    </div>
                </div>
            </Card>

            {/* Experiences */}
            <section className="formations flex" id="expertise-journey">
                <div className="top-sections">
                    <span className="text-secondary">{te("experiences_section_title")}</span>
                    <MixedText
                        firstPart={te("experiences_mixed_first")}
                        coloredPart={te("experiences_mixed_colored")}
                        lastPart={te("experiences_mixed_last")}
                    />
                    <p>{te("experiences_intro_paragraph")}</p>
                </div>

                <div className="experiences-wrapper flex">
                    {
                        EXPERIENCES.map((item, index) => (
                            <ExperienceCardItem key={index} item={item}/>
                        ))  
                    }
                </div>
            </section>

            <Card className="gorilla-skills flex-center">
                <div className="text-part flex">
                    <span className="text-primary">{te("gorilla_signature_title")}</span>
                    <h6>{te("gorilla_signature_subtitle")}</h6>
                    <p>
                        <p>{te("gorilla_signature_css")}</p>
                        <p>{te("gorilla_signature_react")}</p>
                        <p>{te("gorilla_signature_node")}</p>
                    </p>
                </div>

                <PrimaryButton
                    onClick={gotoContact}
                >
                    {te("gorilla_signature_btn")}
                </PrimaryButton>
            </Card>
        </MainLayout>
    )
}



const SkillCardItem = ({item}) => {
    // translation hook
    const {te} = useTranslate()

    return (
        <Card
            primaryAnimation={item.isPrimary}
        >

            <div className="skill-card-item flex">
                <item.icon/>
                <h6>{te(item.name)}</h6>
                <p>{te(item.description)}</p>
                <div className="flex-center">
                    {
                        item.stacks.map(stack => (
                            <span key={stack} className="stack-item">{te(stack)}</span>
                        ))
                    }
                </div>
            </div>
        </Card>
    )
}

const ExperienceCardItem = ({item}) => {
    // translation hook
    const {te} = useTranslate()

    return (
        <Card
            primaryAnimation={item.isPrimary}
            className="experience-card-item flex"
        >
            <div className="type-part flex-center">
                <span>{te(item.type)}</span>
                <item.icon/>

            </div>

            <h5>{te(item.title)}</h5>
            <p>{te(item.description)}</p>
            <div className={'separator'}/>
            <span>{te(item.skills)}</span>

        </Card>
    )
}
