import { motion } from "framer-motion";

interface ReadyToPlayProps {
  cardImage: string;
  title: string;
  description: string;
}

const ReadyToPlayCard = ({
  cardImage,
  title,
  description,
}: ReadyToPlayProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      className="bg-HowTo-Cards-Background border border-HowTo-Cards-Background rounded-[20px] p-6 flex flex-col items-center lg:items-start shadow-lg w-full max-w-sm mx-auto"
    >
      <img
        src={cardImage}
        alt=""
        className="mb-[24px] w-16 h-16 object-contain"
      />
      <h3 className="mb-[12px] font-raleway font-semibold text-[20px] text-Light-Gray text-center lg:text-left">
        {title}
      </h3>
      <p className="text-Light-Gray-1 text-center lg:text-left">
        {description}
      </p>
    </motion.div>
  );
};

export default ReadyToPlayCard;
