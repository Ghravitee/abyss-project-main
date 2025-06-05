import { useState, useEffect } from "react";
import {
  useAccount,
  // useChainId,
  useWriteContract,
  useReadContract,
  useWaitForTransactionReceipt,
  type BaseError,
} from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import {
  TOKEN_ABI,
  POT_ABI,
  // testChainID,
  // mainnetID,
  ABYSS_ADMIN,
} from "../web3/config";
import { formatTimeRemaining, formatLeaderboardEntry } from "@/web3/formatters";
import "./Home.css";
import DappNavbar from "@/sections/DappNavbar";
import Statistics from "@/sections/Statistics";
import chip from "../assets/chip.png";
import { motion } from "framer-motion";
import DappStatistics from "@/sections/DappStats";
import { pureGameActive } from "@/web3/readContracts";

function Admin() {
  // State for errors, processing status, and transaction type.
  const [errorMsg, setErrorMsg] = useState("");
  // Track which action is currently processing ("start", "end", "force" or "")
  const [currentAction, setCurrentAction] = useState("");
  const { address, isConnected } = useAccount();
  const [countdown, setCountdown] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [requestIDs, setRequestIDs] = useState<bigint | null>(null);
  const [pairAddr, setPairAddr] = useState("");

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

  const { data: decimals, isLoading: isLoadingDecimals } = useReadContract({
    ...TOKEN_ABI,
    functionName: "decimals",
  });
  const {
    data: gameActive,
    isLoading: isLoadingGameActive,
    refetch: refetchGameActive,
  } = useReadContract({
    ...POT_ABI,
    functionName: "gameActive",
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
    functionName: "getChainlinkETHPrice",
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
    data: isGameExpired,
    isLoading: isLoadingIsGameExpired,
    refetch: refetchIsGameExpired,
  } = useReadContract({
    ...POT_ABI,
    functionName: "isGameExpired",
  });
  const {
    data: getCurrentRoundBidCount,
    isLoading: isLoadingCurrentRoundBidCount,
    refetch: refreshCurrentRoundBidCount,
  } = useReadContract({
    ...POT_ABI,
    functionName: "getRoundBidCount",
    args: [getCurrentRound as unknown as bigint],
  });
  const {
    data: leaderboard,
    isLoading: isLoadingLeaderboard,
    refetch: refetchLeaderboard,
  } = useReadContract({
    ...POT_ABI,
    functionName: "getLeaderboard",
  });

  // Function to start the game.
  const handleStartGame = () => {
    setErrorMsg("");
    setCurrentAction("start");
    writeContract({
      ...POT_ABI,
      functionName: "startGame",
    });
  };

  const handleRandomWinnerSelection = () => {
    if (requestIDs === null) {
      setErrorMsg("Request ID is required.");
      return;
    }
    setErrorMsg("");
    setCurrentAction("randomWinners");
    writeContract({
      ...POT_ABI,
      functionName: "manualRandomWinnerSelection",
      args: [requestIDs],
    });
  };

  // Function to end the current round.
  const handleEndRound = () => {
    setErrorMsg("");
    setCurrentAction("end");
    writeContract({
      ...POT_ABI,
      functionName: "adminEndRound",
    });
  };

  // Function to force-end the current game and start a new one.
  const handleForceEndAndStartNewGame = () => {
    setErrorMsg("");
    setCurrentAction("force");
    writeContract({
      ...POT_ABI,
      functionName: "forceEndAndStartNewGame",
    });
  };

  // Function to force-end the current game and start a new one.
  const handleAddPairAddr = () => {
    if (pairAddr === null) {
      setErrorMsg("Pair Address is required.");
      return;
    }
    setErrorMsg("");
    setCurrentAction("pairAddressSet");
    writeContract({
      ...POT_ABI,
      functionName: "updatePairAddress",
      args: [pairAddr as `0x${string}`],
    });
  };

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

  // When the transaction is confirmed, refresh values and reset the current action.
  useEffect(() => {
    if (isConfirmed && txHash) {
      refetchTimeRemaining();
      refreshCurrentRoundBidCount();
      refetchGetLatestETHPrice();
      refetchIsGameExpired();
      refetchGetAbyssUSDPrice();
      refetchPotValue();
      refetchGameActive();
      refetchPotValueInUSD();
      refetchLeaderboard();
      refetchGetCurrentRound();
      refetchGetPlayerCount();
      refetchPrizeThreshold();
      refetchLastBidder();
      setCurrentAction("");
    }
  }, [
    isConfirmed,
    txHash,
    refetchGetLatestETHPrice,
    refreshCurrentRoundBidCount,
    refetchIsGameExpired,
    refetchGetAbyssUSDPrice,
    refetchGameActive,
    refetchTimeRemaining,
    refetchPotValue,
    refetchPotValueInUSD,
    refetchLeaderboard,
    refetchGetCurrentRound,
    refetchGetPlayerCount,
    refetchPrizeThreshold,
    refetchLastBidder,
  ]);

  // Combine the pending and confirming states to disable buttons during processing.
  const isProcessing = isPending || isConfirming;

  if (!isConnected) {
    return (
      <div className="Admin">
        <h3>Welcome to the DAPP!</h3>
        <ConnectButton />
      </div>
    );
  }

  if (address === ABYSS_ADMIN) {
    return (
      <div className="Admin">
        {/* Dan's UI */}
        {/* Dan's UI */}
        {/* Dan's UI */}
        {/* Dan's UI */}
        <DappNavbar />

        <div className="mt-20 lg:mt-28">
          <h3 className="text-right text-2xl font-raleway font-bold mb-10">
            Welcome Admin{" "}
            <span className="text-Purple">
              {address
                ? `${address.slice(0, 4)}...${address.slice(-4)}`
                : "N/A"}
            </span>
          </h3>
          <div className="relative">
            <div className="size-[20rem] bg-[#A510D6] rounded-[50%] absolute top-0 left-0 right-0 mx-auto blur-[200px]"></div>
            <div className="bg-Purple p-[20px] rounded-[18px]">
              <div className="flex flex-col justify-center items-center gap-2">
                <img src={chip} className="size-[25px]" />
                <p className="text-[20px] font-bold">Round {getCurrentRound}</p>
              </div>
            </div>
            <DappStatistics
              isLoadingCurrentRoundBidCount={isLoadingCurrentRoundBidCount}
              getCurrentRoundBidCount={getCurrentRoundBidCount}
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
              isLoadingDecimals={isLoadingDecimals}
              getTimeRemaining={getTimeRemaining}
              isLoadingGetCurrentRound={isLoadingGetCurrentRound}
              getCurrentRound={getCurrentRound}
              isLoadingGameActive={isLoadingGameActive}
              gameActive={gameActive}
            />
          </div>
          {pureGameActive && (
            <div className="relative">
              <div className="size-[20rem] bg-[#A510D6] rounded-[50%] absolute top-0 left-0 right-0 mx-auto blur-[200px]"></div>
              <div className="bg-Purple p-[20px] rounded-[18px]">
                <div className="flex flex-col justify-center items-center gap-2">
                  <img src={chip} className="size-[25px]" />
                  <p className="text-[20px] font-bold">Overall Statistics</p>
                </div>
              </div>
              <Statistics />
            </div>
          )}

          {/* Extra pot info */}
          {/* Extra pot info */}
          {/* Extra pot info */}
          <div className="mt-10 max-w-[40rem] mx-auto bg-HowTo-Cards-Background border-HowTo-Cards-border text-light-gray p-6 rounded-lg shadow-md border border-howTo-cards-border relative">
            <h4 className="text-purple text-xl font-semibold mb-4 border-b border-HowTo-Cards-border pb-2">
              Pot Info
            </h4>

            {!isLoadingIsGameExpired &&
              isGameExpired &&
              !isLoadingGetCurrentRound && (
                <p className="text-light-gray-1 bg-color-cta-Background p-3 rounded-md text-sm mb-3">
                  Round {getCurrentRound} has expired, waiting to start a new
                  Round!
                </p>
              )}

            <div className="space-y-3">
              <p className="flex justify-between">
                <span className="text-light-gray-1">Time Remaining:</span>
                <span className="font-medium">
                  {isLoadingTimeRemaining
                    ? "Loading..."
                    : formatTimeRemaining(countdown)}
                </span>
              </p>

              <p className="flex justify-between">
                <span className="text-light-gray-1">Current Pot Value:</span>
                <span className="font-medium">
                  {isLoadingPotValue
                    ? "Loading..."
                    : (
                        Number(getPotValue) /
                        10 ** (decimals ? Number(decimals) : 18)
                      ).toLocaleString()}{" "}
                  {symbol}
                </span>
              </p>

              {/* <p className="flex justify-between">
                                <span className="text-light-gray-1">Pot Value (USD):</span>
                                <span className="font-medium">
                                    {isLoadingPotValueInUSD
                                        ? "Loading..."
                                        : `$${(
                                            Number(getPotValueInUSD) /
                                            10 ** (decimals ? Number(decimals) : 18)
                                        ).toLocaleString()}`}
                                </span>
                            </p> */}

              <p className="flex justify-between">
                <span className="text-light-gray-1">Current Round:</span>
                <span className="font-medium">
                  {isLoadingGetCurrentRound ? "Loading..." : getCurrentRound}
                </span>
              </p>

              <p className="flex justify-between">
                <span className="text-light-gray-1">Players:</span>
                <span className="font-medium">
                  {isLoadingGetPlayerCount ? "Loading..." : getPlayerCount}
                </span>
              </p>

              <p className="flex justify-between">
                <span className="text-light-gray-1">Prize Threshold:</span>
                <span className="font-medium">
                  {isLoadingPrizeThreshold
                    ? "Loading..."
                    : `$${(
                        Number(prizeThreshold) /
                        10 ** (decimals ? Number(decimals) : 18)
                      ).toLocaleString()}`}
                </span>
              </p>

              <p className="flex justify-between">
                <span className="text-light-gray-1">Last Bidder:</span>
                <span className="font-medium">
                  {isLoadingLastBidder ? "Loading..." : lastBidder}
                </span>
              </p>
            </div>
          </div>

          {/* Admin action buttons */}
          {/* Admin action buttons */}
          {/* Admin action buttons */}

          {/* 0xbd2401424594f30D793888786224455050F2d4df */}

          <div className="p-6 bg-Dark-Purple rounded-lg shadow-lg text-center max-w-lg mx-auto mt-10">
            {address === ABYSS_ADMIN && (
              <div className="p-6 bg-Dark-Purple rounded-lg shadow-lg text-center max-w-lg mx-auto mt-10">
                {/* Existing buttons */}

                {/* Pair Address Update Section */}
                <div className="mt-6 bg-HowTo-Cards-Background p-4 rounded-md border border-HowTo-Cards-border">
                  <label
                    htmlFor="pairAddress"
                    className="block text-Light-Gray-1 text-sm mb-2 font-medium"
                  >
                    Pair Address:
                  </label>
                  <input
                    id="pairAddress"
                    type="text"
                    value={pairAddr}
                    onChange={(e) => setPairAddr(e.target.value)}
                    placeholder="0x..."
                    className="w-full p-3 rounded-md bg-HowItWorks-Cards-Background text-Light-Gray border border-HowTo-Cards-border focus:outline-none focus:ring-2 focus:ring-Purple"
                  />

                  <button
                    disabled={isProcessing || !pairAddr}
                    onClick={handleAddPairAddr}
                    className={`mt-4 w-full px-5 py-3 text-lg font-semibold rounded-md transition-all
                                            ${
                                              isProcessing &&
                                              currentAction === "pairAddressSet"
                                                ? "bg-Light-Gray-1 text-Dark-Purple cursor-not-allowed"
                                                : "bg-Purple text-Light-Gray hover:bg-opacity-80 active:scale-95"
                                            }`}
                  >
                    {isProcessing && currentAction === "pairAddressSet"
                      ? "Updating Pair Address..."
                      : "Update Pair Address"}
                  </button>
                </div>
              </div>
            )}

            {/* Start & End Buttons */}
            <div className="flex flex-col gap-4">
              <button
                disabled={isProcessing}
                onClick={handleStartGame}
                className={`w-full px-5 py-3 text-lg font-semibold rounded-md transition-all
        ${
          isProcessing && currentAction === "start"
            ? "bg-Light-Gray-1 text-Dark-Purple cursor-not-allowed"
            : "bg-Purple text-Light-Gray hover:bg-opacity-80 active:scale-95"
        }`}
              >
                {isProcessing && currentAction === "start"
                  ? "Starting Game..."
                  : "Start Game"}
              </button>

              <button
                disabled={isProcessing}
                onClick={handleEndRound}
                className={`w-full px-5 py-3 text-lg font-semibold rounded-md transition-all
        ${
          isProcessing && currentAction === "end"
            ? "bg-Light-Gray-1 text-Dark-Purple cursor-not-allowed"
            : "bg-Purple text-Light-Gray hover:bg-opacity-80 active:scale-95"
        }`}
              >
                {isProcessing && currentAction === "end"
                  ? "Ending Round..."
                  : "End Round"}
              </button>

              <button
                disabled={isProcessing}
                onClick={handleForceEndAndStartNewGame}
                className={`w-full px-5 py-3 text-lg font-semibold rounded-md transition-all
        ${
          isProcessing && currentAction === "force"
            ? "bg-Light-Gray-1 text-Dark-Purple cursor-not-allowed"
            : "bg-Purple text-Light-Gray hover:bg-opacity-80 active:scale-95"
        }`}
              >
                {isProcessing && currentAction === "force"
                  ? "Processing..."
                  : "Force End & Start New Game"}
              </button>
            </div>

            {/* Random Winner Selection */}
            <div className="mt-6 bg-HowTo-Cards-Background p-4 rounded-md border border-HowTo-Cards-border">
              <label
                htmlFor="requestID"
                className="block text-Light-Gray-1 text-sm mb-2 font-medium"
              >
                Request ID:
              </label>
              <input
                id="requestID"
                type="number"
                onChange={(e) => setRequestIDs(BigInt(e.target.value))}
                className="w-full p-3 rounded-md bg-HowItWorks-Cards-Background text-Light-Gray border border-HowTo-Cards-border focus:outline-none focus:ring-2 focus:ring-Purple"
              />

              <button
                disabled={isProcessing || requestIDs === null}
                onClick={handleRandomWinnerSelection}
                className={`mt-4 w-full px-5 py-3 text-lg font-semibold rounded-md transition-all
        ${
          isProcessing && currentAction === "randomWinners"
            ? "bg-Light-Gray-1 text-Dark-Purple cursor-not-allowed"
            : "bg-Purple text-Light-Gray hover:bg-opacity-80 active:scale-95"
        }`}
              >
                {isProcessing && currentAction === "randomWinners"
                  ? "Selecting Winner..."
                  : "Select Random Winner"}
              </button>
            </div>
          </div>

          {/* Confirmation and Error messages */}
          {/* Confirmation and Error messages */}
          {/* Confirmation and Error messages */}

          {isConfirming && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-HowTo-Cards-Background border border-HowTo-Cards-border p-4 rounded-md text-Light-Gray text-center shadow-lg"
            >
              <p className="text-lg font-semibold text-Purple">
                Waiting for confirmation...
              </p>
              <p className="mt-2 text-Light-Gray-1 text-sm break-all">
                Transaction: <span className="text-Light-Gray">{txHash}</span>
              </p>
            </motion.div>
          )}

          {/* General Error Message */}
          {errorMsg && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-red-900 bg-opacity-30 border border-red-600 p-4 rounded-md text-white text-center shadow-lg"
            >
              <p className="text-lg font-semibold text-red-400">Error</p>
              <p className="mt-2 text-sm">{errorMsg}</p>
            </motion.div>
          )}

          {/* Specific Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-red-900 bg-opacity-30 border border-red-600 p-4 rounded-md text-white text-center shadow-lg"
            >
              <p className="text-lg font-semibold text-red-400">Error</p>
              <p className="mt-2 text-sm">
                {typeof error === "object" && "shortMessage" in error
                  ? (error as BaseError).shortMessage
                  : error.message}
              </p>
            </motion.div>
          )}

          {/* Leaderboard */}
          {/* Leaderboard */}
          {/* Leaderboard */}

          {isLoadingLeaderboard ? (
            <p>Loading leaderboard...</p>
          ) : leaderboard && leaderboard.length > 0 ? (
            <>
              {/* Leaderboard Table */}
              <div className="mt-6 border border-HowTo-Cards-border rounded-md overflow-x-auto custom-scrollbar">
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
          ) : (
            <p className="text-left font-raleway text-2xl text-Light-Gray mt-10">
              No leaderboard entries found.
            </p>
          )}
        </div>

        {/* Theo's web3 stuff */}
        {/* Theo's web3 stuff */}
        {/* Theo's web3 stuff */}
        {/* Theo's web3 stuff */}
        <p>
          Latest ETH Price:{" "}
          {isLoadingGetLatestETHPrice
            ? "Loading..."
            : (Number(getLatestETHPrice) / 10 ** 8).toFixed(2)}
        </p>
        <p>
          Abyss USD Price:{" "}
          {isLoadingGetAbyssUSDPrice
            ? "Loading..."
            : (Number(getAbyssUSDPrice) / 10 ** 18).toFixed(4)}
        </p>
      </div>
    );
  }

  return (
    <div className="Admin">
      <h3>Welcome user {address}</h3>
      <ConnectButton />
    </div>
  );
}

export default Admin;
