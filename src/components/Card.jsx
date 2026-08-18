export const Card = ({primaryAnimation = true, className = '', onClick, children}) => {
    return (
        <div 
            onClick={onClick}
            className={`card ${primaryAnimation ? 'primary-animation' : 'secondary-animation'} ${className}`}
        >
            {children}
        </div>
    )
}