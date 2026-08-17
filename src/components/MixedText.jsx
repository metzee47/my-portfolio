import "@/styles/component.css"

export const MixedText = ({firstPart, coloredPart, lastPart}) => {
    return (
        <h1 className="mixed-text">
            {firstPart}
            <span>{coloredPart}</span>
            {
                lastPart &&
                lastPart
            }
        </h1>
    )
}