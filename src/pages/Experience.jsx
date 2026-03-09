
import { FaBuildingColumns } from "react-icons/fa6"
import IconizeIt from "../components/IconizeIt"
import { MY_EXPERIENCES } from "../constants/experience"
import { calculateMonthsBetween, frenchDateFormat } from "../lib/main"
import '../styles/experience.css'
import { GiShieldOpposition } from "react-icons/gi"
import { useState } from "react"
import { IoIosAdd } from "react-icons/io"
import { FaMinus } from "react-icons/fa"

export default function Experience() {
    return (
        <div className="experience-container" id="#experience">
            <h3>Mon Parcours Professionnel</h3>
            {

                MY_EXPERIENCES.map(item => (
                    <ExperienceItem
                        {...item}
                        key={item.id}
                        monthsCount={calculateMonthsBetween(item.fromDate, item.toDate)}
                    />
                ))
            }
        </div>
    )
}

const ExperienceItem = ({ companyName, fromDate, toDate, position, descriptions = [{}], dotColor, skills = [], monthsCount }) => {

    const [renderNumber, setRenderNumber] = useState(1)

    const showMore = () => setRenderNumber(descriptions.length)
    const showLess = () => setRenderNumber(1)

    return (
        <div className="experience-item-container" id="experience">
            <div className="left-part">
                <div className="">
                    <IconizeIt bgColor={'#fff3e0'}>
                        <FaBuildingColumns />
                    </IconizeIt>
                    <h5>{companyName}</h5>
                </div>
                <p>{frenchDateFormat(fromDate)} - {frenchDateFormat(toDate)} ({monthsCount} mois)</p>

                <div className="skills-wrapper">
                    {
                        skills.map((skill, index) => (
                            <span
                                key={skill}
                                style={{ backgroundColor: index % 2 === 0 ? '#e6f4ff' : '#fff3e0' }}
                            >
                                {skill}
                            </span>
                        ))
                    }
                </div>
            </div>

            <div className="right-part">
                {/* <div className="dot-part">
                <div className="dot" style={{ backgroundColor: dotColor }} ></div>
            </div> */}
                <div className="next-dot-part">
                    <div className="">
                        <IconizeIt bgColor={'#fff3e0'}>
                            <GiShieldOpposition />
                        </IconizeIt>
                        <h5>{position}</h5>
                    </div>
                    <ul className="descriptions">
                        {
                            descriptions.slice(0, renderNumber).map(desc => (
                                <div key={desc.category}>
                                    <p>{desc.category}</p>
                                    {
                                        desc.items.map(item => (
                                            <li key={item}>{item}</li>
                                        ))
                                    }



                                </div>
                            ))
                        }

                        {
                            descriptions.length > 1 && renderNumber === 1 &&

                            <div className="show-more" onClick={showMore}>
                                <IoIosAdd />
                                <span>voir plus</span>
                            </div>
                        }
                        {
                            descriptions.length > 1 && renderNumber === descriptions.length &&

                            <div className="show-more" onClick={showLess}>
                                <FaMinus />
                                <span>voir moins</span>
                            </div>
                        }
                    </ul>
                </div>
            </div>
        </div >
    )

}