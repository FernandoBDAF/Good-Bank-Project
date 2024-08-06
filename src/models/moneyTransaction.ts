import mongoose, { Schema } from "mongoose";

const moneyTransactionSchema = new Schema(
  {
    clerkId: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const MoneyTransaction =
  mongoose.models.MoneyTransaction || mongoose.model("MoneyTransaction", moneyTransactionSchema);

export { MoneyTransaction };
