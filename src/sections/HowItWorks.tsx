import { motion } from "framer-motion";
import HowItWorksCard from "../components/HowItWorksCard";

const HowItWorks = () => {
  return (
    <motion.section
      id="howitworks"
      className="max-w-[1300px] mx-auto pb-[80px] px-4 lg:px-0"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div>
        {/* Animated Title */}
        <motion.h2
          className="font-bold text-[24px] md:text-[30px] lg:text-[36px] text-Light-Gray mb-[20px] text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          How it Works
        </motion.h2>
        <motion.p
          className="text-[18px] font-normal text-Light-Gray-1 text-center mb-[66px] max-w-[800px] mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          AbyssPot is an innovative bidding game that combines competitive
          excitement with blockchain technology in a unique Gaming dApp. Players
          place bids of 100 $ABYSS tokens, each bid resetting a countdown timer
          and increasing the stakes.
        </motion.p>

        {/* Animated Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[26px]">
          {[
            {
              title: "Fixed Bid",
              description:
                "Every bid costs 100 $ABYSS. No guesswork – just a straightforward entry fee.",
            },
            {
              title: "Token Burn",
              description:
                "With each bid, 5% of your tokens vanish forever, making every $ABYSS token rarer.",
            },
            {
              title: "Growing Prize Pot",
              description:
                "The remaining 95% is funneled into the prize pot, increasing your potential winnings with every play.",
            },
          ].map((card, index) => (
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
              <HowItWorksCard
                title={card.title}
                description={card.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default HowItWorks;
