"use client";

import { useFormState } from "react-use-form-state";
import { useState } from "react";
import Card from "../../components/OperationCard";

type Props = {
  onSubmit: (formData: FormData) => Promise<boolean>;
};

export default function DepositForm() {
  const [formState, { number, text }] = useFormState();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (loading) return;
    setLoading(true);

    const value = parseInt(formState.values.value);

    if (value <= 0) {
      setMessage("Invalid amount. Please enter a positive number.");
      return;
    }

    const formData = new FormData(event.target);
    // const transaction = await onSubmit(formData);
    const transaction = null

    if (transaction) {
      setMessage("Deposit successful!");
      formState.setField("value", "");
    } else {
      setMessage("Deposit failed. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-sm mt-5">
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
              {...text("currency")}
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
