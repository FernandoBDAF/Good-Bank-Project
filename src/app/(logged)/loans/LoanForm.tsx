"use client";

import { useFormState } from "react-use-form-state";
import Card from "../components/OperationCard";
import { useState } from "react";

type Props = {
  loanAvailable: number;
  loanBalance: number;
  onSubmit: (formData: FormData) => Promise<boolean>;
};

export default function Page({ loanAvailable, loanBalance, onSubmit }: Props) {
  const [formState, { number }] = useFormState();
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

    if (value > loanAvailable - loanBalance) {
      setMessage("You don't have enough available funds.");
      return;
    }

    const formData = new FormData(event.target);
    const transaction = await onSubmit(formData);

    if (transaction) {
      setMessage("The loan process was completed!");
      formState.setField("value", "");
      formState.setField("loanTerm", "1");
    } else {
      setMessage("Process failed. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full mt-2">
      <Card
        header={"LOANS"}
        description={`You have $${
          loanAvailable - loanBalance
        } out of $${loanAvailable} available.`}
      >
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 p-3 border border-gray-200 py-2 rounded-lg"
        >
          <div className="w-full mb-3">
            <label
              htmlFor="loanAmount"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Amount
            </label>
            <input
              {...number("value")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight max-w-96 focus:outline-none focus:shadow-outline"
              id="loanAmount"
              placeholder="Enter amount"
              required
            />
          </div>

          <div className="w-full mb-3">
            <label
              htmlFor="paymentTerm"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Payment Term
            </label>
            <select
              {...number("loanTerm")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight max-w-96 focus:outline-none focus:shadow-outline"
              id="paymentTerm"
              required
            >
              <option value="1">1 month</option>
              <option value="2">2 months</option>
              <option value="3">3 months</option>
              <option value="6">6 months</option>
              <option value="12">12 months</option>
            </select>
          </div>
          <div className="flex justify-between gap-4">
            <div>
              <p className="text-xs">Interest rate</p>
              <p className="text-xs">2% by month</p>
            </div>

            <button
              type="submit"
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
            >
              Confirm Loan
            </button>
          </div>
          {message && (
            <p className="text-red-700 max-w-fit px-1 mt-2 underline">
              {message}
            </p>
          )}
        </form>
      </Card>
    </div>
  );
}
