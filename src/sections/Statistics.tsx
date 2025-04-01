import { motion } from "framer-motion";
import CountdownTimer from "@/components/CountdownTimer";
import StatsCard from "@/components/StatsCard";
import { statsCards } from "../constants/statscards";
import {
  pureTotalBidCount,
  totalPlayersCount,
  pureOverallTokensBidded,
  // pureOverallUSDBidded,
  pureBurntTokens,
  purePrizeThreshold,
  pureTimeRemaining,
  pureCurrentRound,
  pureBurntTokensUSDValue,
} from "@/web3/readContracts";

<<<<<<< HEAD
type StatisticsProps = {};

const Statistics = ({ }: StatisticsProps) => {
=======
const Statistics = () => {
>>>>>>> dan-branch
  if (totalPlayersCount === 0) return null;
  return (
    <section id="statistics" className="pt-[88px]">
      <motion.h2
        className="font-bold text-[24px] md:text-[30px] lg:text-[36px] text-Light-Gray mb-[20px] text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
      >
        Overall Statistics
      </motion.h2>
      <div className="grid grid-cols-1 lg:grid-cols-[.3fr_.4fr_.3fr] mt-8 gap-5 items-center px-4">
        {/* Left Stats Section */}
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <StatsCard
            cardImage={statsCards[2].cardImage}
            title="Players Count"
            description={totalPlayersCount}
            tooltipInfo="This indicates the number of active participants in the Abyss Pot event or game. "
          />
          <StatsCard
            cardImage={statsCards[4].cardImage}
            title="Total Pot Value (ABYSS | USD)"
            description={`${Math.round(Number(pureOverallTokensBidded.toLocaleString(undefined, {
              minimumFractionDigits: 4,
              maximumFractionDigits: 4,
<<<<<<< HEAD
            })))} | $${(pureOverallUSDBidded.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }))}`}
=======
            })}
            tooltipInfo="Total amount of ABYSS tokens bid on the pot."
>>>>>>> dan-branch
          />
          <StatsCard
            cardImage={statsCards[5].cardImage}
            title="Total Tokens Burnt (ABYSS | USD)"
            description={`${Math.round(Number(pureBurntTokens.toLocaleString(undefined, {
              minimumFractionDigits: 4,
              maximumFractionDigits: 4,
<<<<<<< HEAD
            })))} | $${(pureBurntTokensUSDValue).toLocaleString(undefined, {
              minimumFractionDigits: 4,
              maximumFractionDigits: 4,
            })}`}
=======
            })}
            tooltipInfo="This metric shows how many Abyss tokens have been permanently removed from circulation (i.e., “burnt”). 
"
>>>>>>> dan-branch
          />
        </motion.div>
        {/* Countdown Timer */}
        <motion.div
          className="flex justify-center flex-col gap-y-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          <CountdownTimer
            getTimeRemaining={pureTimeRemaining}
            isLoadingTimeRemaining={false}
          />
        </motion.div>
        {/* Right Stats Section */}
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <StatsCard
            cardImage={statsCards[0].cardImage}
            title="Current Round"
            description={Number(pureCurrentRound?.toLocaleString())}
          />
          <StatsCard
            cardImage={statsCards[3].cardImage}
            title="Prize Threshold (USD)"
            description={`$${(
              Number(purePrizeThreshold) /
              10 ** 18
            ).toLocaleString()}`}
            tooltipInfo="This is the minimum prize value, expressed in USD, that must be reached before the 70%/30% split to occure 
"
          />
          {/* <StatsCard
            cardImage={statsCards[1].cardImage}
            title="Total Pot Value (USD)"
            description={`$${(pureOverallUSDBidded.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }))}`}
          /> */}
          <StatsCard
            cardImage={statsCards[0].cardImage}
            title="Bids Count"
            description={Number(pureTotalBidCount?.toLocaleString())}
            tooltipInfo="Total number of bids made on the pot."
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;
