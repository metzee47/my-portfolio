import { PrimaryButton } from "@/components/Button";
import { Card } from "@/components/Card";
import MainLayout from "@/components/layout/MainLayout";
import { MixedText } from "@/components/MixedText";
import { MENU_ITEMS } from "@/constant/menuConstant";
import { PROJECTS } from "@/constant/ProjectConstant";
import { useNavRedirecting } from "@/hooks/useNavRedirecting";
import { useTranslate } from "@/hooks/useTranslation";
import "@/styles/project.css"


export default function Project() {
    // translation hook
    const {tp} = useTranslate()

    // redirection hook
    const {gotoContact} = useNavRedirecting()

    return (
        <MainLayout
            activeMenu={MENU_ITEMS.projects}
        >
            {/* top section */}
            <section className="projects-top-section flex">
                <span className="text-secondary">{tp("projects_section_title")}</span>
                <MixedText
                    firstPart={tp("projects_mixed_first")}
                    coloredPart={tp("projects_mixed_colored")}
                    lastPart={tp("projects_mixed_last")}
                />
                <p>{tp("projects_intro_paragraph")}</p>
            </section>

            {/* projects */}
            <sections className="projects-wrapper">
                {
                    PROJECTS.map(project => (
                        <ProjectCardItem key={project.title} item={project} />
                    ))
                }
            </sections>

            {/* bottom part */}
            <Card className="projects-btm-part gorilla-skills flex-center">
                <div className="text-part flex">
                    <span className="text-primary">{tp("projects_bottom_title")}</span>
                    <h6>{tp("projects_bottom_subtitle")}</h6>
                    <p>{tp("projects_bottom_paragraph")}</p>
                </div>

                <PrimaryButton
                    onClick={gotoContact}
                >
                    {tp("projects_bottom_btn")}
                </PrimaryButton>
            </Card>
        </MainLayout>
    )
}



const ProjectCardItem = ({ item }) => {
    // translation hook
    const {tp} = useTranslate()

    return (
    <Card
        primaryAnimation={false}
        className={"project-card-item"}
        onClick={item.openApp}
    >
        <Card
            primaryAnimation={item.isPrimary}
            className="top-part"
        >
            <div className="project-platform flex-center">
                <p className="flex-center">
                    {
                        item.platforms.map(p => (
                            <span key={p}>{tp(p)}</span>
                        ))
                    }
                </p>
                <item.icon />
            </div>
            <p>{tp(item.type)}</p>
            <h5>{tp(item.title)}</h5>
    
        </Card>
    
        <div className="bottom-part flex">
            <p>{tp(item.description)}</p>
            <p className="project-skills flex-center">
                {
                    item.skills.map(s => (
                        <span key={s}>{tp(s)}</span>
                    ))
                }
            </p>
            <div className="separator"></div>
            <div className="project-stats flex-center">
                <h4 className={`${item.isPrimary ? "text-primary" : "text-secondary"}`}>{tp(item.stats)}</h4>
                <span>{tp('registered_users')}</span>
            </div>
        </div>
    
    </Card>
    )
}
    