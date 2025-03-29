

export const divideFunct = (a: number, b: number) => {
  const c = (a / 100) * b;
  return c;
}
// Format time remaining in hours, minutes, seconds
export const formatTimeRemaining = (seconds: number) => {
    if (!seconds) return 'closed';
  
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
  
    return `${hours}h : ${minutes}m : ${remainingSeconds}s`;
  };
  
  // Calculate "time ago" for timestamps
  export function timeAgo(timestamp: number) {
    const now = Date.now(); // Current time in milliseconds
    const seconds = Math.floor((now - timestamp * 1000) / 1000); // Difference in seconds
  
    if (seconds < 60) return `${seconds} seconds ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minutes ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hours ago`;
    const days = Math.floor(hours / 24);
    if (days < 7) return `${days} days ago`;
    const weeks = Math.floor(days / 7);
    if (weeks < 4) return `${weeks} weeks ago`;
    const months = Math.floor(days / 30);
    if (months < 12) return `${months} months ago`;
    const years = Math.floor(days / 365);
    return `${years} years ago`;
  }
  
  // Format leaderboard entries from raw contract data
  export const formatLeaderboardEntry = (entry: any, decimals: number = 18) => ({
    player: entry.player,
    totalBids: entry.totalBids.toString(),
    totalTokensBidded: (Number(entry.totalTokensBidded) / 10 ** decimals).toFixed(4),
    totalUSDBidded: (Number(entry.totalUSDBidded) / 10 ** decimals).toFixed(2),
    firstBidTimestamp: new Date(Number(entry.firstBidTimestamp) * 1000).toLocaleString(),
    lastBidTimestamp: new Date(Number(entry.lastBidTimestamp) * 1000).toLocaleString(),
    firstBidAmount: (Number(entry.firstBidAmount) / 10 ** decimals).toFixed(4),
    lastBidAmount: (Number(entry.lastBidAmount) / 10 ** decimals).toFixed(4),
  });
  
  // Format round winner data from raw contract data
  export const formatRoundWinner = (winner: any, decimals: number = 18) => {
    if (!winner || Number(winner.round) === 0) return null;
  
    return {
      round: winner.round,
      lastBidder: winner.lastBidder,
      lastBidderPrizeTokens: (Number(winner.lastBidderPrizeTokens) / 10 ** decimals).toFixed(4),
      lastBidderPrizeUSD: (Number(winner.lastBidderPrizeUSD) / 10 ** decimals).toFixed(2),
      randomWinners: winner.randomWinners || [],
      prizePerRandomWinnerTokens: (Number(winner.prizePerRandomWinnerTokens) / 10 ** decimals).toFixed(4),
      prizePerRandomWinnerUSD: (Number(winner.prizePerRandomWinnerUSD) / 10 ** decimals).toFixed(2),
      timestamp: new Date(Number(winner.timestamp) * 1000).toLocaleString()
    };
  };
  
  // Format token amount with appropriate decimals
  export const formatTokenAmount = (amount: bigint | undefined, decimals: bigint | undefined | number) => {
    if (amount === undefined || decimals === undefined) return '0.00';
    
    const balanceNumber = Number(amount) / 10 ** Number(decimals);
    return balanceNumber.toLocaleString();
  };