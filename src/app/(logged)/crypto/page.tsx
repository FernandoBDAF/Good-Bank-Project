import getCurrencyInfo from "@/app/api/cryptos";
import CryptoBody from "./CryptoInfo";
import CryptoForm from "./CryptoForm";
import { currentUser } from "@clerk/nextjs/server";
import { getBalance } from "@/app/utils/helpers";
import { buyCrypto, sellCrypto } from "./action";

export default async function TradeCrypto() {
  const btc = await getCurrencyInfo("btc");
  const eth = await getCurrencyInfo("eth");
  const usdc = await getCurrencyInfo("usdc");

  const user = await currentUser();

  if (!user) {
    throw new Error("User not found");
  }

  const balance = await getBalance("USD", user.id);
  const stockBTC = await getBalance("BTC", user.id);
  const stockETH = await getBalance("ETH", user.id);
  const stockUSDC = await getBalance("USDC", user.id);

  return (
    <div className="flex flex-col items-center justify-center h-full w-full mt-3">
      <CryptoBody btc={btc} eth={eth} usdc={usdc} />
      <CryptoForm
        balance={balance}
        buyCrypto={buyCrypto}
        sellCrypto={sellCrypto}
        userId={user.id}
        cryptoRates={{ btc: btc.bid, eth: eth.bid, usdc: usdc.bid }}
        cryptoStocks={{ btc: stockBTC, eth: stockETH, usdc: stockUSDC }}
      />
    </div>
  );
}
