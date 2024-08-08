import CryptoCard from "../components/CryptoCard";

export default function TradeCrypto() {
  // const [operation, setOperation] = useState("buy");
  // const [coin, setCoin] = useState("btc");
  // const [value, setValue] = useState(0);
  // const [rate, setRate] = useState(0);
  // const [total, setTotal] = useState(0);

  const btc = 67500;
  const eth = 3475;
  const usdc = 0.9985;

  // const {
  //   handleCryptoBuy,
  //   handleCryptoSell,
  //   balanceBTC,
  //   balanceETH,
  //   balanceUSDC,
  //   balance,
  //   authenticated,
  // } = useContext(AppContext);

  // useEffect(() => {
  //   if (coin === "btc") {
  //     setRate(btc);
  //   } else if (coin === "eth") {
  //     setRate(eth);
  //   } else if (coin === "usdc") {
  //     setRate(usdc);
  //   } else {
  //     setRate(0);
  //   }
  // }, [coin, rate]);

  // useEffect(() => {
  //   if (value <= 0) {
  //     setTotal(0);
  //     return;
  //   }
  //   if (operation === "sell") {
  //       setTotal(parseFloat(value * rate - value * rate * 0.01));
  //       return;
  //   }
  //   setTotal(parseFloat(value * rate + value * rate * 0.01));
  // }, [value, rate, operation]);

  // const handleConfirmationClick = () => {
  //   if (coin === "") {
  //     alert("Please select a coin");
  //     return;
  //   }
  //   if (!value || value <= 0) {
  //     alert("Please enter a positive value");
  //     return;
  //   }
  //   if (operation === "buy") {
  //     if (total > balance) {
  //       alert("Insufficient funds");
  //       return;
  //     }
  //     handleCryptoBuy(
  //       coin,
  //       rate,
  //       parseFloat(value * rate * 0.01),
  //       value,
  //       total
  //     );
  //     alert("Crypto bought successfully");
  //   }
  //   if (operation === "sell") {
  //     if (
  //       (value > balanceBTC && coin === "btc") ||
  //       (value > balanceETH && coin === "eth") ||
  //       (value > balanceUSDC && coin === "usdc")
  //     ) {
  //       alert("Insufficient funds");
  //       return;
  //     }
  //     handleCryptoSell(
  //       coin,
  //       rate,
  //       parseFloat(value * rate * 0.01),
  //       value,
  //       total
  //     );
  //     alert("Crypto sold successfully");
  //   }
  //   setValue(0);
  //   setCoin("");
  // };

  // if (!authenticated) {
  //   return <Navigate to="/log-in" />;
  // }

  return (
    <div className="container mx-auto mt-5">
  <div className="flex flex-wrap items-center justify-center">
    <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
      <div className="bg-gray-800 border p-2 flex-wrap">
        <div className="flex flex-wrap gap-3 mx-3 justify-start">
          <CryptoCard
            name="Bitcoin"
            value={btc}
            image={"https://cryptologos.cc/logos/bitcoin-btc-logo.png"}
            address={"1yHvvVRw5VxMYJPgMKhrmHq8RAnV8nQZ7l"}
          />
          <CryptoCard
            name="Ethereum"
            value={eth}
            image={"https://cryptologos.cc/logos/ethereum-eth-logo.png"}
            address={"1wz2oGZm1SrxBuykZYcacBFbCQAq5ddL9R"}
          />
          <CryptoCard
            name="USDC"
            value={usdc}
            image={"https://cryptologos.cc/logos/usd-coin-usdc-logo.png"}
            address={"1htJGMR6QPe1hqzNIyw1PNtGknvVBJwpRk"}
          />
        </div>
      </div>
    </div>

    <div className="w-full md:w-5/12">
      <div className="flex flex-col items-center justify-center py-1 px-3 my-4 gap-1 bg-gray-800 text-white border">
        <h4>Buy / Sell Crypto</h4>
        <div className="flex flex-col">
          <div className="flex flex-col mb-2">
            <p className="m-0">Operation:</p>
            <select className="mb-2">
              <option value="buy">Buy</option>
              <option value="sell">Sell</option>
            </select>
          </div>
          <div className="flex flex-col mb-2">
            <p className="m-0">Coin:</p>
            <select className="mb-2">
              <option value="">---</option>
              <option value="btc">Bitcoin</option>
              <option value="eth">Ethereum</option>
              <option value="usdc">USDC</option>
            </select>
          </div>

          <div className="flex justify-between mb-2">
            <div className="flex flex-col">
              <p className="m-0">Value:</p>
              <input
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                style={{ width: "70px" }}
              />
            </div>
            <div className="flex flex-col">
              <p className="m-0">Rate:</p>
              <input
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                style={{ width: "60px" }}
                disabled
              />
            </div>
            <div className="flex flex-col">
              <p className="m-0">Fee:</p>
              <input
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                style={{ width: "70px" }}
                disabled
              />
            </div>
          </div>
          <div className="flex justify-between items-end">
            <div className="flex flex-col">
              <p className="m-0">Total:</p>
              <input
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                style={{ width: "100px" }}
                disabled
              />
            </div>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              style={{ height: "auto" }}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}
