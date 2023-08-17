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
    if (req.body.tags.length > 0) {
      const messages = await Message.find({
        $or: [
          { tags: { $in: [...req.body.tags] } },
          { tags: { $size: 0 } },
          { tags: { $exists: false } },
        ],
      });

      if (messages) res.status(200).json(messages);
    } else {
      const messages = await Message.find({});

      if (messages) res.status(200).json(messages);
    }
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: "Messages Not Found" });
  }
}
