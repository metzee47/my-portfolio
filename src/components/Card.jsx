export const Card = ({primaryAnimation = true, className = '', children}) => {
    return (
        <div 
            className={`card ${primaryAnimation ? 'primary-animation' : 'secondary-animation'} ${className}`}
        >
            {children}
        </div>
    )
}