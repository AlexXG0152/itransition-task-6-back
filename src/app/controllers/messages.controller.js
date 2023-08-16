import Message from "../models/messages.model.js";

export async function createMessage(message) {
  console.log("createMessage", message);
  try {
    const data = await Message.create(message);
    if (data) return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getMessages(req, res) {
  try {
    const messages = await Message.find({
      // $or: [{ username: req.params.search }, { text: req.params.search }],
    });
    if (messages) res.status(200).json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getMessagesByTags(req, res) {
  try {
    const messagesByTags = await Message.find({ tags: { $in: [...req.body.tags] } });
    if (messagesByTags) res.status(200).json(messagesByTags);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getMessageById(req, res) {
  try {
    const message = await Message.find({
      user: Number(req.params.user),
    });

    if (message) res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
