"use client";
import Image from "next/image";
import "./styles.scss";
import { Variants, motion } from "framer-motion";

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
  // scrollButton: {
  //   opacity: 0,
  //   y: 10,
  //   transition: {
  //     duration: 2,
  //     repeat: Infinity,
  //   },
  // },
};
const sliderVariants: Variants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero: React.FC<{ title?: string; subtitle?: string }> = ({
  title,
  subtitle,
}) => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="flex flex-col justify-center items-center textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>GET A</motion.h2>
          <motion.div variants={textVariants}>
            <motion.h1 variants={textVariants}>
              High-Converting Landing Page
            </motion.h1>
            <motion.h3 variants={textVariants}>
              so good your visitors can&apos;t say no to it
            </motion.h3>
          </motion.div>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              See the Latest Works
            </motion.button>
            <motion.button variants={textVariants}>
              Schedule a call!
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Unleash the power of a highly-converting landing page now
      </motion.div>
    </div>
  );
};

export default Hero;
