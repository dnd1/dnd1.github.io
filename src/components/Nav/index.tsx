"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import "./styles.scss";

const Nav: React.FC = () => {
  return (
    <div className="navbar">
      <div className="flex items-center justify-between h-[100px]">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          CONVERT YOUR VISITS
        </motion.span>
        <div className="flex social">
          <a href="#">
            <Image width={18} height={18} src="/facebook.png" alt="" />
          </a>
          <a href="#">
            <Image width={18} height={18} src="/instagram.png" alt="" />
          </a>
          <a href="#">
            <Image width={18} height={18} src="/youtube.png" alt="" />
          </a>
          <a href="#">
            <Image width={18} height={18} src="/dribbble.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
