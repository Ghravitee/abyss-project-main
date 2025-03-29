import { motion } from "framer-motion";
import abyssPot from "../assets/abyss-pot-1.png";
import emptyPot from "../assets/empty-pot.png";
import filledPot from "../assets/filled-pot.png";
import HowToWinCard from "../components/HowToWinCard";
import { useAuth } from "@/lib/AuthContext";
import Modal from "@/components/Modal";

const HowToWin = [
  {
    image: emptyPot,
    title: "Under $15,000 Pot",
    desc: "If the pot is below $15,000, the last player to bid when the timer runs out takes the entire prize.",
  },
  {
    image: filledPot,
    title: "Above $15,000 Pot",
    desc: "Once the pot reaches $15,000, the game shifts:",
    addon1: "30% goes to the last bidder.",
    addon2: "70% is split among nine random participants from the game.",
  },
];

const HowTowin = () => {
  const { isModalOpen, setIsModalOpen } = useAuth();
  return (
    <>
      <motion.section
        id="howtowin"
        className="max-w-[1300px] mx-auto pt-[200px] md:pt-[80px] px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[.6fr_.4fr]">
          {/* First Column - Text & Button */}
          <motion.div
            className="relative flex flex-col  mx-auto lg:mx-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="font-bold text-[30px] md:text-[36px] text-Light-Gray mb-[18px] text-center lg:text-left">
              How to Win
            </h2>
            <p className="text-[18px] text-Light-Gray-1 mb-[40px] text-center lg:text-left max-w-[25rem]">
              Your timing is key — bid at the perfect moment and you could walk
              away with a massive prize!
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-[1rem] font-semibold rounded-[40px] px-[40px] py-[13px] mx-auto lg:mx-0 w-fit hidden lg:flex items-center justify-center text-white bg-Purple cursor-pointer"
            >
              Get Started
            </button>
            {/* Responsive Image */}
            <motion.img
              src={abyssPot}
              className="absolute lg:-right-[20rem] lg:top-0 -top-[12rem] right-0 left-0 mx-auto size-50 lg:size-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </motion.div>

          {/* Second Column - Cards */}
          <div className="flex flex-col items-start gap-[23px] max-w-[50rem] mx-auto">
            {HowToWin.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: 0.2 * index,
                }}
                viewport={{ once: true }}
              >
                <HowToWinCard
                  cardImage={item.image}
                  title={item.title}
                  description={item.desc}
                  list1={item.addon1}
                  list2={item.addon2}
                />
              </motion.div>
            ))}
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-[1rem] font-semibold rounded-[40px] px-[40px] py-[13px] mx-auto mt-6 lg:mx-0 w-fit lg:hidden flex items-center justify-center text-white bg-Purple cursor-pointer"
          >
            Get Started
          </button>
        </div>
      </motion.section>
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default HowTowin;
