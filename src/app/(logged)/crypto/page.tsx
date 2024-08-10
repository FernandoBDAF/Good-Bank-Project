import getCurrencyInfo from "@/app/utils/requests/crypto";
import CryptoBody from "./CryptoInfo";
import CryptoForm from "./CryptoForm";

export default async function TradeCrypto() {
  const btc = await getCurrencyInfo("btc");
  const eth = await getCurrencyInfo("eth");
  const usdc = await getCurrencyInfo("usdc");

  return (
      <div className="flex flex-wrap items-center justify-center h-full mt-10 gap-8">
        <CryptoBody btc={btc} eth={eth} usdc={usdc} />
        <CryptoForm />
      </div>
  );
}
