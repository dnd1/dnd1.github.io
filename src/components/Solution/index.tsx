import SectionIntro from "../SectionIntro";

const Solution: React.FC = () => {
  return (
    <section className="text-green-500 flex flex-col items-center justify-center xs:px-4 px-8 gap-7">
      <SectionIntro text="Our solution" />
      <p className="text-center text-2xl xs:text-sm md:text-3xl font-thin">
        Our approach is a departure from the generic. We understand the
        frustrations you face, and we have the expertise to break the cycle.
      </p>
      <p className="text-green-500 text-center text-2xl xs:text-sm md:text-3xl font-thin">
        Our team doesn&apos;t just create landing pages; we craft digital
        experiences that tell your brand&apos;s story, captivate your audience,
        and ultimately drive conversions.
      </p>
    </section>
  );
};

export default Solution;
