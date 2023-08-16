import Message from "../models/messages.model.js";

export async function getTags(req, res) {
  const query = req.query.q;
  try {
    const tags = await Message.distinct("tags", {
      tags: { $regex: query, $options: "i" },
    });
    res.json(tags);
  } catch (error) {
    console.error("Failed to fetch tags", error);
    res.status(500).json({ error: "Failed to fetch tags" });
  }
}
