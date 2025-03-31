
import { publicClient } from '../config/publicConfig'
import { POT_ABI, ABYSS_POT_CA, TOKEN_ABI, NULL_ADDR } from './config'
import { divideFunct } from './formatters';

// Example function to read contract data without wallet connection
export const pureLastBidder = await publicClient.readContract({
    ...POT_ABI,
    address: ABYSS_POT_CA,
    functionName: "lastBidder",
})

// Read token contract data.
export const pureSymbol = await publicClient.readContract({
    ...TOKEN_ABI,
    functionName: "symbol",
});
export const pureName = await publicClient.readContract({
    ...TOKEN_ABI,
    functionName: "name",
});

export const pureDecimals = await publicClient.readContract({
    ...TOKEN_ABI,
    functionName: "decimals",
});

export const pureBidAmount = await publicClient.readContract({
    ...POT_ABI,
    functionName: "bidAmount",
});

export const pureLeaderboard = await publicClient.readContract({
    ...POT_ABI,
    functionName: "getLeaderboard",
});

export const pureOverallTokensBidded = pureLeaderboard
    ? pureLeaderboard.reduce((total, entry) => {
        return total + divideFunct(95, Number(entry.totalTokensBidded) / Math.pow(10, Number(pureDecimals || 18)));
    }, 0)
    : 0;

export const pureOverallUSDBidded = pureLeaderboard
    ? pureLeaderboard.reduce((total, entry) => {
        return total + Number(entry.totalUSDBidded) / Math.pow(10, Number(pureDecimals || 18));
    }, 0)
    : 0;

const getTokenBurnt = await publicClient.readContract({
    ...TOKEN_ABI,
    functionName: 'balanceOf',
    args: [NULL_ADDR as `0x${string}`],
});

export const pureBurntTokens = getTokenBurnt
    ? (Number(getTokenBurnt) / Math.pow(10, Number(pureDecimals || 18))).toLocaleString()
    : 0;

// Read additional pot data.
export const pureTimeRemaining = await publicClient.readContract({
    ...POT_ABI,
    functionName: "getTimeRemaining",
});
export const purePotValue = await publicClient.readContract({
    ...POT_ABI,
    functionName: "getPotValue",
});
export const purePotValueInUSD = await publicClient.readContract({
    ...POT_ABI,
    functionName: "getPotValueInUSD",
});

const pureGlobalPlayers = await publicClient.readContract({
    ...POT_ABI,
    functionName: "getGlobalPlayers",
});

export const totalPlayersCount = pureGlobalPlayers
    ? pureGlobalPlayers.length
    : 0;

export const pureCurrentRound = await publicClient.readContract({
    ...POT_ABI,
    functionName: "getCurrentRound",
});

export const purePlayerCount = await publicClient.readContract({
    ...POT_ABI,
    functionName: "getPlayerCount",
});

export const purePrizeThreshold = await publicClient.readContract({
    ...POT_ABI,
    functionName: "prizeThreshold",
});

const pureLatestETHPrice = await publicClient.readContract({
    ...POT_ABI,
    functionName: "getLatestETHPrice",
});

export const pureAbyssUSDPrice = await publicClient.readContract({
    ...POT_ABI,
    functionName: "getAbyssUSDPrice",
});



export const pureLatestETHPrice_s = pureLatestETHPrice
    ? (Number(pureLatestETHPrice) / Math.pow(10, Number(8))).toLocaleString()
    : 0;

export const pureAbyssUSDPrice_s = pureAbyssUSDPrice
    ? (Number(pureAbyssUSDPrice) / Math.pow(10, Number(pureDecimals || 18))).toLocaleString()
    : 0;

export const pureBurntTokensUSDValue = pureBurntTokens || pureAbyssUSDPrice
    ? (Number(pureBurntTokens) * (Number(pureAbyssUSDPrice) / Math.pow(10, Number(pureDecimals || 18)))).toLocaleString()
    : 0;

export const pureBidAmountUSDValue = pureAbyssUSDPrice || pureBidAmount ?
    (Number(pureBidAmount) / Math.pow(10, 18) * (Number(pureAbyssUSDPrice) / Math.pow(10, 18))).toLocaleString()
    : 0;

export const pureGameActive = await publicClient.readContract({
    ...POT_ABI,
    functionName: "gameActive",
});

export const pureGameExpired = await publicClient.readContract({
    ...POT_ABI,
    functionName: "isGameExpired",
});

export const pureTotalBidCount = await publicClient.readContract({
    ...POT_ABI,
    functionName: "getTotalBidCount",
});

export const pureCurrentRoundBidHistory = await publicClient.readContract({
    ...POT_ABI,
    functionName: "getCurrentRoundBidHistory",
});

export const pureMostRecentBids = await publicClient.readContract({
    ...POT_ABI,
    functionName: "getMostRecentBids",
    args: [3 as unknown as bigint],
});

export const pureCurrentRoundBidCount = await publicClient.readContract({
    ...POT_ABI,
    functionName: "getRoundBidCount",
    args: [pureCurrentRound as unknown as bigint],
});

export const pureTokenBurnt = await publicClient.readContract({
    ...TOKEN_ABI,
    functionName: "balanceOf",
    args: [NULL_ADDR as `0x${string}`],
});

/**
 * Fetches the bid history for a given round.
 */
export const fetchPureBidHistoryByRound = async (selectedRound: number) => {
  return await publicClient.readContract({
    ...POT_ABI,
    address: ABYSS_POT_CA,
    functionName: "getBidHistoryByRound",
    args: [BigInt(selectedRound)],
  });
};

/**
 * Fetches the round bid count.
 */
export const fetchPureRoundBidCount = async (selectedRound: number) => {
  return await publicClient.readContract({
    ...POT_ABI,
    address: ABYSS_POT_CA,
    functionName: "getRoundBidCount",
    args: [BigInt(selectedRound)],
  });
};

/**
 * Fetches the round winner.
 */
export const fetchPureRoundWinner = async (selectedRound: number) => {
  return await publicClient.readContract({
    ...POT_ABI,
    address: ABYSS_POT_CA,
    functionName: "roundWinnersHistory",
    args: [BigInt(selectedRound)],
  });
};

/**
 * Fetches the random winners for the round.
 */
export const fetchPureRandomWinnersByRound = async (selectedRound: number) => {
  return await publicClient.readContract({
    ...POT_ABI,
    address: ABYSS_POT_CA,
    functionName: "getRandomWinnersByRound",
    args: [BigInt(selectedRound)],
  });
};

