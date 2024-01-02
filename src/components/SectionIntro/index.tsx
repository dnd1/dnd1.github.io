"use client";

import { motion, useInView } from "framer-motion";
import "./styles.scss";
import { useRef } from "react";

const SectionIntro: React.FC<{ text: string; full?: boolean }> = ({
  text,
  full,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const title = (
    <motion.h2
      className="text-center flex items-center h-full justify-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 2 } }}
    >
      {text}
    </motion.h2>
  );

  return !full ? (
    title
  ) : (
    <div className="flex flex-col items-center justify-evenly h-full">
      {title}
    </div>
  );
};

export default SectionIntro;
