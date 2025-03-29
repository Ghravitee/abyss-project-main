import { motion } from "framer-motion";

type StatBoxProps = {
  title: string;
  value: string;
};

const StatBox = ({ title, value }: StatBoxProps) => (
  <motion.div
    className="border border-Purple p-4 rounded-lg flex flex-col items-start text-center sm:text-left"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <h2 className="text-lg md:text-xl font-bold">{title}</h2>
    <p className="text-Purple text-3xl md:text-4xl font-raleway font-bold">
      {value}
    </p>
  </motion.div>
);

export default StatBox;
