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
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import { useState } from "react";

const Statistics = () => {
  const [showTooltip, setShowTooltip] = useState(false);
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
            tooltipInfo="This indicates the number of active participants in the Abyss Pot event or game. 
"
          />
          <StatsCard
            cardImage={statsCards[4].cardImage}
            title="Total Pot Value (ABYSS | USD)"
            description={`${Number(pureOverallTokensBidded).toLocaleString(
              undefined,
              {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }
            )} | $${Number(pureOverallUSDBidded).toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`}
            tooltipInfo="This represents the monetary value of the pot in U.S. dollars."
          />

          <StatsCard
            cardImage={statsCards[5].cardImage}
            title="Total Tokens Burnt (ABYSS | USD)"
            description={`${Math.round(
              Number(
                pureBurntTokens.toLocaleString(undefined, {
                  minimumFractionDigits: 4,
                  maximumFractionDigits: 4,
                })
              )
            )} | $${pureBurntTokensUSDValue.toLocaleString(undefined, {
              minimumFractionDigits: 4,
              maximumFractionDigits: 4,
            })}`}
            tooltipInfo="This metric shows how many Abyss tokens have been permanently removed from circulation (i.e., “burnt”). 
"
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="relative bg-HowTo-Cards-Background border border-HowTo-Cards-border rounded-[20px] p-5 flex flex-col items-center w-full max-w-sm mx-auto"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <HiArrowPathRoundedSquare className="mb-[24px] size-auto" />

            <h3 className="mb-[10px] font-bold text-[20px] text-Light-Gray text-center">
              Round
            </h3>
            <p className="text-Purple text-center font-bold text-[48px] font-raleway">
              {Number(pureCurrentRound?.toLocaleString())}
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
                This is the current round
              </motion.div>
            )}
          </motion.div>

          <StatsCard
            cardImage={statsCards[3].cardImage}
            title="Prize Threshold (USD)"
            description={`$${(
              Number(purePrizeThreshold) /
              10 ** 18
            ).toLocaleString()}`}
            tooltipInfo="This is the minimum prize value expressed in USD, that must be reached before the 70/30% split occurs."
          />

          <StatsCard
            cardImage={statsCards[0].cardImage}
            title="Bids Count"
            description={Number(pureTotalBidCount?.toLocaleString())}
            tooltipInfo="This indicates the total number of bids that have been placed."
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;
