"use client";
import { useMemo, useState, useEffect, useCallback } from "react";
import {
  useAccount,
  // useChainId,
  useWriteContract,
  useReadContract,
  useWaitForTransactionReceipt,
  type BaseError,
} from "wagmi";
import {
  TOKEN_ABI,
  POT_ABI,
  // testChainID,
  // mainnetID,
  ABYSS_POT_CA,
  NULL_ADDR,
} from "../web3/config";
import {
  timeAgo,
  formatLeaderboardEntry,
  formatRoundWinner,
  formatTokenAmount,
  divideFunct,
} from "@/web3/formatters";
import { motion } from "framer-motion";
import DappNavbar from "@/sections/DappNavbar";
import MainHeading from "@/components/MainHeading";
// import chip from "../assets/chip.png";
// import { statsCards } from "../constants/statscards";
// import StatsCard from "@/components/StatsCard";
// import Leaderboard from "@/components/Leaderboard";
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
// import CountdownTimer from "@/components/CountdownTimer";
import search from "../assets/search.png";
import Converter from "@/components/Converter";
import DappStatistics from "@/sections/DappStats";
import {
  pureBurntTokensUSDValue,
  pureBurntTokens,
  pureLatestETHPrice_s,
  pureAbyssUSDPrice_s,
  pureLastBidder,
  pureLeaderboard,
  pureOverallTokensBidded,
  pureOverallUSDBidded,
  totalPlayersCount,
  pureTotalBidCount,
  pureSymbol,
  fetchPureBidHistoryByRound,
  fetchPureRoundBidCount,
  fetchPureRoundWinner,
  fetchPureRandomWinnersByRound,
} from "@/web3/readContracts";

function Dapp() {
  // State for errors, processing status, and transaction type.
  const [errorMsg, setErrorMsg] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);
  const [needsApproval, setNeedsApproval] = useState(false);
  const [isProcessingTxn, setIsProcessingTxn] = useState(false);
  // Track the type of the last transaction: 'approval' or 'bid'
  const [lastTxnType, setLastTxnType] = useState<"approval" | "bid" | null>(
    null
  );
  const { address, isConnected } = useAccount();
  const [countdown, setCountdown] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [selectedRound, setSelectedRound] = useState<number>(1);
  const [searchAddress, setSearchAddress] = useState("");
  const [startDateTime, setStartDateTime] = useState("");
  const [endDateTime, setEndDateTime] = useState("");
  const [pureBidHistoryByRound, setPureBidHistoryByRound] = useState<any>(null);
  const [pureRoundBidCount, setPureRoundBidCount] = useState<any>(null);
  const [pureRoundWinner, setPureRoundWinner] = useState<any>(null);
  const [pureRandomWinnersByRound, setPureRandomWinnersByRound] = useState<any>(null);


  // const chainId = useChainId();
  // const isSepoliaTestnet = chainId === testChainID;
  // const isETHMainnet = chainId === mainnetID;

  // Write and transaction hooks.
  const { data: txHash, isPending, error, writeContract } = useWriteContract();
  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({ hash: txHash });

  // Read token contract data.
  const { data: symbol } = useReadContract({
    ...TOKEN_ABI,
    functionName: "symbol",
  });
  const {
    data: balance,
    isLoading: isLoadingBalance,
    refetch: refetchBalance,
  } = useReadContract({
    ...TOKEN_ABI,
    functionName: "balanceOf",
    args: [address as `0x${string}`],
  });
  const { data: decimals, isLoading: isLoadingDecimals } = useReadContract({
    ...TOKEN_ABI,
    functionName: "decimals",
  });
  const {
    data: bidAmount,
    isLoading: isLoadingBidAmount,
    refetch: refetchBidAmount,
  } = useReadContract({
    ...POT_ABI,
    functionName: "bidAmount",
  });
  const {
    data: allowance,
    isLoading: isLoadingAllowance,
    refetch: refetchAllowance,
  } = useReadContract({
    ...TOKEN_ABI,
    functionName: "allowance",
    args: [address as `0x${string}`, ABYSS_POT_CA as `0x${string}`],
  });
  const {
    data: playerBidHistory,
    isLoading: isLoadingBidHistory,
    refetch: refetchBidHistory,
  } = useReadContract({
    ...POT_ABI,
    functionName: "getPlayerBidHistory",
    args: [address as `0x${string}`],
  });
  const {
    data: leaderboard,
    isLoading: isLoadingLeaderboard,
    refetch: refetchLeaderboard,
  } = useReadContract({
    ...POT_ABI,
    functionName: "getLeaderboard",
  });

  // Read additional pot data.
  const {
    data: getTimeRemaining,
    isLoading: isLoadingTimeRemaining,
    refetch: refetchTimeRemaining,
  } = useReadContract({
    ...POT_ABI,
    functionName: "getTimeRemaining",
  });
  const {
    data: getPotValue,
    isLoading: isLoadingPotValue,
    refetch: refetchPotValue,
  } = useReadContract({
    ...POT_ABI,
    functionName: "getPotValue",
  });
  const {
    data: getPotValueInUSD,
    isLoading: isLoadingPotValueInUSD,
    refetch: refetchPotValueInUSD,
  } = useReadContract({
    ...POT_ABI,
    functionName: "getPotValueInUSD",
  });
  const {
    data: getCurrentRound,
    isLoading: isLoadingGetCurrentRound,
    refetch: refetchGetCurrentRound,
  } = useReadContract({
    ...POT_ABI,
    functionName: "getCurrentRound",
  });
  const {
    data: getPlayerCount,
    isLoading: isLoadingGetPlayerCount,
    refetch: refetchGetPlayerCount,
  } = useReadContract({
    ...POT_ABI,
    functionName: "getPlayerCount",
  });
  const {
    data: prizeThreshold,
    isLoading: isLoadingPrizeThreshold,
    refetch: refetchPrizeThreshold,
  } = useReadContract({
    ...POT_ABI,
    functionName: "prizeThreshold",
  });
  const {
    data: lastBidder,
    isLoading: isLoadingLastBidder,
    refetch: refetchLastBidder,
  } = useReadContract({
    ...POT_ABI,
    functionName: "lastBidder",
  });
  const {
    data: getLatestETHPrice,
    isLoading: isLoadingGetLatestETHPrice,
    refetch: refetchGetLatestETHPrice,
  } = useReadContract({
    ...POT_ABI,
    functionName: "getLatestETHPrice",
  });
  const {
    data: getAbyssUSDPrice,
    isLoading: isLoadingGetAbyssUSDPrice,
    refetch: refetchGetAbyssUSDPrice,
  } = useReadContract({
    ...POT_ABI,
    functionName: "getAbyssUSDPrice",
  });
  const {
    data: gameActive,
    isLoading: isLoadingGameActive,
    refetch: refetchGameActive,
  } = useReadContract({
    ...POT_ABI,
    functionName: "gameActive",
  });
  const {
    data: isGameExpired,
    isLoading: isLoadingIsGameExpired,
    refetch: refetchIsGameExpired,
  } = useReadContract({
    ...POT_ABI,
    functionName: "isGameExpired",
  });
  const {
    data: getTotalBidCount,
    isLoading: isLoadingTotalBidCount,
    refetch: refetchTotalBidCount,
  } = useReadContract({
    ...POT_ABI,
    functionName: "getTotalBidCount",
  });

  const {
    data: getPlayerStats,
    isLoading: isLoadingPlayerStats,
    refetch: refetchPlayerStats,
  } = useReadContract({
    ...POT_ABI,
    functionName: "getPlayerStats",
    args: [address as `0x${string}`],
  });
  const {
    data: getBidHistoryByRound,
    isLoading: isLoadingBidHistoryByRound,
    refetch: refetchBidHistoryByRound,
  } = useReadContract({
    ...POT_ABI,
    functionName: "getBidHistoryByRound",
    args: [selectedRound as unknown as bigint],
  });
  const {
    data: getCurrentRoundBidHistory,
    isLoading: isLoadingCurrentRoundBidHistory,
    refetch: refetchCurrentRoundBidHistory,
  } = useReadContract({
    ...POT_ABI,
    functionName: "getCurrentRoundBidHistory",
  });
  const {
    data: getMostRecentBids,
    isLoading: isLoadingMostRecentBids,
    refetch: refetchMostRecentBids,
  } = useReadContract({
    ...POT_ABI,
    functionName: "getMostRecentBids",
    args: [1 as unknown as bigint],
  });

  const {
    data: getRoundBidCount,
    isLoading: isLoadingRoundBidCount,
    refetch: refetchRoundBidCount,
  } = useReadContract({
    ...POT_ABI,
    functionName: "getRoundBidCount",
    args: [selectedRound as unknown as bigint],
  });
  const {
    data: getTokenBurnt,
    isLoading: isLoadingTokenBurnt,
    refetch: refetchTokenBurnt,
  } = useReadContract({
    ...TOKEN_ABI,
    functionName: "balanceOf",
    args: [NULL_ADDR as `0x${string}`],
  });
  const {
    data: roundWinner,
    isLoading: isLoadingRoundWinner,
    refetch: refetchRoundWinner,
  } = useReadContract({
    ...POT_ABI,
    functionName: "roundWinnersHistory",
    args: [selectedRound as unknown as bigint],
  });
  const {
    data: getRandomWinnersByRound,
    isLoading: isLoadingRandomWinnersByRound,
    refetch: refetchRandomWinnersByRound,
  } = useReadContract({
    ...POT_ABI,
    functionName: "getRandomWinnersByRound",
    args: [selectedRound as unknown as bigint],
  });

  // Define a helper function to format the raw player stats data.
  const formatPlayerStats = (stats: any) => {
    return {
      totalBids: stats.totalBids.toString(),
      totalTokensBidded: (Number(stats.totalTokensBidded) / 10 ** 18).toFixed(
        4
      ),
      totalUSDBidded: (Number(stats.totalUSDBidded) / 10 ** 18).toFixed(2),
      firstBidTimestamp: new Date(
        Number(stats.firstBidTimestamp) * 1000
      ).toLocaleString(),
      lastBidTimestamp: new Date(
        Number(stats.lastBidTimestamp) * 1000
      ).toLocaleString(),
      firstBidAmount: (Number(stats.firstBidAmount) / 10 ** 18).toFixed(4),
      lastBidAmount: (Number(stats.lastBidAmount) / 10 ** 18).toFixed(4),
    };
  };

  // Compute overall totals using useMemo
  const overallTokensBidded = useMemo(() => {
    if (!leaderboard) return 0;
    return leaderboard.reduce((total, entry) => {
      return (
        total +
        divideFunct(95, Number(entry.totalTokensBidded) /
          Math.pow(10, decimals ? Number(decimals) : 18))
      );
    }, 0);
  }, [leaderboard, decimals]);

  const overallUSDBidded = useMemo(() => {
    if (!leaderboard) return 0;
    return leaderboard.reduce((total, entry) => {
      return (
        total +
        Number(entry.totalUSDBidded) /
        Math.pow(10, decimals ? Number(decimals) : 18)
      );
    }, 0);
  }, [leaderboard, decimals]);

  // Filter the bids using both address and datetime criteria.
  const filteredBids = useMemo(() => {
    if (!getBidHistoryByRound) return [];
    return [...getBidHistoryByRound]
      .filter((bid) => {
        const bidDate = new Date(Number(bid.timestamp) * 1000);
        // Filter by address if provided (case insensitive)
        const addressMatch = searchAddress
          ? bid.bidder.toLowerCase().includes(searchAddress.toLowerCase())
          : true;
        // Filter by start datetime if provided
        const startMatch = startDateTime
          ? bidDate >= new Date(startDateTime)
          : true;
        // Filter by end datetime if provided
        const endMatch = endDateTime ? bidDate <= new Date(endDateTime) : true;
        return addressMatch && startMatch && endMatch;
      })
      .sort((a, b) => Number(b.timestamp) - Number(a.timestamp));
  }, [getBidHistoryByRound, searchAddress, startDateTime, endDateTime]);

  // Filter the bids using both address and datetime criteria.
  const filteredPureBids = useMemo(() => {
    if (!pureBidHistoryByRound) return [];
    return [...pureBidHistoryByRound]
      .filter((bid) => {
        const bidDate = new Date(Number(bid.timestamp) * 1000);
        // Filter by address if provided (case insensitive)
        const addressMatch = searchAddress
          ? bid.bidder.toLowerCase().includes(searchAddress.toLowerCase())
          : true;
        // Filter by start datetime if provided
        const startMatch = startDateTime
          ? bidDate >= new Date(startDateTime)
          : true;
        // Filter by end datetime if provided
        const endMatch = endDateTime ? bidDate <= new Date(endDateTime) : true;
        return addressMatch && startMatch && endMatch;
      })
      .sort((a, b) => Number(b.timestamp) - Number(a.timestamp));
  }, [pureBidHistoryByRound, searchAddress, startDateTime, endDateTime]);

  // Check if approval is needed whenever allowance or bidAmount changes.
  useEffect(() => {
    if (
      allowance !== undefined &&
      bidAmount !== undefined &&
      !isLoadingAllowance &&
      !isLoadingBidAmount
    ) {
      setNeedsApproval(allowance < bidAmount);
    }
  }, [allowance, bidAmount, isLoadingAllowance, isLoadingBidAmount]);

  useEffect(() => {
    if (getCurrentRound) {
      setSelectedRound(Number(getCurrentRound));
    }
  }, [getCurrentRound]);

  // Split into two useEffect hooks
  useEffect(() => {
    // This effect only sets the initial countdown
    if (!isLoadingTimeRemaining && getTimeRemaining && !isTimerRunning) {
      setCountdown(Number(getTimeRemaining));
      setIsTimerRunning(true);
    }
  }, [getTimeRemaining, isLoadingTimeRemaining, isTimerRunning]);

  // Separate effect for the countdown itself
  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;

    if (countdown > 0 && isTimerRunning) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isTimerRunning]); // Remove countdown from the dependency array

  const burntTokens = useMemo(() => {
    if (!getTokenBurnt || !decimals) return 0;
    return (
      Number(getTokenBurnt) / Math.pow(10, decimals ? Number(decimals) : 18)
    );
  }, [getTokenBurnt, decimals]);

  const burntTokensUSDValue = useMemo(() => {
    if (!burntTokens || !getAbyssUSDPrice) return 0;
    const tokenUSDPrice = Number(getAbyssUSDPrice) / Math.pow(10, 18);
    return burntTokens * tokenUSDPrice;
  }, [burntTokens, getAbyssUSDPrice]);

  const tokenBalUSDValue = useMemo(() => {
    if (!balance || !getAbyssUSDPrice) return 0;
    const tokenUSDPrice = Number(getAbyssUSDPrice) / Math.pow(10, 18);
    const tbalance = Number(balance) / Math.pow(10, 18);
    return tbalance * tokenUSDPrice;
  }, [balance, getAbyssUSDPrice]);

  const bidAmountUSDValue = useMemo(() => {
    if (!getAbyssUSDPrice || !bidAmount) return 0;
    const tokenUSDPrice = Number(getAbyssUSDPrice) / Math.pow(10, 18);
    const bidAMount_s = Number(bidAmount) / Math.pow(10, 18);
    return bidAMount_s * tokenUSDPrice;
  }, [getAbyssUSDPrice]);

  // Function to handle approval.
  const handleApprove = useCallback(() => {
    setErrorMsg("");
    if (isLoadingAllowance || isLoadingBidAmount || isPending || isConfirming)
      return;
    if (bidAmount === undefined) {
      setErrorMsg("Unable to check bid amount. Please try again.");
      return;
    }
    // Mark this txn as an approval txn.
    setLastTxnType("approval");
    writeContract({
      ...TOKEN_ABI,
      functionName: "approve",
      args: [ABYSS_POT_CA as `0x${string}`, bidAmount as unknown as bigint],
    });
    setIsProcessingTxn(true);
  }, [
    isLoadingAllowance,
    isLoadingBidAmount,
    isPending,
    isConfirming,
    bidAmount,
    writeContract,
  ]);

  // Function to handle bidding.
  const handleBid = useCallback(() => {
    setErrorMsg("");
    if (isPending || isConfirming) return;
    // Mark this txn as a bid txn.
    setLastTxnType("bid");
    writeContract({
      ...POT_ABI,
      functionName: "registerBid",
    });
    setIsProcessingTxn(true);
  }, [isPending, isConfirming, writeContract]);

  // Combined process: either approve or bid based on current state.
  const handleBidProcess = useCallback(() => {
    if (needsApproval) {
      handleApprove();
    } else {
      handleBid();
    }
  }, [needsApproval, handleApprove, handleBid]);

  // When the transaction is confirmed, refresh values and reset processing flag.
  useEffect(() => {
    if (isConfirmed && txHash) {
      refetchAllowance();
      refetchBalance();
      refetchBidAmount();
      refetchBidHistory();
      refetchTimeRemaining();
      refetchGetLatestETHPrice();
      refetchBidHistoryByRound();
      refetchCurrentRoundBidHistory();
      refetchRoundWinner();
      refetchMostRecentBids();
      refetchRoundBidCount();
      refetchTokenBurnt();
      refetchGameActive();
      refetchIsGameExpired();
      refetchPlayerStats();
      refetchTotalBidCount();
      refetchGetAbyssUSDPrice();
      refetchRandomWinnersByRound();
      refetchPotValue();
      refetchLeaderboard();
      refetchPotValueInUSD();
      refetchGetCurrentRound();
      refetchGetPlayerCount();
      refetchPrizeThreshold();
      refetchLastBidder();
      setIsProcessingTxn(false);
    }
  }, [
    isConfirmed,
    txHash,
    refetchAllowance,
    refetchBidHistory,
    refetchPlayerStats,
    refetchTotalBidCount,
    refetchRandomWinnersByRound,
    refetchBalance,
    refetchRoundWinner,
    refetchBidAmount,
    refetchGetLatestETHPrice,
    refetchLeaderboard,
    refetchBidHistoryByRound,
    refetchCurrentRoundBidHistory,
    refetchMostRecentBids,
    refetchRoundBidCount,
    refetchTokenBurnt,
    refetchGameActive,
    refetchIsGameExpired,
    refetchGetAbyssUSDPrice,
    refetchTimeRemaining,
    refetchPotValue,
    refetchPotValueInUSD,
    refetchGetCurrentRound,
    refetchGetPlayerCount,
    refetchPrizeThreshold,
    refetchLastBidder,
  ]);

  // If a transaction error occurs (e.g. cancellation), reset the processing flag.
  useEffect(() => {
    if (error) {
      setIsProcessingTxn(false);
    }
  }, [error]);

  // Also reset processing state when there's no active transaction.
  useEffect(() => {
    if (!txHash) {
      setIsProcessingTxn(false);
    }
  }, [txHash]);


  useEffect(() => {
    const fetchData = async () => {
      const bidHistory = await fetchPureBidHistoryByRound(selectedRound);
      const roundBidCount = await fetchPureRoundBidCount(selectedRound);
      const roundWinnerData = await fetchPureRoundWinner(selectedRound);
      const randomWinners = await fetchPureRandomWinnersByRound(selectedRound);

      setPureBidHistoryByRound(bidHistory);
      setPureRoundBidCount(roundBidCount);
      setPureRoundWinner(roundWinnerData);
      setPureRandomWinnersByRound(randomWinners);
    };
    fetchData();
  }, [selectedRound]);

  // Compute the button text.
  // When processing, show "Processing..." (or "Confirming...").
  // Otherwise, show "Approve & Bid" if approval is needed, or "Place Bid" otherwise.
  const getButtonText = () => {
    if (isPending) return "Processing...";
    if (isConfirming) return "Confirming...";
    return needsApproval ? "Approve & Bid" : "Place Bid";
  };

  //   if (!isLoadingGameActive && !gameActive) {
  //     return (
  //       <div className="Home">
  //         <h3>Welcome user {address}</h3>
  //         <p>Game has not Started!</p>
  //         <ConnectButton />
  //       </div>
  //     );
  //   }

  return (
    <div className="">
      <DappNavbar />
      {/* <h3>Welcome user {address}</h3> */}

      {/* Dan's ui */}
      {/* Dan's ui */}
      {/* Dan's ui */}
      {/* Dan's ui */}
      {/* First major div */}
      <div className="relative mt-[88px] max-w-[1300px] mx-auto px-4 lg:px-0">
        {/* <MainHeading /> */}
        <div className="size-[20rem] bg-[#A510D6] rounded-[50%] absolute top-0 left-0 right-0 mx-auto blur-[200px]"></div>

        <DappStatistics
          isLoadingTotalBidCount={isLoadingTotalBidCount}
          getTotalBidCount={getTotalBidCount}
          isConnected={isConnected}
          isLoadingPlayerCount={isLoadingGetPlayerCount}
          getPlayerCount={getPlayerCount}
          isLoadingPotValue={isLoadingPotValue}
          getPotValue={getPotValue}
          isLoadingPotValueInUSD={isLoadingPotValueInUSD}
          getPotValueInUSD={getPotValueInUSD}
          isLoadingPrizeThreshold={isLoadingPrizeThreshold}
          prizeThreshold={prizeThreshold}
          decimals={decimals}
          getTimeRemaining={getTimeRemaining}
          isLoadingGetCurrentRound={isLoadingGetCurrentRound}
          getCurrentRound={getCurrentRound}
          isLoadingGameActive={isLoadingGameActive}
          gameActive={gameActive}
        />

        {/* Extrapot info */}
        {/* Extrapot info */}
        {/* Extrapot info */}
        {/* Extrapot info */}
        <div className="lg:max-w-[40rem] mx-auto my-16 bg-HowTo-Cards-Background border border-HowTo-Cards-border text-light-gray p-6 rounded-lg shadow-md relative">
          {/* Section Title */}
          <h4 className="text-purple text-3xl font-bold text-center mb-6 border-b border-HowTo-Cards-border pb-2">
            Pot Info
          </h4>

          {/* Round Ended Message */}
          {!isLoadingIsGameExpired &&
            isGameExpired &&
            !isLoadingGetCurrentRound && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-light-gray-1 bg-color-cta-Background p-3 rounded-md text-sm text-center shadow-md mb-6"
              >
                Round {getCurrentRound} has ended, waiting to start a new Round!
              </motion.p>
            )}

          {/* Grid Layout */}
          <div className="grid grid-cols-1 gap-6 text-Light-Gray-1">
            {/* Right Column */}
            <div className="text-xl space-y-3">
              <p className="flex justify-between">
                <span className="text-light-gray-1">Last Bidder:</span>

                <span className="font-medium">
                  {isLoadingLastBidder
                    ? "Fetching..."
                    : isConnected
                      ? `${lastBidder?.slice(0, 4)}...${lastBidder?.slice(-4)}`
                      : `${pureLastBidder.slice(0, 4)}...${pureLastBidder.slice(
                        -4
                      )}`}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Second major div */}
        {isConnected && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-[.7fr_.3fr] gap-[26px] items-center "
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-HowItWorks-Cards-Background border border-Purple rounded-2xl px-6 py-6"
            >
              {/* Player Stats */}
              {/* Player Stats */}
              {/* Player Stats */}
              <h3 className="font-raleway font-semibold text-[20px] text-white text-left mb-4">
                Your stats :{" "}
                <span className="text-Purple">
                  {address
                    ? `${address.slice(0, 4)}...${address.slice(-4)}`
                    : "N/A"}
                </span>
              </h3>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-HowItWorks-Cards-Background border border-Purple rounded-2xl px-6 py-6 mb-4"
              >
                <h3 className="font-raleway font-semibold text-[20px] text-white text-left ">
                  Your Token Balance
                </h3>

                {isLoadingBalance || isLoadingDecimals ? (
                  <p className="text-Purple mt-4 text-center">Loading...</p>
                ) : (
                  <div className="grid grid-cols-1 lg:grid-cols-[.3fr_.4fr_.3fr] mt-[37px]">
                    {/* Token Balance */}
                    <div className="lg:border-r border-r-Purple lg:pr-[20px] flex flex-col lg:items-start">
                      <h2 className="text-[20px] font-bold">AMOUNT</h2>
                      <p className="text-Purple text-[48px] font-raleway font-bold">
                        {formatTokenAmount(balance, decimals)}
                      </p>
                    </div>

                    {/* Equavalent USD */}
                    <div className="lg:border-r border-r-Purple lg:px-[20px]">
                      <h2 className="text-[20px] font-bold">USD VALUE</h2>
                      <p className="text-Purple text-[48px] font-raleway font-bold">
                        $
                        {tokenBalUSDValue.toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-HowItWorks-Cards-Background border border-Purple rounded-2xl px-6 py-6 shadow-lg"
              >
                <h3 className="font-raleway font-semibold text-[20px] text-white text-left ">
                  Your Bid Stats
                </h3>

                {isLoadingPlayerStats ? (
                  <p className="text-Purple mt-4 text-center">Loading...</p>
                ) : getPlayerStats ? (
                  <div className="grid grid-cols-1 lg:grid-cols-[.3fr_.4fr_.3fr] mt-[37px]">
                    {/* Total Bids */}
                    <div className="lg:border-r border-r-Purple lg:pr-[20px] flex flex-col lg:items-start">
                      <h2 className="text-[20px] font-bold">TOTAL BIDS</h2>
                      <p className="text-Purple text-[48px] font-raleway font-bold">
                        {formatPlayerStats(getPlayerStats).totalBids}
                      </p>
                    </div>

                    {/* Total Tokens Bidded */}
                    <div className="lg:border-r border-r-Purple lg:pr-[20px]">
                      <h2 className="text-[20px] font-bold">
                        TOTAL TOKENS BIDDDED
                      </h2>
                      <p className="text-Purple text-[48px] font-raleway font-bold">
                        {formatPlayerStats(getPlayerStats).totalTokensBidded}{" "}
                        {symbol}
                      </p>
                    </div>

                    {/* Total USD Bidded */}
                    <div className=" lg:pr-[20px]">
                      <h2 className="text-[20px] font-bold">
                        TOTAL USD BIDDDED
                      </h2>
                      <p className="text-Purple text-[48px] font-raleway font-bold">
                        ${formatPlayerStats(getPlayerStats).totalUSDBidded}
                      </p>
                    </div>
                  </div>
                ) : (
                  <p className="text-Light-Gray mt-4 text-center">
                    No stats available.
                  </p>
                )}
              </motion.div>

              {/* Player Bid History */}
              {/* Player Bid History */}
              {/* Player Bid History */}

              <div className="bg-Purple my-[50px] w-full h-[1px]" />
              <h3 className="font-raleway font-semibold text-[20px] text-white text-left mb-4">
                BID HISTORY
              </h3>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-HowItWorks-Cards-Background border border-Purple rounded-2xl px-6 py-6 shadow-lg"
              >
                {/* Section Title */}
                <h3 className="font-raleway font-semibold text-[20px] text-white text-left">
                  Your Bid History
                </h3>

                {/* Loading State */}
                {isLoadingBidHistory ? (
                  <p className="text-Purple mt-4 text-center">
                    Loading bid history...
                  </p>
                ) : playerBidHistory && playerBidHistory.length > 0 ? (
                  <div className="overflow-x-auto mt-6">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-Purple">
                          <th className="py-2 px-4 text-left text-Light-Gray font-semibold">
                            Round
                          </th>
                          <th className="py-2 px-4 text-left text-Light-Gray font-semibold">
                            Timestamp
                          </th>
                          <th className="py-2 px-4 text-left text-Light-Gray font-semibold">
                            Tokens Bidded
                          </th>
                          <th className="py-2 px-4 text-left text-Light-Gray font-semibold">
                            USD Value
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {[...playerBidHistory]
                          .sort(
                            (a, b) => Number(b.timestamp) - Number(a.timestamp)
                          )
                          .map((bid, index) => (
                            <motion.tr
                              key={index}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 * index, duration: 0.4 }}
                              className="border-b border-Purple text-white"
                            >
                              <td className="py-2 px-4">
                                {bid.round.toString()}
                              </td>
                              <td className="py-2 px-4">
                                {new Date(
                                  Number(bid.timestamp) * 1000
                                ).toLocaleString()}
                              </td>
                              <td className="py-2 px-4 text-Purple font-bold">
                                {(Number(bid.tokensBidded) / 10 ** 18).toFixed(
                                  4
                                )}
                              </td>
                              <td className="py-2 px-4 text-Purple font-bold">
                                ${(Number(bid.usdValue) / 10 ** 18).toFixed(2)}
                              </td>
                            </motion.tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="text-Light-Gray mt-4 text-center">
                    No bid history found.
                  </p>
                )}
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-HowItWorks-Cards-Background border border-Purple rounded-2xl px-4 py-6 h-fit"
            >
              <MainHeading addon="text-[18px] md:text-[20px] lg:text-[24px]" />
              <Converter
                isLoadingBidAmount={isLoadingBidAmount}
                isConnected={isConnected}
                bidAmount={bidAmount}
                decimals={decimals}
                symbol={symbol}
                bidAmountUSDValue={bidAmountUSDValue}
                bidButton={
                  <button
                    disabled={
                      isPending ||
                      isConfirming ||
                      isLoadingAllowance ||
                      isLoadingBidAmount ||
                      isProcessingTxn ||
                      isGameExpired
                    }
                    onClick={handleBidProcess}
                    className={`cursor-pointer px-10 py-3 rounded-full font-bold text-[18px] transition-all duration-300 ease-in-out
        ${isGameExpired
                        ? "bg-gray-500 text-gray-300 cursor-not-allowed"
                        : "bg-Purple hover:bg-opacity-80 text-white"
                      }
      `}
                  >
                    {isGameExpired ? (
                      <>
                        <span className="mr-2">🚫</span> {getButtonText()}
                      </>
                    ) : (
                      getButtonText()
                    )}
                  </button>
                }


              />
              {/* Transaction Status Messages */}
              {
                isConfirming && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-HowItWorks-Cards-Background border-l-4 border-yellow-500 text-yellow-400 px-4 py-2 rounded-lg shadow-md text-center"
                  >
                    <p>⏳ Waiting for confirmation...</p>
                    <p className="text-sm text-gray-300">Transaction: {txHash}</p>
                  </motion.div>
                )
              }

              {
                isConfirmed && txHash && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-HowItWorks-Cards-Background border-l-4 border-green-500 text-green-400 px-4 py-2 rounded-lg shadow-md text-center"
                  >
                    <p>
                      {lastTxnType === "approval"
                        ? "Approval confirmed!"
                        : lastTxnType === "bid"
                          ? "Bid confirmed!"
                          : ""}
                    </p>
                    <p className="text-sm text-gray-300">Transaction: {txHash}</p>
                  </motion.div>
                )
              }

              {/* Error Messages */}
              {
                errorMsg && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-HowItWorks-Cards-Background border-l-4 border-red-500 text-red-400 px-4 py-2 rounded-lg shadow-md text-center"
                  >
                    {errorMsg}
                  </motion.div>
                )
              }

              {
                error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-HowItWorks-Cards-Background border-l-4 border-red-500 text-red-400 px-4 py-2 rounded-lg shadow-md text-center"
                  >
                    Error: {(error as BaseError).shortMessage || error.message}
                  </motion.div>
                )
              }
            </motion.div>
          </motion.div>
        )}



        <div className="bg-dark-purple text-light-gray p-4 lg:pt-6 lg:px-6 rounded-lg">
          <div className="bg-HowTo-Cards-Background border border-Purple rounded-lg p-6 w-full mx-auto">
            <h3 className="text-2xl font-bold text-Light-Gray text-left mb-4">
              LeaderBoard
            </h3>
          </div>
          <span className="font-medium">
            {
              isLoadingLeaderboard ? (
                <p className="text-left font-raleway text-2xl text-Light-Gray my-4">
                  Loading leaderboard...
                </p>
              ) : isConnected && leaderboard && leaderboard.length > 0 ? (

                <>
                  <div className="max-w-[1300px] mx-auto border border-HowTo-Cards-border rounded-md overflow-x-auto custom-scrollbar mt-20">

                    {/* Overall Totals Section */}
                    <div className="mt-6 border border-HowTo-Cards-border rounded-md p-4">
                      <h4 className="text-Light-Gray-1 font-bold text-lg">
                        Overall Totals
                      </h4>
                      <p className="text-white mt-2">
                        Total Tokens Bidded:{" "}
                        <span className="text-Purple font-bold">
                          {overallTokensBidded.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}{" "}
                          {symbol}
                        </span>
                      </p>
                      <p className="text-white">
                        Total USD Bidded:{" "}
                        <span className="text-Purple font-bold">
                          $
                          {overallUSDBidded.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </span>
                      </p>
                      <p className="text-white mt-2">
                        Total Tokens Burnt:{" "}
                        <span className="text-Purple font-bold">
                          {isLoadingTokenBurnt ? (
                            'fetching...'
                          ) : (
                            (isConnected && (
                              burntTokens.toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })
                            ))
                          )}
                          {" "}{symbol}
                        </span>
                      </p>
                      <p className="text-white">
                        Total USD Burnt:{" "}
                        <span className="text-Purple font-bold">
                          $
                          {isConnected && burntTokensUSDValue.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </span>
                      </p>
                      <p className="text-white mt-2">
                        Total Bids:{" "}
                        <span className="text-Purple font-bold">
                          {Number(getTotalBidCount?.toLocaleString())}
                        </span>
                      </p>
                      <p className="text-white">
                        Total Players:{" "}
                        <span className="text-Purple font-bold">
                          {totalPlayersCount}
                        </span>
                      </p>
                    </div>
                    {/* LeaderBoard */}
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="text-Light-Gray-1 font-medium text-left text-[14px] md:text-[16px]">
                          <th className="p-2 md:p-3">Rank</th>
                          <th className="p-2 md:p-3">Player</th>
                          <th className="p-2 md:p-3">Total Bids</th>
                          <th className="p-2 md:p-3">Total Tokens Bidded</th>
                          <th className="p-2 md:p-3">Total USD Bidded</th>
                          <th className="p-2 md:p-3">First Bid</th>
                          <th className="p-2 md:p-3">Last Bid</th>
                          <th className="p-2 md:p-3">First Bid Amount</th>
                          <th className="p-2 md:p-3">Last Bid Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {leaderboard.map((entry, index) => {
                          const formattedEntry = formatLeaderboardEntry(entry);
                          return (
                            <motion.tr
                              key={entry.player}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="text-white border-b border-HowTo-Cards-border text-left text-[14px] md:text-[16px]"
                            >
                              <td className="p-2 md:p-3">{index + 1}</td>
                              <td className="p-2 md:p-3 text-Purple">
                                {formattedEntry.player}
                              </td>
                              <td className="p-2 md:p-3">
                                {formattedEntry.totalBids}
                              </td>
                              <td className="p-2 md:p-3">
                                {formattedEntry.totalTokensBidded} {symbol}
                              </td>
                              <td className="p-2 md:p-3">
                                ${formattedEntry.totalUSDBidded}
                              </td>
                              <td className="p-2 md:p-3">
                                {formattedEntry.firstBidTimestamp}
                              </td>
                              <td className="p-2 md:p-3">
                                {formattedEntry.lastBidTimestamp}
                              </td>
                              <td className="p-2 md:p-3">
                                {formattedEntry.firstBidAmount} {symbol}
                              </td>
                              <td className="p-2 md:p-3">
                                {formattedEntry.lastBidAmount} {symbol}
                              </td>
                            </motion.tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </>
              ) : pureLeaderboard && pureLeaderboard.length > 0 ? (
                <>
                  {/* Pure Overall Totals Section */}
                  <div className="mt-6 border border-HowTo-Cards-border rounded-md p-4">
                    <h4 className="text-Light-Gray-1 font-bold text-lg">
                      Overall Totals
                    </h4>
                    <p className="text-white mt-2">
                      Total Tokens Bidded:{" "}
                      <span className="text-Purple font-bold">
                        {pureOverallTokensBidded.toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}{" "}
                        {pureSymbol}
                      </span>
                    </p>
                    <p className="text-white">
                      Total USD Bidded:{" "}
                      <span className="text-Purple font-bold">
                        $
                        {pureOverallUSDBidded.toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </span>
                    </p>
                    <p className="text-white mt-2">
                      Total Tokens Burnt:{" "}
                      <span className="text-Purple font-bold">
                        {pureBurntTokens.toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}{" "}
                        {pureSymbol}
                      </span>
                    </p>
                    <p className="text-white">
                      Total USD Burnt:{" "}
                      <span className="text-Purple font-bold">
                        $
                        {pureBurntTokensUSDValue.toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </span>
                    </p>
                    <p className="text-white mt-2">
                      Total Bids:{" "}
                      <span className="text-Purple font-bold">
                        {Number(pureTotalBidCount?.toLocaleString())}
                      </span>
                    </p>
                    <p className="text-white">
                      Total Players:{" "}
                      <span className="text-Purple font-bold">
                        {totalPlayersCount}
                      </span>
                    </p>
                  </div>

                  {/* Pure LeaderBoard */}
                  <div className="max-w-[1300px] mx-auto border border-HowTo-Cards-border rounded-md overflow-x-auto custom-scrollbar mt-20">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="text-Light-Gray-1 font-medium text-left text-[14px] md:text-[16px]">
                          <th className="p-2 md:p-3">Rank</th>
                          <th className="p-2 md:p-3">Player</th>
                          <th className="p-2 md:p-3">Total Bids</th>
                          <th className="p-2 md:p-3">Total Tokens Bidded</th>
                          <th className="p-2 md:p-3">Total USD Bidded</th>
                          <th className="p-2 md:p-3">First Bid</th>
                          <th className="p-2 md:p-3">Last Bid</th>
                          <th className="p-2 md:p-3">First Bid Amount</th>
                          <th className="p-2 md:p-3">Last Bid Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/*  */}
                        {pureLeaderboard.map((entry, index) => {
                          const formattedEntry = formatLeaderboardEntry(entry);
                          return (
                            <motion.tr
                              key={entry.player}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="text-white border-b border-HowTo-Cards-border text-left text-[14px] md:text-[16px]"
                            >
                              <td className="p-2 md:p-3">{index + 1}</td>
                              <td className="p-2 md:p-3 text-Purple">
                                {formattedEntry.player}
                              </td>
                              <td className="p-2 md:p-3">
                                {formattedEntry.totalBids}
                              </td>
                              <td className="p-2 md:p-3">
                                {formattedEntry.totalTokensBidded} {symbol}
                              </td>
                              <td className="p-2 md:p-3">
                                ${formattedEntry.totalUSDBidded}
                              </td>
                              <td className="p-2 md:p-3">
                                {formattedEntry.firstBidTimestamp}
                              </td>
                              <td className="p-2 md:p-3">
                                {formattedEntry.lastBidTimestamp}
                              </td>
                              <td className="p-2 md:p-3">
                                {formattedEntry.firstBidAmount} {symbol}
                              </td>
                              <td className="p-2 md:p-3">
                                {formattedEntry.lastBidAmount} {symbol}
                              </td>
                            </motion.tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </>) : (
                <p className="text-left font-raleway text-2xl text-Light-Gray mb-4 mt-20">
                  No leaderboard entries found.
                </p>)
            }
          </span>
        </div>



        {/* When the game is active, show the ready to play cards */}
        {/* When the game is active, show the ready to play cards */}
        {/* When the game is active, show the ready to play cards */}
        {
          !isLoadingGameActive && gameActive && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative flex flex-col items-center gap-4"
            >
              <button
                disabled={
                  isPending ||
                  isConfirming ||
                  isLoadingAllowance ||
                  isLoadingBidAmount ||
                  isProcessingTxn ||
                  isGameExpired
                }
                onClick={handleBidProcess}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                className={`px-6 py-3 rounded-xl font-bold text-[18px] transition-all duration-300 ease-in-out
        ${isGameExpired
                    ? "bg-gray-500 text-gray-300 cursor-not-allowed"
                    : "bg-Purple hover:bg-opacity-80 text-white"
                  }
      `}
              >
                {isGameExpired ? (
                  <>
                    <span className="mr-2">🚫</span> {getButtonText()}
                  </>
                ) : (
                  getButtonText()
                )}
              </button>

              {/* Tooltip for Expired Game */}
              {isGameExpired && showTooltip && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-[110%] bg-DarkGray text-white text-sm px-3 py-2 rounded-md shadow-lg"
                >
                  Current round expired
                </motion.div>
              )}
            </motion.div>
          )
        }

        {/* Transaction Status Messages */}
        {
          isConfirming && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-HowItWorks-Cards-Background border-l-4 border-yellow-500 text-yellow-400 px-4 py-2 rounded-lg shadow-md text-center"
            >
              <p>⏳ Waiting for confirmation...</p>
              <p className="text-sm text-gray-300">Transaction: {txHash}</p>
            </motion.div>
          )
        }

        {
          isConfirmed && txHash && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-HowItWorks-Cards-Background border-l-4 border-green-500 text-green-400 px-4 py-2 rounded-lg shadow-md text-center"
            >
              <p>
                {lastTxnType === "approval"
                  ? "Approval confirmed!"
                  : lastTxnType === "bid"
                    ? "Bid confirmed!"
                    : ""}
              </p>
              <p className="text-sm text-gray-300">Transaction: {txHash}</p>
            </motion.div>
          )
        }

        {/* Error Messages */}
        {
          errorMsg && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-HowItWorks-Cards-Background border-l-4 border-red-500 text-red-400 px-4 py-2 rounded-lg shadow-md text-center"
            >
              {errorMsg}
            </motion.div>
          )
        }

        {
          error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-HowItWorks-Cards-Background border-l-4 border-red-500 text-red-400 px-4 py-2 rounded-lg shadow-md text-center"
            >
              Error: {(error as BaseError).shortMessage || error.message}
            </motion.div>
          )
        }

        {/* Round Data */}
        {/* Round Data */}
        {/* Round Data */}

        <div className="bg-HowTo-Cards-Background border border-Purple rounded-lg p-6 w-full mx-auto">
          <h3 className="text-2xl font-bold text-Light-Gray text-left mb-4">
            Round Data
          </h3>

          {/* Round Selection */}
          <div className="bg-dark-purple text-light-gray p-4 lg:pt-6 lg:px-6 rounded-lg">
            {/* Round Selection */}
            <div className="">
              <label
                htmlFor="roundInput"
                className="block text-center mx-auto text-lg md:text-xl lg:text-2xl font-semibold text-light-gray-1 mb-2"
              >
                Select Round:
              </label>
              <input
                type="number"
                id="roundInput"
                value={selectedRound}
                onChange={(e) => setSelectedRound(Number(e.target.value))}
                className="w-full mx-auto p-5 placeholder:text-right placeholder:text-white border border-Purple focus:outline-none focus:ring-4 focus:ring-Purple/60 transition-shadow text-left rounded-[40px] appearance-none"
              />
            </div>

            {/* Winner History */}
            <div className="bg-howItWorks-cards-background p-6 rounded-md shadow-md mb-6 flex flex-col items-center">
              <h4 className="text-xl font-bold text-white mb-4">
                Round {selectedRound} Winner History
              </h4>
              {isLoadingRoundWinner ? (
                <p className="text-light-gray-1">
                  Loading round winner history...
                </p>
              ) : isConnected && roundWinner ? (
                (() => {
                  const formattedWinner =
                    roundWinner && Number(roundWinner[0]) > 0
                      ? formatRoundWinner(roundWinner)
                      : null;
                  if (!formattedWinner) {
                    return (
                      <p className="text-light-gray-1">
                        No winner history found for round {selectedRound}.
                      </p>
                    );
                  }
                  return (
                    <div className="winner-details space-y-4">
                      <div className="bg-color-cta-Background p-5 rounded-lg shadow">
                        <h5 className="text-lg font-semibold text-purple mb-3">
                          Last Bid Winner
                        </h5>
                        <table className="w-full border border-howTo-cards-border rounded-lg overflow-hidden">
                          <thead>
                            <tr className="bg-purple text-white">
                              <th className="px-4 py-2 text-left">Address</th>
                              <th className="px-4 py-2 text-left">
                                Prize Tokens
                              </th>
                              <th className="px-4 py-2 text-left">Prize USD</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t border-howTo-cards-border">
                              <td className="px-4 py-3">{roundWinner?.[1]}</td>
                              <td className="px-4 py-3">
                                {(
                                  Number(roundWinner?.[2]) / 1e18
                                ).toLocaleString()}{" "}
                                {symbol}
                              </td>
                              <td className="px-4 py-3">
                                ${Number(roundWinner?.[3]) / 1e18}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  );
                })()
              ) : pureRoundWinner ? (
                (() => {
                  const formattedWinner =
                    pureRoundWinner && Number(pureRoundWinner[0]) > 0
                      ? formatRoundWinner(pureRoundWinner)
                      : null;
                  if (!formattedWinner) {
                    return (
                      <p className="text-light-gray-1">
                        No winner history found for round {selectedRound}.
                      </p>
                    );
                  }
                  return (
                    <div className="winner-details space-y-4">
                      <div className="bg-color-cta-Background p-5 rounded-lg shadow">
                        <h5 className="text-lg font-semibold text-purple mb-3">
                          Last Bid Winner
                        </h5>
                        <table className="w-full border border-howTo-cards-border rounded-lg overflow-hidden">
                          <thead>
                            <tr className="bg-purple text-white">
                              <th className="px-4 py-2 text-left">Address</th>
                              <th className="px-4 py-2 text-left">
                                Prize Tokens
                              </th>
                              <th className="px-4 py-2 text-left">Prize USD</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t border-howTo-cards-border">
                              <td className="px-4 py-3">{pureRoundWinner?.[1]}</td>
                              <td className="px-4 py-3">
                                {(
                                  Number(pureRoundWinner?.[2]) / 1e18
                                ).toLocaleString()}{" "}
                                {symbol}
                              </td>
                              <td className="px-4 py-3">
                                ${Number(pureRoundWinner?.[3]) / 1e18}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  );
                })()
              ) : (
                <p className="text-light-gray-1">
                  No winner history found for round {selectedRound}.
                </p>
              )}


              <div className="random-winners-history">
                {isLoadingRandomWinnersByRound ? (
                  " "
                ) : isConnected && getRandomWinnersByRound &&
                  getRandomWinnersByRound.length > 0 ? (
                  <div>
                    <h4>Random Winners for Round {selectedRound}</h4>
                    <table>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Winner Address</th>
                          <th>Prize Tokens (Each)</th>
                          <th>Prize USD (Each)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {getRandomWinnersByRound.map((winner, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{winner}</td>
                            <td>
                              {roundWinner &&
                                (
                                  Number(roundWinner[4]) / 1e18
                                ).toLocaleString()}{" "}
                              {symbol}
                            </td>
                            <td>
                              $
                              {roundWinner &&
                                (Number(roundWinner[5]) / 1e18).toFixed(2)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : pureRandomWinnersByRound &&
                  pureRandomWinnersByRound.length > 0 ? (
                  <table>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Winner Address</th>
                        <th>Prize Tokens (Each)</th>
                        <th>Prize USD (Each)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pureRandomWinnersByRound.map((winner: any, index: number) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{winner}</td>
                          <td>
                            {pureRoundWinner &&
                              (
                                Number(pureRoundWinner[4]) / 1e18
                              ).toLocaleString()}{" "}
                            {pureSymbol}
                          </td>
                          <td>
                            $
                            {pureRoundWinner &&
                              (Number(pureRoundWinner[5]) / 1e18).toFixed(2)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p></p>
                )}
              </div>
              <div className="round-date">
                {isLoadingRoundWinner ? (' ') : isConnected && roundWinner ? (
                  (() => {
                    const formattedWinner =
                      roundWinner && Number(roundWinner[0]) > 0
                        ? formatRoundWinner(roundWinner)
                        : null;
                    if (!formattedWinner) {
                      return ('');
                    }
                    return (
                      <p>Round Ended: {timeAgo(Number(roundWinner?.[6]))}</p>
                    );
                  })()
                ) : pureRoundWinner ? (
                  (() => {
                    const formattedWinner =
                      pureRoundWinner && Number(pureRoundWinner[0]) > 0
                        ? formatRoundWinner(pureRoundWinner)
                        : null;
                    if (!formattedWinner) {
                      return ('');
                    }
                    return (
                      <p>Round Ended: {timeAgo(Number(pureRoundWinner?.[6]))}</p>
                    );
                  })()
                ) : ('')}
              </div>
            </div>
          </div>

          {/* Bid History Table */}
          <div className="mt-6">
            <h4 className="text-lg font-semibold">
              Bid History for Round {selectedRound}
            </h4>

            <div>
              {isLoadingRoundBidCount ? (
                <p>Loading round bid count...</p>
              ) : isConnected && getRoundBidCount ? (
                <p>Bid Counts for round {selectedRound}: {getRoundBidCount?.toString()} BIDS</p>
              ) : pureRoundBidCount ? (<p>Bid Counts for round {selectedRound}: {pureRoundBidCount?.toString()} BIDS</p>) : (<p></p>)}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by Address"
                  value={searchAddress}
                  onChange={(e) => setSearchAddress(e.target.value)}
                  className="py-3 pl-10 rounded-full border border-Purple focus:ring-2 focus:ring-Purple focus:outline-none w-full"
                />
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-Purple">
                  <img
                    src={search}
                    alt="search"
                    className="size-[16px] md:size-[20px]"
                  />
                </span>
              </div>
              <input
                type="datetime-local"
                value={startDateTime}
                onChange={(e) => setStartDateTime(e.target.value)}
                className="py-3 pl-10 rounded-full border border-Purple focus:ring-2 focus:ring-Purple focus:outline-none w-full"
              />
              <input
                type="datetime-local"
                value={endDateTime}
                onChange={(e) => setEndDateTime(e.target.value)}
                className="py-3 pl-12 pr-4 rounded-full border border-Purple text-Light-Gray placeholder-Light-Gray-1 focus:ring-2 focus:ring-Purple focus:outline-none w-full shadow-sm transition-all duration-300 hover:shadow-md"
                placeholder="Select date & time"
              />
            </div>

            {isLoadingBidHistoryByRound ? (
              <p className="text-gray-500 mt-4">
                Loading bid history for this round...
              </p>
            ) : isConnected && filteredBids && filteredBids.length > 0 ? (
              <table className="w-full mt-4 border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 px-3 py-2">Player</th>
                    <th className="border border-gray-300 px-3 py-2">
                      Timestamp
                    </th>
                    <th className="border border-gray-300 px-3 py-2">
                      Tokens Bidded
                    </th>
                    <th className="border border-gray-300 px-3 py-2">
                      USD Value
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBids.map((bid, index) => (
                    <tr key={index} className="text-center">
                      <td className="border border-gray-300 px-3 py-2">
                        {bid.bidder}
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        {new Date(
                          Number(bid.timestamp) * 1000
                        ).toLocaleString()}
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        {(Number(bid.tokensBidded) / 10 ** 18).toFixed(4)}
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        ${(Number(bid.usdValue) / 10 ** 18).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : filteredPureBids && filteredPureBids.length > 0 ? (
              <table className="w-full mt-4 border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 px-3 py-2">Player</th>
                    <th className="border border-gray-300 px-3 py-2">
                      Timestamp
                    </th>
                    <th className="border border-gray-300 px-3 py-2">
                      Tokens Bidded
                    </th>
                    <th className="border border-gray-300 px-3 py-2">
                      USD Value
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPureBids.map((bid, index) => (
                    <tr key={index} className="text-center">
                      <td className="border border-gray-300 px-3 py-2">
                        {bid.bidder}
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        {new Date(
                          Number(bid.timestamp) * 1000
                        ).toLocaleString()}
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        {(Number(bid.tokensBidded) / 10 ** 18).toFixed(4)}
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        ${(Number(bid.usdValue) / 10 ** 18).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-gray-500 mt-4">No bid history found.</p>
            )}
          </div>
        </div>
      </div >

      {/* Theo's web3 code */}
      {/* Theo's web3 code */}
      {/* Theo's web3 code */}
      {/* Theo's web3 code */}
      <div>
        <div>
          <h4>Most Recent Bids</h4>
          {isLoadingMostRecentBids ? (
            <p>Loading most recent bids...</p>
          ) : getMostRecentBids && getMostRecentBids.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Player</th>
                  <th>Timestamp</th>
                  <th>Tokens Bidded</th>
                  <th>USD Value</th>
                </tr>
              </thead>
              <tbody>
                {[...getMostRecentBids]
                  .sort((a, b) => Number(b.timestamp) - Number(a.timestamp))
                  .map((bid, index) => (
                    <tr key={index}>
                      <td>{bid.bidder}</td>
                      <td>
                        {new Date(
                          Number(bid.timestamp) * 1000
                        ).toLocaleString()}
                      </td>
                      <td>
                        {(Number(bid.tokensBidded) / 10 ** 18).toFixed(4)}
                      </td>
                      <td>${(Number(bid.usdValue) / 10 ** 18).toFixed(2)}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          ) : (
            <p>No recent bids found.</p>
          )}
        </div>
      </div>
    </div >
  );
}

export default Dapp;
