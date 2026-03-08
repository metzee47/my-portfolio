import { MY_SKILLS } from "../constants/skills"
import '../styles/skill.css'

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

export default function MySkills() {



    return (
        <div className="my-skills-container" id="skills">
            <h3>Mes Compétences</h3>

            <div className="skills-list">

            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={20}
                // slidesPerView={4}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                loop={true}
                breakpoints={{
                    320: { slidesPerView: 2 },
                    640: { slidesPerView: 3 },
                    900: { slidesPerView: 4 },
                    1200: { slidesPerView: 5 }
                }}
            >
                {MY_SKILLS.map((skill) => (
                    <SwiperSlide key={skill.name}>
                        <SkillItem
                            name={skill.name}
                            rating={skill.rating}
                            icon={skill.icon}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>


        </div>
    )
}



const SkillItem = ({ icon, name, rating }) => (
    <div className="skill-item-wrapper">
        <div className="icon-container">
            <i className={`${icon} colored`} />
        </div>
        <p>{name}</p>
        <ProgressionBar rating={rating} />
    </div>
)

const ProgressionBar = ({ rating }) => (
    <div className="progression-bar">
        <div className="percentage-state"
            style={{ width: `${parseInt(rating) * 10}%` }}
        />
    </div>
)

