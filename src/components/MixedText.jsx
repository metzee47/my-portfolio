import { motion } from "framer-motion";
import "@/styles/component.css";

export const MixedText = ({ firstPart, coloredPart, lastPart, className }) => {
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.07 },
    },
  };

  const letter = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // Fonction utilitaire pour découper le texte en lettres
  const renderLetters = (text, extraClass = "") =>
    text.split("").map((char, i) => (
      <motion.span key={i} variants={letter} className={extraClass}>
        {char}
      </motion.span>
    ));

  return (
    <motion.h1
      className={`mixed-text ${className}`}
      variants={sentence}
      initial="hidden"
      animate="visible"
    >
      {renderLetters(firstPart)}
      <span className="colored">{renderLetters(coloredPart)}</span>
      {lastPart && renderLetters(lastPart)}
    </motion.h1>
  );
};
