"use client";

import { motion } from "framer-motion";
import SectionIntro from "../SectionIntro";

const Agitation: React.FC = () => {
  return (
    <div>
      <section>
        <SectionIntro text="Wait, it gets worse..." />
      </section>
      <section className="flex flex-col items-center justify-center xs:px-4 px-8 gap-7">
        <p className="text-center md:text-3xl text-2xl xs:text-sm">
          Are you tired of the frustrating cycle of inconsistency, where a
          feeble online presence makes a steady stream of customers seem like an
          elusive dream?
        </p>
        <p className="text-center md:text-3xl text-2xl xs:text-sm">
          Have you poured money into advertising only to witness lackluster
          results and wonder if there&apos;s a better way?
        </p>
        <p className="text-center md:text-3xl text-2xl xs:text-sm">
          Perhaps you find yourself stuck with a landing page that mirrors
          countless others, relegating your unique offerings to the status of a
          commodity, perpetually competing on price.
        </p>
      </section>
      <section className="flex flex-col items-center justify-center xs:px-4 px-8 gap-7">
        <p className="text-center md:text-3xl text-2xl xs:text-sm">
          Competitors may promise simplicity, but it can't address the
          exhaustion that comes from low or non-existent profit margins. The
          reality is, relying on a template-based platform may have you sharing
          the same digital space as your competitors, blurring your brand's
          identity and making it difficult to charge what your unique offerings
          are truly worth.
        </p>
      </section>
      <section className="flex flex-col items-center justify-center xs:px-4 px-8 gap-7">
        <p className="text-center text-2xl xs:text-sm md:text-3xl">
          Are you tired of being stuck in the price-driven rat race, unable to
          command the value your products or services genuinely deserve? If your
          goal is to charge more for your offer and elevate your brand above the
          sea of mediocrity, a tailored solution is not just a luxury—it's a
          necessity.
        </p>
      </section>
    </div>
  );
};
export default Agitation;
