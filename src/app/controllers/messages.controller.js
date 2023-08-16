import Message from "../models/messages.model.js";

export async function createMessage(message) {
  try {
    const data = await Message.create(message);
    if (data) return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getMessagesByTags(req, res) {
  try {
    const pipeline = [
      {
        $match: {
          $or: [{ tags: { $in: [...req.body.tags] } }, { tags: { $size: 0 } }],
        },
      },
    ];

    const messages = await Message.aggregate(pipeline);

    if (messages && messages.length > 0) {
      res.status(200).send(messages);
    } else {
      res.status(200).send([]);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch messages" });
  }
}
