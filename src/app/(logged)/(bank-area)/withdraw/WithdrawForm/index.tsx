"use client";

import { useFormState } from "react-use-form-state";
import { useState } from "react";
import Card from "../../components/OperationCard";
import { getBalance } from "@/utils/helpers";
import { currentUser } from "@clerk/nextjs/server";

export default function DepositForm({ onSubmit, userId }) {
  const [formState, { number }] = useFormState();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (loading) return;
    setLoading(true);

    const balance = await getBalance("USD", userId);
    const value = parseInt(formState.values.value);

    if (value > balance) {
      setMessage("Insufficient funds. Please enter a valid amount.");
      return;
    } else if (value <= 0) {
      setMessage("Invalid amount. Please enter a positive number.");
      return;
    }

    const formData = new FormData(event.target);
    const transaction = await onSubmit(formData);

    if (transaction) {
      setMessage("Withdraw successful!");
      formState.setField("value", "");
    } else {
      setMessage("Withdraw failed. Please try again.");
    }

    setLoading(false);

  };

  return (
    <div className="flex flex-col items-center justify-center w-full mt-5">
      <Card header="WITHDRAW" description="Withdraw money from your account">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              {...number("value")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="withdraw"
              placeholder="Enter withdraw amount"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
          >
            Withdraw
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
