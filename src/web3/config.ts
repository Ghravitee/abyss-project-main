// export const ABYSS_TOKEN_CA = "0xD91EbEa93da3d64a8D725af96a633fcD68B4E5C6";
// export const ABYSS_POT_CA = "0x2121122A90b6b0865E1d5B55631034BCdA16804F";
// export const NULL_ADDR = "0x000000000000000000000000000000000000dEaD";
// export const ABYSS_ADMIN = "0x0A885A5b62d76365CCE568B78399335E0B23b9FF";
// export const testChainID = 11155111;
// export const mainnetID = 1;

// export const TOKEN_ABI = {
//   address: "0xD91EbEa93da3d64a8D725af96a633fcD68B4E5C6",
//   abi: [
//     {
//       inputs: [
//         { internalType: "address", name: "initialOwner", type: "address" },
//         { internalType: "string", name: "tokenName", type: "string" },
//         { internalType: "string", name: "tokenSymbol", type: "string" },
//         { internalType: "uint256", name: "totalSupply", type: "uint256" },
//       ],
//       stateMutability: "nonpayable",
//       type: "constructor",
//     },
//     {
//       inputs: [
//         { internalType: "address", name: "spender", type: "address" },
//         { internalType: "uint256", name: "allowance", type: "uint256" },
//         { internalType: "uint256", name: "needed", type: "uint256" },
//       ],
//       name: "ERC20InsufficientAllowance",
//       type: "error",
//     },
//     {
//       inputs: [
//         { internalType: "address", name: "sender", type: "address" },
//         { internalType: "uint256", name: "balance", type: "uint256" },
//         { internalType: "uint256", name: "needed", type: "uint256" },
//       ],
//       name: "ERC20InsufficientBalance",
//       type: "error",
//     },
//     {
//       inputs: [{ internalType: "address", name: "approver", type: "address" }],
//       name: "ERC20InvalidApprover",
//       type: "error",
//     },
//     {
//       inputs: [{ internalType: "address", name: "receiver", type: "address" }],
//       name: "ERC20InvalidReceiver",
//       type: "error",
//     },
//     {
//       inputs: [{ internalType: "address", name: "sender", type: "address" }],
//       name: "ERC20InvalidSender",
//       type: "error",
//     },
//     {
//       inputs: [{ internalType: "address", name: "spender", type: "address" }],
//       name: "ERC20InvalidSpender",
//       type: "error",
//     },
//     {
//       inputs: [{ internalType: "address", name: "owner", type: "address" }],
//       name: "OwnableInvalidOwner",
//       type: "error",
//     },
//     {
//       inputs: [{ internalType: "address", name: "account", type: "address" }],
//       name: "OwnableUnauthorizedAccount",
//       type: "error",
//     },
//     {
//       anonymous: false,
//       inputs: [
//         {
//           indexed: true,
//           internalType: "address",
//           name: "owner",
//           type: "address",
//         },
//         {
//           indexed: true,
//           internalType: "address",
//           name: "spender",
//           type: "address",
//         },
//         {
//           indexed: false,
//           internalType: "uint256",
//           name: "value",
//           type: "uint256",
//         },
//       ],
//       name: "Approval",
//       type: "event",
//     },
//     {
//       anonymous: false,
//       inputs: [
//         {
//           indexed: true,
//           internalType: "address",
//           name: "previousOwner",
//           type: "address",
//         },
//         {
//           indexed: true,
//           internalType: "address",
//           name: "newOwner",
//           type: "address",
//         },
//       ],
//       name: "OwnershipTransferred",
//       type: "event",
//     },
//     {
//       anonymous: false,
//       inputs: [
//         {
//           indexed: true,
//           internalType: "address",
//           name: "from",
//           type: "address",
//         },
//         { indexed: true, internalType: "address", name: "to", type: "address" },
//         {
//           indexed: false,
//           internalType: "uint256",
//           name: "value",
//           type: "uint256",
//         },
//       ],
//       name: "Transfer",
//       type: "event",
//     },
//     {
//       inputs: [
//         { internalType: "address", name: "owner", type: "address" },
//         { internalType: "address", name: "spender", type: "address" },
//       ],
//       name: "allowance",
//       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [
//         { internalType: "address", name: "spender", type: "address" },
//         { internalType: "uint256", name: "value", type: "uint256" },
//       ],
//       name: "approve",
//       outputs: [{ internalType: "bool", name: "", type: "bool" }],
//       stateMutability: "nonpayable",
//       type: "function",
//     },
//     {
//       inputs: [{ internalType: "address", name: "account", type: "address" }],
//       name: "balanceOf",
//       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "decimals",
//       outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "name",
//       outputs: [{ internalType: "string", name: "", type: "string" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "owner",
//       outputs: [{ internalType: "address", name: "", type: "address" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "renounceOwnership",
//       outputs: [],
//       stateMutability: "nonpayable",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "symbol",
//       outputs: [{ internalType: "string", name: "", type: "string" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "totalSupply",
//       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [
//         { internalType: "address", name: "to", type: "address" },
//         { internalType: "uint256", name: "value", type: "uint256" },
//       ],
//       name: "transfer",
//       outputs: [{ internalType: "bool", name: "", type: "bool" }],
//       stateMutability: "nonpayable",
//       type: "function",
//     },
//     {
//       inputs: [
//         { internalType: "address", name: "from", type: "address" },
//         { internalType: "address", name: "to", type: "address" },
//         { internalType: "uint256", name: "value", type: "uint256" },
//       ],
//       name: "transferFrom",
//       outputs: [{ internalType: "bool", name: "", type: "bool" }],
//       stateMutability: "nonpayable",
//       type: "function",
//     },
//     {
//       inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
//       name: "transferOwnership",
//       outputs: [],
//       stateMutability: "nonpayable",
//       type: "function",
//     },
//   ],
// } as const;

// export const POT_ABI = {
//   address: "0x2121122A90b6b0865E1d5B55631034BCdA16804F",
//   abi: [
//     {
//       inputs: [
//         { internalType: "address", name: "_abyssToken", type: "address" },
//         { internalType: "address", name: "_wethUsdtPair", type: "address" },
//         { internalType: "address", name: "_owner", type: "address" },
//         { internalType: "address", name: "_wrapperAddress", type: "address" },
//         { internalType: "uint32", name: "_callbackGasLimit", type: "uint32" },
//         {
//           internalType: "uint16",
//           name: "_requestConfirmations",
//           type: "uint16",
//         },
//         { internalType: "uint32", name: "_numWords", type: "uint32" },
//         { internalType: "address", name: "_pythAddress", type: "address" },
//         {
//           internalType: "bytes32",
//           name: "_pythEthUsdPriceId",
//           type: "bytes32",
//         },
//       ],
//       stateMutability: "nonpayable",
//       type: "constructor",
//     },
//     { inputs: [], name: "BidTimerExpired", type: "error" },
//     { inputs: [], name: "BidTimerNotExpired", type: "error" },
//     { inputs: [], name: "CannotWithdrawDuringActiveRound", type: "error" },
//     { inputs: [], name: "GameAlreadyActive", type: "error" },
//     { inputs: [], name: "GameInactive", type: "error" },
//     { inputs: [], name: "InsufficientBalance", type: "error" },
//     { inputs: [], name: "InvalidAmount", type: "error" },
//     { inputs: [], name: "InvalidPercentage", type: "error" },
//     { inputs: [], name: "InvalidPythFeed", type: "error" },
//     { inputs: [], name: "InvalidRequest", type: "error" },
//     { inputs: [], name: "InvalidWinnersCount", type: "error" },
//     { inputs: [], name: "NativeTransferFailed", type: "error" },
//     { inputs: [], name: "NoPlayersAvailable", type: "error" },
//     {
//       inputs: [
//         { internalType: "address", name: "have", type: "address" },
//         { internalType: "address", name: "want", type: "address" },
//       ],
//       name: "OnlyVRFWrapperCanFulfill",
//       type: "error",
//     },
//     {
//       inputs: [{ internalType: "address", name: "owner", type: "address" }],
//       name: "OwnableInvalidOwner",
//       type: "error",
//     },
//     {
//       inputs: [{ internalType: "address", name: "account", type: "address" }],
//       name: "OwnableUnauthorizedAccount",
//       type: "error",
//     },
//     { inputs: [], name: "PairNotSet", type: "error" },
//     { inputs: [], name: "PriceNotAvailable", type: "error" },
//     { inputs: [], name: "RequestNotFound", type: "error" },
//     {
//       inputs: [{ internalType: "address", name: "token", type: "address" }],
//       name: "SafeERC20FailedOperation",
//       type: "error",
//     },
//     { inputs: [], name: "TokenAllowanceTooLow", type: "error" },
//     {
//       anonymous: false,
//       inputs: [
//         {
//           indexed: true,
//           internalType: "address",
//           name: "bidder",
//           type: "address",
//         },
//         {
//           indexed: false,
//           internalType: "uint256",
//           name: "timestamp",
//           type: "uint256",
//         },
//         {
//           indexed: false,
//           internalType: "uint256",
//           name: "potAmount",
//           type: "uint256",
//         },
//         {
//           indexed: false,
//           internalType: "uint64",
//           name: "gameRound",
//           type: "uint64",
//         },
//       ],
//       name: "BidPlaced",
//       type: "event",
//     },
//     {
//       anonymous: false,
//       inputs: [
//         {
//           indexed: false,
//           internalType: "address",
//           name: "_addr",
//           type: "address",
//         },
//       ],
//       name: "ChainlinkPriceFeedUpdated",
//       type: "event",
//     },
//     {
//       anonymous: false,
//       inputs: [
//         {
//           indexed: true,
//           internalType: "address",
//           name: "winner",
//           type: "address",
//         },
//         {
//           indexed: false,
//           internalType: "uint256",
//           name: "winAmount",
//           type: "uint256",
//         },
//         {
//           indexed: false,
//           internalType: "uint256",
//           name: "timestamp",
//           type: "uint256",
//         },
//         {
//           indexed: false,
//           internalType: "uint64",
//           name: "gameRound",
//           type: "uint64",
//         },
//       ],
//       name: "GameEnded",
//       type: "event",
//     },
//     {
//       anonymous: false,
//       inputs: [
//         {
//           indexed: false,
//           internalType: "uint256",
//           name: "timestamp",
//           type: "uint256",
//         },
//         {
//           indexed: false,
//           internalType: "uint64",
//           name: "gameRound",
//           type: "uint64",
//         },
//       ],
//       name: "GameStarted",
//       type: "event",
//     },
//     {
//       anonymous: false,
//       inputs: [
//         {
//           indexed: true,
//           internalType: "address",
//           name: "previousOwner",
//           type: "address",
//         },
//         {
//           indexed: true,
//           internalType: "address",
//           name: "newOwner",
//           type: "address",
//         },
//       ],
//       name: "OwnershipTransferred",
//       type: "event",
//     },
//     {
//       anonymous: false,
//       inputs: [
//         {
//           indexed: false,
//           internalType: "enum AbyssPot.PriceFeedSource",
//           name: "source",
//           type: "uint8",
//         },
//       ],
//       name: "PriceFeedSourceChanged",
//       type: "event",
//     },
//     {
//       anonymous: false,
//       inputs: [
//         {
//           indexed: false,
//           internalType: "address",
//           name: "pythAddress",
//           type: "address",
//         },
//         {
//           indexed: false,
//           internalType: "bytes32",
//           name: "ethUsdPriceId",
//           type: "bytes32",
//         },
//       ],
//       name: "PythPriceFeedUpdated",
//       type: "event",
//     },
//     {
//       anonymous: false,
//       inputs: [
//         {
//           indexed: true,
//           internalType: "uint256",
//           name: "requestId",
//           type: "uint256",
//         },
//         {
//           indexed: false,
//           internalType: "uint256",
//           name: "totalPrize",
//           type: "uint256",
//         },
//         {
//           indexed: false,
//           internalType: "uint64",
//           name: "round",
//           type: "uint64",
//         },
//         {
//           indexed: false,
//           internalType: "uint8",
//           name: "winnersCount",
//           type: "uint8",
//         },
//       ],
//       name: "RandomRequestUpdated",
//       type: "event",
//     },
//     {
//       anonymous: false,
//       inputs: [
//         {
//           indexed: false,
//           internalType: "address[]",
//           name: "winners",
//           type: "address[]",
//         },
//         {
//           indexed: false,
//           internalType: "uint256",
//           name: "prizePerWinner",
//           type: "uint256",
//         },
//         {
//           indexed: false,
//           internalType: "uint256",
//           name: "timestamp",
//           type: "uint256",
//         },
//         {
//           indexed: false,
//           internalType: "uint64",
//           name: "gameRound",
//           type: "uint64",
//         },
//       ],
//       name: "RandomWinnersSelected",
//       type: "event",
//     },
//     {
//       anonymous: false,
//       inputs: [
//         {
//           indexed: false,
//           internalType: "uint256",
//           name: "requestId",
//           type: "uint256",
//         },
//       ],
//       name: "RandomnessRequested",
//       type: "event",
//     },
//     {
//       anonymous: false,
//       inputs: [
//         {
//           indexed: false,
//           internalType: "uint256",
//           name: "requestId",
//           type: "uint256",
//         },
//         {
//           indexed: false,
//           internalType: "uint256[]",
//           name: "randomWords",
//           type: "uint256[]",
//         },
//         {
//           indexed: false,
//           internalType: "uint256",
//           name: "payment",
//           type: "uint256",
//         },
//       ],
//       name: "RequestFulfilled",
//       type: "event",
//     },
//     {
//       anonymous: false,
//       inputs: [
//         {
//           indexed: false,
//           internalType: "uint32",
//           name: "callbackGasLimit",
//           type: "uint32",
//         },
//         {
//           indexed: false,
//           internalType: "uint16",
//           name: "requestConfirmations",
//           type: "uint16",
//         },
//         {
//           indexed: false,
//           internalType: "uint32",
//           name: "numWords",
//           type: "uint32",
//         },
//       ],
//       name: "VRFParametersUpdated",
//       type: "event",
//     },
//     {
//       inputs: [],
//       name: "abyssToken",
//       outputs: [{ internalType: "contract IERC20", name: "", type: "address" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "abyssWethPair",
//       outputs: [{ internalType: "address", name: "", type: "address" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "adminEndRound",
//       outputs: [],
//       stateMutability: "nonpayable",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "bidAmount",
//       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "bidEndTime",
//       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "bidTimerExtension",
//       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "burnPercentage",
//       outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "callbackGasLimit",
//       outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "chainlinkPriceFeed",
//       outputs: [
//         {
//           internalType: "contract AggregatorV3Interface",
//           name: "",
//           type: "address",
//         },
//       ],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "currentPriceFeed",
//       outputs: [
//         {
//           internalType: "enum AbyssPot.PriceFeedSource",
//           name: "",
//           type: "uint8",
//         },
//       ],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "forceEndAndStartNewGame",
//       outputs: [],
//       stateMutability: "nonpayable",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "gameActive",
//       outputs: [{ internalType: "bool", name: "", type: "bool" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "gameRound",
//       outputs: [{ internalType: "uint64", name: "", type: "uint64" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "getAbyssETHPrice",
//       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "getAbyssUSDPrice",
//       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "getBalance",
//       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [{ internalType: "uint64", name: "round", type: "uint64" }],
//       name: "getBidHistoryByRound",
//       outputs: [
//         {
//           components: [
//             { internalType: "address", name: "bidder", type: "address" },
//             { internalType: "uint256", name: "timestamp", type: "uint256" },
//             { internalType: "uint256", name: "tokensBidded", type: "uint256" },
//             { internalType: "uint256", name: "usdValue", type: "uint256" },
//             { internalType: "uint64", name: "round", type: "uint64" },
//           ],
//           internalType: "struct AbyssPot.BidEvent[]",
//           name: "",
//           type: "tuple[]",
//         },
//       ],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "getChainlinkETHPrice",
//       outputs: [{ internalType: "int256", name: "", type: "int256" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "getCurrentRound",
//       outputs: [{ internalType: "uint64", name: "", type: "uint64" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "getCurrentRoundBidHistory",
//       outputs: [
//         {
//           components: [
//             { internalType: "address", name: "bidder", type: "address" },
//             { internalType: "uint256", name: "timestamp", type: "uint256" },
//             { internalType: "uint256", name: "tokensBidded", type: "uint256" },
//             { internalType: "uint256", name: "usdValue", type: "uint256" },
//             { internalType: "uint64", name: "round", type: "uint64" },
//           ],
//           internalType: "struct AbyssPot.BidEvent[]",
//           name: "",
//           type: "tuple[]",
//         },
//       ],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "getGlobalPlayers",
//       outputs: [{ internalType: "address[]", name: "", type: "address[]" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "getLatestETHPrice",
//       outputs: [{ internalType: "int256", name: "", type: "int256" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "getLeaderboard",
//       outputs: [
//         {
//           components: [
//             { internalType: "address", name: "player", type: "address" },
//             { internalType: "uint256", name: "totalBids", type: "uint256" },
//             {
//               internalType: "uint256",
//               name: "totalTokensBidded",
//               type: "uint256",
//             },
//             {
//               internalType: "uint256",
//               name: "totalUSDBidded",
//               type: "uint256",
//             },
//             {
//               internalType: "uint256",
//               name: "firstBidTimestamp",
//               type: "uint256",
//             },
//             {
//               internalType: "uint256",
//               name: "lastBidTimestamp",
//               type: "uint256",
//             },
//             {
//               internalType: "uint256",
//               name: "firstBidAmount",
//               type: "uint256",
//             },
//             { internalType: "uint256", name: "lastBidAmount", type: "uint256" },
//           ],
//           internalType: "struct AbyssPot.LeaderboardEntry[]",
//           name: "",
//           type: "tuple[]",
//         },
//       ],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "getLinkToken",
//       outputs: [
//         {
//           internalType: "contract LinkTokenInterface",
//           name: "",
//           type: "address",
//         },
//       ],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [{ internalType: "uint256", name: "count", type: "uint256" }],
//       name: "getMostRecentBids",
//       outputs: [
//         {
//           components: [
//             { internalType: "address", name: "bidder", type: "address" },
//             { internalType: "uint256", name: "timestamp", type: "uint256" },
//             { internalType: "uint256", name: "tokensBidded", type: "uint256" },
//             { internalType: "uint256", name: "usdValue", type: "uint256" },
//             { internalType: "uint64", name: "round", type: "uint64" },
//           ],
//           internalType: "struct AbyssPot.BidEvent[]",
//           name: "",
//           type: "tuple[]",
//         },
//       ],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [{ internalType: "address", name: "player", type: "address" }],
//       name: "getPlayerBidHistory",
//       outputs: [
//         {
//           components: [
//             { internalType: "uint64", name: "round", type: "uint64" },
//             { internalType: "uint256", name: "timestamp", type: "uint256" },
//             { internalType: "uint256", name: "tokensBidded", type: "uint256" },
//             { internalType: "uint256", name: "usdValue", type: "uint256" },
//           ],
//           internalType: "struct AbyssPot.BidHistory[]",
//           name: "",
//           type: "tuple[]",
//         },
//       ],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "getPlayerCount",
//       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [{ internalType: "address", name: "player", type: "address" }],
//       name: "getPlayerStats",
//       outputs: [
//         {
//           components: [
//             { internalType: "uint256", name: "totalBids", type: "uint256" },
//             {
//               internalType: "uint256",
//               name: "totalTokensBidded",
//               type: "uint256",
//             },
//             {
//               internalType: "uint256",
//               name: "totalUSDBidded",
//               type: "uint256",
//             },
//             {
//               internalType: "uint256",
//               name: "firstBidTimestamp",
//               type: "uint256",
//             },
//             {
//               internalType: "uint256",
//               name: "lastBidTimestamp",
//               type: "uint256",
//             },
//             {
//               internalType: "uint256",
//               name: "firstBidAmount",
//               type: "uint256",
//             },
//             { internalType: "uint256", name: "lastBidAmount", type: "uint256" },
//           ],
//           internalType: "struct AbyssPot.PlayerStats",
//           name: "",
//           type: "tuple",
//         },
//       ],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "getPotValue",
//       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "getPotValueInUSD",
//       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "getPythETHPrice",
//       outputs: [{ internalType: "int256", name: "", type: "int256" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [
//         { internalType: "uint256", name: "_requestId", type: "uint256" },
//       ],
//       name: "getRandomRequestsWinners",
//       outputs: [
//         { internalType: "uint64", name: "round", type: "uint64" },
//         { internalType: "uint256", name: "totalPrize", type: "uint256" },
//         { internalType: "uint8", name: "winnersCount", type: "uint8" },
//         { internalType: "address", name: "thelastBidder", type: "address" },
//         { internalType: "uint256", name: "lastBidderPrize", type: "uint256" },
//         { internalType: "address[]", name: "randomWinners", type: "address[]" },
//         { internalType: "uint256", name: "randomWinnerPrize", type: "uint256" },
//       ],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [{ internalType: "uint64", name: "round", type: "uint64" }],
//       name: "getRandomWinnersByRound",
//       outputs: [{ internalType: "address[]", name: "", type: "address[]" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [
//         { internalType: "uint256", name: "_requestId", type: "uint256" },
//       ],
//       name: "getRequestStatus",
//       outputs: [
//         { internalType: "uint256", name: "paid", type: "uint256" },
//         { internalType: "bool", name: "fulfilled", type: "bool" },
//         { internalType: "uint256[]", name: "randomWords", type: "uint256[]" },
//       ],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [{ internalType: "uint64", name: "round", type: "uint64" }],
//       name: "getRoundBidCount",
//       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "getTimeRemaining",
//       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "getTotalBidCount",
//       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [{ internalType: "address", name: "", type: "address" }],
//       name: "globalPlayerStats",
//       outputs: [
//         { internalType: "uint256", name: "totalBids", type: "uint256" },
//         { internalType: "uint256", name: "totalTokensBidded", type: "uint256" },
//         { internalType: "uint256", name: "totalUSDBidded", type: "uint256" },
//         { internalType: "uint256", name: "firstBidTimestamp", type: "uint256" },
//         { internalType: "uint256", name: "lastBidTimestamp", type: "uint256" },
//         { internalType: "uint256", name: "firstBidAmount", type: "uint256" },
//         { internalType: "uint256", name: "lastBidAmount", type: "uint256" },
//       ],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//       name: "globalPlayers",
//       outputs: [{ internalType: "address", name: "", type: "address" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "i_vrfV2PlusWrapper",
//       outputs: [
//         {
//           internalType: "contract IVRFV2PlusWrapper",
//           name: "",
//           type: "address",
//         },
//       ],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "initialBidTimerDuration",
//       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "isGameActive",
//       outputs: [{ internalType: "bool", name: "", type: "bool" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "isGameExpired",
//       outputs: [{ internalType: "bool", name: "", type: "bool" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "lastBidder",
//       outputs: [{ internalType: "address", name: "", type: "address" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [{ internalType: "uint64", name: "", type: "uint64" }],
//       name: "lastBidderByRound",
//       outputs: [{ internalType: "address", name: "", type: "address" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "lastBidderPercentage",
//       outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "lastRequestCost",
//       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "lastRequestId",
//       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [{ internalType: "uint256", name: "requestId", type: "uint256" }],
//       name: "manualRandomWinnerSelection",
//       outputs: [],
//       stateMutability: "nonpayable",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "numWords",
//       outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "owner",
//       outputs: [{ internalType: "address", name: "", type: "address" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [
//         { internalType: "address", name: "", type: "address" },
//         { internalType: "uint256", name: "", type: "uint256" },
//       ],
//       name: "playerBidHistories",
//       outputs: [
//         { internalType: "uint64", name: "round", type: "uint64" },
//         { internalType: "uint256", name: "timestamp", type: "uint256" },
//         { internalType: "uint256", name: "tokensBidded", type: "uint256" },
//         { internalType: "uint256", name: "usdValue", type: "uint256" },
//       ],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "potAmount",
//       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "prizeThreshold",
//       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "pythEthUsdPriceId",
//       outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "pythPriceFeed",
//       outputs: [{ internalType: "contract IPyth", name: "", type: "address" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//       name: "randomRequestsWinners",
//       outputs: [
//         { internalType: "uint64", name: "round", type: "uint64" },
//         { internalType: "uint256", name: "totalPrize", type: "uint256" },
//         { internalType: "uint8", name: "randomWinnersCount", type: "uint8" },
//         { internalType: "address", name: "lastBidder", type: "address" },
//         { internalType: "uint256", name: "lastBidderPrize", type: "uint256" },
//         { internalType: "uint256", name: "randomWinnerPrize", type: "uint256" },
//       ],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "randomWinnersCount",
//       outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "randomWinnersPercentage",
//       outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [
//         { internalType: "uint256", name: "_requestId", type: "uint256" },
//         { internalType: "uint256[]", name: "_randomWords", type: "uint256[]" },
//       ],
//       name: "rawFulfillRandomWords",
//       outputs: [],
//       stateMutability: "nonpayable",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "registerBid",
//       outputs: [],
//       stateMutability: "nonpayable",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "renounceOwnership",
//       outputs: [],
//       stateMutability: "nonpayable",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "requestConfirmations",
//       outputs: [{ internalType: "uint16", name: "", type: "uint16" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//       name: "requestIds",
//       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [{ internalType: "uint64", name: "", type: "uint64" }],
//       name: "roundWinnersHistory",
//       outputs: [
//         { internalType: "uint64", name: "round", type: "uint64" },
//         { internalType: "address", name: "lastBidder", type: "address" },
//         {
//           internalType: "uint256",
//           name: "lastBidderPrizeTokens",
//           type: "uint256",
//         },
//         {
//           internalType: "uint256",
//           name: "lastBidderPrizeUSD",
//           type: "uint256",
//         },
//         {
//           internalType: "uint256",
//           name: "prizePerRandomWinnerTokens",
//           type: "uint256",
//         },
//         {
//           internalType: "uint256",
//           name: "prizePerRandomWinnerUSD",
//           type: "uint256",
//         },
//         { internalType: "uint256", name: "timestamp", type: "uint256" },
//       ],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//       name: "s_requests",
//       outputs: [
//         { internalType: "uint256", name: "paid", type: "uint256" },
//         { internalType: "bool", name: "fulfilled", type: "bool" },
//       ],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [
//         { internalType: "uint256", name: "_bidAmount", type: "uint256" },
//       ],
//       name: "setBidAmount",
//       outputs: [],
//       stateMutability: "nonpayable",
//       type: "function",
//     },
//     {
//       inputs: [
//         { internalType: "uint256", name: "_extension", type: "uint256" },
//       ],
//       name: "setBidTimerExtension",
//       outputs: [],
//       stateMutability: "nonpayable",
//       type: "function",
//     },
//     {
//       inputs: [
//         { internalType: "uint8", name: "_burnPercentage", type: "uint8" },
//       ],
//       name: "setBurnPercentage",
//       outputs: [],
//       stateMutability: "nonpayable",
//       type: "function",
//     },
//     {
//       inputs: [
//         { internalType: "uint8", name: "_lastBidderPercentage", type: "uint8" },
//         {
//           internalType: "uint8",
//           name: "_randomWinnersPercentage",
//           type: "uint8",
//         },
//       ],
//       name: "setDistributionPercentages",
//       outputs: [],
//       stateMutability: "nonpayable",
//       type: "function",
//     },
//     {
//       inputs: [{ internalType: "uint256", name: "_duration", type: "uint256" }],
//       name: "setInitialBidTimerDuration",
//       outputs: [],
//       stateMutability: "nonpayable",
//       type: "function",
//     },
//     {
//       inputs: [
//         {
//           internalType: "enum AbyssPot.PriceFeedSource",
//           name: "_source",
//           type: "uint8",
//         },
//       ],
//       name: "setPriceFeedSource",
//       outputs: [],
//       stateMutability: "nonpayable",
//       type: "function",
//     },
//     {
//       inputs: [
//         { internalType: "uint256", name: "_prizeThreshold", type: "uint256" },
//       ],
//       name: "setPrizeThreshold",
//       outputs: [],
//       stateMutability: "nonpayable",
//       type: "function",
//     },
//     {
//       inputs: [
//         { internalType: "uint8", name: "_randomWinnersCount", type: "uint8" },
//       ],
//       name: "setRandomWinnersCount",
//       outputs: [],
//       stateMutability: "nonpayable",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "startGame",
//       outputs: [],
//       stateMutability: "nonpayable",
//       type: "function",
//     },
//     {
//       inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
//       name: "transferOwnership",
//       outputs: [],
//       stateMutability: "nonpayable",
//       type: "function",
//     },
//     {
//       inputs: [{ internalType: "address", name: "_addr", type: "address" }],
//       name: "updateChainlinkPriceFeed",
//       outputs: [],
//       stateMutability: "nonpayable",
//       type: "function",
//     },
//     {
//       inputs: [
//         { internalType: "address", name: "_newPairAddress", type: "address" },
//       ],
//       name: "updatePairAddress",
//       outputs: [],
//       stateMutability: "nonpayable",
//       type: "function",
//     },
//     {
//       inputs: [
//         { internalType: "address", name: "_pythAddress", type: "address" },
//         {
//           internalType: "bytes32",
//           name: "_pythEthUsdPriceId",
//           type: "bytes32",
//         },
//       ],
//       name: "updatePythPriceFeed",
//       outputs: [],
//       stateMutability: "nonpayable",
//       type: "function",
//     },
//     {
//       inputs: [
//         { internalType: "uint32", name: "_callbackGasLimit", type: "uint32" },
//         {
//           internalType: "uint16",
//           name: "_requestConfirmations",
//           type: "uint16",
//         },
//         { internalType: "uint32", name: "_numWords", type: "uint32" },
//       ],
//       name: "updateVRFParameters",
//       outputs: [],
//       stateMutability: "nonpayable",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "wethUsdtPair",
//       outputs: [{ internalType: "address", name: "", type: "address" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
//       name: "withdrawNative",
//       outputs: [],
//       stateMutability: "nonpayable",
//       type: "function",
//     },
//     {
//       inputs: [
//         { internalType: "address", name: "_tokenAddress", type: "address" },
//       ],
//       name: "withdrawToken",
//       outputs: [],
//       stateMutability: "nonpayable",
//       type: "function",
//     },
//   ],
// } as const;

export const ABYSS_TOKEN_CA = "0x4369d2bd1C80F18221154F2370E0344D1aa8e95e";
export const ABYSS_POT_CA = "0x0F64f87a6E73F72434850f053956f1759A617985";
export const NULL_ADDR = "0x000000000000000000000000000000000000dEaD";
export const ABYSS_ADMIN = "0x0A885A5b62d76365CCE568B78399335E0B23b9FF";
export const testChainID = 11155111;
export const mainnetID = 1;

export const TOKEN_ABI = {
  address: "0x4369d2bd1C80F18221154F2370E0344D1aa8e95e",
  abi: [
    {
      inputs: [
        { internalType: "address", name: "initialOwner", type: "address" },
        { internalType: "string", name: "tokenName", type: "string" },
        { internalType: "string", name: "tokenSymbol", type: "string" },
        { internalType: "uint256", name: "totalSupply", type: "uint256" },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [
        { internalType: "address", name: "spender", type: "address" },
        { internalType: "uint256", name: "allowance", type: "uint256" },
        { internalType: "uint256", name: "needed", type: "uint256" },
      ],
      name: "ERC20InsufficientAllowance",
      type: "error",
    },
    {
      inputs: [
        { internalType: "address", name: "sender", type: "address" },
        { internalType: "uint256", name: "balance", type: "uint256" },
        { internalType: "uint256", name: "needed", type: "uint256" },
      ],
      name: "ERC20InsufficientBalance",
      type: "error",
    },
    {
      inputs: [{ internalType: "address", name: "approver", type: "address" }],
      name: "ERC20InvalidApprover",
      type: "error",
    },
    {
      inputs: [{ internalType: "address", name: "receiver", type: "address" }],
      name: "ERC20InvalidReceiver",
      type: "error",
    },
    {
      inputs: [{ internalType: "address", name: "sender", type: "address" }],
      name: "ERC20InvalidSender",
      type: "error",
    },
    {
      inputs: [{ internalType: "address", name: "spender", type: "address" }],
      name: "ERC20InvalidSpender",
      type: "error",
    },
    {
      inputs: [{ internalType: "address", name: "owner", type: "address" }],
      name: "OwnableInvalidOwner",
      type: "error",
    },
    {
      inputs: [{ internalType: "address", name: "account", type: "address" }],
      name: "OwnableUnauthorizedAccount",
      type: "error",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        { indexed: true, internalType: "address", name: "to", type: "address" },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      inputs: [
        { internalType: "address", name: "owner", type: "address" },
        { internalType: "address", name: "spender", type: "address" },
      ],
      name: "allowance",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "spender", type: "address" },
        { internalType: "uint256", name: "value", type: "uint256" },
      ],
      name: "approve",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "account", type: "address" }],
      name: "balanceOf",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "decimals",
      outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "name",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "totalSupply",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "value", type: "uint256" },
      ],
      name: "transfer",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "from", type: "address" },
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "value", type: "uint256" },
      ],
      name: "transferFrom",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
} as const;

export const POT_ABI = {
  address: "0x0F64f87a6E73F72434850f053956f1759A617985",
  abi: [
    {
      type: "constructor",
      inputs: [
        {
          name: "_abyssToken",
          type: "address",
          internalType: "address",
        },
        {
          name: "_wethUsdtPair",
          type: "address",
          internalType: "address",
        },
        {
          name: "_owner",
          type: "address",
          internalType: "address",
        },
        {
          name: "_wrapperAddress",
          type: "address",
          internalType: "address",
        },
        {
          name: "_callbackGasLimit",
          type: "uint32",
          internalType: "uint32",
        },
        {
          name: "_requestConfirmations",
          type: "uint16",
          internalType: "uint16",
        },
        {
          name: "_numWords",
          type: "uint32",
          internalType: "uint32",
        },
      ],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "abyssToken",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "address",
          internalType: "contract IERC20",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "abyssWethPair",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "address",
          internalType: "address",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "adminEndRound",
      inputs: [],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "bidAmount",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "bidEndTime",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "bidTimerExtension",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "burnPercentage",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "uint8",
          internalType: "uint8",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "callbackGasLimit",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "uint32",
          internalType: "uint32",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "chainlinkPriceFeed",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "address",
          internalType: "contract AggregatorV3Interface",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "forceEndAndStartNewGame",
      inputs: [],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "gameActive",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "bool",
          internalType: "bool",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getAbyssETHPrice",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getAbyssUSDPrice",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getBalance",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getBidHistoryByRound",
      inputs: [
        {
          name: "round",
          type: "uint64",
          internalType: "uint64",
        },
      ],
      outputs: [
        {
          name: "",
          type: "tuple[]",
          internalType: "struct AbyssPot.BidEvent[]",
          components: [
            {
              name: "bidder",
              type: "address",
              internalType: "address",
            },
            {
              name: "timestamp",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "tokensBidded",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "usdValue",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "round",
              type: "uint64",
              internalType: "uint64",
            },
          ],
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getChainlinkETHPrice",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "int256",
          internalType: "int256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getCurrentRound",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "uint64",
          internalType: "uint64",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getCurrentRoundBidHistory",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "tuple[]",
          internalType: "struct AbyssPot.BidEvent[]",
          components: [
            {
              name: "bidder",
              type: "address",
              internalType: "address",
            },
            {
              name: "timestamp",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "tokensBidded",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "usdValue",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "round",
              type: "uint64",
              internalType: "uint64",
            },
          ],
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getGlobalPlayers",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "address[]",
          internalType: "address[]",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getLeaderboard",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "tuple[]",
          internalType: "struct AbyssPot.LeaderboardEntry[]",
          components: [
            {
              name: "player",
              type: "address",
              internalType: "address",
            },
            {
              name: "totalBids",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "totalTokensBidded",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "totalUSDBidded",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "firstBidTimestamp",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "lastBidTimestamp",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "firstBidAmount",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "lastBidAmount",
              type: "uint256",
              internalType: "uint256",
            },
          ],
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getLinkToken",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "address",
          internalType: "contract LinkTokenInterface",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getMostRecentBids",
      inputs: [
        {
          name: "count",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      outputs: [
        {
          name: "",
          type: "tuple[]",
          internalType: "struct AbyssPot.BidEvent[]",
          components: [
            {
              name: "bidder",
              type: "address",
              internalType: "address",
            },
            {
              name: "timestamp",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "tokensBidded",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "usdValue",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "round",
              type: "uint64",
              internalType: "uint64",
            },
          ],
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getPlayerBidHistory",
      inputs: [
        {
          name: "player",
          type: "address",
          internalType: "address",
        },
      ],
      outputs: [
        {
          name: "",
          type: "tuple[]",
          internalType: "struct AbyssPot.BidHistory[]",
          components: [
            {
              name: "round",
              type: "uint64",
              internalType: "uint64",
            },
            {
              name: "timestamp",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "tokensBidded",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "usdValue",
              type: "uint256",
              internalType: "uint256",
            },
          ],
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getPlayerCount",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getPlayerStats",
      inputs: [
        {
          name: "player",
          type: "address",
          internalType: "address",
        },
      ],
      outputs: [
        {
          name: "",
          type: "tuple",
          internalType: "struct AbyssPot.PlayerStats",
          components: [
            {
              name: "totalBids",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "totalTokensBidded",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "totalUSDBidded",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "firstBidTimestamp",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "lastBidTimestamp",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "firstBidAmount",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "lastBidAmount",
              type: "uint256",
              internalType: "uint256",
            },
          ],
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getPotValue",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getPotValueInUSD",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getRandomWinnersByRound",
      inputs: [
        {
          name: "round",
          type: "uint64",
          internalType: "uint64",
        },
      ],
      outputs: [
        {
          name: "",
          type: "address[]",
          internalType: "address[]",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getRequestStatus",
      inputs: [
        {
          name: "_requestId",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      outputs: [
        {
          name: "paid",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "fulfilled",
          type: "bool",
          internalType: "bool",
        },
        {
          name: "randomWords",
          type: "uint256[]",
          internalType: "uint256[]",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getRoundBidCount",
      inputs: [
        {
          name: "round",
          type: "uint64",
          internalType: "uint64",
        },
      ],
      outputs: [
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getTimeRemaining",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getTotalBidCount",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "i_vrfV2PlusWrapper",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "address",
          internalType: "contract IVRFV2PlusWrapper",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "initialBidTimerDuration",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "isGameActive",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "bool",
          internalType: "bool",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "isGameExpired",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "bool",
          internalType: "bool",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "lastBidder",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "address",
          internalType: "address",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "lastBidderByRound",
      inputs: [
        {
          name: "",
          type: "uint64",
          internalType: "uint64",
        },
      ],
      outputs: [
        {
          name: "",
          type: "address",
          internalType: "address",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "lastBidderPercentage",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "uint8",
          internalType: "uint8",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "lastRequestCost",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "lastRequestId",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "manualRandomWinnerSelection",
      inputs: [
        {
          name: "requestId",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "numWords",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "uint32",
          internalType: "uint32",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "owner",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "address",
          internalType: "address",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "playerBidHistories",
      inputs: [
        {
          name: "",
          type: "address",
          internalType: "address",
        },
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      outputs: [
        {
          name: "round",
          type: "uint64",
          internalType: "uint64",
        },
        {
          name: "timestamp",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "tokensBidded",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "usdValue",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "prizeThreshold",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "randomWinnersCount",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "uint8",
          internalType: "uint8",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "randomWinnersPercentage",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "uint8",
          internalType: "uint8",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "rawFulfillRandomWords",
      inputs: [
        {
          name: "_requestId",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "_randomWords",
          type: "uint256[]",
          internalType: "uint256[]",
        },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "registerBid",
      inputs: [],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "renounceOwnership",
      inputs: [],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "requestConfirmations",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "uint16",
          internalType: "uint16",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "roundWinnersHistory",
      inputs: [
        {
          name: "",
          type: "uint64",
          internalType: "uint64",
        },
      ],
      outputs: [
        {
          name: "round",
          type: "uint64",
          internalType: "uint64",
        },
        {
          name: "lastBidder",
          type: "address",
          internalType: "address",
        },
        {
          name: "lastBidderPrizeTokens",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "lastBidderPrizeUSD",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "prizePerRandomWinnerTokens",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "prizePerRandomWinnerUSD",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "timestamp",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "s_requests",
      inputs: [
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      outputs: [
        {
          name: "paid",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "fulfilled",
          type: "bool",
          internalType: "bool",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "setBidAmount",
      inputs: [
        {
          name: "_bidAmount",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "setBidTimerExtension",
      inputs: [
        {
          name: "_extension",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "setBurnPercentage",
      inputs: [
        {
          name: "_burnPercentage",
          type: "uint8",
          internalType: "uint8",
        },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "setDistributionPercentages",
      inputs: [
        {
          name: "_lastBidderPercentage",
          type: "uint8",
          internalType: "uint8",
        },
        {
          name: "_randomWinnersPercentage",
          type: "uint8",
          internalType: "uint8",
        },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "setInitialBidTimerDuration",
      inputs: [
        {
          name: "_duration",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "setPrizeThreshold",
      inputs: [
        {
          name: "_prizeThreshold",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "setRandomWinnersCount",
      inputs: [
        {
          name: "_randomWinnersCount",
          type: "uint8",
          internalType: "uint8",
        },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "startGame",
      inputs: [],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "transferOwnership",
      inputs: [
        {
          name: "newOwner",
          type: "address",
          internalType: "address",
        },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "updateChainlinkPriceFeed",
      inputs: [
        {
          name: "_addr",
          type: "address",
          internalType: "address",
        },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "updatePairAddress",
      inputs: [
        {
          name: "_newPairAddress",
          type: "address",
          internalType: "address",
        },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "updateVRFParameters",
      inputs: [
        {
          name: "_callbackGasLimit",
          type: "uint32",
          internalType: "uint32",
        },
        {
          name: "_requestConfirmations",
          type: "uint16",
          internalType: "uint16",
        },
        {
          name: "_numWords",
          type: "uint32",
          internalType: "uint32",
        },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "wethUsdtPair",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "address",
          internalType: "address",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "withdrawNative",
      inputs: [
        {
          name: "amount",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "withdrawStuckETH",
      inputs: [],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "withdrawToken",
      inputs: [
        {
          name: "_tokenAddress",
          type: "address",
          internalType: "address",
        },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "event",
      name: "BidPlaced",
      inputs: [
        {
          name: "bidder",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "timestamp",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "potAmount",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "gameRound",
          type: "uint64",
          indexed: false,
          internalType: "uint64",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "ChainlinkPriceFeedUpdated",
      inputs: [
        {
          name: "_addr",
          type: "address",
          indexed: false,
          internalType: "address",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "ETHWithdrawn",
      inputs: [
        {
          name: "withdrawer",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "amount",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "GameEnded",
      inputs: [
        {
          name: "winner",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "winAmount",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "timestamp",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "gameRound",
          type: "uint64",
          indexed: false,
          internalType: "uint64",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "GameStarted",
      inputs: [
        {
          name: "timestamp",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "gameRound",
          type: "uint64",
          indexed: false,
          internalType: "uint64",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "OwnershipTransferred",
      inputs: [
        {
          name: "previousOwner",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "newOwner",
          type: "address",
          indexed: true,
          internalType: "address",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "RandomRequestUpdated",
      inputs: [
        {
          name: "requestId",
          type: "uint256",
          indexed: true,
          internalType: "uint256",
        },
        {
          name: "totalPrize",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "round",
          type: "uint64",
          indexed: false,
          internalType: "uint64",
        },
        {
          name: "winnersCount",
          type: "uint8",
          indexed: false,
          internalType: "uint8",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "RandomWinnersSelected",
      inputs: [
        {
          name: "winners",
          type: "address[]",
          indexed: false,
          internalType: "address[]",
        },
        {
          name: "prizePerWinner",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "timestamp",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "gameRound",
          type: "uint64",
          indexed: false,
          internalType: "uint64",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "RandomnessRequested",
      inputs: [
        {
          name: "requestId",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "RequestFulfilled",
      inputs: [
        {
          name: "requestId",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "randomWords",
          type: "uint256[]",
          indexed: false,
          internalType: "uint256[]",
        },
        {
          name: "payment",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "VRFParametersUpdated",
      inputs: [
        {
          name: "callbackGasLimit",
          type: "uint32",
          indexed: false,
          internalType: "uint32",
        },
        {
          name: "requestConfirmations",
          type: "uint16",
          indexed: false,
          internalType: "uint16",
        },
        {
          name: "numWords",
          type: "uint32",
          indexed: false,
          internalType: "uint32",
        },
      ],
      anonymous: false,
    },
    {
      type: "error",
      name: "BidTimerExpired",
      inputs: [],
    },
    {
      type: "error",
      name: "BidTimerNotExpired",
      inputs: [],
    },
    {
      type: "error",
      name: "CannotWithdrawDuringActiveRound",
      inputs: [],
    },
    {
      type: "error",
      name: "ETHTransferFailed",
      inputs: [],
    },
    {
      type: "error",
      name: "GameAlreadyActive",
      inputs: [],
    },
    {
      type: "error",
      name: "GameInactive",
      inputs: [],
    },
    {
      type: "error",
      name: "InsufficientBalance",
      inputs: [],
    },
    {
      type: "error",
      name: "InvalidAmount",
      inputs: [],
    },
    {
      type: "error",
      name: "InvalidPercentage",
      inputs: [],
    },
    {
      type: "error",
      name: "InvalidRequest",
      inputs: [],
    },
    {
      type: "error",
      name: "InvalidWinnersCount",
      inputs: [],
    },
    {
      type: "error",
      name: "NativeTransferFailed",
      inputs: [],
    },
    {
      type: "error",
      name: "NoPlayersAvailable",
      inputs: [],
    },
    {
      type: "error",
      name: "OnlyVRFWrapperCanFulfill",
      inputs: [
        {
          name: "have",
          type: "address",
          internalType: "address",
        },
        {
          name: "want",
          type: "address",
          internalType: "address",
        },
      ],
    },
    {
      type: "error",
      name: "OwnableInvalidOwner",
      inputs: [
        {
          name: "owner",
          type: "address",
          internalType: "address",
        },
      ],
    },
    {
      type: "error",
      name: "OwnableUnauthorizedAccount",
      inputs: [
        {
          name: "account",
          type: "address",
          internalType: "address",
        },
      ],
    },
    {
      type: "error",
      name: "PairNotSet",
      inputs: [],
    },
    {
      type: "error",
      name: "RequestNotFound",
      inputs: [],
    },
    {
      type: "error",
      name: "SafeERC20FailedOperation",
      inputs: [
        {
          name: "token",
          type: "address",
          internalType: "address",
        },
      ],
    },
    {
      type: "error",
      name: "TokenAllowanceTooLow",
      inputs: [],
    },
  ],
} as const;
