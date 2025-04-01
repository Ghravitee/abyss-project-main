import { motion } from "framer-motion";
import CountdownTimer from "@/components/CountdownTimer";
import StatsCard from "@/components/StatsCard";
import { statsCards } from "../constants/statscards";
import {
  pureTotalBidCount,
  totalPlayersCount,
  pureOverallTokensBidded,
  pureOverallUSDBidded,
  pureBurntTokens,
  purePrizeThreshold,
  pureTimeRemaining,
  pureCurrentRound,
  pureBurntTokensUSDValue,
} from "@/web3/readContracts";

type StatisticsProps = {};

const Statistics = ({ }: StatisticsProps) => {
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
            title="Total Players"
            description={totalPlayersCount}
          />
          <StatsCard
            cardImage={statsCards[4].cardImage}
            title="Total Pot Value (ABYSS | USD)"
            description={`${Math.round(Number(pureOverallTokensBidded.toLocaleString(undefined, {
              minimumFractionDigits: 4,
              maximumFractionDigits: 4,
            })))} | $${(pureOverallUSDBidded.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }))}`}
          />
          <StatsCard
            cardImage={statsCards[5].cardImage}
            title="Total Tokens Burnt (ABYSS | USD)"
            description={`${Math.round(Number(pureBurntTokens.toLocaleString(undefined, {
              minimumFractionDigits: 4,
              maximumFractionDigits: 4,
            })))} | $${(pureBurntTokensUSDValue).toLocaleString(undefined, {
              minimumFractionDigits: 4,
              maximumFractionDigits: 4,
            })}`}
          />
        </motion.div>
        {/* Countdown Timer */}
        <motion.div
          className="flex justify-center flex-col gap-y-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          <StatsCard
            cardImage={statsCards[0].cardImage}
            title="Current Round"
            description={Number(pureCurrentRound?.toLocaleString())}
          />
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
            cardImage={statsCards[3].cardImage}
            title="Prize Threshold (USD)"
            description={`$${(
              Number(purePrizeThreshold) /
              10 ** 18
            ).toLocaleString()}`}
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
            title=" Total Bids"
            description={Number(pureTotalBidCount?.toLocaleString())}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;
