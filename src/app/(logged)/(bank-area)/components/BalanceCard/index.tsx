const fields = {
  USD: {
    logo: "./dolar.webp",
  },
  Loans: {
    logo: "./percent-symbol.png",
  },
  BTC: {
    logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
  },
  ETH: {
    logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
  },
  USDC: {
    logo: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png",
  },
};

export default function HorizontalBalanceCard() {
  const balance = 1000;
  const loanDebit = 10;
  const balanceBTC = 20;
  const balanceETH = 10;
  const balanceUSDC = 1000;

  return (
    <div className="flex justify-center mt-2 px-6 py-3 w-full bg-gray-500 max-w-3xl self-center rounded-xl overflow-auto">
      <div className="flex gap-6 justify-center">
        {Object.entries(fields).map(([field, { logo }]) => (
          <div
            key={field}
            className="flex flex-col justify-center items-center gap-1"
          >
            <div className="flex justify-center items-center gap-1">
              <img
                src={logo}
                alt={`${field} Logo`}
                className="currency-logo"
                style={{
                  width: "15px",
                  height: "15px",
                  backgroundColor: "white",
                  borderRadius: "35%",
                }}
              />
              <p>{field}</p>
            </div>
            <p>${balance.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
