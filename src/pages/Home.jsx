import { PrimaryButton, SecondaryButton } from "@/components/Button";
import MainLayout from "@/components/layout/MainLayout";
import { MixedText } from "@/components/MixedText";
import { CiLocationOn } from "react-icons/ci";
import { BsSend } from "react-icons/bs";
import "@/styles/home.css"
import { IoArrowForward } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import { Card } from "@/components/Card";
import { MENU_ITEMS } from "@/constant/menuConstant";
import { useTranslate } from "@/hooks/useTranslation";
import { useNavRedirecting } from "@/hooks/useNavRedirecting";
import { openLCR, openNexuroom } from "@/lib/projects";
import { Section } from "@/components/Section";


export default function Home () {
    // translation hook
    const {th} = useTranslate()

    // redirection hook
    const {gotoProject, gotoContact} = useNavRedirecting()

    
    return (
        <MainLayout
            activeMenu={MENU_ITEMS.home}
        >

            {/* top section */}
            <section className="introduce-myself flex-center">
                <div className="text-part flex">
                    <p className="location flex-center text-secondary">
                        <CiLocationOn />
                        <span>{th("location")}</span>
                    </p>
                    <MixedText
                        firstPart={th("mixed_text_intro_first")}
                        coloredPart={th("mixed_text_intro_colored")}
                        lastPart={th("mixed_text_intro_last")}
                    />
                    <p>{th("intro_paragraph")}</p>

                    <div className="btn-wrapper flex-center">
                        <PrimaryButton
                            onClick={gotoProject}
                        >
                            {th("btn_primary")}
                        </PrimaryButton>
                        <SecondaryButton 
                            forwardIcon={false}
                            onClick={gotoContact}
                        >
                            {th("btn_secondary")}
                            <BsSend/>
                        </SecondaryButton>
                    </div>
                </div>

                <div className="summary flex">
                    <p>{th("summary_title")}</p>

                    <div className="chiffres flex-center">
                        <div className="experience">
                            <h3 className="text-secondary">{th("experience_years")}</h3>
                            <p>{th("experience_label")}</p>
                        </div>
                        <div className="lead">
                            <h3 className="text-primary">{th("lead_count")}</h3>
                            <p>{th("lead_label")}</p>
                        </div>
                    </div>

                    <div className="separator"/>

                    <div className="stacks">
                        <p className="frontend">{th("frontend_stack")}</p>
                        <p className="backend">{th("backend_stack")}</p>
                    </div>
                </div>
            </section>

            {/* middle section */}
            <Section>
                <section className="step-item-wrapper flex">
                    <StepItem
                        title={th("step_item_01_title")}
                        description={th("step_item_01_description")}
                        subDescription={th("step_item_01_subdescription")}
                    />
                    <StepItem
                        titlePrimary
                        title={th("step_item_02_title")}
                        description={th("step_item_02_description")}
                        subDescription={th("step_item_02_subdescription")}
                    />
                    <StepItem
                        title={th("step_item_03_title")}
                        description={th("step_item_03_description")}
                        subDescription={th("step_item_03_subdescription")}
                    />
                </section>
            </Section>

            {/* projects section */}
            <Section>
                <section className="projects home flex">
                    <div className="introduction flex">
                        <span className="text-secondary">{th("projects_section_title")}</span>
                        <h5>{th("projects_section_subtitle")}</h5>
                        <div className="flex-center text-primary" onClick={gotoProject}>
                            <p>{th("projects_section_cta")}</p>
                            <IoArrowForward />
                        </div>
                    </div>

                    <div className="projects-item-wrapper flex">
                        <ProjectItem
                            name={th("project_item_lcr_name")}
                            description={th("project_item_lcr_description")}
                            titlePrimary
                            openLink={openLCR}
                        />
                        <ProjectItem
                            name={th("project_item_nexuroom_name")}
                            description={th("project_item_nexuroom_description")}
                            titlePrimary={false}
                            openLink={openNexuroom}
                        />
                    </div>
                </section>
            </Section>


            {/* bottom section */}
            <Section>
                <MixedText
                    firstPart={th("mixed_text_bottom_first")}
                    coloredPart={th("mixed_text_bottom_colored")}
                    lastPart={th("mixed_text_bottom_last")}
                    className={'home-mixed-text'}
                />
                <section className="step-item-wrapper flex">
                    <StepItem
                        title={th("step_item_04_title")}
                        description={th("step_item_04_description")}
                        subDescription={th("step_item_04_subdescription")}
                        titlePrimary
                    />
                    <StepItem
                        title={th("step_item_05_title")}
                        description={th("step_item_05_description")}
                        subDescription={th("step_item_05_subdescription")}
                        titlePrimary={false}
                    />
                    <StepItem
                        title={th("step_item_06_title")}
                        description={th("step_item_06_description")}
                        subDescription={th("step_item_06_subdescription")}
                        titlePrimary
                    />
                    <StepItem
                        title={th("step_item_07_title")}
                        description={th("step_item_07_description")}
                        subDescription={th("step_item_07_subdescription")}
                        titlePrimary={false}
                    />
                </section>
            </Section>

        </MainLayout>
    )
}


const StepItem = ({title, titlePrimary = false, description, subDescription}) => {
    return (
        <div className="step-item flex">
            <span className={`${titlePrimary ? 'text-primary' : 'text-secondary'}`}>{title}</span>
            <h6>{description}</h6>
            <p>{subDescription}</p>
        </div>
    )
}


const ProjectItem = ({name, titlePrimary = false, description, openLink}) => {
    return (
        <Card className="project-item flex" primaryAnimation={titlePrimary} onClick={openLink}>
            <div className="top-part flex-center">
                <span 
                    className={`${titlePrimary ? 'bg-primary' : 'bg-secondary'}`}
                >
                    {name}
                </span>
                <GoArrowUpRight/>
            </div>
            <h5>{name}</h5>
            <p>{description}</p>
        </Card>
    )
}