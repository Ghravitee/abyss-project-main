import Modal from "@/components/Modal";
import { useAuth } from "@/lib/AuthContext";
import { motion } from "framer-motion";

const Cta = () => {
  const { isModalOpen, setIsModalOpen } = useAuth();
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="myContainer mb-[80px] border border-cta-Background rounded-[12px] px-[30px] py-[20px] md:px-[60px]"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center md:text-left"
          >
            <h2 className="font-raleway font-semibold text-[24px] text-Light-Gray mb-[12px]">
              The abyss awaits — dare to take the plunge?
            </h2>
            <p className="text-[18px] text-Light-Gray-1 max-w-[35rem]">
              AbyssPot creates a dynamic, blockchain-powered environment where
              every bid could be game-changing. Backed by a fair and transparent
              tokenomics model, $ABYSS supports liquidity, growth, and the team
              behind this groundbreaking project.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-[1rem] font-semibold rounded-[40px] px-[40px] py-[13px] mx-auto lg:mx-0 w-fit hidden lg:flex items-center justify-center text-white bg-Purple cursor-pointer"
            >
              Get Started
            </button>
          </motion.div>
        </motion.div>
      </motion.section>

      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default Cta;
