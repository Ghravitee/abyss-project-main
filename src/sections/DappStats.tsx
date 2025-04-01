import { motion } from "framer-motion";
import CountdownTimer from "@/components/CountdownTimer";
import StatsCard from "@/components/StatsCard";
import { statsCards } from "../constants/statscards";
import {
  pureCurrentRound,
  pureCurrentRoundBidCount,
  pureDecimals,
  purePlayerCount,
  purePotValue,
  purePotValueInUSD,
  purePrizeThreshold,
  pureTimeRemaining,
} from "@/web3/readContracts";
import { divideFunct } from "@/web3/formatters";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import { useState } from "react";

type DappStatisticsProps = {
  isLoadingCurrentRoundBidCount: boolean;
  getCurrentRoundBidCount: bigint | undefined;
  isConnected: boolean;
  isLoadingPlayerCount: boolean;
  getPlayerCount: bigint | number | undefined;
  isLoadingPotValue: boolean;
  getPotValue: number | bigint | undefined;
  isLoadingPotValueInUSD: boolean;
  getPotValueInUSD: number | bigint | undefined;
  isLoadingPrizeThreshold: boolean;
  prizeThreshold: bigint | undefined;
  decimals: number | undefined;
  isLoadingDecimals: boolean;
  getTimeRemaining: number | bigint | undefined;
  isLoadingGetCurrentRound: boolean;
  getCurrentRound: number | bigint | undefined;
  gameActive: boolean | undefined;
  isLoadingGameActive: boolean;
};

const DappStatistics = ({
  isLoadingCurrentRoundBidCount,
  getCurrentRoundBidCount,
  isConnected,
  isLoadingPlayerCount,
  getPlayerCount,
  isLoadingPotValue,
  getPotValue,
  // isLoadingPotValueInUSD,
  getPotValueInUSD,
  isLoadingPrizeThreshold,
  prizeThreshold,
  decimals,
  isLoadingDecimals,
  getTimeRemaining,
  isLoadingGetCurrentRound,
  getCurrentRound,
  isLoadingGameActive,
  gameActive,
}: DappStatisticsProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <section id="statistics" className="pt-[88px] lg:pt-[5px]">
      <div className="grid grid-cols-1 lg:grid-cols-[.3fr_.4fr_.3fr] mt-8 gap-5 items-center px-4 h-fit max-w-[1300px] mx-auto">
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
            description={
              isLoadingPlayerCount ? (
                <span className="h-5 w-20 bg-gray-600 rounded-md animate-pulse inline-block"></span>
              ) : isConnected ? (
                getPlayerCount
              ) : (
                purePlayerCount
              )
            }
            loading={isLoadingPlayerCount}
            tooltipInfo="Total number of players participating in the game."
          />
          {/* <StatsCard
            cardImage={statsCards[4].cardImage}
            title="Current Pot Value ($abyss) /(USD)"
            description={
              isLoadingPotValue && isLoadingPotValueInUSD && isLoadingDecimals ? (
                <span className="h-5 w-24 bg-gray-600 rounded-md animate-pulse inline-block"></span>
              ) : isConnected ? (
                `${Math.round(
                  Number(getPotValue) /
                  10 ** (decimals ? Number(decimals) : 18)
                ).toLocaleString()} | $${Math.round(
                  Number(getPotValueInUSD) /
                  10 ** (decimals ? Number(decimals) : 18)
                ).toLocaleString()}`
              ) : (
                `${Math.round(
                  Number(purePotValue) /
                  10 ** (pureDecimals ? Number(pureDecimals) : 18)
                ).toLocaleString()} | $${Math.round(
                  Number(purePotValueInUSD) /
                  10 ** (pureDecimals ? Number(pureDecimals) : 18)
                ).toLocaleString()}`
              )
            }
            loading={isLoadingPotValue}
            tooltipInfo="This represents the monetary value of the pot in U.S. dollars."
          /> */}

          <StatsCard
            cardImage={statsCards[4].cardImage}
            title="Current Pot Value (ABYSS / USD)"
            description={
              isLoadingPotValue ? (
                <span className="h-5 w-24 bg-gray-600 rounded-md animate-pulse inline-block"></span>
              ) : isConnected ? (
                `${(
                  Number(getPotValue) /
                  10 ** (decimals ? Number(decimals) : 18)
                ).toLocaleString()} ($${(
                  Number(getPotValueInUSD) /
                  10 ** (decimals ? Number(decimals) : 18)
                ).toLocaleString()})`
              ) : (
                `${(
                  Number(purePotValue) /
                  10 ** (decimals ? Number(decimals) : 18)
                ).toLocaleString()} ($${(
                  Number(purePotValueInUSD) /
                  10 ** (decimals ? Number(decimals) : 18)
                ).toLocaleString()})`
              )
            }
            loading={isLoadingPotValue}
            tooltipInfo="This represents the monetary value of the pot in both ABYSS and U.S. dollars."
          />

          <StatsCard
            cardImage={statsCards[5].cardImage}
            title="Tokens Burnt (ABYSS | USD)"
            description={
              isLoadingPotValue &&
              isLoadingPotValueInUSD &&
              isLoadingDecimals ? (
                <span className="h-5 w-24 bg-gray-600 rounded-md animate-pulse inline-block"></span>
              ) : isConnected ? (
                `${Math.round(
                  divideFunct(
                    5,
                    Number(getPotValue) /
                      10 ** (decimals ? Number(decimals) : 18)
                  )
                ).toLocaleString()} | $${Math.round(
                  divideFunct(
                    5,
                    Number(getPotValueInUSD) /
                      10 ** (decimals ? Number(decimals) : 18)
                  )
                ).toLocaleString()}`
              ) : (
                `${Math.round(
                  divideFunct(
                    5,
                    Number(purePotValue) /
                      10 ** (pureDecimals ? Number(pureDecimals) : 18)
                  )
                ).toLocaleString()} | $${Math.round(
                  divideFunct(
                    5,
                    Number(purePotValueInUSD) /
                      10 ** (pureDecimals ? Number(pureDecimals) : 18)
                  )
                ).toLocaleString()}`
              )
            }
            loading={isLoadingPotValue}
            tooltipInfo="This metric shows how many Abyss tokens have been permanently removed from circulation (i.e., “burnt”)."
          />
        </motion.div>
        {/* Countdown Timer */}
        <div className="flex flex-col gap-y-6">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            <CountdownTimer
              getTimeRemaining={
                isConnected ? getTimeRemaining : pureTimeRemaining
              }
              isLoadingTimeRemaining={false}
            />
          </motion.div>
        </div>

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
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="relative bg-HowTo-Cards-Background border border-HowTo-Cards-border rounded-[20px] p-5 flex flex-col items-center w-full max-w-sm mx-auto"
          >
            <div className="flex flex-col justify-center items-center gap-2">
              <HiArrowPathRoundedSquare className="mb-[24px] text-white text-2xl font-bold" />
              <h3 className="mb-[10px] font-bold text-[20px] text-Light-Gray text-center">
                Round
              </h3>
              <p className="text-Purple text-center font-bold text-[48px] font-raleway">
                {isLoadingGetCurrentRound || isLoadingGameActive ? (
                  <span className="h-5 w-24 bg-gray-600 rounded-md animate-pulse inline-block"></span>
                ) : gameActive ? (
                  `${getCurrentRound}`
                ) : (
                  `${pureCurrentRound}`
                )}
              </p>
            </div>

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
            description={
              isLoadingPrizeThreshold && isLoadingDecimals ? (
                <span className="h-5 w-24 bg-gray-600 rounded-md animate-pulse inline-block"></span>
              ) : isConnected ? (
                `$${(
                  Number(prizeThreshold) /
                  10 ** (decimals ? Number(decimals) : 18)
                ).toLocaleString()}`
              ) : (
                `$${(
                  Number(purePrizeThreshold) /
                  10 ** (pureDecimals ? Number(pureDecimals) : 18)
                ).toLocaleString()}`
              )
            }
            loading={isLoadingPrizeThreshold}
            tooltipInfo="This is the minimum prize value, expressed in USD, that must be reached before the 70%/30% split to occure"
          />

          <StatsCard
            cardImage={statsCards[0].cardImage}
            title="Bids Count"
            description={
              isLoadingCurrentRoundBidCount ? (
                <span className="h-5 w-24 bg-gray-600 rounded-md animate-pulse inline-block"></span>
              ) : isConnected ? (
                Number(getCurrentRoundBidCount?.toLocaleString())
              ) : (
                Number(pureCurrentRoundBidCount?.toLocaleString())
              )
            }
            loading={isLoadingTotalBidCount}
            tooltipInfo="This indicates the total number of bids that have been placed."
          />
        </motion.div>
      </div>
    </section>
  );
};

export default DappStatistics;
