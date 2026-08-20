import { motion } from "framer-motion";

export const Card = ({ primaryAnimation = true, className = '', onClick, children }) => {
  const flipVariants = {
    hidden: { opacity: 0, rotateY: -90 },
    visible: { opacity: 1, rotateY: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const slideVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      onClick={onClick}
      className={`card ${primaryAnimation ? 'primary-animation' : 'secondary-animation'} ${className}`}
      variants={primaryAnimation ? flipVariants : slideVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
};



export const OGCard = ({primaryAnimation = true, className = '', onClick, children}) => {
    return (
        <div 
            onClick={onClick}
            className={`card ${primaryAnimation ? 'primary-animation' : 'secondary-animation'} ${className}`}
        >
            {children}
        </div>
    )
}




