"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import "./styles.scss";

const Nav: React.FC = () => {
  return (
    <div className="px-4 navbar">
      <div className="flex items-center justify-between h-[100px]">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            width="70"
            height="70"
            alt="dnd tech logo"
            src="/DND-TECH-logo-square.png"
          />
        </motion.span>
        <div className="flex max-w-[150px]">
          <h2>Get a landing page that converts</h2>
        </div>
      </div>
    </div>
  );
};

export default Nav;
