"use client";

import { useFormState } from "react-use-form-state";
import Card from "../components/OperationCard";
import { useState } from "react";

type Props = {
  onSubmit: (formData: FormData) => Promise<boolean>;
  balance: number;
};

export default function Page({ onSubmit, balance }: Props) {
  const [formState, { number, text }] = useFormState();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (loading) return;
    setLoading(true);

    const value = parseInt(formState.values.value);
    const code = formState.values.code;
    const details = formState.values.details;

    if (value <= 0) {
      setMessage("Invalid amount. Please enter a positive number.");
      return;
    }

    if (value > balance) {
      setMessage("You don't have enough available funds.");
      return;
    }

    if (code.length !== 8) {
      setMessage("Insert the 8-digit code of your payment.");
      return;
    }

    if (details === "") {
      setMessage("Select a payment type.");
      return;
    }

    const formData = new FormData(event.target);
    const transaction = await onSubmit(formData);

    if (transaction) {
      setMessage("The payment was successfully processed!");
      formState.setField("value", "");
      formState.setField("code", "");
      formState.setField("details", "");
    } else {
      setMessage("Payment failed. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full mt-2">
      <Card header={"PAY BILLS"} description="">
        <form
          onSubmit={handleSubmit}
          className="flex justify-around gap-3 mb-3 border border-gray-200 py-2 rounded-lg"
        >
          <div className="flex justify-around gap-2 p-3 py-2 w-full">
            <div className="flex flex-col gap-2 w-full max-w-80">
              <label
                htmlFor="loanAmount"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Make a instant payment
              </label>

              <input
                {...text("code")}
                type="input"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="code"
                placeholder="insert the 8-digit payment code"
              />

              <input
                {...number("value")}
                type="number"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="value"
                placeholder="Value"
              />

              <select
                {...text("details")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="type"
              >
                <option value="">Select a payment type</option>
                <option value="Electricity">Electricity</option>
                <option value="Water">Water</option>
                <option value="Internet">Internet</option>
                <option value="Phone">Phone</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Insurance">Insurance</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="self-end">
              <button
                type="submit"
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
              >
                Pay
              </button>
            </div>
          </div>
        </form>
        {message && (
          <p className="text-red-700 max-w-fit px-1 mt-2 underline">
            {message}
          </p>
        )}
      </Card>
    </div>
  );
}
