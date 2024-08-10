import getCurrencyInfo from "@/utils/requests/crypto";
import CryptoBody from "./CryptoBody";

export default async function TradeCrypto() {
  const btc = await getCurrencyInfo("btc");
  const eth = await getCurrencyInfo("eth");
  const usdc = await getCurrencyInfo("usdc");

  return (
    <CryptoBody btc={btc} eth={eth} usdc={usdc} />
  );
}
