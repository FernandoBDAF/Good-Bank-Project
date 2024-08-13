"use client";

import { useFormState } from "react-use-form-state";
import Card from "../components/OperationCard";
import { useState } from "react";
import { set } from "mongoose";

type Props = {
  onRegister: (formData: FormData) => Promise<boolean>;
  onSubmit: (formData: FormData) => Promise<boolean>;
  balance: number;
  remitteeEmails: string[];
};

export default function Page({
  onRegister,
  onSubmit,
  balance,
  remitteeEmails,
}: Props) {
  const [formState, { number, email }] = useFormState();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegisterEmail = async (event: any) => {
    event.preventDefault();
    setMessage("");

    if (loading) return;
    setLoading(true);

    const newEmail = formState.values.newEmail;

    if (newEmail === "") {
      setMessage("Insert your email.");
      setLoading(false);
      return;
    }

    if (remitteeEmails.includes(newEmail)) {
      setMessage("This email is already registered.");
      setLoading(false);
      return;
    }

    const formData = new FormData(event.target);
    const success = await onRegister(formData);

    if (success) {
      setMessage("Remittee registered successfully!");
      formState.setField("newEmail", "");
    } else {
      setMessage("Remittee registration failed. Please try again.");
    }

    setLoading(false);
  };

  const handleSubmitTransfer = async (event: any) => {
    event.preventDefault();
    setMessage("");

    if (loading) {
      setMessage("Processing...");
      return;
    }
    setLoading(true);

    const email = formState.values.email;
    const value = parseInt(formState.values.value);

    if (email === "") {
      setMessage("Choose the recipient's email.");
      setLoading(false);
      return;
    }

    if (value <= 0) {
      setMessage("Invalid amount. Please enter a positive number.");
      setLoading(false);
      return;
    }

    if (value > balance) {
      setMessage("You don't have enough funds.");
      setLoading(false);
      return;
    }

    const formData = new FormData(event.target);
    const transaction = await onSubmit(formData);

    if (transaction) {
      setMessage("The transfer was successfully processed!");
      formState.setField("value", "");
      formState.setField("email", "");
    } else {
      setMessage("Transfer failed. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full mt-2">
      <Card header={"TRANSFER MONEY"} description="">
        <form
          onSubmit={handleRegisterEmail}
          className="flex px-8 items-end justify-start gap-5 mb-3 border border-gray-200 py-2 rounded-lg"
        >
          <div>
            <label
              htmlFor="loanAmount"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Register a new remittee
            </label>
            <input
              {...email("newEmail")}
              type="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              placeholder="Insert receiver's email"
            />
          </div>
          <button
            type="submit"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded max-h-10"
          >
            Register
          </button>
        </form>

        <form
          onSubmit={handleSubmitTransfer}
          className="flex justify-around gap-2 p-3 border border-gray-200 py-2 rounded-lg w-full"
        >
          <div className="flex flex-col gap-2 w-full max-w-80">
            <label
              htmlFor="loanAmount"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Transfer now
            </label>

            <select
              {...email("email")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight max-w-96 focus:outline-none focus:shadow-outline"
              id="email"
              required
            >
              <option value="">Choose the recipient`s email</option>
              {remitteeEmails?.map((email) => (
                <option key={email} value={email}>
                  {email}
                </option>
              ))}
            </select>

            <input
              {...number("value")}
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="value"
              placeholder="Value"
            />
          </div>

          <div className="self-end">
            <button
              type="submit"
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
            >
              Transfer
            </button>
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
