"use client";

import { useFormState } from "react-use-form-state";
import { useState } from "react";
import Card from "../../components/OperationCard";

type cryptoCurrency = "btc" | "eth" | "usdc";

type Props = {
  buyCrypto: (formData: FormData) => Promise<boolean>;
  sellCrypto: (formData: FormData) => Promise<boolean>;
  balance: number;
  userId: string;
  cryptoRates: {
    [key in cryptoCurrency]: number;
  };
  cryptoStocks: {
    [key in cryptoCurrency]: number;
  };
};

export default function DepositForm({
  balance,
  buyCrypto,
  sellCrypto,
  cryptoRates,
  cryptoStocks
}: Props) {
  const [formState, { number, text }] = useFormState();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (loading) return;
    setLoading(true);

    const value = parseInt(formState.values.value);
    const operation = formState.values.operation;
    const crypto = formState.values.crypto as string;

    if (value <= 0) {
      setMessage("Invalid amount. Please enter a positive number.");
      setLoading(false);
      return;
    }

    const formData = new FormData(event.target);
    let transaction;

    if (operation === "buy") {
      if (value > balance) {
        setMessage("Insufficient funds.");
        setLoading(false);
        return;
      }

      transaction = await buyCrypto(formData);

    } else if (operation === "sell") {
      const stock = cryptoStocks[crypto as cryptoCurrency];
      const rate = cryptoRates[crypto as cryptoCurrency];
      console.log(stock, rate);
      console.log(value / rate)                                 ;
      if (value / rate > stock) {
        setMessage("Insufficient funds.");
        setLoading(false);
        return;
      }

      transaction = await sellCrypto(formData);
    }

    if (transaction) {
      setMessage("Transaction successful!");
      formState.setField("value", "");
      formState.setField("operation", "");
      formState.setField("crypto", "");
    } else {
      setMessage("Transaction failed. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-sm mt-2">
      <Card header="Buy / Sell Crypto" description="">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 mb-3">
            <select
              {...text("operation")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight max-w-96 focus:outline-none focus:shadow-outline"
              id="operation"
              required
            >
              <option value="">Choose a operation</option>
              <option value="buy">Buy</option>
              <option value="sell">Sell</option>
            </select>

            <select
              {...text("crypto")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight max-w-96 focus:outline-none focus:shadow-outline"
              id="currency"
              required
            >
              <option value="">Choose a currency</option>
              <option value="btc">Bitcoin</option>
              <option value="eth">Ethereum</option>
              <option value="usdc">USDC</option>
            </select>

            <input
              {...number("value")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="value"
              placeholder="USD Value"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
          >
            Deposit
          </button>
          {message && (
            <p className=" text-red-700 max-w-fit px-1 mt-2 underline">
              {message}
            </p>
          )}
        </form>
      </Card>
    </div>
  );
}
