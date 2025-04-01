import { JSX, useState } from "react";
import { motion } from "framer-motion";

type StatsCardProps = {
  cardImage: string;
  title: string;
  description: string | number | bigint | JSX.Element | undefined;
  tooltipInfo?: string; // Tooltip content
  loading?: boolean;
};

const StatsCard = ({
  cardImage,
  title,
  description,
  tooltipInfo,
  loading,
}: StatsCardProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      className="relative bg-HowTo-Cards-Background border border-HowTo-Cards-border rounded-[20px] p-5 flex flex-col items-center w-full max-w-sm mx-auto"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <img src={cardImage} alt={title} className="mb-[24px] size-auto" />
      <h3 className="mb-[10px] font-bold text-[20px] text-Light-Gray text-center">
        {title}
      </h3>
      <p className="text-Purple text-center font-bold text-[48px] font-raleway">
        {loading ? (
          <span className="h-5 w-20 bg-gray-600 rounded-md animate-pulse inline-block"></span>
        ) : (
          description
        )}
      </p>

      {/* Tooltip */}
      {showTooltip && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute bottom-full mb-3 px-4 py-2 rounded-lg bg-Dark-Purple text-Light-Gray text-sm w-[250px] text-center shadow-lg border border-HowTo-Cards-border"
        >
          {tooltipInfo}
        </motion.div>
      )}
    </motion.div>
  );
};

export default StatsCard;
