import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
  {
    title: {
      type: String,
      required: false,
    },
    content: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Topic = mongoose.model("Topic", topicSchema);
