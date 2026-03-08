import { useState } from "react"
import '../styles/component.css'

export default function IconizeIt ({bgColor, width, fontSize, description, onClick, className, children}) {
    const [isHover, setIsHover] = useState(false)
    return (
        <div style={
            {
                backgroundColor: bgColor || 'rgba(255, 255, 255, 0.65)',
                width: width || 'max(33px, 2.7vw)',
                height: width || 'max(33px, 2.7vw)',
                fontSize: fontSize || 'max(14px, 1.1vw)'
            }
        }
            className={`main-iconize-it-container ${isHover ? 'active' : ''} ${className}`}
            onClick={onClick}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            {
                description && (
                    <span>{description}</span>
                )
            }
            {children}
        </div>
    )
}