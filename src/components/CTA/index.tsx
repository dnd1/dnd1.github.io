"use client";
import { TargetAndTransition, Variants, motion } from "framer-motion";
import "./styles.scss";

const textVariants: Variants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const CTA: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={textVariants.animate as TargetAndTransition}
    >
      <motion.div variants={textVariants} className="buttons">
        <motion.button variants={textVariants}>
          See the Latest Works
        </motion.button>
        <motion.button variants={textVariants}>Schedule a call!</motion.button>
      </motion.div>
    </motion.div>
  );
};
export default CTA;
