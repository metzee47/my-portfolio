import { PrimaryButton } from "@/components/Button";
import { Card } from "@/components/Card";
import MainLayout from "@/components/layout/MainLayout";
import { MixedText } from "@/components/MixedText";
import { PROJECTS } from "@/constant/ProjectConstant";
import "@/styles/project.css"



export default function Project() {
    return (
        <MainLayout>
            {/* top section */}
            <section className="projects-top-section flex">
                <span className="text-secondary">REALISATIONS</span>
                <MixedText
                    firstPart={'Des applications conçues pour être utilisées, puis faire '}
                    coloredPart={' grandir'}
                    lastPart={' leur impact.'}
                />
                <p>Deux produits livrés avec une approche full stack : rigueur d’architecture, expérience claire et livraison orientée production.</p>
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
            <Card
                className="projects-btm-part gorilla-skills flex-center"
            >
                <div className="text-part flex">
                    <span className="text-primary">APPROCHE DE LIVRAISON</span>
                    <h6>Construire vite, sans sacrifier la qualité.</h6>
                    <p>
                        Des applications livrées dans des délais serrés, souvent entre trois et quatre mois, avec une attention constante portée au produit final.
                    </p>
                </div>

                <PrimaryButton>
                    Echanger sur un projet
                </PrimaryButton>



            </Card>
        </MainLayout>
    )
}


const ProjectCardItem = ({ item }) => (
    <Card
        primaryAnimation={false}
        className={"project-card-item"}
    >
        <Card
            primaryAnimation={item.isPrimary}
            className="top-part"
        >
            <div className="project-platform flex-center">
                <p className="flex-center">
                    {
                        item.platforms.map(p => (
                            <span key={p}>{p}</span>
                        ))
                    }
                </p>
                <item.icon />
            </div>
            <p>{item.type}</p>
            <h5>{item.title}</h5>

        </Card>

        <div className="bottom-part flex">
            <p>{item.description}</p>
            <p className="project-skills flex-center">
                {
                    item.skills.map(s => (
                        <span key={s}>{s}</span>
                    ))
                }
            </p>
            <div className="separator"></div>
            <div className="project-stats flex-center">
                <h4 className={`${item.isPrimary ? "text-primary" : "text-secondary"}`}>{item.stats}</h4>
                <span>utilisateurs inscrits</span>
            </div>
        </div>

    </Card>
)