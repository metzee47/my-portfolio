import "@/styles/component.css"

export const MixedText = ({firstPart, coloredPart, lastPart, className}) => {
    return (
        <h1 className={`mixed-text ${className}`}>
            {firstPart}
            <span>{coloredPart}</span>
            {
                lastPart &&
                lastPart
            }
        </h1>
    )
}