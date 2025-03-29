import { motion } from "framer-motion";
import CountdownTimer from "@/components/CountdownTimer";
import StatsCard from "@/components/StatsCard";
import { statsCards } from "../constants/statscards";
import {
  pureCurrentRound,
  pureCurrentRoundBidCount,
  purePlayerCount,
  purePotValue,
  purePotValueInUSD,
  purePrizeThreshold,
  pureTimeRemaining,
} from "@/web3/readContracts";
import { divideFunct } from "@/web3/formatters";
import chip from "../assets/chip.png";

type DappStatisticsProps = {
  isLoadingTotalBidCount: boolean;
  getTotalBidCount: bigint | undefined;
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
  getTimeRemaining: number | bigint | undefined;
  isLoadingGetCurrentRound: boolean;
  getCurrentRound: number | bigint | undefined;
  gameActive: boolean | undefined;
  isLoadingGameActive: boolean;
};

const DappStatistics = ({
  isLoadingTotalBidCount,
  getTotalBidCount,
  isConnected,
  isLoadingPlayerCount,
  getPlayerCount,
  isLoadingPotValue,
  getPotValue,
  isLoadingPotValueInUSD,
  getPotValueInUSD,
  isLoadingPrizeThreshold,
  prizeThreshold,
  decimals,
  getTimeRemaining,
  isLoadingGetCurrentRound,
  getCurrentRound,
  isLoadingGameActive,
  gameActive,
}: DappStatisticsProps) => {
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
              isLoadingPlayerCount
                ? "Loading..."
                : isConnected
                ? getPlayerCount
                : purePlayerCount
            }
          />
          <StatsCard
            cardImage={statsCards[4].cardImage}
            title="Pot Value (ABYSS)"
            description={
              isLoadingPotValue
                ? "Loading..."
                : isConnected
                ? (
                    Number(getPotValue) /
                    10 ** (decimals ? Number(decimals) : 18)
                  ).toLocaleString()
                : (
                    Number(purePotValue) /
                    10 ** (decimals ? Number(decimals) : 18)
                  ).toLocaleString()
            }
          />
          <StatsCard
            cardImage={statsCards[5].cardImage}
            title="Tokens Burnt (ABYSS)"
            description={
              isLoadingPotValue
                ? "Loading..."
                : isConnected
                ? Math.round(
                    divideFunct(
                      5,
                      Number(getPotValue) /
                        10 ** (decimals ? Number(decimals) : 18)
                    )
                  ).toLocaleString()
                : Math.round(
                    divideFunct(
                      5,
                      Number(purePotValue) /
                        10 ** (decimals ? Number(decimals) : 18)
                    )
                  ).toLocaleString()
            }
          />
        </motion.div>
        {/* Countdown Timer */}
        <div className="flex flex-col gap-y-6">
          <div className="bg-Purple p-[20px] rounded-[18px]">
            <div className="flex flex-col justify-center items-center gap-2">
              <img src={chip} className="size-[25px]" />
              <p className="text-[20px] font-bold">
                {isLoadingGetCurrentRound || isLoadingGameActive
                  ? "Fetching..."
                  : gameActive
                  ? `Round ${getCurrentRound}`
                  : `Round ${pureCurrentRound}`}
              </p>
            </div>
          </div>
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
          <StatsCard
            cardImage={statsCards[3].cardImage}
            title="Prize Threshold (USD)"
            description={
              isLoadingPrizeThreshold
                ? "Loading..."
                : isConnected
                ? `$${(
                    Number(prizeThreshold) /
                    10 ** (decimals ? Number(decimals) : 18)
                  ).toLocaleString()}`
                : `$${(
                    Number(purePrizeThreshold) /
                    10 ** (decimals ? Number(decimals) : 18)
                  ).toLocaleString()}`
            }
          />
          <StatsCard
            cardImage={statsCards[1].cardImage}
            title="Pot Value (USD)"
            description={
              isLoadingPotValueInUSD
                ? "Loading..."
                : isConnected
                ? `$${(
                    Number(getPotValueInUSD) /
                    10 ** (decimals ? Number(decimals) : 18)
                  ).toLocaleString()}`
                : `$${(
                    Number(purePotValueInUSD) /
                    10 ** (decimals ? Number(decimals) : 18)
                  ).toLocaleString()}`
            }
          />
          <StatsCard
            cardImage={statsCards[0].cardImage}
            title="Bids Count"
            description={
              isLoadingTotalBidCount
                ? "Loading..."
                : isConnected
                ? Number(getTotalBidCount?.toLocaleString())
                : Number(pureCurrentRoundBidCount?.toLocaleString())
            }
          />
        </motion.div>
      </div>
    </section>
  );
};

export default DappStatistics;
