import { motion } from "framer-motion";
import totalPlayers from "../assets/total-players.png";
import tokenLocked from "../assets/token-locked.png";
import timer from "../assets/timer.png";
import leaderboard from "../assets/leaderboard.png";
import ReadyToPlayCard from "../components/ReadyToPlayCard";

const ready = [
  {
    image: totalPlayers,
    title: "Total Players",
    desc: "See how many are competing for the pot.",
  },
  {
    image: tokenLocked,
    title: "Token Locked",
    desc: "The total tokens in the prize pot along with its USD value.",
  },
  {
    image: timer,
    title: "Countdown Timer",
    desc: "Watch the timer tick down to the next prize payout",
  },
  {
    image: leaderboard,
    title: "Live Leaderboard",
    desc: "View the top players by total tokens contributed.",
  },
];

const ReadyToPlay = () => {
  return (
    <motion.section
      id="readytoplay"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="myContainer pt-[88px] pb-[74px] px-4 lg:px-0"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="font-bold text-[36px] text-Light-Gray mb-[20px] text-center"
      >
        Ready to Play?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mb-[75px] text-Light-Gray-1 text-[18px] text-center"
      >
        Connect your MetaMask wallet to dive into the game instantly. The
        intuitive UI provides real-time stats so you can keep track of the
        competition.
      </motion.p>

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
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[24px]"
      >
        {ready.map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <ReadyToPlayCard
              cardImage={item.image}
              title={item.title}
              description={item.desc}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default ReadyToPlay;
