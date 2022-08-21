import commentSightSpot from "../models/commentSightSpot.js";

export const addComment = async (req, res) => {
  const { topic, textarea, userId, author } = req.body;
  const Id = (await commentSightSpot.find()).length + 1;
  const newComment = await commentSightSpot.create({
    topic,
    textarea,
    userId,
    author,
    postId: Id,
  });
  try {
    res
      .status(200)
      .json({ newComment, msg: "Comment Added" });
  } catch (err) {
    res.status(400).json({ errorMessage: err.message });
  }
};
