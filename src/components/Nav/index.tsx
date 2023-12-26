"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Nav: React.FC = () => {
  return (
    <div className="flex items-center justify-between pr-4 h-[100px]">
      <motion.span
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          width="80"
          height="80"
          alt="dnd tech logo"
          src="/DND-TECH-logo-square.png"
        />
      </motion.span>
      <div className="">
        <p>Get a landing page that converts</p>
      </div>
    </div>
  );
};

export default Nav;
