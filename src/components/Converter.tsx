import { JSX, useState } from "react";
import swap from "../assets/swap.png";
import { formatTokenAmount } from "@/web3/formatters";
import {
  pureBidAmount,
  pureDecimals,
  pureSymbol,
  pureBidAmountUSDValue,
} from "@/web3/readContracts";

type ConvertStatisticsProps = {
  isLoadingBidAmount: boolean;
  isConnected: boolean;
  bidAmount: bigint | number | undefined | any;
  decimals: bigint | number | undefined;
  symbol: string | undefined | any;
  bidAmountUSDValue: bigint | number | any;
  bidButton: JSX.Element;
};

const Converter = ({
  isLoadingBidAmount,
  isConnected,
  bidAmount,
  decimals,
  symbol,
  bidAmountUSDValue,
  bidButton,
}: ConvertStatisticsProps) => {
  const [isTokenToUSD, setIsTokenToUSD] = useState(true);

  return (
    <form className="flex flex-col space-y-3">
      {/* Input Box */}
      <div className="relative">
        <label className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
          $ Abyss
        </label>
        <p className="w-full p-5 pl-6 text-white border border-Purple focus:outline-none focus:ring-4 focus:ring-Purple/60 transition-shadow rounded-[40px] appearance-none bg-transparent">
          {isLoadingBidAmount
            ? "Loading..."
            : (isConnected && formatTokenAmount(bidAmount, decimals)) ||
              formatTokenAmount(pureBidAmount, pureDecimals)}{" "}
          {symbol || pureSymbol}
        </p>
      </div>

      <img
        src={swap}
        width={30}
        height={30}
        className="transition-transform duration-500 mx-auto cursor-pointer"
        onClick={() => setIsTokenToUSD(!isTokenToUSD)}
      />

      {/* Output Box */}
      <div className="relative">
        <label className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
          $ USD
        </label>
        <p className="w-full p-5 pl-6 text-white border border-Purple focus:outline-none focus:ring-4 focus:ring-Purple/60 transition-shadow rounded-[40px] appearance-none bg-transparent">
          $
          {isLoadingBidAmount
            ? "Loading..."
            : (isConnected &&
                bidAmountUSDValue.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })) ||
              pureBidAmountUSDValue}
        </p>
      </div>

      <div className="mt-4 rounded-full mx-auto">{bidButton}</div>
    </form>
  );
};

export default Converter;
