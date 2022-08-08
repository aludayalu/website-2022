import { motion } from "framer-motion";

export default function HeadingWithIllustration({
  title,
  illustration = "/resources-illustration-1.png",
}) {
  return (
    <div className="my-12 flex justify-between items-center">
      <h2 className="text-3xl font-semibold md:text-4xl text-accent">
        {title}
      </h2>
      <motion.img
        viewport={{ once: true }}
        initial={{ transform: "translate(600px, 0px)" }}
        whileInView={{ transform: "translate(0px, 0px)" }}
        // whileInView={{ x: 0 }}
        transition={{ duration: 0.5 }}
        src={illustration}
        alt="Illustration"
        className="absolute right-0 w-[70%] sm:w-[60%] lg:w-[50%]"
      />
    </div>
  );
}
