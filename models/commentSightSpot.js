import mongoose from "mongoose";

const commentSSSchema = new mongoose.Schema({
    topic: { type: String, required: true },
    textarea : {type: String},
    userId: {type: Number},
    author: {type: String},
    postId: {
      type: Number,
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
  });
  
 
  const commentSightSpot = mongoose.model("commentSightSpot", commentSSSchema);
  
  export default commentSightSpot;
  