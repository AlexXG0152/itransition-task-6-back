import { model, Schema } from "mongoose";

const Message = model(
  "Message",
  new Schema(
    {
      socketId: String,
      user: String,
      text: String,
      date: String,
      tags: [String],
    },
    { timestamps: true }
  )
);

export default Message;
