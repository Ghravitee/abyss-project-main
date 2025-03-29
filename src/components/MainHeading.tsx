import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

type MainHeadingProps = {
  addon?: string;
};

const MainHeading = ({ addon }: MainHeadingProps) => {
  return (
    <motion.h1
      className={twMerge(
        "text-[48px] md:text-[64px] lg:text-[96px] font-black font-raleway mb-[20px] md:mb-[30px]",
        addon
      )}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <span className="text-Purple">Abyss</span>
      <span className="text-Light-Gray">Pot</span>
    </motion.h1>
  );
};

export default MainHeading;
