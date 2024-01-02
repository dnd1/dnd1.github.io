"use client";

import { motion } from "framer-motion";
import SectionIntro from "../SectionIntro";

const Problem: React.FC = () => {
  return (
    <div>
      <section>
        <SectionIntro text="But there is a problem..." />
      </section>
      <section className="flex flex-col items-center justify-center xs:px-4 px-8 gap-7">
        <p className="text-center md:text-3xl text-2xl xs:text-sm">
          In today&apos;s{" "}
          <span className={"text-amber-200 font-bold"}>competitive market</span>
          ,{" "}
          <span className={"text-red-500 font-bold"}>
            an underwhelming online presence{" "}
          </span>
          can be a business&apos;s downfall.
        </p>

        <p className="text-center md:text-3xl text-2xl xs:text-sm">
          Without a{" "}
          <span className={"text-amber-200 font-bold"}>highly converting</span>{" "}
          landing page, potential customers slip through the cracks, and{" "}
          <span className={"text-red-500 font-bold"}>
            revenue opportunities are missed.
          </span>
        </p>
        <p className="text-center text-2xl xs:text-sm md:text-3xl">
          A compelling landing page is not just a luxury;{" "}
          <span className={"text-red-500 font-bold"}>
            it&apos;s a necessity for sustained growth.
          </span>
        </p>
      </section>
    </div>
  );
};
export default Problem;
