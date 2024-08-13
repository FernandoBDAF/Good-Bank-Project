import "server-only";
export default async function getCurrencyInfo(currency: string) {
  const response = await fetch(
    `https://cex.io/api/ticker/${currency.toUpperCase()}/USD`
  );
  return await response.json();
}
