import { motion } from "framer-motion";
import CountdownTimer from "@/components/CountdownTimer";
import StatsCard from "@/components/StatsCard";
import { statsCards } from "../constants/statscards";

type StatisticsProps = {
  isLoadingTotalBidCount: boolean;
  getTotalBidCount: bigint | undefined;
  isLoadingPrizeThreshold: boolean;
  prizeThreshold: bigint | undefined;
  isLoadingGetAbyssUSDPrice: boolean;
  getAbyssUSDPrice: bigint | undefined;
  decimals: number | undefined;
};

const HomePageStatistics = ({
  isLoadingTotalBidCount,
  getTotalBidCount,
  isLoadingPrizeThreshold,
  prizeThreshold,
  isLoadingGetAbyssUSDPrice,
  getAbyssUSDPrice,
  decimals,
}: StatisticsProps) => {
  return (
    <section id="statistics pt-[88px]">
      <div className="grid grid-cols-1 lg:grid-cols-[.3fr_.4fr_.3fr] mt-8 gap-5 items-center px-4">
        {/* Left Stats Section */}
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <StatsCard
            cardImage={statsCards[0].cardImage}
            title="Total Bids"
            description={
              isLoadingTotalBidCount
                ? "Loading..."
                : Number(getTotalBidCount?.toLocaleString())
            }
          />
          <StatsCard
            cardImage={statsCards[1].cardImage}
            title="Total Spent"
            description={statsCards[1].description}
          />
          <StatsCard
            cardImage={statsCards[2].cardImage}
            title="Total Players"
            description={statsCards[2].description}
          />
        </motion.div>
        {/* Countdown Timer */}
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          <CountdownTimer
            getTimeRemaining={30}
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
            description={
              isLoadingPrizeThreshold
                ? "Loading..."
                : (
                    Number(prizeThreshold) /
                    10 ** (decimals ? Number(decimals) : 18)
                  ).toLocaleString()
            }
          />
          <StatsCard
            cardImage={statsCards[4].cardImage}
            title="Tokens Locked (USD)"
            description={statsCards[4].description}
          />
          <StatsCard
            cardImage={statsCards[5].cardImage}
            title="Tokens Locked ($ABYSS)"
            description={
              isLoadingGetAbyssUSDPrice
                ? "Loading..."
                : (Number(getAbyssUSDPrice) / 10 ** 18).toFixed(4)
            }
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HomePageStatistics;
