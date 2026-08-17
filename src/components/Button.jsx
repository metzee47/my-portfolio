import { IoArrowForward } from "react-icons/io5";
import "@/styles/component.css"


export const Button = ({onClick, className, forwardIcon = true, children}) => {
    return (
        <button className={`btn ${className}`} onClick={onClick}>
            {children}
            {   
                forwardIcon &&
                <IoArrowForward />
            }
        </button>
    )
}

export const PrimaryButton = ({ className, onClick, forwardIcon = true, children}) => {
    return (
        <Button 
            className={`btn-primary ${className}`} 
            onClick={onClick}
            forwardIcon={forwardIcon}
        >
            {children}
            
        </Button>
    )
}

export const SecondaryButton = ({className, forwardIcon =true, onClick, children}) => {
    return (
        <Button 
            className={`btn-secondary ${className}`} 
            onClick={onClick}
            forwardIcon={forwardIcon}
        >
            {children}
            
        </Button>
    )
}