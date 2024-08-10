import getCurrencyInfo from "@/utils/requests/crypto";
import CryptoBody from "./CryptoInfo";
import CryptoForm from "./CryptoForm";

export default async function TradeCrypto() {
  const btc = await getCurrencyInfo("btc");
  const eth = await getCurrencyInfo("eth");
  const usdc = await getCurrencyInfo("usdc");

  return (
    <div className="container mx-auto mt-5">
      <div className="flex flex-wrap items-center justify-center">
        <CryptoBody btc={btc} eth={eth} usdc={usdc} />
        <CryptoForm />
      </div>
    </div>
  );
}
