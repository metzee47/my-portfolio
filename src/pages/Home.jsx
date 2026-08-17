import { PrimaryButton, SecondaryButton } from "@/components/Button";
import MainLayout from "@/components/layout/MainLayout";
import { MixedText } from "@/components/MixedText";
import { CiLocationOn } from "react-icons/ci";
import { BsSend } from "react-icons/bs";
import "@/styles/home.css"
import { IoArrowForward } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import { Card } from "@/components/Card";

export default function Home () {
    return (
        <MainLayout>

            {/* top section */}
            <section className="introduce-myself flex-center">
                <div className="text-part flex">
                    <p className="location flex-center text-secondary">
                        <CiLocationOn />
                        <span>CASABLANCA - MAROC</span>
                    </p>
                    <MixedText
                        firstPart={'Je construis des produits '}
                        coloredPart={'robustes'}
                        lastPart={' qui respectent chaque pixel.'}
                    />
                    <p>Full Stack Developer & Technical Lead, je transforme une intention produit en applications web et mobiles prêtes pour la production — de l’architecture à l’interface.</p>

                    <div className="btn-wrapper flex-center">
                        <PrimaryButton>
                            Voir les projets
                        </PrimaryButton>
                        <SecondaryButton forwardIcon={false}>
                            Me contacter
                            <BsSend/>
                        </SecondaryButton>
                    </div>
                </div>

                <div className="summary flex">
                    <p>EN BREF</p>

                    <div className="chiffres flex-center">
                        <div className="experience">
                            <h3 className="text-secondary">2+ ans</h3>
                            <p>d'expérience</p>
                        </div>
                        <div className="lead">
                            <h3 className="text-primary">8</h3>
                            <p>Stagiaires</p>
                        </div>
                    </div>

                    <div className="separator"/>

                    <div className="stacks">
                        <p className="frontend">
                            <span>React Js - </span>
                            <span>React Native - </span>
                            <span>Tailwind Css</span>
                        </p>
                        <p className="backend">
                            <span>Node Js - </span>
                            <span>Django - </span>
                            <span>Laravel - </span>
                            <span>Spring Boot</span>
                        </p>
                    </div>
                </div>

            </section>


            {/* middle section */}
            <section className="step-item-wrapper flex">
                <StepItem
                    title={"01 / INTERFACE"}
                    description={"Pixel-perfect, de Figma au produit"}
                    subDescription={"Une exécution fidèle du design, pensée pour être fluide sur chaque écran."}
                />
                <StepItem
                    titlePrimary
                    title={"02 / ARCHITECTURE"}
                    description={"Du front au backend"}
                    subDescription={"API REST MVC, authentification JWT et intégrations de services."}
                />
                <StepItem
                    title={"03 / LIVRAISON"}
                    description={"Prêt pour la production"}
                    subDescription={"Un accompagnement du cadrage jusqu’au déploiement."}
                />
            </section>



            {/* projects section */}
            <section className="projects flex">

                <div className="introduction flex">
                    <span className="text-secondary">PROJETS SELECTIONNES</span>
                    <h5>Des produits qui trouvent leur public.</h5>
                    <div className="flex-center text-primary">
                        <p>Explorer les realisations</p>
                        <IoArrowForward />
                    </div>
                </div>

                <ProjectItem
                    name={'LCR'}
                    description={'Application livrée à l’échelle, avec plus de 5 000 utilisateurs inscrits.'}
                    titlePrimary
                />

                <ProjectItem
                    name={'Nexuroom'}
                    description={'Produit digital adopté par plus de 2 000 utilisateurs inscrits.'}
                    titlePrimary={false}
                />
            </section>


            {/* bottom section */}
            <MixedText
                firstPart={'Une progression constante vers'}
                coloredPart={" l'excellence "}
                lastPart={"technique."}
            />
            <section className="step-item-wrapper flex">
                <StepItem
                    title="JANVIER 2025 - JUILLET 2026"
                    description="Full Stack Developer & Tech Lead"
                    subDescription="Conception d'architectures robustes, encadrement technique de développeurs juniors et livraison de produits web/mobiles de bout en bout."
                    titlePrimary
                />
                <StepItem
                    title="SEPTEMBRE 2024 - JANVIER 2025"
                    description="STAGE - Frontend Developer / Integrateur"
                    subDescription="Développement d'applications sur mesure avec React et intégration d'API tierces sécurisées."
                    titlePrimary={false}
                />
                <StepItem
                    title="FEVRIER 2024 - JUIN 2024"
                    description="STAGE - Frontend Developer / UI - UX Designer"
                    subDescription="Conception d’interfaces réactives et optimisation de l’expérience utilisateur avec React."
                    titlePrimary
                />
                <StepItem
                    title="SEPTEMBRE 2021 - SEPTEMBRE 2024"
                    description="Formation d'Ingénieur en Informatique"
                    subDescription="Spécialisation en génie logiciel, architectures distribuées et bases de données avancées."
                    titlePrimary={false}
                />
            </section>


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


const ProjectItem = ({name, titlePrimary = false, description}) => {
    return (
        <Card className="project-item flex" primaryAnimation={titlePrimary}>
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