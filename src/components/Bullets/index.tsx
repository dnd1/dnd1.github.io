"use client";
import { Glow, GlowCapture } from "@codaworks/react-glow";
import "./styles.scss";
import { useScroll, motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionIntro from "../SectionIntro";

const Card: React.FC<{ title: string; subtitle?: string }> = ({
  title,
  subtitle,
}) => {
  return (
    <div className="border border-amber-200 p-4 rounded glow:border-indigo-600">
      <h3 className="xs:text-xs sm:text-xl md:text-3xl font-thin">
        <span className="pr-4 text-2xl">&#x2713;</span>
        {title}
      </h3>
      {subtitle && <h2>{subtitle}</h2>}
    </div>
  );
};

const bullets = [
  "Imagine Amplifying Profits from your Marketing, turning every effort into a revenue-generating opportunity",
  "Imagine getting a consistent flow of leads comming in every month",
  "Imagine Consistently Convert Visitors into Paying Customers",
  "Enhance Brand Visibility and Stand Out in a Crowded Market",
  "Capture the right kind of leads Effortlessly",
];

const Bullets: React.FC = () => {
  const { scrollYProgress, scrollY } = useScroll();
  const container = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { root: container });

  return (
    <div>
      <section>
        <SectionIntro text="Just picture this..." />
      </section>
      <section
        ref={container}
        className="xs:px-4 px-12 flex flex-col items-start  flex-wrap justify-center gap-5"
      >
        {bullets.map((t, i) => {
          return (
            <motion.div
              key={t}
              initial={{
                opacity: 0,
                translateX: i % 2 === 0 ? -50 : 50,
                translateY: 50,
              }}
              whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
              transition={{ duration: 0.2, delay: i * 0.2 }}
            >
              <Card title={t} />
            </motion.div>
          );
        })}
      </section>
    </div>
  );
};
export default Bullets;
