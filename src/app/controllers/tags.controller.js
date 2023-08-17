import Message from "../models/messages.model.js";

export async function getTags(req, res) {
  const query = req.query.q;
  try {
    const tags = await Message.distinct("tags", {
      tags: { $regex: query, $options: "i" },
    }).exec();
    const filteredTags = tags.filter((i) => i.includes(query));
    res.json(filteredTags);
  } catch (error) {
    console.error("Failed to fetch tags", error);
    res.status(404).json({ error: "Failed to fetch tags" });
  }
}
