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

// export default function Expertise () {
//     return (
//         <MainLayout
//             activeMenu={MENU_ITEMS.expertise}
        
//         >

//             {/* skills */}
//             <section className="skills flex-center">

//                 <div className="text-part flex">

//                     <span className="text-secondary">SAVOIR - FAIRE</span>
//                     <MixedText
//                         firstPart={'Une culture produit, soutenue par une '}
//                         coloredPart={'pratique technique '}
//                         lastPart={'complète.'}
//                     />
//                     <p>Mouhamadou Sylla accompagne les produits web et mobiles de la maquette à la production, avec une attention rare pour le détail d’interface et la solidité des fondations.</p>
//                     <SecondaryButton>
//                         Voir le parcours
//                     </SecondaryButton>
//                 </div>

//                 <div className="cards-wrapper">
//                     {
//                         SKILLS.map((item, index) => (
//                             <SkillCardItem key={index} item={item} />
//                         ))
//                     }
//                 </div>

//             </section>

//             <Card
//                 className="tech-lead-skills flex"
//             >
//                 <div className="text-part">
//                     <span className="text-primary">TECHNICAL LEAD</span>
//                     <p>Faire avancer une équipe avec exigence.</p>
//                 </div>

//                 <div className="skills-wrapper">
//                     <div className="skill-card-item">
//                         <LuUsersRound/>
//                         <h6>Encadrement</h6>
//                         <p>Gestion de huit stagiaires.</p>
//                     </div>
//                     <div className="skill-card-item">
//                         <FaCheck/>
//                         <h6>Code reviews</h6>
//                         <p>Une qualité partagée au quotidien.</p>
//                     </div>
//                     <div className="skill-card-item">
//                         <IoChatbubbleOutline/>
//                         <h6>Pair programming</h6>
//                         <p>Apprendre et résoudre ensemble.</p>
//                     </div>
//                 </div>
                
//             </Card>


//             {/* Experiences */}
//             <section className="formations flex">
//                 <div className="top-sections">
//                     <span className="text-secondary">PARCOURS</span>
//                     <MixedText
//                         firstPart={'Concevoir, '}
//                         coloredPart={'construire, '}
//                         lastPart={'guider.'}
//                     />
//                     <p>Un parcours à la croisée du design d’interface, du développement full stack et du leadership technique.</p>
//                 </div>

//                 <div className="experiences-wrapper flex">
//                     {
//                         EXPERIENCES.map((item, index) => (
//                             <ExperienceCardItem key={index} item={item}/>
//                         ))  
//                     }
//                 </div>
//             </section>

//             <Card
//                 className="gorilla-skills flex-center"
//             >
//                 <div className="text-part flex">
//                     <span className="text-primary">SIGNATURE TECHNIQUE GORILLA</span>
//                     <h6>Un niveau confirmé en CSS et en intégration responsive.</h6>
//                     <p>
//                         <p>Maîtrise avancée en CSS (98%), garantissant des interfaces précises et maintenables.</p>
//                         <p>Maîtrise avancée en React (80%) pour concevoir des applications dynamiques</p>
//                         <p>Maîtrise avancée en Node.js (78%) pour développer des logiques backend fiables et performantes.</p>
//                     </p>
//                 </div>

//                 <PrimaryButton>
//                     Travaillons ensemble
//                 </PrimaryButton>

              
                
//             </Card>
//         </MainLayout>
//     )
// }

export default function Expertise () {
    const {te} = useTranslate()
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
                    <SecondaryButton>
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
            <section className="formations flex">
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

                <PrimaryButton>
                    {te("gorilla_signature_btn")}
                </PrimaryButton>
            </Card>
        </MainLayout>
    )
}



const SkillCardItem = ({item}) => {
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
