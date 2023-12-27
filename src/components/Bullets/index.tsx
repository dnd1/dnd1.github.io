"use client";
import { Glow, GlowCapture } from "@codaworks/react-glow";
import "./styles.scss";
import { useScroll, motion } from "framer-motion";

const Card: React.FC<{ title: string; subtitle?: string }> = ({
  title,
  subtitle,
}) => {
  return (
    <div className="border border-indigo-950 p-4 rounded glow:border-indigo-600">
      <h3 className="text-xs md:text-lg font-thin">
        <span className="pr-4 text-2xl">&#x2713;</span>
        {title}
      </h3>
      {subtitle && <h2>{subtitle}</h2>}
    </div>
  );
};

const Bullets: React.FC = () => {
  const { scrollYProgress, scrollY } = useScroll();
  return (
    <div className="flex flex-col items-center justify-evenly h-full">
      <motion.h2
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 2 } }}
      >
        Just picture this...
      </motion.h2>
      <GlowCapture>
        <Glow color="purple">
          <div className="px-12 flex flex-col items-start  flex-wrap justify-around gap-5">
            <Card title="Imagine Consistently Convert Visitors into Paying Customers" />
            <Card title="Imagine Amplifying Profits from your Marketing, turning every effort into a revenue-generating opportunity" />
            <Card title="Enhance Brand Visibility and Stand Out in a Crowded Market" />
            <Card title="Capture the right kind of leads Effortlessly" />
          </div>
        </Glow>
      </GlowCapture>
    </div>
  );
};
export default Bullets;
