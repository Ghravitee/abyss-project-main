import { motion } from "framer-motion";
import coin1 from "../assets/coin-1.png";
import coin2 from "../assets/coin-2.png";

import MainHeading from "@/components/MainHeading";
import { useAuth } from "@/lib/AuthContext";
import Modal from "@/components/Modal";

const Hero = () => {
  const { isModalOpen, setIsModalOpen } = useAuth();
  return (
    <>
      <section id="home" className="relative overflow-hidden pb-[80px]">
        {/* Blurred Background Glow */}
        <div className="lg:size-[14rem] rounded-full bg-[#A510D6] absolute top-[200px] left-0 right-0 mx-auto blur-[150px]"></div>

        <div className="myContainer pt-[88px] text-center px-6">
          {/* Animated Title */}
          <MainHeading />

          {/* Subtitle */}
          <motion.h2
            className="font-bold text-[24px] md:text-[32px] lg:text-[36px] text-Light-Gray mb-[20px] md:mb-[30px]"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Where Timing Is Everything
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-Light-Gray-1 text-[16px] md:text-[18px] mb-[30px] md:mb-[50px] max-w-[90%] md:max-w-[50rem] mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            Welcome to Abyss Pot – the ultimate crypto game of nerve, strategy,
            and timing. With every bid, you’re not just playing a game; you’re
            part of an evolving challenge where every move counts and every
            token makes a difference.
          </motion.p>

          {/* Animated Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-[1rem] font-semibold rounded-[40px] px-[40px] py-[16px] mx-auto w-fit flex items-center justify-center text-white bg-Purple cursor-pointer"
            >
              Get Started
            </button>
          </motion.div>
        </div>

        {/* Floating Coins Animation */}
        <motion.img
          src={coin1}
          className="absolute top-[80px] left-[20px]  sm:left-[30px] md:left-[50px] w-[80px] sm:size-[10rem] md:size-[12rem] lg:size-auto"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />
        <motion.img
          src={coin2}
          className="absolute top-[80px] right-[20px] sm:right-[30px] md:right-[50px] w-[80px] sm:size-[10rem] md:size-[12rem] lg:size-auto"
          animate={{ y: [0, -10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </section>
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default Hero;
