"use client";

import CryptoCard from "../../components/CryptoCard";
import { useRouter } from "next/navigation";
import CryptoForm from "../CryptoForm";

export default function CryptoInfo({ btc, eth, usdc }: any) {
  const router = useRouter();

  return (
    <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
      <div className="bg-gray-800 border p-2 flex-wrap">
        <div className="flex flex-wrap gap-3 mx-3 justify-start">
          <CryptoCard
            name="Bitcoin"
            value={btc.bid}
            image={"https://cryptologos.cc/logos/bitcoin-btc-logo.png"}
          />
          <CryptoCard
            name="Ethereum"
            value={eth.bid}
            image={"https://cryptologos.cc/logos/ethereum-eth-logo.png"}
          />
          <CryptoCard
            name="USDC"
            value={usdc.bid}
            image={"https://cryptologos.cc/logos/usd-coin-usdc-logo.png"}
          />
        </div>
      </div>
    </div>
  );
}
