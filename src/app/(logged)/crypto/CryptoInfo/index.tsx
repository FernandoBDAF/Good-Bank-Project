"use client";

import CryptoCard from "../../components/CryptoCard";

export default function CryptoInfo({ btc, eth, usdc }: any) {
  return (
    <div className="container max-w-xl flex gap-5 mx-1 p-2 bg-gray-600 items-center justify-center rounded-md">
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
  );
}
