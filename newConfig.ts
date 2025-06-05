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
            "type": "constructor",
            "inputs": [
                {
                    "name": "_abyssToken",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_wethUsdtPair",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_owner",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_wrapperAddress",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_callbackGasLimit",
                    "type": "uint32",
                    "internalType": "uint32"
                },
                {
                    "name": "_requestConfirmations",
                    "type": "uint16",
                    "internalType": "uint16"
                },
                {
                    "name": "_numWords",
                    "type": "uint32",
                    "internalType": "uint32"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "abyssToken",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "contract IERC20"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "abyssWethPair",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "adminEndRound",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "bidAmount",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "bidEndTime",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "bidTimerExtension",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "burnPercentage",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint8",
                    "internalType": "uint8"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "callbackGasLimit",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint32",
                    "internalType": "uint32"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "chainlinkPriceFeed",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "contract AggregatorV3Interface"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "forceEndAndStartNewGame",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "gameActive",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getAbyssETHPrice",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getAbyssUSDPrice",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getBalance",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getBidHistoryByRound",
            "inputs": [
                {
                    "name": "round",
                    "type": "uint64",
                    "internalType": "uint64"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "tuple[]",
                    "internalType": "struct AbyssPot.BidEvent[]",
                    "components": [
                        {
                            "name": "bidder",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "timestamp",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "tokensBidded",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "usdValue",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "round",
                            "type": "uint64",
                            "internalType": "uint64"
                        }
                    ]
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getChainlinkETHPrice",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "int256",
                    "internalType": "int256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getCurrentRound",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint64",
                    "internalType": "uint64"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getCurrentRoundBidHistory",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "tuple[]",
                    "internalType": "struct AbyssPot.BidEvent[]",
                    "components": [
                        {
                            "name": "bidder",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "timestamp",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "tokensBidded",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "usdValue",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "round",
                            "type": "uint64",
                            "internalType": "uint64"
                        }
                    ]
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getGlobalPlayers",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address[]",
                    "internalType": "address[]"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getLeaderboard",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "tuple[]",
                    "internalType": "struct AbyssPot.LeaderboardEntry[]",
                    "components": [
                        {
                            "name": "player",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "totalBids",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "totalTokensBidded",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "totalUSDBidded",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "firstBidTimestamp",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "lastBidTimestamp",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "firstBidAmount",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "lastBidAmount",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getLinkToken",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "contract LinkTokenInterface"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getMostRecentBids",
            "inputs": [
                {
                    "name": "count",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "tuple[]",
                    "internalType": "struct AbyssPot.BidEvent[]",
                    "components": [
                        {
                            "name": "bidder",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "timestamp",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "tokensBidded",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "usdValue",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "round",
                            "type": "uint64",
                            "internalType": "uint64"
                        }
                    ]
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getPlayerBidHistory",
            "inputs": [
                {
                    "name": "player",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "tuple[]",
                    "internalType": "struct AbyssPot.BidHistory[]",
                    "components": [
                        {
                            "name": "round",
                            "type": "uint64",
                            "internalType": "uint64"
                        },
                        {
                            "name": "timestamp",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "tokensBidded",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "usdValue",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getPlayerCount",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getPlayerStats",
            "inputs": [
                {
                    "name": "player",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "tuple",
                    "internalType": "struct AbyssPot.PlayerStats",
                    "components": [
                        {
                            "name": "totalBids",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "totalTokensBidded",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "totalUSDBidded",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "firstBidTimestamp",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "lastBidTimestamp",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "firstBidAmount",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "lastBidAmount",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getPotValue",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getPotValueInUSD",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getRandomWinnersByRound",
            "inputs": [
                {
                    "name": "round",
                    "type": "uint64",
                    "internalType": "uint64"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "address[]",
                    "internalType": "address[]"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getRequestStatus",
            "inputs": [
                {
                    "name": "_requestId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "paid",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "fulfilled",
                    "type": "bool",
                    "internalType": "bool"
                },
                {
                    "name": "randomWords",
                    "type": "uint256[]",
                    "internalType": "uint256[]"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getRoundBidCount",
            "inputs": [
                {
                    "name": "round",
                    "type": "uint64",
                    "internalType": "uint64"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getTimeRemaining",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getTotalBidCount",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "i_vrfV2PlusWrapper",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "contract IVRFV2PlusWrapper"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "initialBidTimerDuration",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "isGameActive",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "isGameExpired",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "lastBidder",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "lastBidderByRound",
            "inputs": [
                {
                    "name": "",
                    "type": "uint64",
                    "internalType": "uint64"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "lastBidderPercentage",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint8",
                    "internalType": "uint8"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "lastRequestCost",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "lastRequestId",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "manualRandomWinnerSelection",
            "inputs": [
                {
                    "name": "requestId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "numWords",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint32",
                    "internalType": "uint32"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "owner",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "playerBidHistories",
            "inputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "round",
                    "type": "uint64",
                    "internalType": "uint64"
                },
                {
                    "name": "timestamp",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "tokensBidded",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "usdValue",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "prizeThreshold",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "randomWinnersCount",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint8",
                    "internalType": "uint8"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "randomWinnersPercentage",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint8",
                    "internalType": "uint8"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "rawFulfillRandomWords",
            "inputs": [
                {
                    "name": "_requestId",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_randomWords",
                    "type": "uint256[]",
                    "internalType": "uint256[]"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "registerBid",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "renounceOwnership",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "requestConfirmations",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint16",
                    "internalType": "uint16"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "roundWinnersHistory",
            "inputs": [
                {
                    "name": "",
                    "type": "uint64",
                    "internalType": "uint64"
                }
            ],
            "outputs": [
                {
                    "name": "round",
                    "type": "uint64",
                    "internalType": "uint64"
                },
                {
                    "name": "lastBidder",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "lastBidderPrizeTokens",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "lastBidderPrizeUSD",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "prizePerRandomWinnerTokens",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "prizePerRandomWinnerUSD",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "timestamp",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "s_requests",
            "inputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "paid",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "fulfilled",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "setBidAmount",
            "inputs": [
                {
                    "name": "_bidAmount",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setBidTimerExtension",
            "inputs": [
                {
                    "name": "_extension",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setBurnPercentage",
            "inputs": [
                {
                    "name": "_burnPercentage",
                    "type": "uint8",
                    "internalType": "uint8"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setDistributionPercentages",
            "inputs": [
                {
                    "name": "_lastBidderPercentage",
                    "type": "uint8",
                    "internalType": "uint8"
                },
                {
                    "name": "_randomWinnersPercentage",
                    "type": "uint8",
                    "internalType": "uint8"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setInitialBidTimerDuration",
            "inputs": [
                {
                    "name": "_duration",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setPrizeThreshold",
            "inputs": [
                {
                    "name": "_prizeThreshold",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setRandomWinnersCount",
            "inputs": [
                {
                    "name": "_randomWinnersCount",
                    "type": "uint8",
                    "internalType": "uint8"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "startGame",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "transferOwnership",
            "inputs": [
                {
                    "name": "newOwner",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "updateChainlinkPriceFeed",
            "inputs": [
                {
                    "name": "_addr",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "updatePairAddress",
            "inputs": [
                {
                    "name": "_newPairAddress",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "updateVRFParameters",
            "inputs": [
                {
                    "name": "_callbackGasLimit",
                    "type": "uint32",
                    "internalType": "uint32"
                },
                {
                    "name": "_requestConfirmations",
                    "type": "uint16",
                    "internalType": "uint16"
                },
                {
                    "name": "_numWords",
                    "type": "uint32",
                    "internalType": "uint32"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "wethUsdtPair",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "withdrawNative",
            "inputs": [
                {
                    "name": "amount",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "withdrawStuckETH",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "withdrawToken",
            "inputs": [
                {
                    "name": "_tokenAddress",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "event",
            "name": "BidPlaced",
            "inputs": [
                {
                    "name": "bidder",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "timestamp",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "potAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "gameRound",
                    "type": "uint64",
                    "indexed": false,
                    "internalType": "uint64"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "ChainlinkPriceFeedUpdated",
            "inputs": [
                {
                    "name": "_addr",
                    "type": "address",
                    "indexed": false,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "ETHWithdrawn",
            "inputs": [
                {
                    "name": "withdrawer",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "GameEnded",
            "inputs": [
                {
                    "name": "winner",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "winAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "timestamp",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "gameRound",
                    "type": "uint64",
                    "indexed": false,
                    "internalType": "uint64"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "GameStarted",
            "inputs": [
                {
                    "name": "timestamp",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "gameRound",
                    "type": "uint64",
                    "indexed": false,
                    "internalType": "uint64"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "OwnershipTransferred",
            "inputs": [
                {
                    "name": "previousOwner",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "newOwner",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "RandomRequestUpdated",
            "inputs": [
                {
                    "name": "requestId",
                    "type": "uint256",
                    "indexed": true,
                    "internalType": "uint256"
                },
                {
                    "name": "totalPrize",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "round",
                    "type": "uint64",
                    "indexed": false,
                    "internalType": "uint64"
                },
                {
                    "name": "winnersCount",
                    "type": "uint8",
                    "indexed": false,
                    "internalType": "uint8"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "RandomWinnersSelected",
            "inputs": [
                {
                    "name": "winners",
                    "type": "address[]",
                    "indexed": false,
                    "internalType": "address[]"
                },
                {
                    "name": "prizePerWinner",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "timestamp",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "gameRound",
                    "type": "uint64",
                    "indexed": false,
                    "internalType": "uint64"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "RandomnessRequested",
            "inputs": [
                {
                    "name": "requestId",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "RequestFulfilled",
            "inputs": [
                {
                    "name": "requestId",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "randomWords",
                    "type": "uint256[]",
                    "indexed": false,
                    "internalType": "uint256[]"
                },
                {
                    "name": "payment",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "VRFParametersUpdated",
            "inputs": [
                {
                    "name": "callbackGasLimit",
                    "type": "uint32",
                    "indexed": false,
                    "internalType": "uint32"
                },
                {
                    "name": "requestConfirmations",
                    "type": "uint16",
                    "indexed": false,
                    "internalType": "uint16"
                },
                {
                    "name": "numWords",
                    "type": "uint32",
                    "indexed": false,
                    "internalType": "uint32"
                }
            ],
            "anonymous": false
        },
        {
            "type": "error",
            "name": "BidTimerExpired",
            "inputs": []
        },
        {
            "type": "error",
            "name": "BidTimerNotExpired",
            "inputs": []
        },
        {
            "type": "error",
            "name": "CannotWithdrawDuringActiveRound",
            "inputs": []
        },
        {
            "type": "error",
            "name": "ETHTransferFailed",
            "inputs": []
        },
        {
            "type": "error",
            "name": "GameAlreadyActive",
            "inputs": []
        },
        {
            "type": "error",
            "name": "GameInactive",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InsufficientBalance",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidAmount",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidPercentage",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidRequest",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidWinnersCount",
            "inputs": []
        },
        {
            "type": "error",
            "name": "NativeTransferFailed",
            "inputs": []
        },
        {
            "type": "error",
            "name": "NoPlayersAvailable",
            "inputs": []
        },
        {
            "type": "error",
            "name": "OnlyVRFWrapperCanFulfill",
            "inputs": [
                {
                    "name": "have",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "want",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        },
        {
            "type": "error",
            "name": "OwnableInvalidOwner",
            "inputs": [
                {
                    "name": "owner",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        },
        {
            "type": "error",
            "name": "OwnableUnauthorizedAccount",
            "inputs": [
                {
                    "name": "account",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        },
        {
            "type": "error",
            "name": "PairNotSet",
            "inputs": []
        },
        {
            "type": "error",
            "name": "RequestNotFound",
            "inputs": []
        },
        {
            "type": "error",
            "name": "SafeERC20FailedOperation",
            "inputs": [
                {
                    "name": "token",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        },
        {
            "type": "error",
            "name": "TokenAllowanceTooLow",
            "inputs": []
        }
    ],
} as const;
