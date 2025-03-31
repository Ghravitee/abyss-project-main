import { JSX } from "react";
import { motion } from "framer-motion";

type StatsCardProps = {
  cardImage: string;
  title: string;
  description: string | number | bigint | JSX.Element;
  loading?: boolean;
};

const StatsCard = ({
  cardImage,
  title,
  description,
  loading,
}: StatsCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      className="bg-HowTo-Cards-Background border border-HowTo-Cards-Background rounded-[20px] p-5 flex flex-col items-center w-full max-w-sm mx-auto"
    >
      <img src={cardImage} alt="" className="mb-[24px] size-auto" />
      <h3 className="mb-[10px] font-bold text-[20px] text-white text-center">
        {title}
      </h3>
      <p className="text-Purple text-center font-bold text-[48px] font-raleway">
        {loading ? (
          <span className="h-5 w-20 bg-gray-600 rounded-md animate-pulse inline-block"></span>
        ) : (
          description
        )}
      </p>
    </motion.div>
  );
};

export default StatsCard;
