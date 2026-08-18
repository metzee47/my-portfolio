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

// export default function Home () {
//     return (
//         <MainLayout
//             activeMenu={MENU_ITEMS.home}
//         >

//             {/* top section */}
//             <section className="introduce-myself flex-center">
//                 <div className="text-part flex">
//                     <p className="location flex-center text-secondary">
//                         <CiLocationOn />
//                         <span>CASABLANCA - MAROC</span>
//                     </p>
//                     <MixedText
//                         firstPart={'Je construis des produits '}
//                         coloredPart={'robustes'}
//                         lastPart={' qui respectent chaque pixel.'}
//                     />
//                     <p>Full Stack Developer & Technical Lead, je transforme une intention produit en applications web et mobiles prêtes pour la production — de l’architecture à l’interface.</p>

//                     <div className="btn-wrapper flex-center">
//                         <PrimaryButton>
//                             Voir les projets
//                         </PrimaryButton>
//                         <SecondaryButton forwardIcon={false}>
//                             Me contacter
//                             <BsSend/>
//                         </SecondaryButton>
//                     </div>
//                 </div>

//                 <div className="summary flex">
//                     <p>EN BREF</p>

//                     <div className="chiffres flex-center">
//                         <div className="experience">
//                             <h3 className="text-secondary">2+ ans</h3>
//                             <p>d'expérience</p>
//                         </div>
//                         <div className="lead">
//                             <h3 className="text-primary">8</h3>
//                             <p>Stagiaires</p>
//                         </div>
//                     </div>

//                     <div className="separator"/>

//                     <div className="stacks">
//                         <p className="frontend">
//                             <span>React Js - </span>
//                             <span>React Native - </span>
//                             <span>Tailwind Css</span>
//                         </p>
//                         <p className="backend">
//                             <span>Node Js - </span>
//                             <span>Django - </span>
//                             <span>Laravel - </span>
//                             <span>Spring Boot</span>
//                         </p>
//                     </div>
//                 </div>

//             </section>


//             {/* middle section */}
//             <section className="step-item-wrapper flex">
//                 <StepItem
//                     title={"01 / INTERFACE"}
//                     description={"Pixel-perfect, de Figma au produit"}
//                     subDescription={"Une exécution fidèle du design, pensée pour être fluide sur chaque écran."}
//                 />
//                 <StepItem
//                     titlePrimary
//                     title={"02 / ARCHITECTURE"}
//                     description={"Du front au backend"}
//                     subDescription={"API REST MVC, authentification JWT et intégrations de services."}
//                 />
//                 <StepItem
//                     title={"03 / LIVRAISON"}
//                     description={"Prêt pour la production"}
//                     subDescription={"Un accompagnement du cadrage jusqu’au déploiement."}
//                 />
//             </section>



//             {/* projects section */}
//             <section className="projects home flex">

//                 <div className="introduction flex">
//                     <span className="text-secondary">PROJETS SELECTIONNES</span>
//                     <h5>Des produits qui trouvent leur public.</h5>
//                     <div className="flex-center text-primary">
//                         <p>Explorer les realisations</p>
//                         <IoArrowForward />
//                     </div>
//                 </div>

//                 <div className="projects-item-wrapper flex">

//                     <ProjectItem
//                         name={'LCR'}
//                         description={'Application livrée à l’échelle, avec plus de 5 000 utilisateurs inscrits.'}
//                         titlePrimary
//                     />

//                     <ProjectItem
//                         name={'Nexuroom'}
//                         description={'Produit digital adopté par plus de 2 000 utilisateurs inscrits.'}
//                         titlePrimary={false}
//                     />
//                 </div>

//             </section>


//             {/* bottom section */}
//             <MixedText
//                 firstPart={'Une progression constante vers'}
//                 coloredPart={" l'excellence "}
//                 lastPart={"technique."}
//                 className={'home-mixed-text'}
//             />
//             <section className="step-item-wrapper flex">
//                 <StepItem
//                     title="JANVIER 2025 - JUILLET 2026"
//                     description="Full Stack Developer & Tech Lead"
//                     subDescription="Conception d'architectures robustes, encadrement technique de développeurs juniors et livraison de produits web/mobiles de bout en bout."
//                     titlePrimary
//                 />
//                 <StepItem
//                     title="SEPTEMBRE 2024 - JANVIER 2025"
//                     description="STAGE - Frontend Developer / Integrateur"
//                     subDescription="Développement d'applications sur mesure avec React et intégration d'API tierces sécurisées."
//                     titlePrimary={false}
//                 />
//                 <StepItem
//                     title="FEVRIER 2024 - JUIN 2024"
//                     description="STAGE - Frontend Developer / UI - UX Designer"
//                     subDescription="Conception d’interfaces réactives et optimisation de l’expérience utilisateur avec React."
//                     titlePrimary
//                 />
//                 <StepItem
//                     title="SEPTEMBRE 2021 - SEPTEMBRE 2024"
//                     description="Formation d'Ingénieur en Informatique"
//                     subDescription="Spécialisation en génie logiciel, architectures distribuées et bases de données avancées."
//                     titlePrimary={false}
//                 />
//             </section>


//         </MainLayout>
//     )
// }

export default function Home () {
    const {th} = useTranslate()
    
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
                        <PrimaryButton>
                            {th("btn_primary")}
                        </PrimaryButton>
                        <SecondaryButton forwardIcon={false}>
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

            {/* projects section */}
            <section className="projects home flex">
                <div className="introduction flex">
                    <span className="text-secondary">{th("projects_section_title")}</span>
                    <h5>{th("projects_section_subtitle")}</h5>
                    <div className="flex-center text-primary">
                        <p>{th("projects_section_cta")}</p>
                        <IoArrowForward />
                    </div>
                </div>

                <div className="projects-item-wrapper flex">
                    <ProjectItem
                        name={th("project_item_lcr_name")}
                        description={th("project_item_lcr_description")}
                        titlePrimary
                    />
                    <ProjectItem
                        name={th("project_item_nexuroom_name")}
                        description={th("project_item_nexuroom_description")}
                        titlePrimary={false}
                    />
                </div>
            </section>

            {/* bottom section */}
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