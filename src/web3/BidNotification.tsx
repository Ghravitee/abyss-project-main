import { useState, useEffect, useCallback } from 'react';
import { publicClient } from '../config/publicConfig'
import { POT_ABI } from './config'
import { timeAgo } from './formatters';

interface Bid {
    bidder: `0x${string}`;
    timestamp: bigint;
    tokensBidded: bigint;
    usdValue: bigint;
    round: bigint;
}


// Helper function to shorten the address
const shortenAddress = (address: string | any[]) =>
    `${address.slice(0, 5)}...${address.slice(-3)}`;

const BidNotification = () => {
    const [notification, setNotification] = useState('');
    const [mostRecentBids, setMostRecentBids] = useState<Bid[] | null>(null);
    const [isLoadingMostRecentBids, setIsLoadingMostRecentBids] = useState(false);

    // Function to fetch the most recent bids
    const fetchMostRecentBids = useCallback(async () => {
        setIsLoadingMostRecentBids(true);
        try {
            const bids = await publicClient.readContract({
                ...POT_ABI,
                functionName: "getMostRecentBids",
                args: [1n], // Using BigInt literal
            });
            setMostRecentBids(bids as Bid[]);
        } catch (error) {
            console.error("Error fetching recent bids:", error);
        } finally {
            setIsLoadingMostRecentBids(false);
        }
    }, []);

    // Refresh function that can be called manually if needed
    const refetchMostRecentBids = useCallback(() => {
        fetchMostRecentBids();
    }, [fetchMostRecentBids]);

    // Initial data fetch
    useEffect(() => {
        fetchMostRecentBids();
    }, [fetchMostRecentBids]);

    // Handle new bid notifications
    useEffect(() => {
        if (mostRecentBids && !isLoadingMostRecentBids && mostRecentBids.length > 0) {
            const latestBid = mostRecentBids[0];
            const { bidder, timestamp } = latestBid; // adjust property names as needed

            const ago = timeAgo(Number(timestamp));
            const formattedMessage = `${shortenAddress(bidder)} bidded | ${ago}`;

            setNotification(formattedMessage);

            const timer = setTimeout(() => {
                setNotification('');
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [mostRecentBids, isLoadingMostRecentBids]);

    // Poll for new bids
    useEffect(() => {
        const interval = setInterval(() => {
            refetchMostRecentBids();
        }, 5000); // every 5 seconds

        return () => clearInterval(interval);
    }, [refetchMostRecentBids]);

    return (
        <>
            {notification && (
                <div className="bg-yellow-100 text-gray-800 text-center py-2 font-bold z-50 animate-pulse">
                    {notification}
                </div>
            )}
        </>
    );
};

export default BidNotification;