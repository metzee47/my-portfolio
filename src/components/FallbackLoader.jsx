import { RingLoader } from "react-spinners"
import "@/styles/component.css"

export const FallbackLoader = () => {
    return (
        <div className="fallback-loader flex-center">
            <RingLoader color="var(--primary)" size={50} />
        </div>
    )
}