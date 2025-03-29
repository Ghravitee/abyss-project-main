import { motion } from "framer-motion";
import search from "../assets/search.png";

const Leaderboard = () => {
  const leaderboardData = [
    {
      name: "0x1234AbCdEf567890ABCdEf01234567890A1B2C3D",
      totalBids: 6,
      bidAmountUSD: "$500",
      bidAmountToken: "5.00",
      date: "24/03/2025 | 18:00",
    },
    {
      name: "0xF3E4D2C1B9876543210aBCdEF01234567890AbC1",
      totalBids: 6,
      bidAmountUSD: "$500",
      bidAmountToken: "5.00",
      date: "24/03/2025 | 18:00",
    },
    {
      name: "0xF3E4D2C1B9876543210aBCdEF01234567890AbC1",
      totalBids: 6,
      bidAmountUSD: "$500",
      bidAmountToken: "5.00",
      date: "24/03/2025 | 18:00",
    },
    {
      name: "0x1234AbCdEf567890ABCdEf01234567890A1B2C3D",
      totalBids: 6,
      bidAmountUSD: "$500",
      bidAmountToken: "5.00",
      date: "24/03/2025 | 18:00",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="p-4"
    >
      {/* Header */}
      <h2 className="uppercase font-medium text-[24px] md:text-[32px] text-left">
        Leaderboard History
      </h2>

      {/* Filters & Search */}
      <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
        {/* Filters */}
        <div className="flex items-center gap-2 md:gap-4">
          <button className="bg-HowTo-Cards-Background border border-HowTo-Cards-border text-white px-3 py-1 md:px-4 md:py-2 rounded-full">
            All Bids
          </button>
          <button className="bg-white text-[#1B1326] px-3 py-1 md:px-4 md:py-2 rounded-full">
            Recent
          </button>
          <button className="bg-HowTo-Cards-Background border border-HowTo-Cards-border text-white px-3 py-1 md:px-4 md:py-2 rounded-full">
            Winners
          </button>
        </div>

        {/* Time Filters */}
        <div className="flex items-center gap-2 md:gap-6">
          <button className="text-gray-400">1H</button>
          <button className="text-gray-400">12H</button>
          <button className="bg-Purple text-white px-3 py-1 md:px-4 md:py-2 rounded-full">
            24H
          </button>
        </div>

        {/* Search Bar */}
        <div className="flex-grow sm:flex-grow-0">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Bid"
              className="border border-Purple text-white px-3 py-1 md:px-4 md:py-2 pl-10 rounded-full focus:ring-2 focus:ring-Purple focus:outline-none w-full sm:w-[200px]"
            />
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-Purple">
              <img
                src={search}
                alt="search"
                className="size-[16px] md:size-[20px]"
              />
            </span>
          </div>
        </div>
      </div>

      {/* Leaderboard Table */}
      <div className="mt-6 border border-HowTo-Cards-border rounded-md overflow-x-auto custom-scrollbar">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-Light-Gray-1 font-medium text-left text-[14px] md:text-[16px]">
              <th className="p-2 md:p-3">NAME</th>
              <th className="p-2 md:p-3">TOTAL BIDS</th>
              <th className="p-2 md:p-3">BID AMOUNT(USD)</th>
              <th className="p-2 md:p-3">BID AMOUNT($ABYSS)</th>
              <th className="p-2 md:p-3">DATE</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((entry, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-white border-b border-HowTo-Cards-border text-left text-[14px] md:text-[16px]"
              >
                <td className="p-2 md:p-3 text-Purple">{entry.name}</td>
                <td className="p-2 md:p-3">{entry.totalBids}</td>
                <td className="p-2 md:p-3">{entry.bidAmountUSD}</td>
                <td className="p-2 md:p-3">{entry.bidAmountToken}</td>
                <td className="p-2 md:p-3">{entry.date}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* See All Link */}
      <div className="mt-4 flex justify-start">
        <a href="#" className="text-Purple text-sm">
          See All
        </a>
      </div>
    </motion.div>
  );
};

export default Leaderboard;
